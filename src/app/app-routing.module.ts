import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContractjobsComponent } from './contractjobs/contractjobs.component';
import { RegistrationformComponent } from './form/registrationform/registrationform.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PermanentjobsComponent } from './permanentjobs/permanentjobs.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [	  { path: 'home', component: HomeComponent },
{ path: 'aboutus', component: AboutusComponent },
{ path: 'careers', component: CareersComponent,
children: [
  { path:'', component: PermanentjobsComponent},
  { path:'permanent', component: PermanentjobsComponent},
  { path:'contract', component: ContractjobsComponent}
] },
{ path: 'contactus', component: ContactusComponent,},
{ path: 'productlist', component: ProductlistComponent},
{ path: 'productdetails/:id', component: ProductdetailsComponent},
{ path: 'productdetail', component: ProductdetailComponent},
{ path: 'registration', component: RegistrationformComponent},
{ path: '', component: HomeComponent },
{ path: '**', component: NotfoundComponent },]; //wild card route

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
