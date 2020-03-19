import React from 'react';
import s from "./Names.module.css";

class Names extends React.Component {
    render = () => {
        let namesElements = this.props.names.map(item => <div>{item.name}</div>);
        return (
            <div className="">
                {namesElements}
            </div>
        );
    }
}
export default Names;