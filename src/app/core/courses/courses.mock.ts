import { Course } from '../course/course.type';

let mockCourses: any[] = [
  {
    _id: '1',
    noTitle: 'Video course 1',
    noDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa delectus 
                  excepturi ipsum mollitia ratione sapiente tenetur unde, veniam?`,
    duration: 80 * 60 * 1000,
    date: +new Date(2017, 3, 9),
    topRated: false
  },
  {
    _id: '2',
    noTitle: 'Video course 2',
    noDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa delectus 
                  excepturi ipsum mollitia ratione sapiente tenetur unde, veniam?`,
    duration: 120 * 60 * 1000,
    date: +new Date(2017, 2, 5),
    topRated: true
  },
  {
    _id: '3',
    noTitle: 'Video course 3',
    noDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa delectus 
                  excepturi ipsum mollitia ratione sapiente tenetur unde, veniam?`,
    duration: 45 * 60 * 1000,
    date: +new Date(2017, 3, 20),
    topRated: true
  }
];

let course: Course = {
  _id: '4',
  title: 'Video course 1',
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa delectus 
                  excepturi ipsum mollitia ratione sapiente tenetur unde, veniam?`,
  duration: 60 * 60 * 1000,
  date: +new Date(2017, 2, 27),
  topRated: true
};

export { mockCourses, course };
