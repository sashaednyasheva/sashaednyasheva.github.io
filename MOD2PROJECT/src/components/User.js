import React from 'react'

const User = ({cell, picture, name, location, email, nat}) =>
<section className="user">
<img src={picture.large} alt=""/>
<p>{name.first} <br/> {name.last}</p>
<span className="location">{location.city}, {nat}</span>
{/* <span>{email}</span>
<span>{cell}</span> */}
</section>

export default User
