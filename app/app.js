angular.module('JibsApp', ['ngAnimate', 'ngRoute', 'ngCookies', 'ngMaterial', 'ui.bootstrap', 'ngImgCrop', 'angular-google-analytics', 'pascalprecht.translate', 'tmh.dynamicLocale'])

    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('purple', {
                'default': '500'
            })
            .accentPalette('purple', {
                'default': '500'
            })
    })

    .config(function (AnalyticsProvider) {
        AnalyticsProvider.setAccount({
            tracker: "UA-62425106-3",
            trackEvent: true,
            trackEcommerce: true
        });
        AnalyticsProvider.useECommerce(true, false);
        AnalyticsProvider.setCurrency('ILS');
        AnalyticsProvider.readFromRoute(true);
    })

    .run(['$rootScope', '$location', '$cookies', '$http',
        function ($rootScope, $location, $cookies, $http) {


        }]);
