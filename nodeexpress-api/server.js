let express = require('express');
const createError = require('http-errors');
path = require('path');
mongoose = require('mongoose');
cors = require('cors');
bodyParser = require('body-parser');
dbConfig = require('./db/database');
nodemailer = require("nodemailer");

const details = require("./details.json");

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
        console.log('Database connected')
    },
    error => {
        console.log('Database could not be connected : ' + error)
    }
)


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

const userRoute = require('./routes/book.routes')
const studentRoute = require('./routes/student.routes')
const paymentRoute = require('./routes/payment.routes')
const adminRoute = require('./routes/admin.routes')
const bookReceivedRoute=require('./routes/bookReceived.routes')
const bookReturnRoute=require('./routes/bookReturn.routes')
const users = require('./routes/users');

app.use('/admin',adminRoute);
app.use('/pay',paymentRoute);
app.use('/endpoint', userRoute);
app.use('/student',studentRoute);
app.use('/receivedBook',bookReceivedRoute);
app.use('/returnBook',bookReturnRoute);
app.use('/users',users);


const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
    console.log('Port connected to: ' + port)
})

app.use((req, res, next) => {
    next(createError(404));
});



app.get('/', (req, res) => {
    res.send('invaild endpoint');
});

app.use(function (err, req, res, next) {
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})



