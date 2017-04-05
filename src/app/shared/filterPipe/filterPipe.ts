import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './../../core/course/course.type';

@Pipe({name: 'myFilterPipe'})
class FilterPipe implements PipeTransform {
  public transform(entities: Course[], filterBy: string): Course[] {
    return entities.filter((entity) => {
      return entity.title.indexOf(filterBy) > -1;
    });
  }
}

export { FilterPipe };
