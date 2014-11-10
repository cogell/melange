describe('Avant Directive', function() {
  var element;
  var $scope;

  beforeEach(module('common.directives'));

  beforeEach(inject(function($compile, $rootScope){
    $scope = $rootScope;
    element = angular.element('<av-avant></av-avant>');
    $compile(element)($rootScope);
  }));

  it('should say "Hi, I\'m melange!"', function() {
    expect(element.html()).toBe('<h1>Hi, I\'m melange!</h1>');
  });

});