"use strict";

import mainComponent from "./main";
import changelangComponent from "../../common/changelang";

export default angular
    .module("mainpage", [])
    .component("mainComponent", mainComponent)
    .component("changelangComponent", changelangComponent);

