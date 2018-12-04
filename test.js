(function main(React, ReactNative, componentState,Button, require) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var react_1 = React;

    //var react_1 = _interopRequireDefault(_react);
    
    var _reactNative = ReactNative;
    var root = this;
    return react_1.createElement(_reactNative.View, { style : { "backgroundColor":"lightgrey"}},

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
        }, "Your user ID and password are used to log in to this site. This page allows you to change your user ID. Your user ID must be between 8 and 26 characters in length and may be made up of both letters and numerals. Your user ID is not case sensitive."), react_1.createElement(_reactNative.View, {
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_editZone"
        }, [react_1.createElement(_reactNative.View, {
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03_field_container"
        }, [react_1.createElement(_reactNative.View, {
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03_Label_container"
        }, [react_1.createElement(_reactNative.Text, {
            "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03_Label"
        }, "Existing User ID")]), react_1.createElement(_reactNative.Text, {
            "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03",
            "cssClass": "form-field-value",
            "fieldCssClass": "",
            "bindingMode": "OneTime",
            // "getValue": function () {
            // 	return root.state.loginName
            // }
            // ,
            // "setvalue": function (value) {
            // 	return root.setstate(function (state) {
            // 		return immutability_helper_1.default(state, {
            // 			"loginname": {
            // 				$set: value
            // 			}
            // 		});
            // 	})
            // }
        }, [])]), react_1.createElement(_reactNative.View, {
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_field_container"
        }, [react_1.createElement(_reactNative.View, {
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_Label_container"
        }, [react_1.createElement(_reactNative.Text, {
            "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_Label"
        }, "New User ID")]), react_1.createElement(_reactNative.TextInput, {
            "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
            "cssClass": "form-control component-group",
            "fieldCssClass": "",
            "bindingMode": "",
            "handleIconClick": "",
            "placeHolder": ""
        }, [])]), react_1.createElement(_reactNative.View, {
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02_field_container"
        }, [react_1.createElement(_reactNative.View, {
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02_Label_container"
        }, [react_1.createElement(_reactNative.Text, {
            "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02_Label"
        }, "Confirm User ID")]), react_1.createElement(_reactNative.TextInput, {
            "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02",
            "cssClass": "form-control component-group",
            "fieldCssClass": "",
            "bindingMode": "",
        }, [])])]), react_1.createElement(Button, {
            "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnConfirm",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnConfirm",
            "cssClass": "btn btn-primary btn-full-width component-group",
            "Label": "Save Changes",
            onClick: function () {
                return root.submitChangeLoginName()
            }
        }, ["Save Changes"]),
        react_1.createElement(Button, {
            "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnCancel",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnCancel",
            "cssClass": "btn btn-secondary btn-full-width component-group",
            "Label": "Cancel",
            onClick: function () {
                return root.cancelChangeLoginName()
            }
        }, ["Cancel"])
        ])
})
