import { coursesReducer, UPDATE_COURSES, defaultCoursesState } from './courses.reducer';

describe('authReducer', () => {
  it('should UPDATE_COURSES', () => {
    expect(coursesReducer({} as any, {type: UPDATE_COURSES, payload: 'payload'}))
      .toEqual({
        data: 'payload'
      });
  });
  it('should return state', () => {
    expect(coursesReducer({} as any, {type: ''}))
      .toEqual({});
  });
  it('should return default state', () => {
    expect(coursesReducer(undefined, {type: ''}))
        .toEqual(defaultCoursesState);
  });
});
