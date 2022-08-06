import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseInfoComponent } from './Components/course-info/course-info.component';
import { CourseItemComponent } from './Components/courses/components/course-item/course-item.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { LogoComponent } from './Components/logo/logo.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { ModalComponent } from './Components/modal/modal.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy';
import { AuthInterceptor } from './Http-Interceptors/AuthInterceptor';
import { ErrorInterceptor } from './Http-Interceptors/ErrorInterceptor';
import { AuthModule } from './Modules/auth/auth.module';
import { MessageModule } from './Modules/message/message.module';
import { SharedModule } from './Modules/shared/shared.module';
import { AuthorsPipe } from './Pipes/authors/authors.pipe';
import { TransformDatePipe } from './Pipes/transformDate/transform-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursesComponent,
    SearchBarComponent,
    CourseItemComponent,
    ModalComponent,
    MainPageComponent,
    PageNotFoundComponent,
    AuthorsPipe,
    CourseInfoComponent,
    TransformDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    MdbModalModule,
    AuthModule,
    SharedModule,
    ReactiveFormsModule,
    MessageModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
