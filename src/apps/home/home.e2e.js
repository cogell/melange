describe('e2e', function() {

  it('should have an av-avant element', function () {
    browser.get('/');
    expect(element(by.css('#avant')).isPresent()).toBeTruthy();
  });

});