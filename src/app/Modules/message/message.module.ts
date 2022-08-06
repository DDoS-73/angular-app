import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MessageService } from './message.service';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [MessageComponent],
  imports: [CommonModule, FontAwesomeModule],
  providers: [MessageService],
  exports: [MessageComponent],
})
export class MessageModule {}
