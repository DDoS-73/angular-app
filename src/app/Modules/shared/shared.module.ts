import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from '../../Pipes/duration/duration.pipe';
import { FilterPipe } from '../../Pipes/filter/filter.pipe';
import { OrderByPipe } from '../../Pipes/orderBy/order-by.pipe';
import { ChangeBorderDirective } from '../../Directives/change-border.directive';

@NgModule({
  declarations: [DurationPipe, FilterPipe, OrderByPipe, ChangeBorderDirective],
  imports: [CommonModule],
  exports: [
    CommonModule,
    DurationPipe,
    FilterPipe,
    OrderByPipe,
    ChangeBorderDirective,
  ],
})
export class SharedModule {}
