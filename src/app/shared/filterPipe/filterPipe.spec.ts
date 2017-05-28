import { FilterPipe } from './filterPipe';

describe('FilterPipe', () => {
    let sut;
    beforeEach(() => {
        sut = new FilterPipe();
    });
    describe('transform', () => {
        it('should transform courses', () => {
            let mockEntities = [{
                title: 'course 5'
            }, {
                title: ''
            }];

            expect(sut.transform(mockEntities, 'course 5'))
                .toEqual([{
                    title: 'course 5'
                }]);
        });
    });

});
