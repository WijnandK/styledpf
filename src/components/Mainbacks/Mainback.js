import React, { Component , Fragment} from 'react';
import Mainbacks from "./Mainbacks"


class Mainback extends Component {
  render() {
    return (
      <Fragment >
  
        <Mainbacks  type={this.props.caseIndex}  /> 
      </Fragment>
    );
  } 
}

export default Mainback;
