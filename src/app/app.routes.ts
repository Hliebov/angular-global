import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { CoursesAllComponent } from './courses/courses.component';
import { EditCourseComponent } from './core/editCourse/editCourse.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './auth-guard/auth-guard.service';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'courses',  component: CoursesAllComponent },
      { path: 'login',  component: LoginComponent },
      { path: 'edit',  component: EditCourseComponent },
      { path: '',  redirectTo: 'courses', pathMatch: 'full', },
    ]
  },
  { path: '**',    component: HomeComponent },
];
