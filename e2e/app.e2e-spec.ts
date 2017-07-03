import { SeedForObservablesPage } from './app.po';

describe('seed-for-observables App', () => {
  let page: SeedForObservablesPage;

  beforeEach(() => {
    page = new SeedForObservablesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
