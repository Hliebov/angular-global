import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { CoursesAllComponent } from './courses/courses.component';
import { EditCourseComponent } from './core/editCourse/editCourse.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './auth-guard/auth-guard.service';
import { NotFoundComponent } from './notFound/notFoundComponent';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'courses',  component: CoursesAllComponent, canActivate: [AuthGuard], children: [
        { path: ':id',  component: EditCourseComponent }
      ]},
      { path: 'login',  component: LoginComponent },
      { path: '',  redirectTo: 'courses', pathMatch: 'full', },
    ]
  },
  { path: '**', component: NotFoundComponent },
];
