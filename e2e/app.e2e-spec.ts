import { RxjsStoresPage } from './app.po';

describe('rxjs-stores App', () => {
  let page: RxjsStoresPage;

  beforeEach(() => {
    page = new RxjsStoresPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
