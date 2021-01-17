import React,{Fragment} from 'react';
import Swipermouse from "../Swipermouse/Swipermouse";


const Slidesbuild = (props) => {
  return (
    <Fragment>
      <Swipermouse setIndexback={props.setIndexback}/>
    </Fragment>
  );
}

export default Slidesbuild;
