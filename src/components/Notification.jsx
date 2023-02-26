import { Component } from "react";

export class Notification extends Component {
    render(){
    return <div>
        <p>{ this.props.message }</p>
    </div>}
} 