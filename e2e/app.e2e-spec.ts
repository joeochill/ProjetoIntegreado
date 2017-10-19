import { AngularTesisPage } from './app.po';

describe('angular-tesis App', () => {
  let page: AngularTesisPage;

  beforeEach(() => {
    page = new AngularTesisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
