import { LoaderBlockService } from './loaderBlock.service';

describe('LoaderBlockService', () => {
    let sut;
    beforeEach(() => {
        sut = new LoaderBlockService();
        sut.isShown = {
            next: jasmine.createSpy('next')
        };
    });
    describe('show', () => {
        it('should show', () => {
            sut.show();
            expect(sut.isShown.next)
                .toHaveBeenCalledWith(true);
        });
    });
    describe('hide', () => {
        it('should hide', () => {
            sut.hide();
            expect(sut.isShown.next)
                .toHaveBeenCalledWith(false);
        });
    });
});
