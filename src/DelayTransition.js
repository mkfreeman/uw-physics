// Delay Transition.js

import React, { Component } from 'react';

// Load the Observable runtime and inspector.
import {Runtime, Inspector} from "@observablehq/runtime";

// Your notebook, compiled as an ES module.
import notebook from "delay-transitions";

class DelayTransition extends Component {
    constructor() {
        super();
        this.rootRef = React.createRef();
    }
    componentDidMount() {
        let i = 0;
        Runtime.load(notebook, (cell) => {
              i++;
              let div = document.createElement("div");
              this.rootRef.current.appendChild(div)
              return new Inspector(div);            
          });
    }
    render() {
        return (<div className="container"><div ref={this.rootRef}></div></div>)
    }

}

export default DelayTransition;