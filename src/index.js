"use strict";

import "./styles/postcss-ex.css";
import "./styles/style.less";
import "./styles/styles.scss";
import "font-awesome-sass-loader";

import "../node_modules/bulma/css/bulma.min.css";
import "../node_modules/flag-icon-css/css/flag-icon.css";
import "angularjs-color-picker/dist/angularjs-color-picker.min.css";

import "angular";
import "@uirouter/angularjs";
import "angular-translate";
import "angular-translate-loader-url";
import "ng-lodash";
import "moment";
import "angular-moment";

import "tinycolor2";
import "angularjs-color-picker";
import "ng-file-upload";
import 'angular-messages';

import "./pages/mainpage";
import "./pages/subpage1";

import langs from "./i18n";

angular.module("page1module", []).component("page1Component", {
    template: "<h1>Page1 content:num1={{$ctrl.num1}} num2={{$ctrl.num2}}</h1>",
    controller: [
        "$routeParams",
        function Page1Controller($routeParams) {
            this.num1 = $routeParams.num1;
            this.num2 = $routeParams.num2;
        }
    ]
});

angular.module("page2module", []).component("page2Component", {
    template: "<h1>Page2 content</h1>",
    controller: [
        "$routeParams",
        "$http",
        function Page2Controller($routeParams, $http) {
            var self = this;
            $http.get("/api/json").then(function(response) {
                console.log(response.data);
            });
        }
    ]
});

angular
    .module("app", [
        "ui.router",
        "page1module",
        "page2module",
        "mainpage",
        "subpage1module",
        "ngLodash",
        "angularMoment",
        "color.picker",
        "ngFileUpload",
        'ngMessages',
        "pascalprecht.translate"
    ])
    //.constant('moment', require('moment-timezone'))
    .config(
        (
            $stateProvider,
            $urlRouterProvider,
            $locationProvider,
            $httpProvider,
            $translateProvider
        ) => {
            $httpProvider.defaults.withCredentials = true;
            $locationProvider.html5Mode(true).hashPrefix("!");

            let browserLang = langs.getCookie("lang");
            if (browserLang == "") {
                browserLang = (
                    navigator.language ||
                    navigator.userLanguage ||
                    "ru"
                ).toLowerCase();
                if (browserLang.indexOf("ru") > -1) browserLang = "ru";
                else if (browserLang.indexOf("en") > -1) browserLang = "en";
                else if (browserLang.indexOf("de") > -1) browserLang = "de";
                langs.setCookie("lang", browserLang, "365");
            }

            $translateProvider.useSanitizeValueStrategy("escape");
            $translateProvider.useUrlLoader("./api/json");
            $translateProvider.preferredLanguage("ru");

            //main
            $stateProvider.state("main", {
                url: "/main",
                views: {
                    "": {
                        template: "<main-component></main-component>"
                    },
                    "view2@main": {
                        template: "<h4>view2 component in main route</h4>"
                    },
                    "view3@main": {
                        template: "<h4>view3 component in main route</h4>"
                    }
                }
            });

            //main2
            let stateMain2 = {
                name: "main2",
                url: "/main2",
                template:
                    '<h3>State Main2</h3><br><a ui-sref="main" ui-sref-active="active">back to Main</a>'
            };
            $stateProvider.state(stateMain2);

            //main-subpage1
            let stateMainSubpage1 = {
                name: "mainsubpage1",
                url: "/main/subpage1?par1&par2",
                template: "<subpage1-component></subpage1-component>"
            };
            $stateProvider.state(stateMainSubpage1);

            //html template
            let stateTmplHTML = {
                name: "tmplHTML",
                url: "/html",
                template: require("!html-loader!./page3.html")
            };
            $stateProvider.state(stateTmplHTML);

            //pug template
            let stateTmplPUG = {
                name: "tmplPUG",
                url: "/pug",
                template: require("!pug-loader!./page4.pug")
            };
            $stateProvider.state(stateTmplPUG);

            //Handlebars template
            let stateTmplHBR = {
                name: "stateTmplHBR",
                url: "/handlebars",
                template: require("!handlebars-loader!./page5.handlebars")
            };
            $stateProvider.state(stateTmplHBR);

            $urlRouterProvider.otherwise("/main");
        }
    )
    .constant("moment", require("moment-timezone"))
    .run(function(amMoment) {
        amMoment.changeLocale("ru");
    });
