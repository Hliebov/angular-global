import { Course } from '../course/course.type';

let mockCourses: Course[] = [
  {
    _id: '1',
    title: 'Video course 1',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa delectus 
                  excepturi ipsum mollitia ratione sapiente tenetur unde, veniam?`,
    duration: 60 * 60 * 1000,
    date: +new Date(2017, 2, 1)
  },
  {
    _id: '2',
    title: 'Video course 2',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa delectus 
                  excepturi ipsum mollitia ratione sapiente tenetur unde, veniam?`,
    duration: 120 * 60 * 1000,
    date: +new Date(2017, 2, 5)
  },
  {
    _id: '3',
    title: 'Video course 3',
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa delectus 
                  excepturi ipsum mollitia ratione sapiente tenetur unde, veniam?`,
    duration: 45 * 60 * 1000,
    date: +new Date(2017, 2, 10)
  }
];

export { mockCourses };
