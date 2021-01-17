import React, { Component, Fragment } from "react";

import allcom from "../static/images/allcom.png";

import devcc from "../static/images/devcc.jpg";
import Fade from "react-reveal/Fade";

import Swipermouse from "../components/Swipermouse/Swipermouse"

import dconn from "../static/images/dconn.png";
import places from "../static/images/places.png";
import nstore from "../static/images/nstore.png";
 
import nodejsblack from "../static/images/nodejsblack.png";
 
import Image from "../components/Image/Image";
import InfoModal from "../components/InfoModal/InfoModal"
import Backdrop from "../components/Backdrop/Backdrop";
import Cardpf from "../components/Cardpf/Cardpf";

class Projects extends Component {

    state = {
      showModal: false,
      renderinfo: "",
      description1: "Mern stack project creating users and uploading placespictures, Mongo atlas and node with firebase front end hosting. Pictures will be deleted every 30minutes because of the free tierg",
     description2: "NEXTJS & express ecommerce shop with admin utility, and a near perfect seo score due to serverside rendering, image uploaded with cloudinary",
      description3: "MERN project for a message board to collaborate, - Course project, simple  but effective in all the crud operations front & back",
      description4: "Coming soon, -> customized ecommerce website for clients"

    }
      closeModalHandler = () => {
          
    this.setState({showModal: false})
  }
  openInfoModalHandler = (id) => {
    const id2 = id
    console.log(id2)
    this.setState({showModal: true, renderinfo: id2})
  }
  render() {
    let modal = null

    if (this.state.showModal) {
modal = (
           <Fragment>  
             <Backdrop onClick={this.closeModalHandler}/> <InfoModal onAcceptModal={this.closeModalHandler}>
            <h1 className="modal__title">Info</h1>
            <p className="modal__render">{this.state.renderinfo}</p>
          </InfoModal></Fragment>
    )
    } 
    return (
     
       <div className="contain_wrapper">
          {modal}
         

 
  
  {/* <div className="projectline"/> */}
     
      {/* DIFFERENT HEADER FOR DESKTOKP */}
     
     
          <Swipermouse />
      
      </div>
    );
  }
}

export default Projects;
