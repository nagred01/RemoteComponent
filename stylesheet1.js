import React, { Component } from 'react';
import { View, Text,StyleSheet ,TextInput } from 'react-native';
var reactNative = require("react-native");
import Button from 'react-native-button';
import { responsiveHeight, responsiveFontSize } from 'react-native-cross-platform-responsive-dimensions';


export function getStyleSheet()
        {
            fetch("https://raw.githubusercontent.com/ramkri04/Demo/master/styleSheet.js").then((response) => {
                console.log("Style Sheet Response ==>" + response);
                return response.text();
            }).then((js) => {
                let factory = eval(`${js}`);
                console.log("StyleSheet Object ==>" + factory);
            });

        }
