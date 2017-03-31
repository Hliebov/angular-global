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
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoginComponent
  ],
  declarations: [
    CourseComponent,
    CoursesComponent,
    AddCourseComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoginComponent
  ],
  providers: [
    CoursesService
  ]
})
class CoreModule {
}

export { CoreModule };
