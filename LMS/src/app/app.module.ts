import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ListStudentComponent } from './list-student/list-student.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import { AddBookComponent } from './add-book/add-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { BooksComponent } from './books/books.component';
import { FooterComponent } from './footer/footer.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {MatGridListModule} from "@angular/material/grid-list";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { MapComponent } from './map/map.component';
import { RecivedBookComponent } from './receive_book/recived-book.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from "@angular/material/card";
import { PaymentComponent } from './payment/payment.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { GoogleMapComponent } from './google-map/google-map.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { CountComponent } from './count/count.component';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import { ReturnBookComponent } from './return-book/return-book.component';
import { EditRetBookComponent } from './edit-ret-book/edit-ret-book.component';
import { ReturnBookListComponent } from './return-book-list/return-book-list.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import {AuthService} from "./service/auth.service";
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    AdminNavComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    ListStudentComponent,
    AddBookComponent,
    ListBookComponent,
    BooksComponent,
    FooterComponent,
    MainNavComponent,
    SearchComponent,
    ContactComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    BookDetailsComponent,
    EditStudentComponent,
    MapComponent,
    RecivedBookComponent,
    AdminLoginComponent,
    DashboardComponent,
    PaymentComponent,
    GoogleMapComponent,
    AdminListComponent,
    CountComponent,
    ReturnBookComponent,
    EditRetBookComponent,
    ReturnBookListComponent,
    PaymentListComponent,
    EditBookComponent,
    MatConfirmDialogComponent,



  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    CarouselModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  providers: [AuthService,],
  bootstrap: [AppComponent],
  entryComponents:[ListStudentComponent,MatConfirmDialogComponent,IndexComponent]
})
export class AppModule { }
