import React from 'react'
import User from './User'

const ListOfUsers = ({data}) =>
<div className="listOfUsers-wrapper">
{data.map((user,i)=>
<User key={i} {...user}/>)}
</div>

export default ListOfUsers;
