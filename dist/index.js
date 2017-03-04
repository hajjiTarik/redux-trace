"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


exports['default'] = ReduxTrace;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ReduxTrace() {
    var _this = this;

    _classCallCheck(this, ReduxTrace);

    this.start = function (store) {
        return function (next) {
            return function (action) {
                _this.stateInfo(store);
                _this.actionInfo(next, action);
            };
        };
    };

    this.stateInfo = function (store) {
        console.log("%cAPPLICATION CURRENT STATE", 'color: #528ef1');
        console.table(store.getState());
    };

    this.actionInfo = function (next, action) {
        var result = next(action);
        console.log("%cTRIGGERED ACTION: " + action.type, 'color: #fbbc05');
        console.table({ "action": result });
    };
}

module.exports = exports['default'];