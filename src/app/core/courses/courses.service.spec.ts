import { CoursesService, PAGE_LIMIT } from './courses.service';

describe('CoursesService', () => {

  let sut,
    showSpy,
    httpSpy,
    hideSpy,
    nextSpy,
    subscribeSpy;

  beforeEach(() => {
    subscribeSpy = {
      subscribe: jasmine.createSpy('subscribeSpy')
    };
    httpSpy = {
      get: jasmine.createSpy('httpSpy').and.returnValue(subscribeSpy)
    };
    showSpy = jasmine.createSpy('showSpy');
    hideSpy = jasmine.createSpy('hideSpy');

    sut = new CoursesService({} as any, httpSpy, {} as any);

    sut.loaderBlock = {
      show: showSpy,
      hide: hideSpy
    };

    nextSpy = jasmine.createSpy('nextSpy');

    sut.courses = {
      next: nextSpy
    };
  });

  describe('prepareCourses', () => {
    let mockCourses = {
      json() {
        return [
          {
            id: 1,
            title: 'a',
            noDescription: 'd',
            duration: 2,
            date: 3,
            topRated: true,
            authors: []
          }
        ];
      }
    } as any;

    it('should return prepared courses', () => {
      expect(sut.prepareCourses(mockCourses))
        .toEqual([{
          _id: 1,
          title: 'a',
          description: 'd',
          duration: 2,
          date: 3,
          topRated: true,
          authors: []
        }]);
    });
  });

  describe('getCoursesByPageNumber', () => {
    it('should get courses', () => {
      sut.getCoursesByPageNumber(1);
      expect(showSpy).toHaveBeenCalled();
      expect(httpSpy.get)
        .toHaveBeenCalledWith(`http://localhost:3030/courses?_page=1&_limit=${PAGE_LIMIT}`);
      expect(subscribeSpy.subscribe)
        .toHaveBeenCalledWith(sut.throwCourses);
    });
  });

  describe('throwCourses', () => {
    it('should hide loader, set new list', () => {
      sut.prepareCourses = jasmine.createSpy('prepareCourses')
        .and.returnValue('a');
      sut.throwCourses('courses');
      expect(hideSpy)
        .toHaveBeenCalled();
      expect(sut.prepareCourses)
        .toHaveBeenCalledWith('courses');
      expect(nextSpy)
        .toHaveBeenCalledWith('a');
    });
  });

  describe('throwList', () => {
    it('should hide loader, set new list', () => {
      sut.prepareCourses = jasmine.createSpy('prepareCourses')
        .and.returnValue('a');
      sut.throwList('courses');
      expect(sut.prepareCourses)
        .toHaveBeenCalledWith('courses');
      expect(nextSpy)
        .toHaveBeenCalledWith('a');
    });
  });

  describe('onSearch', () => {
    it('should search courses', () => {
      sut.onSearch('query');
      expect(httpSpy.get)
        .toHaveBeenCalledWith('http://localhost:3030/courses?title_like=query');
      expect(subscribeSpy.subscribe)
        .toHaveBeenCalledWith(sut.throwList);
    });
  });

});
