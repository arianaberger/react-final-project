import React from 'react';

const Button = (props) => (
  <>
    <button onClick={props.handleVoteClick}>+</button>
    {props.state.votes}
  </>
)

export default Button
