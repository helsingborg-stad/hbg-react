function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from "prop-types";
import React, { Component } from "react";

var WordpressAuthForm = function (_Component) {
    _inherits(WordpressAuthForm, _Component);

    function WordpressAuthForm(props) {
        _classCallCheck(this, WordpressAuthForm);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            fields: props.fields
        };
        return _this;
    }

    WordpressAuthForm.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (prevProps.fields != this.props.fields) {
            this.setState({ fields: this.props.fields });
        }
    };

    WordpressAuthForm.prototype.submitForm = function submitForm(e) {
        e.preventDefault();
        var onSubmitAction = this.props.onSubmitAction;

        if (onSubmitAction) {
            onSubmitAction(this.state.fields);
        }
    };

    WordpressAuthForm.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            title = _props.title,
            content = _props.content,
            notice = _props.notice,
            noticeType = _props.noticeType,
            submitButtonText = _props.submitButtonText,
            submitButtonStyle = _props.submitButtonStyle;
        var fields = this.state.fields;


        var Title = function Title(props) {
            if (!props.children) {
                return null;
            }

            return React.createElement(
                "h3",
                null,
                props.children
            );
        };

        var Content = function Content(props) {
            if (!props.children) {
                return null;
            }

            return React.createElement(
                "p",
                null,
                props.children
            );
        };

        var Notice = function Notice(props) {
            var message = props.message,
                type = props.type;


            if (!message) {
                return null;
            }

            var classes = "notice";
            var avalibleTypes = ["error", "success", "warning"];

            if (avalibleTypes.includes(type)) {
                classes += " notice-" + type;
            }

            return React.createElement(
                "div",
                { className: classes },
                React.createElement(
                    "p",
                    null,
                    message
                )
            );
        };

        var Field = function Field(props) {
            var id = props.id,
                label = props.label,
                value = props.value,
                readOnly = props.readOnly,
                onChangeAction = props.onChangeAction;

            var Field = function Field() {
                return React.createElement("input", {
                    type: "text",
                    name: id,
                    id: id,
                    onChange: onChangeAction,
                    defaultValue: value
                });
            };

            //Read only field
            if (readOnly && value && value != "") {
                Field = function Field() {
                    return React.createElement(
                        "code",
                        null,
                        value
                    );
                };
            }

            return React.createElement(
                "tr",
                null,
                React.createElement(
                    "th",
                    null,
                    React.createElement(
                        "label",
                        { htmlFor: !readOnly ? id : null },
                        label
                    )
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement(Field, null)
                )
            );
        };

        var SubmitButton = function SubmitButton(props) {
            var text = props.text,
                style = props.style;

            var avalibleStyles = ["primary"];

            var classes = "button";

            if (avalibleStyles.includes(style)) {
                classes = "button-" + style;
            }

            return React.createElement("input", {
                name: "submit",
                type: "submit",
                className: classes,
                value: text
            });
        };

        return React.createElement(
            "form",
            { onSubmit: this.submitForm.bind(this) },
            React.createElement(Notice, { message: notice || null, type: noticeType || null }),
            React.createElement(
                Title,
                null,
                title
            ),
            React.createElement(
                Content,
                null,
                content
            ),
            React.createElement(
                "table",
                { className: "form-table" },
                React.createElement(
                    "tbody",
                    null,
                    Object.values(fields).map(function (field, index) {
                        return React.createElement(Field, {
                            key: field.id || "field-" + index,
                            id: field.id || "field-" + index,
                            label: field.label || null,
                            value: field.value || null,
                            readOnly: field.readOnly || null,
                            onChangeAction: function onChangeAction(e) {
                                var value = e.target.value;
                                _this2.setState(function (prevState) {
                                    var fields = prevState.fields;
                                    fields[index].value = value;
                                });
                            }
                        });
                    })
                )
            ),
            React.createElement(SubmitButton, {
                text: submitButtonText || "Submit",
                style: submitButtonStyle || null
            })
        );
    };

    return WordpressAuthForm;
}(Component);

export default WordpressAuthForm;