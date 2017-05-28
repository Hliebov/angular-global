import { AuthorsCourseComponent } from './authorsCourse';

describe('AuthorsCourseComponent', () => {
  let sut,
    mockEmitter;
  beforeEach(() => {
    mockEmitter = jasmine.createSpy('mockEmitter');
    sut = new AuthorsCourseComponent();
    sut.onAuthorsChange = {
      emit: mockEmitter
    };
  });

  describe('onAuthorChange', () => {
    it('should check the author', () => {
      let mockAuthor = {
        checked: false
      };
      sut.onAuthorChange(mockAuthor, true);
      expect(mockAuthor.checked).toBeTruthy();
    });
    it('should emit authors', () => {
      sut.authors = 'authors';
      sut.onAuthorChange({}, true);
      expect(mockEmitter).toHaveBeenCalledWith('authors');
    });

  });

});
