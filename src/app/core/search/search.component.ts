import { Component } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: 'search.template.html',
  styleUrls: ['search.style.scss']
})
class SearchComponent {
  public searchQuery: string = '';

  public onSearch(): void {
    console.log(this.searchQuery);
  }

  public clearQuery(): void {
    this.searchQuery = '';
  }
}

export { SearchComponent };
