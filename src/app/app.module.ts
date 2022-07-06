import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LogoComponent } from './Components/logo/logo.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { BreadcrumbsComponent } from './Components/breadcrumbs/breadcrumbs.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { CourseItemComponent } from './Components/courses/components/course-item/course-item.component';
import { ChangeBorderDirective } from './Directives/change-border.directive';
import { OrderByPipe } from './Pipes/orderBy/order-by.pipe';
import { FilterPipe } from './Pipes/filter/filter.pipe';
import { ModalComponent } from './Components/modal/modal.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { AuthModule } from './Modules/auth/auth.module';
import { CourseFormModule } from './Modules/add-course/course-form.module';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursesComponent,
    BreadcrumbsComponent,
    SearchBarComponent,
    CourseItemComponent,
    ChangeBorderDirective,
    OrderByPipe,
    FilterPipe,
    ModalComponent,
    MainPageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    MdbModalModule,
    AuthModule,
    CourseFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
