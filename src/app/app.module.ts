import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ForumsComponent } from './forums/forums.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { UsersComponent } from './users/users.component';
import { ChatComponent } from './chat/chat.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './users/login/login.component';
import { CreateComponent } from './users/create/create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserRemoveComponent } from './users/user-remove/user-remove.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { EventDetailComponent } from './schedule/event-detail/event-detail.component';
import { EventCreateComponent } from './schedule/event-create/event-create.component';
import { EventEditComponent } from './schedule/event-edit/event-edit.component';
import { EventDeleteComponent } from './schedule/event-delete/event-delete.component';
import { UserListComponent } from './users/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForumsComponent,
    ScheduleComponent,
    UsersComponent,
    ChatComponent,
    AboutComponent,
    LoginComponent,
    CreateComponent,
    UserEditComponent,
    UserRemoveComponent,
    UserDetailComponent,
    EventDetailComponent,
    EventCreateComponent,
    EventEditComponent,
    EventDeleteComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
