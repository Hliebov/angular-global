import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './addCourse/addCourse.component';
import { FormsModule } from '@angular/forms';
import { CoursesService } from './courses/courses.service';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { SharedModule } from './../shared/shared.module';
import { DurationPipe } from './../shared/durationPipe/durationPipe';
import { OrderByPipe } from './../shared/orderByPipe/orderByPipe';
import { FilterPipe } from './../shared/filterPipe/filterPipe';
import { FilterDatePipe } from './../shared/filterDate/filterDate';
import { EditCourseComponent } from './editCourse/editCourse.component';
import { EditCourseService } from './editCourse/editCourse.service';
import { DurationCourseComponent } from './durationCourse/durationCourse';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    SharedModule
  ],
  exports: [
    CourseComponent,
    CoursesComponent,
    AddCourseComponent,
    EditCourseComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoginComponent,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    FilterDatePipe,
    DurationCourseComponent
  ],
  declarations: [
    CourseComponent,
    CoursesComponent,
    AddCourseComponent,
    EditCourseComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoginComponent,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    FilterDatePipe,
    DurationCourseComponent
  ],
  providers: [
    CoursesService,
    EditCourseService
  ]
})
class CoreModule {
}

export { CoreModule };
