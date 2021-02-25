import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderPopoverPage } from './order-popover';

@NgModule({
  declarations: [
    OrderPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderPopoverPage),
  ],
})
export class OrderPopoverPageModule {}
