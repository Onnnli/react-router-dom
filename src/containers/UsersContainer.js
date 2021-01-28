import React, { Component } from 'react';
import Information from '../components/index'

class UsersContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        let user = this.props.user
        const getId = this.props.match.params.id;

        let inf = user.map(elem => {
            if(getId === `id${elem.id}`){
                return elem.name
            } 
        })
        let getFriend = user.map(elem => {
            if(getId === `id${elem.id}`){
                return elem.friends
            } 
        })

        return (
            <Information 
                id={ getId } 
                info={ inf }
                friends={ getFriend }
            />
            
        );
    }
}


export default UsersContainer;

