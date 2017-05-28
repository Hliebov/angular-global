import { ChangePlateDirective } from './changePlate.directive';

describe('ChangePlateDirective', () => {
    let sut,
        mockElementRef;
    beforeEach(() => {
        mockElementRef = {
            nativeElement: {
                classList: {
                    add: jasmine.createSpy('add')
                }
            }
        };
        sut = new ChangePlateDirective(mockElementRef);
    });
    describe('ngAfterViewChecked', () => {
        it('should check date', () => {
            spyOn(sut, 'checkDate');
            sut.ngAfterViewChecked();
            expect(sut.checkDate)
                .toHaveBeenCalledWith();
        });
    });
    describe('checkDate', () => {
        it('should add green-bordered style', () => {
            sut.changePlate = {
                date: +new Date() - 9999
            };
            sut.checkDate();
            expect(mockElementRef.nativeElement.classList.add)
                .toHaveBeenCalledWith('green-bordered');
        });
        it('should add blue-bordered style', () => {
            sut.changePlate = {
                date: +new Date() + 9999
            };
            sut.checkDate();
            expect(mockElementRef.nativeElement.classList.add)
                .toHaveBeenCalledWith('blue-bordered');
        });
    });
});
