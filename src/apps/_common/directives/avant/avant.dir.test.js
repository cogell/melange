describe('Avant Directive', function() {
  var element;

  beforeEach(module('common.directives.avant'));

  beforeEach(inject(function($compile, $rootScope){

    element = angular.element('<av-avant></av-avant>');
    $compile(element)($rootScope);
    $rootScope.$digest();

  }));

  it('should say "Hi, I\'m melange!"', function() {
    expect(element.html()).toBe('<h1>Hi, I\'m melange!</h1>');
  });

});