import React, { Component   } from "react";

 

import Slidebuild from "../components/SlideBuilder/Slidesbuild"
 
import Mainback from "../components/Mainbacks/Mainback"
 
class Projects extends Component {

    state = {
    
      index: 0
    }
     
  setIndex = (i) => {
    console.log(i)
    this.setState({index: i})
  }
   
    
  render() {
  
    return (  
     
       <div className="contain_wrapper">
 
         
        <Slidebuild setIndexback={this.setIndex}/>
        <Mainback caseIndex={this.state.index}  />

      </div>
    );
  }
}

export default Projects;
