import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myOrderByPipe'})
class OrderByPipe implements PipeTransform {
  public transform<T>(entities: T[], orderBy: string): T[] {
    return entities.sort((a, b) => {
      return a[orderBy] - b[orderBy];
    });
  }
}

export { OrderByPipe };
