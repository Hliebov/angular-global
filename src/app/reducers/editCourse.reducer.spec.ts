import { editCourseReducer,
    defaultEditCourseState,
    EDIT_COURSE, FINISH_EDIT_COURSE
} from './editCourse.reducer';

describe('authReducer', () => {
    it('should EDIT_COURSE', () => {
        expect(editCourseReducer({} as any, {type: EDIT_COURSE, payload: 'payload'}))
            .toEqual({
                isEditing: true,
                activeCourse: 'payload'
            });
    });
    it('should FINISH_EDIT_COURSE', () => {
        expect(editCourseReducer({} as any, {type: FINISH_EDIT_COURSE}))
            .toEqual({
                isEditing: false
            });
    });
    it('should return state', () => {
        expect(editCourseReducer({} as any, {type: ''}))
            .toEqual({});
    });
    it('should return default state', () => {
        expect(editCourseReducer(undefined, {type: ''}))
            .toEqual(defaultEditCourseState);
    });
});
