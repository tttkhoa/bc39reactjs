import React from 'react'

export default function ChildFnc(props){
    console.log("ChildFnc",props)
    return (
        <div>
            <h3>*ChildFnc</h3>
            <p>Username: {props.username}</p>
        </div>
    )
}
