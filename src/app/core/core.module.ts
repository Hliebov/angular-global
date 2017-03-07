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

@NgModule({
  imports: [
    CommonModule
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
  ]
})
class CoreModule {
}

export { CoreModule };
