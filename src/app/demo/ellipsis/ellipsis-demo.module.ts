import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisDemoComponent } from './ellipsis-demo.component';
import { RebirthNGModule } from '../../exports';


@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule
  ],
  exports: [
    EllipsisDemoComponent
  ],
  declarations: [EllipsisDemoComponent],
  providers: [],
  entryComponents: [EllipsisDemoComponent]
})
export class EllipsisDemoModule {
}
