import { CourseComponent } from './course.component';

describe('Course component', () => {

  let courseComponent = new CourseComponent();

  describe('getProperDate', () => {
    it('should return date in string in proper format', () => {
      let date = new Date();
      let newDate = courseComponent.getProperDate(date.getTime());
      expect(newDate).toEqual(date.toDateString());
    });
  });

  describe('getDurationInMinutes', () => {
    it('should return duration in minutes in proper format', () => {
      let duration = 10 * 1000 * 60;
      let newDuration = courseComponent.getDurationInMinutes(duration);
      expect(newDuration).toEqual('10 min');
    });
  });

  describe('onCourseDelete', () => {
    it('should emit course', () => {
      let mockCourse = {};
      spyOn(courseComponent.courseOutput, 'emit');
      courseComponent.onCourseDelete(mockCourse as any);
      expect(courseComponent.courseOutput.emit).toHaveBeenCalledWith(mockCourse);
    });
  });

});
