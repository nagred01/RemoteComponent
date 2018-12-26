(function main(React, ReactNative, componentState, Button, Footer,StyleSheet, require) {
    
    var react_1 = React;
    var _reactNative = ReactNative;
    var root = this;
     
return react_1.createElement(StyleSheet.create({
   container: {
     flex: 1,
     padding : 4
  },
  loadingView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2
  },
  saveButton: {
    fontSize: 12,
    fontWeight: "normal",
    padding: 0.5,
    borderWidth:0.1,
    borderColor: "#0061b8", backgroundColor: "white",
    marginTop:2
  },
  cancelButton: {
    fontSize: 12,
    fontWeight: "normal",
    padding: 0.5,
    marginTop:6,
    color: "white",
    borderWidth: 0.1,
    borderColor: "#015EBF", backgroundColor: "#0061b8"
  },
  padding: {
    padding: 2,
  },
  textInput : {
    borderWidth: 0.9, padding: 0, 
    backgroundColor: "white", 
    borderColor: "gray",
    marginTop:1
  },
  labelMargin : {
   marginTop:3,
   color:"gray"
  }
}));

});
    
