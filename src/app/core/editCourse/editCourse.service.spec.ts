import { EditCourseService, EDIT_COURSE, FINISH_EDIT_COURSE } from './editCourse.service';

describe('EditCourseService', () => {
  let sut,
    mockStore;

  beforeEach(() => {
    mockStore = {
      dispatch: jasmine.createSpy('mockStore')
    };
    sut = new EditCourseService(mockStore);
  });

  describe('editCourse', () => {
    it('should dispatch EDIT_COURSE event', () => {
      sut.editCourse('course');
      expect(mockStore.dispatch)
        .toHaveBeenCalledWith({type: EDIT_COURSE, payload: 'course'});
    });
    it('should dispatch FINISH_EDIT_COURSE event', () => {
      sut.cancelEdit();
      expect(mockStore.dispatch)
        .toHaveBeenCalledWith({type: FINISH_EDIT_COURSE});
    });
  });
});
