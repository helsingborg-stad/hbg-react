import React, { Component } from "react";
import { render } from "react-dom";

import {
    Button,
    Notice,
    Input,
    Textarea,
    Pagination,
    Dropdown
} from "../../src";

document.querySelector("head").innerHTML +=
    '<link rel="stylesheet" href="http://helsingborg-stad.github.io/styleguide-web/dist/css/hbg-prime-red.min.css" type="text/css"/>';

class Demo extends Component {
    render() {
        return (
            <div>
                <h1>hbg-react-v2 Demo</h1>
                <Button color="primary" href="http://google.se">
                    Lol
                </Button>
                <Input name="lol" type="text" handleChange={() => {}} />
                <Notice>Just another notice!</Notice>
                <Textarea
                    value="lol"
                    name="mytextarea"
                    handleChange={() => {}}
                />
                <Pagination
                    current={1}
                    total={10}
                    next={() => {}}
                    prev={() => {}}
                    input={() => {}}
                    langNext="Next"
                    langPrev="Prev"
                />
                <Dropdown
                    toggleClass="btn btn-primary btn-block"
                    title={"Dropdown button"}
                    list={[
                        {
                            title: "Item 1",
                            id: "item-1",
                            key: "item1",
                            onClickAction: () => {
                                console.log("Item 1");
                            }
                        },
                        {
                            title: "Item 2",
                            id: "item-2",
                            key: "item2",
                            onClickAction: () => {
                                console.log("Item 1");
                            }
                        },
                        {
                            title: "Item 3",
                            id: "item-3",
                            key: "item3",
                            onClickAction: () => {
                                console.log("Item 1");
                            }
                        },
                        {
                            title: "Item 4",
                            id: "item-4",
                            key: "item4",
                            onClickAction: () => {
                                console.log("Item 1");
                            }
                        }
                    ]}
                />
            </div>
        );
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    render(<Demo />, document.querySelector("#demo"));
});
