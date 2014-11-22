System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@^1.3.3",
    "angular-mocks": "github:angular/bower-angular-mocks@^1.3.3",
    "angular-route": "github:angular/bower-angular-route@^1.3.3",
    "angular-ui-router": "github:angular-ui/ui-router@^0.2.13",
    "text": "github:systemjs/plugin-text@^0.0.2",
    "github:angular-ui/ui-router@0.2.13": {
      "angular": "github:angular/bower-angular@^1.3.2"
    },
    "github:angular/bower-angular-route@1.3.3": {
      "angular": "github:angular/bower-angular@^1.3.0"
    }
  }
});

System.config({
  "versions": {
    "github:angular-ui/ui-router": "0.2.13",
    "github:angular/bower-angular": "1.3.3",
    "github:angular/bower-angular-mocks": "1.3.3",
    "github:angular/bower-angular-route": "1.3.3",
    "github:systemjs/plugin-text": "0.0.2"
  }
});

