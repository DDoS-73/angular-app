import { Component, EventEmitter, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  constructor() {}
  searchText = '';
  glass = faMagnifyingGlass;

  @Output() searchInput = new EventEmitter();

  onSearchClick() {
    this.searchInput.emit(this.searchText);
  }

  emptySearchTermHandler() {
    if (!this.searchText) {
      this.searchInput.emit(this.searchText);
    }
  }
}
