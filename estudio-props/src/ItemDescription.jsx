import React, { Component } from 'react';

class Itemdescription extends Component {
    render() {
        const {name, description} = this.props;
        return (
            <div>
                <p>{name}</p>

                <p><i>{description}</i></p>
            </div>
        );
    }
}

export default Itemdescription;

