"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _ = require('../../../utils/under-dash');

var BaseXform = require('../base-xform');

var SheetFormatPropertiesXform =
/*#__PURE__*/
function (_BaseXform) {
  _inherits(SheetFormatPropertiesXform, _BaseXform);

  function SheetFormatPropertiesXform() {
    _classCallCheck(this, SheetFormatPropertiesXform);

    return _possibleConstructorReturn(this, _getPrototypeOf(SheetFormatPropertiesXform).apply(this, arguments));
  }

  _createClass(SheetFormatPropertiesXform, [{
    key: "render",
    value: function render(xmlStream, model) {
      if (model) {
        var attributes = {
          defaultRowHeight: model.defaultRowHeight,
          outlineLevelRow: model.outlineLevelRow,
          outlineLevelCol: model.outlineLevelCol,
          'x14ac:dyDescent': model.dyDescent,
          customHeight: model.defaultRowHeight === 0 ? '0' : '1'
        };

        if (_.some(attributes, function (value) {
          return value !== undefined;
        })) {
          xmlStream.leafNode('sheetFormatPr', attributes);
        }
      }
    }
  }, {
    key: "parseOpen",
    value: function parseOpen(node) {
      if (node.name === 'sheetFormatPr') {
        this.model = {
          defaultRowHeight: parseFloat(node.attributes.defaultRowHeight || '0'),
          dyDescent: parseFloat(node.attributes['x14ac:dyDescent'] || '0'),
          outlineLevelRow: parseInt(node.attributes.outlineLevelRow || '0', 10),
          outlineLevelCol: parseInt(node.attributes.outlineLevelCol || '0', 10)
        };
        return true;
      }

      return false;
    }
  }, {
    key: "parseText",
    value: function parseText() {}
  }, {
    key: "parseClose",
    value: function parseClose() {
      return false;
    }
  }, {
    key: "tag",
    get: function get() {
      return 'sheetFormatPr';
    }
  }]);

  return SheetFormatPropertiesXform;
}(BaseXform);

module.exports = SheetFormatPropertiesXform;
//# sourceMappingURL=sheet-format-properties-xform.js.map
