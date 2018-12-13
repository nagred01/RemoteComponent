(function main(React, ReactNative, componentState, Button, styles, require) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var react_1 = React;

    var _reactNative = ReactNative;

    var root = this;

    return react_1.createElement(_reactNative.View, { style:styles.container },

        [react_1.createElement(_reactNative.View,

            {
                "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_notificationMessage",
                "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_notificationMessage",


                "cssClass": "notification",
                "text": null,
                "notifyType": {}
            }, []),
        react_1.createElement(_reactNative.Text, {
            "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_messageHeaderContent",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_messageHeaderContent",
            "cssClass": "form-message",
            "text": "Your user ID and password are used to log in to this site. This page allows you to change your user ID. Your user ID must be between 8 and 26 characters in length and may be made up of both letters and numerals. Your user ID is not case sensitive.",
            "visible": function () {
                return true
            }
        }, ["Your user ID and password are used to log in to this site. This page allows you to change your user ID. Your user ID must be between 8 and 26 characters in length and may be made up of both letters and numerals. Your user ID is not case sensitive."]), react_1.createElement(_reactNative.View, {
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_editZone"
        }, [react_1.createElement(_reactNative.View, {
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03_field_container"
        }, [react_1.createElement(_reactNative.View, {
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03_Label_container"
        }, [react_1.createElement(_reactNative.Text, {
            "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03_Label",
            style : styles.labelMargin
        }, ["Existing User ID"])]), react_1.createElement(_reactNative.Text, {
            "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03",
            "cssClass": "form-field-value",
            "fieldCssClass": "",
            "bindingMode": "OneTime"

        }, ["SParmley"])]), react_1.createElement(_reactNative.View, {
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_field_container"
        }, [react_1.createElement(_reactNative.View, {
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_Label_container"
        }, [react_1.createElement(_reactNative.Text, {
            "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_Label",
            style : styles.labelMargin
        }, ["New User ID"])]), react_1.createElement(_reactNative.TextInput, {
            "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
            "cssClass": "form-control component-group",
            "fieldCssClass": "",
            style : styles.textInput,
            "bindingMode": "",
            onChangeText: function (val) {
                componentState.setState({ confirmUserId: val })
            },
            "placeHolder": ""
        }, [])]), react_1.createElement(_reactNative.View, {
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02_field_container"
        }, [react_1.createElement(_reactNative.View, {
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02_Label_container"
        }, [react_1.createElement(_reactNative.Text, {
            "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02_Label",
            style : styles.labelMargin
        }, ["Confirm User ID"])]), react_1.createElement(_reactNative.TextInput, {
            "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02",
            "cssClass": "form-control component-group",
             style : styles.textInput,
            "fieldCssClass": "",
            "bindingMode": "",
        }, [])])]), react_1.createElement(Button, {
            "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnConfirm",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnConfirm",
            "cssClass": "btn btn-primary btn-full-width component-group",
            "Label": "Save Changes",
            style :  styles.cancelButton,
            onPress: function () {
                alert(componentState.state.confirmUserId)
            }
        }, ["Save Changes"]),
        react_1.createElement(Button, {
            "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnCancel",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnCancel",
            "cssClass": "btn btn-secondary btn-full-width component-group",
            "Label": "Cancel",
            style :  styles.saveButton,
            onPress: function () {
            }
        }, ["Cancel"])
        ])
})
