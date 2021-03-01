import React from 'react';

const User = (props) =>(
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
    </article>
);

export default User;