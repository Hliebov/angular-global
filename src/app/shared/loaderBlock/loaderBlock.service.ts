import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
class LoaderBlockService {
  public isShown: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor() {
    this.isShown.next(false);
  }

  public show(): void {
    this.isShown.next(true);
  }

  public hide(): void {
    this.isShown.next(false);
  }
}

export { LoaderBlockService };
