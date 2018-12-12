(function main(React, ReactNative, componentState, Button, require, styles) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default:
                obj
        };
    }
    var react_1 = React;
    var reactNatvie = ReactNative;
    var root = this;
    return react_1.createElement(reactNative.View, {
        "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_view",
        "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_view",
        "cssClass": null,
        "style": styles.container
    }, [react_1.createElement(reactNative.Text, {
        "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_notificationMessage",
        "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_notificationMessage",
        "cssClass": "notification",
        "text": null,
        "notifyType": {},
        "bodyText": null
    }, null), react_1.createElement(reactNative.Text, {
        "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_messageHeaderContent",
        "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_messageHeaderContent",
        "cssClass": "form-message",
        "text": "Your user ID and password are used to log in to this site. This page allows you to change your user ID. Your user ID must be between 8 and 26 characters in length and may be made up of both letters and numerals. Your user ID is not case sensitive.",
        "visible": function () {
            return true
        }
    }, "Your user ID and password are used to log in to this site. This page allows you to change your user ID. Your user ID must be between 8 and 26 characters in length and may be made up of both letters and numerals. Your user ID is not case sensitive."), react_1.createElement(reactNative.View, {
        "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_editZone"
    }, [react_1.createElement(reactNative.View, {
        "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03_field_container"
    }, [react_1.createElement(reactNative.View, {
        "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03_label_container"
    }, [react_1.createElement(reactNative.Text, {
        "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03",
        "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03_label"
    }, "Existing User ID")]), react_1.createElement(reactNative.Text, {
        "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03",
        "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl03",
        "cssClass": "form-field-value",
        "fieldCssClass": "",
        "bindingMode": "OneTime",
        "getValue": function () {
            return view.state.loginName
        },
        "setValue": function (value) {
            return view.setState(function (state) {
                return immutability_helper_1.default(state, {
                    "loginName": {
                        $set: value
                    }
                });
            })
        }
    }, [])]), react_1.createElement(reactNative.View, {
        "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_field_container"
    }, [react_1.createElement(reactNative.View, {
        "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_label_container"
    }, [react_1.createElement(reactNative.Text, {
        "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
        "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_label"
    }, "New User ID")]), react_1.createElement(TextBox_1.TextBox, {
        "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
        "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
        "cssClass": "form-control component-group",
        "fieldCssClass": "",
        "bindingMode": "",
        "getValue": function () {
            return view.state.loginName
        },
        "setValue": function (value) {
            return view.setState(function (state) {
                return immutability_helper_1.default(state, {
                    "loginName": {
                        $set: value
                    }
                });
            })
        },
        "type": "text",
        "handleIconClick": "",
        "placeHolder": ""
}, [])]), react_1.createElement(reactNative.View, {
    "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02_field_container"
}, [react_1.createElement(reactNative.View, {
    "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02_label_container"
}, [react_1.createElement(reactNative.Text, {
    "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02",
    "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02_label"
}, "Confirm User ID")]), react_1.createElement(reactNative.TextInput, {
    "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02",
    "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02",
    "cssClass": "form-control component-group",
    "fieldCssClass": "",
    "bindingMode": "",
    "getValue": function () {
        return view.state.loginName
    },
    "setValue": function (value) {
        return view.setState(function (state) {
            return immutability_helper_1.default(state, {
                "loginName": {
                    $set: value
                }
            });
        })
    },
    "mismatchErrorMessage": "The content provided in the Confirm User ID field does not match the content in the New User ID field.",
    "style": "styles.textInput"
}, [])])]), react_1.createElement(Button, {
    "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnConfirm",
    "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnConfirm",
    "cssClass": "btn btn-primary btn-full-width component-group",
    "style": styles.saveButton,
    "onClick": function () {
        return view.submitChangeLoginName()
    }
}, ["Save Changes"]), react_1.createElement(Button, {
    "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnCancel",
    "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnCancel",
    "cssClass": "btn btn-secondary btn-full-width component-group",
    "style": styles.cancelButton,
    "onClick": function () {
        return view.cancelChangeLoginName()
    }
}, ["Cancel"])])
})
