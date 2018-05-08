"use strict";

import langs from "../../i18n";
export default /*@ngInject*/
function($translate) {
    var $ctrl = this;
    let browserLang = langs.getCookie("lang");
    if (browserLang == "") {
        browserLang = (
            navigator.language ||
            navigator.userLanguage ||
            "ru"
        ).toLowerCase();
        if (browserLang.indexOf("ru") > -1) {
            browserLang = "ru";
        } else if (browserLang.indexOf("en") > -1) {
            browserLang = "en";
        } else if (browserLang.indexOf("de") > -1) {
            browserLang = "de";
        }
        langs.setCookie("lang", browserLang, "365");
    }
    this.onSetLang = function(key) {
        $translate.use(key);
        langs.setCookie("lang", key, "365");
    };
}
