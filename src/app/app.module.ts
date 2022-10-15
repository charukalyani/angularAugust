import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {HttpClientModule} from '@angular/common/http' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CenterComponent } from './center/center.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginModule } from './login/login.module';
import { DirectivesComponent } from './directives/directives.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { EmployeesComponent } from './employees/employees.component';
import { PipesComponent } from './pipes/pipes.component';
import { RemainingPipe } from './remaining.pipe';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { OrdinalPipe } from './ordinal.pipe';
import { GenderprefixPipe } from './genderprefix.pipe';
import { MySortPipe } from './my-sort.pipe';
import { UsersComponent } from './users/users.component';
import { CommentComponent } from './comment/comment.component';
import { Observable1Component } from './observable1/observable1.component';
import { Observable3Component } from './observable3/observable3.component';
import { Observable2Component } from './observable2/observable2.component';
import { MapdemoComponent } from './mapdemo/mapdemo.component';
import { Form1Component } from './form/form1/form1.component';
import { RegistrationformComponent } from './form/registrationform/registrationform.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { PermanentjobsComponent } from './permanentjobs/permanentjobs.component';
import { ContractjobsComponent } from './contractjobs/contractjobs.component';

@NgModule({
  declarations: [
    AppComponent,
    CenterComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    DatabindingComponent,
    DirectivesComponent,
    ProductlistComponent,
    EmployeesComponent,
    PipesComponent,
    RemainingPipe,
    ParentComponent,
    Child1Component,
    Child2Component,
    OrdinalPipe,
    GenderprefixPipe,
    MySortPipe,
    UsersComponent,
    CommentComponent,
    Observable1Component,
    Observable3Component,
    Observable2Component,
    MapdemoComponent,
    Form1Component,
    RegistrationformComponent,
    HomeComponent,
    CareersComponent,
    ContactusComponent,
    NotfoundComponent,
    AboutusComponent,
    ProductdetailsComponent,
    ProductdetailComponent,
    PermanentjobsComponent,
    ContractjobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
