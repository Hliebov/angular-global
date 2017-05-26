import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let sut,
      getCoursesByPageNumberSpy,
      onSearchSpy,
      mockCoursesService;

  beforeEach(() => {
    getCoursesByPageNumberSpy = jasmine.createSpy('getCoursesByPageNumber');
    onSearchSpy = jasmine.createSpy('onSearchSpy');

    mockCoursesService = {
      getCoursesByPageNumber: getCoursesByPageNumberSpy,
      onSearch: onSearchSpy
    };
    sut = new SearchComponent(mockCoursesService);
  });

  describe('onSearch', () => {
    it('should call onSearch method on coursesService', () => {
      sut.onSearch('abc');
      expect(onSearchSpy)
        .toHaveBeenCalledWith('abc');
    });
  });

  describe('clearQuery', () => {
    it('should call onSearch method on coursesService', () => {
      sut.searchQuery = 'abc';
      sut.clearQuery();
      expect(getCoursesByPageNumberSpy)
        .toHaveBeenCalledWith(1);
      expect(sut.searchQuery)
        .toEqual('');
    });
  });

});
