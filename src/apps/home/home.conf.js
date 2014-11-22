import homeTmpl from 'apps/home/home.tmpl.html!text'

export default function ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '',
      template: homeTmpl
    });
}