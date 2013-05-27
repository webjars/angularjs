/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        'angular-cookies':  [ 'webjars!angular.js' ],
        'angular-loader':   [ 'webjars!angular.js' ],
        'angular-mobile':   [ 'webjars!angular.js' ],
        'angular-mocks':    [ 'webjars!angular.js' ],
        'angular-resource': [ 'webjars!angular.js' ],
        'angular-sanitize': [ 'webjars!angular.js' ],
        'angular-scenario': [ 'webjars!angular.js' ]
    }
});
