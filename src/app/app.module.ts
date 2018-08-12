import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
