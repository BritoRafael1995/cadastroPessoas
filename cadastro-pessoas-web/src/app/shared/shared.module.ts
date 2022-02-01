import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { MaskPipe } from './pipes/mask.pipe';


@NgModule({
  declarations: [
    MaskPipe
  ],
  imports: [
    CommonModule,
    BootstrapModule,
  ],
  exports:[
    BootstrapModule,
    MaskPipe
  ]
})
export class SharedModule { }
