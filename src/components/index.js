import React from 'react'

const Information = (props) => {
    let name = props.info
    let friends = props.friends.join(' ')
    return (
        <div className="information">
            <h2> ID: {props.id} </h2>
            <h2> name: {name} </h2>
            <h2>friends: { friends }</h2>
        </div>
    )
}

export default Information;