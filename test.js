(function main(React,ReactNative,componentState, require) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
var _react = React;

var _react2 = _interopRequireDefault(_react);

  

  
var _reactNative = ReactNative;
   
  return _react2.default.createElement(
          _reactNative.Text,
          { onPress : function () { alert(componentState.state.existingUserId) }},
          ['Nice Once Again. Thank you !!']
      );
      
})
