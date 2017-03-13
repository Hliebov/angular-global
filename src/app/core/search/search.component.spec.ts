import { SearchComponent } from './search.component';

describe('SearchComponent', () => {

  let searchComponent = new SearchComponent();

  describe('clearQuery', () => {
    it('should clear searchQuery', () => {
      expect(searchComponent.searchQuery).toEqual('');
      searchComponent.searchQuery = 'abc';
      expect(searchComponent.searchQuery).toEqual('abc');
      searchComponent.clearQuery();
      expect(searchComponent.searchQuery).toEqual('');
    });
  });

});
