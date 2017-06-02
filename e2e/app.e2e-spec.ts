import { WcsChatPage } from './app.po';

describe('wcs-chat App', function() {
  let page: WcsChatPage;

  beforeEach(() => {
    page = new WcsChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
