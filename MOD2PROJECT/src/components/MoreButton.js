import React from 'react'

const MoreButton = ({handleClick, clear}) =>
<div className='more-clear'>
<button onClick={handleClick}><span>more</span></button>
<button onClick={clear}><span>clear</span></button>
</div>

export default MoreButton;
