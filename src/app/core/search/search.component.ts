import { Component } from '@angular/core';
import { CoursesService } from './../courses/courses.service';

@Component({
  selector: 'search',
  templateUrl: 'search.template.html',
  styleUrls: ['search.style.scss']
})
class SearchComponent {
  public searchQuery: string = '';

  constructor(public coursesService: CoursesService) {
    // lint
  }

  public onSearch(searchQuery: string): void {
    this.coursesService.onSearch(searchQuery);
  }

  public clearQuery(): void {
    this.searchQuery = '';
    this.coursesService.getCoursesByPageNumber(1);
  }
}

export { SearchComponent };
