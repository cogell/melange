import homeTmpl from 'apps/home/home.tmpl.html!text'

export default function ($routeProvider) {
  $routeProvider
    .when('/', {
      template: homeTmpl
    });
}