import { TesisAngularPage } from './app.po';

describe('tesis-angular App', () => {
  let page: TesisAngularPage;

  beforeEach(() => {
    page = new TesisAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
