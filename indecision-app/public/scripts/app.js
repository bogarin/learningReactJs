"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IndecisionComponentApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndecisionComponentApp, _React$Component);

  function IndecisionComponentApp() {
    _classCallCheck(this, IndecisionComponentApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(IndecisionComponentApp).apply(this, arguments));
  }

  _createClass(IndecisionComponentApp, [{
    key: "render",
    value: function render() {
      var title = "Insercision App";
      var subtitle = "Put your life in the hands of a computer";
      var options = ["One", "Two", "three"];
      return React.createElement("div", null, React.createElement(Header, {
        title: title,
        subtitle: subtitle
      }), React.createElement(Actions, null), React.createElement(Options, {
        options: options
      }), React.createElement(FormAddOption, null));
    }
  }]);

  return IndecisionComponentApp;
}(React.Component);

var Header =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h1", null, this.props.title), React.createElement("h2", null, " ", this.props.subtitle));
    }
  }]);

  return Header;
}(React.Component);

var Actions =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Actions, _React$Component3);

  function Actions() {
    _classCallCheck(this, Actions);

    return _possibleConstructorReturn(this, _getPrototypeOf(Actions).apply(this, arguments));
  }

  _createClass(Actions, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(BtnDecision, null), React.createElement(BtnRemoveAll, null));
    }
  }]);

  return Actions;
}(React.Component);

var FormAddOption =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(FormAddOption, _React$Component4);

  function FormAddOption() {
    _classCallCheck(this, FormAddOption);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormAddOption).apply(this, arguments));
  }

  _createClass(FormAddOption, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("form", null, React.createElement(InputAddOption, null), React.createElement(BtnAddOption, null)));
    }
  }]);

  return FormAddOption;
}(React.Component);

var InputAddOption =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(InputAddOption, _React$Component5);

  function InputAddOption() {
    _classCallCheck(this, InputAddOption);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputAddOption).apply(this, arguments));
  }

  _createClass(InputAddOption, [{
    key: "render",
    value: function render() {
      return React.createElement("input", {
        type: "text",
        name: "option"
      });
    }
  }]);

  return InputAddOption;
}(React.Component);

var BtnDecision =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(BtnDecision, _React$Component6);

  function BtnDecision() {
    _classCallCheck(this, BtnDecision);

    return _possibleConstructorReturn(this, _getPrototypeOf(BtnDecision).apply(this, arguments));
  }

  _createClass(BtnDecision, [{
    key: "render",
    value: function render() {
      return React.createElement("button", null, " what shoul i do?");
    }
  }]);

  return BtnDecision;
}(React.Component);

var BtnRemoveAll =
/*#__PURE__*/
function (_React$Component7) {
  _inherits(BtnRemoveAll, _React$Component7);

  function BtnRemoveAll() {
    _classCallCheck(this, BtnRemoveAll);

    return _possibleConstructorReturn(this, _getPrototypeOf(BtnRemoveAll).apply(this, arguments));
  }

  _createClass(BtnRemoveAll, [{
    key: "render",
    value: function render() {
      return React.createElement("button", null, " Remove All");
    }
  }]);

  return BtnRemoveAll;
}(React.Component);

var BtnAddOption =
/*#__PURE__*/
function (_React$Component8) {
  _inherits(BtnAddOption, _React$Component8);

  function BtnAddOption() {
    _classCallCheck(this, BtnAddOption);

    return _possibleConstructorReturn(this, _getPrototypeOf(BtnAddOption).apply(this, arguments));
  }

  _createClass(BtnAddOption, [{
    key: "render",
    value: function render() {
      return React.createElement("button", null, "Add Option");
    }
  }]);

  return BtnAddOption;
}(React.Component);

var Options =
/*#__PURE__*/
function (_React$Component9) {
  _inherits(Options, _React$Component9);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, _getPrototypeOf(Options).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      var length = this.props.options.length;
      var listOptions = this.props.options;
      console.log("donde truenas " + listOptions);
    }
  }]);

  return Options;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionComponentApp, null), document.getElementById("app"));
