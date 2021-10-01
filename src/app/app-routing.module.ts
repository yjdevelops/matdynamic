import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailsComponent } from './add-details/add-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'add-details', component: AddDetailsComponent},
  { path:'user', loadChildren: ()=>import('./user/user.module')
  .then(mod => mod.UserModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
