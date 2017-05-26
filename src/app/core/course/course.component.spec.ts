import { CourseComponent } from './course.component';

describe('Course component', () => {

  let sut,
    editCourseSpy,
    mockEditCourseService;

  beforeEach(() => {
    editCourseSpy = jasmine.createSpy('editCourseSpy');
    mockEditCourseService = {
      editCourse: editCourseSpy
    };

    sut = new CourseComponent(mockEditCourseService);
  });

  describe('getProperDate', () => {
    it('should return date in string in proper format', () => {
      let date = new Date();
      let newDate = sut.getProperDate(date.getTime());
      expect(newDate).toEqual(date.toDateString());
    });
  });

  describe('getDurationInMinutes', () => {
    it('should return duration in minutes in proper format', () => {
      let duration = 10 * 1000 * 60;
      let newDuration = sut.getDurationInMinutes(duration);
      expect(newDuration).toEqual('10 min');
    });
  });

  describe('onCourseDelete', () => {
    it('should emit course', () => {
      let mockCourse = {};
      spyOn(sut.courseOutput, 'emit');
      sut.onCourseDelete(mockCourse as any);
      expect(sut.courseOutput.emit).toHaveBeenCalledWith(mockCourse);
    });
  });

  describe('editCourse', () => {
    it('should call editCourse with input course', () => {
      sut.editCourse('course');
      expect(editCourseSpy)
        .toHaveBeenCalledWith('course');
    });
  });

});
