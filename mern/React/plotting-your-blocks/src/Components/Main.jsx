

import React , {Component} from 'react';


class Main  extends Component{
    render(){
        return (
            <div className=" col">
                <div className="Main bg-danger p-5">{this.props.children}</div>
            </div>
            );     
    }
}

export default Main ;