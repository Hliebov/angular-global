import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myDurationPipe'})
class DurationPipe implements PipeTransform {
  public transform(duration: number): string {
    let durationInMinutes = duration / (1000 * 60);
    if (durationInMinutes < 60) {
      return durationInMinutes + ' min';
    } else {
      let minutes = durationInMinutes % 60;
      let hours = Math.floor(durationInMinutes / 60);
      return `${hours}h ${minutes}min`;
    }
  }
}

export { DurationPipe };
