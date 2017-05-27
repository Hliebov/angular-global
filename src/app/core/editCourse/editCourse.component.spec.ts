import { EditCourseComponent } from './editCourse.component';

describe('EditCourseComponent', () => {
  let sut,
    filterSpy,
    mockState,
    fbMock,
    mockRouter,
    mockEditCourseService,
    mockCoursesService,
    mockStore;

  beforeEach(() => {
    mockState = {
      activeCourse: {
        title: 'title',
        description: 'description',
        date: 1
      }
    };
    mockEditCourseService = {
      cancelEdit: jasmine.createSpy('cancelEdit')
    };
    fbMock = {
      group: jasmine.createSpy('group')
    };
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    filterSpy = jasmine.createSpy('filterSpy').and.returnValue({
      subscribe(cb) {
        cb(mockState);
      }
    });

    mockStore = {
      select: jasmine.createSpy('select').and.returnValue({
        filter: filterSpy
      })
    };

    mockCoursesService = {
      updateCourse: jasmine.createSpy('updateCourse')
    };

    sut = new EditCourseComponent(mockEditCourseService as any,
      mockRouter, mockStore, mockCoursesService, fbMock);
  });

  describe('ngOnInit', () => {
    it('should get activeCourse from state', () => {
      sut.ngOnInit();
      expect(mockStore.select)
        .toHaveBeenCalledWith('editCourse');
      expect(filterSpy)
        .toHaveBeenCalled();
      expect(fbMock.group)
        .toHaveBeenCalled();
      expect(sut.activeCourse)
        .toEqual(mockState.activeCourse);
    });
  });

  describe('cancelEdit', () => {
    it('should cancel editing and redirect to /courses', () => {
      sut.cancelEdit();
      expect(mockEditCourseService.cancelEdit)
        .toHaveBeenCalled();
      expect(mockRouter.navigate)
        .toHaveBeenCalledWith(['/courses']);
    });
  });

  describe('onDurationChange', () => {
    it('should change course duration', () => {
      sut.activeCourse = {};
      sut.onDurationChange(5);
      expect(sut.activeCourse.duration)
        .toEqual(5);
    });
  });

  describe('onDateChange', () => {
    it('should change course date', () => {
      sut.activeCourse = {};
      sut.onDateChange('1/2/3');
      expect(sut.activeCourse.date)
        .toEqual(+new Date('2/1/3'));
    });

    it('should validate date', () => {
      sut.activeCourse = {};
      sut.onDateChange('1/2/3');
      expect(sut.invalidDate)
        .toBeFalsy();
    });

    it('should INvalidate date', () => {
      sut.activeCourse = {};
      sut.onDateChange('s/s/s');
      expect(sut.invalidDate)
        .toBeTruthy();
    });
  });

  describe('onAuthorsChange', () => {
    it('should set authors', () => {
      sut.activeCourse = {};
      sut.onAuthorsChange([]);
      expect(sut.activeCourse.authors)
        .toEqual([]);
    });

    it('should set authors filtered', () => {
      let mockAuthors = {
        filter: jasmine.createSpy('filter').and.returnValue([])
      };
      sut.activeCourse = {};
      sut.onAuthorsChange(mockAuthors);
      expect(mockAuthors.filter)
        .toHaveBeenCalled();
    });

    it('should INvalidate authors', () => {
      sut.activeCourse = {};
      sut.onAuthorsChange([{checked: false}]);
      expect(sut.invalidAuthors)
        .toBeTruthy();
    });

    it('should validate authors', () => {
      sut.activeCourse = {};
      sut.onAuthorsChange([{checked: true}]);
      expect(sut.invalidAuthors)
        .toBeFalsy();
    });
  });

  describe('save', () => {
    it('should set updateCourse and cancelEdit', () => {
      sut.activeCourse = {};
      sut.save('form');
      expect(mockCoursesService.updateCourse)
        .toHaveBeenCalledWith('form', {});
      expect(mockEditCourseService.cancelEdit)
        .toHaveBeenCalled();
    });
  });
});
