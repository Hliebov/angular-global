import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
class LoaderBlockService {
  public isShown: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public show(): void {
    this.isShown.next(true);
  }

  public hide(): void {
    this.isShown.next(false);
  }
}

export { LoaderBlockService };
