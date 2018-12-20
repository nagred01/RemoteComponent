(function main(React, ReactNative, componentState, Button, Footer, responsiveHeight,StyleSheet, require) {
    
    var react_1 = React;
    var _reactNative = ReactNative;
    var root = this;
     
  var styles ={
   container: {
     flex: 1,
     padding : responsiveHeight(4)
  },
  loadingView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: responsiveHeight(2)
  },
  saveButton: {
    fontSize: 12,
    fontWeight: "normal",
    padding: responsiveHeight(0.5),
    borderWidth: responsiveHeight(0.1),
    borderColor: "#0061b8", backgroundColor: "white",
    marginTop:responsiveHeight(2)
  },
  cancelButton: {
    fontSize: 12,
    fontWeight: "normal",
    padding: responsiveHeight(0.5),
    marginTop:responsiveHeight(6),
    color: "white",
    borderWidth: responsiveHeight(0.1),
    borderColor: "#015EBF", backgroundColor: "#0061b8"
  },
  padding: {
    padding: responsiveHeight(2),
  },
  textInput : {
    borderWidth: 0.9, padding: 0, 
    backgroundColor: "white", 
    borderColor: "gray",
    marginTop:responsiveHeight(1)
  },
  labelMargin : {
   marginTop:responsiveHeight(3),
   color:"gray"
  }
};
return react_1.createElement(_reactNative.createElement(StyleSheet.create(styles)));
});
    
