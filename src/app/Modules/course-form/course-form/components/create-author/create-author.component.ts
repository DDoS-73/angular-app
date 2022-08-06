import { Component } from '@angular/core';

import { AuthorsService } from '../../../../../Services/authors/authors.service';
import { MessageService } from '../../../../message/message.service';

@Component({
  selector: 'course-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss'],
})
export class CreateAuthorComponent {
  name: string = '';
  constructor(
    private authorsService: AuthorsService,
    private messageService: MessageService
  ) {}

  createAuthor() {
    this.authorsService.addAuthor({ id: '', name: this.name }).subscribe(() => {
      this.messageService.openSuccess('Author created');
      this.name = '';
    });
  }
}
