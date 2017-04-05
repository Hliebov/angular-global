import { Component, OnDestroy } from '@angular/core';
import { LoaderBlockService } from './loaderBlock.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'loader-block',
  templateUrl: './loaderBlock.template.html',
  styleUrls: ['./loaderBlock.style.scss']
})
class LoaderBlockComponent implements OnDestroy {
  public isShown: boolean;
  public subscription: Subscription;

  constructor(public loaderBlockService: LoaderBlockService) {
    this.subscription = loaderBlockService.isShown.subscribe((show) => {
      this.isShown = show;
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

export { LoaderBlockComponent };
