import React, { Component } from 'react';

class DropdownList extends Component {
    render() {
        const props = this.props;
        return (
            <div className="c-dropdown__list c-dropdown__list--down c-dropdown__list--visible">
                <div>
                    <ul>
                        {props.children.map((child, index) => (
                            <li key={props.itemKey + '-' + index}>{child}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default DropdownList;
