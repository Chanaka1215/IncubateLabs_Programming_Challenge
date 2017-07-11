import { IncubateLabsFrontEndPage } from './app.po';

describe('incubate-labs-front-end App', () => {
  let page: IncubateLabsFrontEndPage;

  beforeEach(() => {
    page = new IncubateLabsFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
