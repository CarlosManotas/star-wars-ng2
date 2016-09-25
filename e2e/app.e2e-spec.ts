import { StarWarsNg2Page } from './app.po';

describe('star-wars-ng2 App', function() {
  let page: StarWarsNg2Page;

  beforeEach(() => {
    page = new StarWarsNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
