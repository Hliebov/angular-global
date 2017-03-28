import { Component } from '@angular/core';
import { LoaderBlockService } from './loaderBlock.service';

@Component({
  selector: 'loader-block',
  templateUrl: './loaderBlock.template.html',
  styleUrls: ['./loaderBlock.style.scss']
})
class LoaderBlockComponent {
  public isShown: boolean;

  constructor(public loaderBlockService: LoaderBlockService) {
    loaderBlockService.isShown.subscribe((show) => {
      this.isShown = show;
    });
  }
}

export { LoaderBlockComponent };
