import React, { Component } from 'react';
import { render } from 'react-dom';

import {
    Button,
    Notice,
    Input,
    Textarea,
    Pagination,
    Dropdown,
    AccordionTable,
    PreLoader,
    Calendar
} from '../../src';

document.querySelector('head').innerHTML +=
    '<link rel="stylesheet" href="http://helsingborg-stad.github.io/styleguide-web/dist/css/hbg-prime-red.min.css" type="text/css"/>';

const insertAfter = (el, referenceNode) => {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
};

const addScript = src => {
    var s = document.createElement('script');
    s.setAttribute('src', src);
    return s;
};

insertAfter(
    addScript('http://helsingborg-stad.github.io/styleguide-web/dist/js/hbg-prime.min.js'),
    document.querySelector('#demo')
);

class Demo extends Component {
    render() {
        return (
            <div className="container">
                <h1>hbg-react-v2 Demo</h1>
                <Button color="primary" title="Button" onClick={() => alert('Click')} />
                <Button color="primary" href="http://google.se" title="Lol"></Button>
                <Input
                    name="lol"
                    type="text"
                    handleChange={() => {}}
                    label="Hello Man"
                    explainer="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
                />
                <Notice>Just another notice!</Notice>
                <Textarea value="lol" name="mytextarea" handleChange={() => {}} />
                <Pagination
                    current={1}
                    total={10}
                    goToPage={() => {}}
                    next={() => {}}
                    prev={() => {}}
                    langNext="Next"
                    langPrev="Prev"
                />
                <Dropdown title="Dropdown button">
                    {['Option 1', 'Option 2', 'Option 3'].map(item => (
                        <a
                            onClick={() => {
                                console.log(item);
                            }}
                        >
                            {item}
                        </a>
                    ))}
                </Dropdown>

                {
                    <Dropdown
                        toggleClass="btn btn-primary btn-block"
                        title={'Deprecated dropdown'}
                        list={[
                            {
                                title: 'Item 1',
                                id: 'item-1',
                                key: 'item1',
                                onClickAction: () => {
                                    console.log('Item 1');
                                }
                            },
                            {
                                title: 'Item 2',
                                id: 'item-2',
                                key: 'item2',
                                onClickAction: () => {
                                    console.log('Item 2');
                                }
                            },
                            {
                                title: 'Item 3',
                                id: 'item-3',
                                key: 'item3',
                                onClickAction: () => {
                                    console.log('Item 3');
                                }
                            },
                            {
                                title: 'Item 4',
                                id: 'item-4',
                                key: 'item4',
                                onClickAction: () => {
                                    console.log('Item 4');
                                }
                            }
                        ]}
                    />
                }

                <AccordionTable
                    headings={['Heading 1', 'Heading 2']}
                    items={[
                        {
                            id: 'item1',
                            headings: ['Head 1', 'Head 2'],
                            content: 'omg'
                        },
                        {
                            id: 'item2',
                            headings: ['Head 1', 'Head 2'],
                            content: 'lol'
                        }
                    ]}
                />
                <PreLoader />
                <Calendar />
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', function(event) {
    render(<Demo />, document.querySelector('#demo'));
});
