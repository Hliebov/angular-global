import { Component, OnDestroy } from '@angular/core';
import { LoaderBlockService } from './loaderBlock.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'loader-block',
  templateUrl: './loaderBlock.template.html',
  styleUrls: ['./loaderBlock.style.scss']
})
class LoaderBlockComponent {
  public isShown;

  constructor(public loaderBlockService: LoaderBlockService) {
    this.isShown = loaderBlockService.isShown;
  }
}

export { LoaderBlockComponent };
