import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myFilterPipe'})
class FilterPipe implements PipeTransform {
  public transform<T>(entities: T[], filterBy: string): T[] {
    return entities.filter((entity) => {
      return entity.title.indexOf(filterBy) > -1;
    });
  }
}

export { FilterPipe };
