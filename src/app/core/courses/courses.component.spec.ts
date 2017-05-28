import { CoursesComponent, MESSAGE } from './courses.component';

describe('CoursesComponent', () => {
  let sut,
    mockCoursesService,
    mockModal,
    mockShowClose,
    mockBody,
    mockOpen,
    mockLoaderBlock,
    mockStore;
  beforeEach(() => {
    mockStore = {
      select: jasmine.createSpy('select').and.returnValue([
        {data: 1},
        {data: 2}
      ])
    };
    mockOpen = jasmine.createSpy('mockOpen').and.returnValue({
      then(cb) {
        cb({
          result: 'result'
        });
      }
    });
    mockBody = jasmine.createSpy('mockBody').and.returnValue({
      open: mockOpen
    });

    mockShowClose = jasmine.createSpy('mockShowClose').and.returnValue({
      body: mockBody
    });

    mockModal = {
      confirm: jasmine.createSpy('confirm').and.returnValue({
        showClose: mockShowClose
      })
    };

    mockLoaderBlock = {
      show: jasmine.createSpy('show')
    };

    mockCoursesService = {
      removeCourse: jasmine.createSpy('removeCourse'),
      getCoursesByPageNumber: jasmine.createSpy('getCoursesByPageNumber')
    };

    sut = new CoursesComponent(mockCoursesService, mockStore, mockLoaderBlock, mockModal);
  });

  describe('ngOnInit', () => {
    it('should call mockCoursesService', () => {
      sut.ngOnInit();
      expect(mockCoursesService.getCoursesByPageNumber)
        .toHaveBeenCalledWith(1);
    });

    it('should set courses', () => {
      sut.ngOnInit();
      expect(mockStore.select)
        .toHaveBeenCalledWith('courses');
      expect(sut.courses)
        .toEqual([1, 2]);
    });
  });

  describe('openConfirmModal', () => {
    it('should open modal', () => {
      sut.openConfirmModal('message');
      expect(mockModal.confirm)
        .toHaveBeenCalled();
      expect(mockShowClose)
        .toHaveBeenCalledWith(true);
      expect(mockBody)
        .toHaveBeenCalledWith('<h5>message</h5>');
      expect(mockOpen)
        .toHaveBeenCalled();
    });
  });

  describe('deleteCourseById', () => {
    it('should delete course', () => {
      let mockResult = true;
      sut.openConfirmModal = jasmine.createSpy('openConfirmModal')
        .and.returnValue({
          then(cb) {
            cb(mockResult);
          }
        });
      sut.deleteCourseById({_id: 1});
      expect(sut.openConfirmModal)
        .toHaveBeenCalledWith(MESSAGE);
      expect(mockLoaderBlock.show)
        .toHaveBeenCalled();
      expect(mockCoursesService.removeCourse)
        .toHaveBeenCalledWith(1);
    });
  });

});
