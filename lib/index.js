'use strict';

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var addSpacer = function addSpacer() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var length = arguments[1];

  var multiSpacer = '';
  for (var index = 0; index < length - text.length; index += 1) {
    multiSpacer += ' ';
  }
  return text + multiSpacer;
};
var makeLog = function makeLog(text, type) {
  var _type$background = type.background,
      background = _type$background === undefined ? 'white' : _type$background,
      color = type.color,
      label = type.label;

  console.log(addSpacer(label, 9) + ' ' + text, 'background: ' + background + '; color: ' + color);
};

var Logger = function Logger() {
  console.log(Object.keys(_types2.default).map(function (type) {
    console.log('>>>>', type);
    return _defineProperty({}, type, function (text) {
      makeLog(text, _types2.default[type]);
    });
  }));
  var logger = _ramda2.default.mergeAll(Object.keys(_types2.default).map(function (type) {
    return _defineProperty({}, type, function (text) {
      makeLog(text, _types2.default[type]);
    });
  }));
  console.log(logger);
  return logger;
};

Logger().info('Hello World');