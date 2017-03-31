import { AuthService } from './auth/auth.service';
import { NgModule } from '@angular/core';
import { LoaderBlockComponent } from './loaderBlock/loaderBlock.component';
import { LoaderBlockService } from './loaderBlock/loaderBlock.service';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ChangePlateDirective } from './changePlate/changePlate.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  exports: [
    LoaderBlockComponent,
    ChangePlateDirective
  ],
  declarations: [
    LoaderBlockComponent,
    ChangePlateDirective
  ],
  providers: [
    AuthService,
    LoaderBlockService
  ]
})
class SharedModule {
}

export { SharedModule };
