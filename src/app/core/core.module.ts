import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CourseComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoginComponent
  ],
  declarations: [
    CourseComponent,
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
