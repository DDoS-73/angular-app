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
import { DurationPipe } from './Pipes/duration/duration.pipe';
import { OrderByPipe } from './Pipes/orderBy/order-by.pipe';
import { FilterPipe } from './Pipes/filter/filter.pipe';
import { ModalComponent } from './Components/modal/modal.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { AuthModule } from './Modules/auth/auth.module';

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
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    MdbModalModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
