import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LogoComponent } from './Components/logo/logo.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { CourseItemComponent } from './Components/courses/components/course-item/course-item.component';
import { ModalComponent } from './Components/modal/modal.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { AuthInterceptor } from './Http-Interceptors/AuthInterceptor';
import { ErrorInterceptor } from './Http-Interceptors/ErrorInterceptor';
import { AuthModule } from './Modules/auth/auth.module';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { MessageModule } from './Modules/message/message.module';
import { SharedModule } from './Modules/shared/shared.module';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy';
import { AuthorsPipe } from './Pipes/authors/authors.pipe';

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
