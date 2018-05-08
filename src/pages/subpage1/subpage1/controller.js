"use strict";

export default /*@ngInject*/
function($state, $stateParams) {
    var $ctrl = this;
    $ctrl.par1 = $stateParams.par1;
    $ctrl.par2 = $stateParams.par2;
}
