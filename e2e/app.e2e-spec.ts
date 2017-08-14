import {CardGamePage } from './app.po';

describe('card-game App', () => {
  let page: CardGamePage;

  beforeEach(() => {
    page = new CardGamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
