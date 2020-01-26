import React from 'react';
import { Button } from 'reactstrap';

const PreviousButton = (props) => {
  return (
    <Button outline color="secondary" className="m-2" onClick={props.previous}>Previous</Button>
  )
}

export default PreviousButton;