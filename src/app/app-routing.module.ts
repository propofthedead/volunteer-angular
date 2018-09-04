import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ForumsComponent } from './forums/forums.component';
import { LoginComponent } from './users/login/login.component';
import { CreateComponent } from './users/create/create.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserRemoveComponent } from './users/user-remove/user-remove.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import {EventDetailComponent} from './schedule/event-detail/event-detail.component';
import {EventCreateComponent} from './schedule/event-create/event-create.component';
import {EventDeleteComponent} from './schedule/event-delete/event-delete.component';
import{EventEditComponent} from './schedule/event-edit/event-edit.component';

const routes: Routes = [  
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/create', component: CreateComponent},
  {path: 'forum', component: ForumsComponent},
  {path: 'events', component:ScheduleComponent},
  {path: 'user/edit/:id', component: UserEditComponent},
  {path: 'user/remove/:id', component:UserRemoveComponent},
  {path: 'user/detail/:id', component: UserDetailComponent},

  {path: 'events/detail/:id', component: EventDetailComponent},
  {path: 'events/create', component: EventCreateComponent},
  {path: 'events/remove/:id', component: EventDeleteComponent},
  {path: 'events/edit/:id',component: EventEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
