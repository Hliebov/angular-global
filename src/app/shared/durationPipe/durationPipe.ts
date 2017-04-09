import { Pipe, PipeTransform } from '@angular/core';

const miliseconds = 1000 * 60;
const minutes = 1;

@Pipe({name: 'myDurationPipe'})
class DurationPipe implements PipeTransform {
  public transform(duration: number, inputFormat: string): string {
    let timeFormat;
    if (inputFormat === 'ms') {
      timeFormat = miliseconds;
    }
    if (inputFormat === 'min') {
      timeFormat = minutes;
    }
    let durationInMinutes = duration / timeFormat;
    if (durationInMinutes < 60) {
      return durationInMinutes + ' min';
    } else {
      let min = durationInMinutes % 60;
      let hours = Math.floor(durationInMinutes / 60);
      return `${hours}h ${min}min`;
    }
  }
}

export { DurationPipe };
