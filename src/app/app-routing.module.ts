import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ForumsComponent } from './forums/forums.component';
import { LoginComponent } from './users/login/login.component';
import { CreateComponent } from './users/create/create.component';

const routes: Routes = [  
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: ForumsComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
