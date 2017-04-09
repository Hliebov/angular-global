import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './../../core/course/course.type';

const oneDay = 24 * 60 * 60 * 1000;

@Pipe({name: 'myFilterDatePipe'})
class FilterDatePipe implements PipeTransform {
  public transform(entities: Course[], filterFor: number): Course[] {
    let cs = entities.filter((entity) => {
      let currentDate = +new Date();
      let date = entity.date;
      return !(date < currentDate - filterFor * oneDay);
    });

    // temporary solution, before BE not implemented, returning the same object:
    entities.splice(0, entities.length);
    entities.push.apply(entities, cs);
    return entities;
  }
}

export { FilterDatePipe };
