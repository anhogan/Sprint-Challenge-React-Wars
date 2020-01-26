import React from 'react';
import { Button } from 'reactstrap';

const NextButton = (props) => {
  return (
    <Button outline color="secondary" className="m-2" onClick={props.next}>Next</Button>
  )
}

export default NextButton;