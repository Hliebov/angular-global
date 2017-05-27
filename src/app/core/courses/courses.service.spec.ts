import { CoursesService, PAGE_LIMIT } from './courses.service';
import { UPDATE_COURSES } from './../../reducers/courses.reducer';

describe('CoursesService', () => {

  let sut,
    httpSpy,
    mockStore,
    mockRouter,
    mockCourse,
    mockNavigate,
    mockDispatch,
    mockResponse,
    subscribeSpy;

  beforeEach(() => {
    mockCourse = 'mockCourse';
    mockResponse = {
      status: 200
    };
    mockDispatch = jasmine.createSpy('mockDispatch');

    mockNavigate = jasmine.createSpy('mockNavigate');
    mockRouter = {
      navigate: mockNavigate
    };

    subscribeSpy = {
      map: jasmine.createSpy('map').and.returnValue({
        subscribe(cb) {
          cb(mockCourse);
        }
      })
    };

    httpSpy = {
      get: jasmine.createSpy('httpSpyGet').and.returnValue(subscribeSpy),
      put: jasmine.createSpy('httpSpyPut').and.returnValue({
        subscribe(cb) {
          cb(mockResponse);
        }
      }),
      delete: jasmine.createSpy('httpSpyPut').and.returnValue({
        subscribe(cb) {
          cb(mockResponse);
        }
      })
    };

    mockStore = {
      dispatch: mockDispatch
    };

    sut = new CoursesService(mockRouter, mockStore, httpSpy);
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
      expect(httpSpy.get)
        .toHaveBeenCalledWith(`http://localhost:3030/courses?_page=1&_limit=${PAGE_LIMIT}`);
      expect(subscribeSpy.map)
        .toHaveBeenCalledWith(sut.prepareCourses);
      expect(mockDispatch)
        .toHaveBeenCalledWith({type: UPDATE_COURSES, payload: mockCourse});
    });
  });

  describe('onSearch', () => {
    it('should search courses', () => {
      sut.onSearch('query');
      expect(httpSpy.get)
        .toHaveBeenCalledWith('http://localhost:3030/courses?title_like=query');
      expect(subscribeSpy.map)
        .toHaveBeenCalledWith(sut.prepareCourses);
      expect(mockDispatch)
        .toHaveBeenCalledWith({type: UPDATE_COURSES, payload: mockCourse});
    });
  });

  describe('updateCourse', () => {
    it('should update courses on server', () => {
      sut.updateCourse({
        title: 'title',
        description: 'description'
      }, {
        _id: 'id',
        duration: 1,
        date: 1,
        topRated: true,
        authors: []
      });
      expect(httpSpy.put)
        .toHaveBeenCalledWith('http://localhost:3030/courses/id',
          {
            id: 'id',
            title: 'title',
            noDescription: 'description',
            duration: 1,
            date: 1,
            topRated: true,
            authors: []
          }
        );
    });
    it('should navigate to courses and call getCoursesByPageNumber', () => {
      sut.getCoursesByPageNumber = jasmine.createSpy('getCoursesByPageNumber');
      sut.updateCourse({}, {});
      expect(mockNavigate).toHaveBeenCalledWith(['/courses']);
      expect(sut.getCoursesByPageNumber).toHaveBeenCalledWith(1);
    });

    it('should NOT navigate to courses and call getCoursesByPageNumber', () => {
      mockResponse.status = 0;
      sut.getCoursesByPageNumber = jasmine.createSpy('getCoursesByPageNumber');
      sut.updateCourse({}, {});
      expect(mockNavigate).not.toHaveBeenCalled();
      expect(sut.getCoursesByPageNumber).not.toHaveBeenCalled();
    });
  });
  describe('removeCourse', () => {
    it('should remove course and call getCoursesByPageNumber', () => {
      sut.getCoursesByPageNumber = jasmine.createSpy('getCoursesByPageNumber');
      sut.removeCourse('id');
      expect(httpSpy.delete)
        .toHaveBeenCalledWith('http://localhost:3030/courses/id');
      expect(sut.getCoursesByPageNumber)
        .toHaveBeenCalledWith(1);
    });

    it('should remove course and NOT call getCoursesByPageNumber', () => {
      sut.getCoursesByPageNumber = jasmine.createSpy('getCoursesByPageNumber');
      mockResponse.status = 0;
      sut.removeCourse('id');
      expect(httpSpy.delete)
        .toHaveBeenCalledWith('http://localhost:3030/courses/id');
      expect(sut.getCoursesByPageNumber)
        .not.toHaveBeenCalled();
    });
  });

});
