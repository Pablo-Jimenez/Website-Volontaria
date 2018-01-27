import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './my-http-interceptor';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { EventService } from './services/event.service';
import { TasktypeService } from './services/tasktype.service';
import { CycleService } from './services/cycle.service';
import { CellService } from './services/cell.service';
import { ParticipationService } from './services/participation.service';
import { CanActivateViaAuthGuard } from './guards/CanActivateViaAuthGuard';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DocumentationComponent } from './components/pages/documentation/documentation.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { MySchedulePageComponent } from './components/pages/myschedule-page/myschedule-page.component';
import { ActivitiesPageComponent } from './components/pages/activities-page/activities-page.component';
import { InfoPageComponent } from './components/pages/info-page/info-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { PageNotFoundComponent } from './components/pages/notfound-page/notfound-page.component';
import { AdminActivityDetailComponent } from './components/pages/admin-activity-detail/admin-activity-detail.component';
import { AdminActivitiesComponent } from './components/pages/admin-activities/admin-activities.component';
import { AdminVolunteersComponent } from './components/pages/admin-volunteers/admin-volunteers.component';
// tslint:disable-next-line:max-line-length
import { ActivityConfirmationComponent } from './components/pages/activities-page/activity-confirmation-page/activity-confirmation-page.component';
import { ManageAccountPageComponent } from './components/pages/manage-account-page/manage-account-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { LogoutPageComponent } from './components/pages/logout-page/logout-page.component';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';

const appRoutes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'index',
        component: HomePageComponent,
        canActivate: [
          CanActivateViaAuthGuard
        ]
      },
      {
        path: 'activities',
        component: ActivitiesPageComponent,
        canActivate: [
          CanActivateViaAuthGuard
        ]
      },
      {
        path: 'confirmation/:eventId',
        component: ActivityConfirmationComponent,
        canActivate: [
          CanActivateViaAuthGuard
        ]
      },
      {
        path: 'schedule',
        component: MySchedulePageComponent,
        canActivate: [
          CanActivateViaAuthGuard
        ]
      },
      {
        path: 'info',
        component: InfoPageComponent,
        canActivate: [
          CanActivateViaAuthGuard
        ]
      },
      {
        path: 'contact',
        component: ContactPageComponent,
        canActivate: [
          CanActivateViaAuthGuard
        ]
      },
      {
        path: 'register',
        component: ManageAccountPageComponent
      },
      {
        path: 'logout',
        component: LogoutPageComponent,
        canActivate: [
          CanActivateViaAuthGuard
        ]
      },
      {
        path: 'admin/activities',
        component: AdminActivitiesComponent,
        canActivate: [
          CanActivateViaAuthGuard
        ]
      },
      {
        path: 'admin/activity',
        component: AdminActivityDetailComponent,
        canActivate: [
          CanActivateViaAuthGuard
        ]
      },
      {
        path: 'docs',
        component: DocumentationComponent,
        canActivate: [
          CanActivateViaAuthGuard
        ]
      },
      {
        path: 'admin/volunteers',
        component: AdminVolunteersComponent,
        canActivate: [
          CanActivateViaAuthGuard
        ]
      },
      {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full',
        canActivate: [
          CanActivateViaAuthGuard
        ]
      }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    MySchedulePageComponent,
    ActivitiesPageComponent,
    ManageAccountPageComponent,
    LoginPageComponent,
    LogoutPageComponent,
    ActivityConfirmationComponent,
    AdminVolunteersComponent,
    AdminActivitiesComponent,
    AdminActivityDetailComponent,
    InfoPageComponent,
    ContactPageComponent,
    DocumentationComponent,
    PageNotFoundComponent,
    DefaultLayoutComponent,
    LoginLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    FormsModule,
    SimpleNotificationsModule.forRoot(),
  ],
  exports: [ RouterModule ],
  providers: [
    UserService,
    AuthenticationService,
    EventService,
    TasktypeService,
    CycleService,
    CellService,
    ParticipationService,
    CanActivateViaAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }