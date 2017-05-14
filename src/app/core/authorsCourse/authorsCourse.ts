import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'authors-course',
  styleUrls: [ 'authorsCourse.style.scss' ],
  templateUrl: 'authorsCourse.template.html'
})
class AuthorsCourseComponent {
  @Input() authors;
  @Output() onAuthorsChange = new EventEmitter();

  public onAuthorChange(author, checked) {
    author.checked = checked;
    this.onAuthorsChange.emit(this.authors);
  }
}

export { AuthorsCourseComponent }
