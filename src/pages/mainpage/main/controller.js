"use strict";

export default /*@ngInject*/
function($state, $http, lodash, moment, Upload) {
    var $ctrl = this;
    $ctrl.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];

    $ctrl.toggled = function(open) {
        console.log("Dropdown is now: " + open);
    };

    $ctrl.status = {
        isopen: false
    };

    $ctrl.lodashObj = lodash.assign({ a: 1 }, { b: 2 }, { c: 3 });

    $ctrl.momentDate = moment()
        .hour(8)
        .minute(0)
        .second(0)
        .toDate();

    $ctrl.myColor = "#FF000";
    $ctrl.options = {
        format: "hexString"
    };

    $ctrl.routeName = $state.current.name;

    $ctrl.Obj = { inpval: "superverylongemailmore30symbols@gmail.com" };

    $ctrl.submitForm = () => {
        console.log("submitForm");
    };

    $ctrl.file = {};

    //Backend to recieve files in not made.
    //It's just example of ng-file-upload on frontend
    $ctrl.upload = function(file) {
        Upload.upload({
            url: "/api/upload",
            data: {
                file: file,
                username: "User1"
            }
        }).then(
            function(resp) {
                console.log(
                    "Success " +
                        resp.config.data.file.name +
                        "uploaded. Response: " +
                        resp.data
                );
            },
            function(resp) {
                console.log("Error status: " + resp.status);
            },
            function(evt) {
                let progressPercentage = parseInt(
                    100.0 * evt.loaded / evt.total
                );
                console.log(
                    "progress: " +
                        progressPercentage +
                        "% " +
                        evt.config.data.file.name
                );
            }
        );
    };
}
