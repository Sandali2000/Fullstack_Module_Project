import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {ListStudentComponent} from "./list-student/list-student.component";
import {AddBookComponent} from "./add-book/add-book.component";
import {ListBookComponent} from "./list-book/list-book.component";
import {BooksComponent} from "./books/books.component";
import {ContactComponent} from "./contact/contact.component";
import {IndexComponent} from "./index/index.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {EditStudentComponent} from "./edit-student/edit-student.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import {RecivedBookComponent} from "./receive_book/recived-book.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PaymentComponent} from "./payment/payment.component";
import {ReturnBookComponent} from "./return-book/return-book.component";
import {EditRetBookComponent} from "./edit-ret-book/edit-ret-book.component";
import {ReturnBookListComponent} from "./return-book-list/return-book-list.component";
import {PaymentListComponent} from "./payment-list/payment-list.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {SearchComponent} from "./search/search.component";


const routes: Routes = [
  {path:'Index',component:IndexComponent},
  {path:'home',component:AdminHomeComponent},
  {path:'listStudent',component:ListStudentComponent},
  {path:'addBook',component:AddBookComponent},
  {path:'listBook',component:ListBookComponent},
  {path:'books',component:BooksComponent},
  {path:'contact',component:ContactComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'editStudent/:id',component:EditStudentComponent},
  {path:'bookDetail/:id',component:BookDetailsComponent},
  {path:'',component:AdminLoginComponent},
  {path:'re-book',component:RecivedBookComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'payment',component:PaymentComponent},
  {path:'returnBook',component:ReturnBookComponent},
  {path:'editReturnBook/:id',component:EditRetBookComponent},
  {path:'returnBookList',component:ReturnBookListComponent},
  {path:'paymentList',component:PaymentListComponent},
  {path:'editBook/:id',component:EditBookComponent},
  {path:'editBook/:id',component:EditBookComponent},


  {path:'search',component:SearchComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
