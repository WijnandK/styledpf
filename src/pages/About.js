import React, {   Fragment } from "react";
import Typed from "react-typed";

 
import react from "../static/images/react.png";
import nodelogo from "../static/images/nodelogo.jpg";
import javajs from "../static/images/javajs.jpg";
 
import Zoom from "react-reveal/Zoom";
 import Flip from "react-reveal/Flip";

import xed from "../static/images/xed.jpg";
import Tag from "../components/Tag/Tag";
 import lab from "../static/images/lab.svg"

 
import Accordion from "../components/Acccordion/Accordion";
import Image from "../components/Image/Image";



class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
          deadline: 'Dec, 25, 2020',
        days:'0',
        hours:'0',
        minutes:'0',
        seconds:'0',  
      index: 0,
      isColor: false,
      isGo: false,
      isFlipping: false
    };

    this.roles = [
      " Technology Passion",
      "Always Optimizing",
      "Software is cool",
    ];
  }

 
   componentDidMount() {
    this.animateColor();
    this.animatetime( )
     
  }
animatetime( ) {
    this.getTimeUntil = setInterval((deadline) => {


 const time = Date.parse(this.state.deadline) - Date.parse(new Date());
      
        if(time < 0) {
            
        } else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));

            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        }



    }, 2200);
  }
  componentWillUnmount() {
    this.colorAnimationInterval && clearInterval(this.colorAnimationInterval);
    this.getTimeUntil && clearInterval(this.getTimeUntil)
  }

 

   
  animateColor() {
    this.colorAnimationInterval = setInterval(() => {
      this.setState({
        isColor: !this.state.isColor
      });
    }, 2200);
  }


  render() {
        return (
          <Fragment>
          <div className="desktop_space_header"/>
         
            <div className="taggs_wrapper fadein">
              <div className="desktopOnly_wrapper">
                {/* TOP */}
  {/* <Tag   top= '240' left="300px" char="p"  isColor={this.state.isColor}/> */}
                {/* LEFT */}
    <Tag   top= '1040' left= '940' char="p"  isColor={this.state.isColor}/>
    <Tag   top= '990' left= '750' char="y"  isColor={this.state.isColor}/>
    <Tag   top= '1040' left= '600' char="y"  isColor={this.state.isColor}/>
          {/* ROW M */}
    <Tag   top= '1250' left= '470' char="p"  isColor={this.state.isColor}/>
    <Tag   top= '1250' left= '640' char="y"  isColor={this.state.isColor}/>
    <Tag   top= '1250' left= '802' char="y"  isColor={this.state.isColor}/>
    <Tag   top= '1250' left= '1012' char="y"  isColor={this.state.isColor}/>
   
            {/* ROW M */}
    
            
    <Tag   top= '1450' left= '370' char="p"  isColor={this.state.isColor}/>
    <Tag   top= '1450' left= '540' char="y"  isColor={this.state.isColor}/>
    <Tag   top= '1450' left= '802' char="y"  isColor={this.state.isColor}/>
    <Tag   top= '1450' left= '1012' char="y"  isColor={this.state.isColor}/>
    <Tag   top= '1450' left= '1212' char="y"  isColor={this.state.isColor}/>

          {/* ROWLAST  */}
   <Tag   top= '1640' left= '300' char="p"  isColor={this.state.isColor}/>  
    <Tag   top= '1640' left= '500' char="p"  isColor={this.state.isColor}/>
    <Tag   top= '1640' left= '675' char="y"  isColor={this.state.isColor}/>
    <Tag   top= '1640' left= '850' char="y"  isColor={this.state.isColor}/>
    <Tag   top= '1640' left= '1050' char="y"  isColor={this.state.isColor}/>
    <Tag   top= '1640' left= '1300' char="y"  isColor={this.state.isColor}/>


                </div>
        {/* Middle row */}

          <div className="mobile__only">
                        <Tag   top= '430' left= '140' char="p"  isColor={this.state.isColor}/>

      <Tag   top= '530' left= '80' char="y"  isColor={this.state.isColor}/>
            <Tag   top= '530' left= '170' char="p"  isColor={this.state.isColor}/>          
            {/* BOTTOM ROW BELLS */}
           <Tag   top= '636' left= '34' char="y"  isColor={this.state.isColor}/>
            <Tag   top= '610' left= '120' char="p"  isColor={this.state.isColor}/>
            <Tag   top= '640' left= '235' char="y"  isColor={this.state.isColor}/>
        
          
</div>
            </div>

        <div className="about_image_mobile fadein">
          <Image imageUrl={xed}  left />
        </div>
   <div className="desktopImage">
    
         <Image imageUrl={xed}  contain />
      </div>

        <div className="aboutfadespaces" />
        <div className="fadein_wrapper">
          <h1 className="title fadein">Welcome</h1>
          <h4 className="subtitle fadein">To my page</h4>

          <span className="whiteslicespace"></span>
          <div className="aboutfadespacez" />
          <p className="subsubTitle fadein">
            Feel free to read a short description about me.
          </p>
        </div>

        <div className="spacebackground">
          <div className="aboutsection2">
            <h4 className="abouttitle">Wijnand Korlaar</h4>
            </div>
          <div className="aboutsection3"> 
            <div  >
              <Typed
                loop
                typeSpeed={60}
                backSpeed={60}
                strings={this.roles}
                backDelay={1000}
                loopCount={0}
                showCursor
                className="self-typed3"
                cursorChar="|"
              />
              </div>
            </div>
        </div>
  
            <div className="lab_about_wrapper">
                            <Flip left> 
                            <div
                                    className="someClassName">
                                
                                    <Image imageUrl={lab}  contain />
                                  
                            </div>  
                            </Flip> 
               <div className="someClassName2">           
                <Flip right>
                   <div>
                        <p className="abouttext">
                          Throughout my career, I have acquired advanced technical
                          knowledge and the ability to work programming topics
                          clearly and in  to a great detail  
                        </p>
                      
               
                
                          <p className="abouttext">
                            {" "}
                            I invite you to look around at my work, where I have put a lot of
                            effort to writing  software and engineering concepts in a
                            detailed,   and understandable way.
                          </p> 
                     </div>     
                  </Flip>    
          </div>
            </div>
        {/*  Carr */}
        <div className="mobile_Line"/>
            <div className="carrouseljs-flex">
             
                  <Flip left>
                      <div className="imagewrapper">
                              <Image imageUrl={javajs}contain /> 
                      </div>
                      </Flip>
                         <Zoom right>
                       <div className="textwrapper">
                          <h5 className="textheader">Javascript</h5>
                          <p className="textsmaller">
                            My favourite choice for webapps and mobile applications
                          </p>
                       </div>
                       </Zoom>
               
                     
                        <Flip left>
                        <div className="imagewrapper">
                            <Image imageUrl={nodelogo} contain/>
                         </div>
                         </Flip>
                         <Zoom right>
                           <div className="textwrapper">
                               <h5 className="textheader">V8 Engine</h5>
                               <p className="textsmaller">Easy to use lightweight node v8 engine</p>
                            </div>
                            </Zoom>
                            
                   
                              <Flip left>
                           <div className="imagewrapper">
                           <Image imageUrl={react} contain/>
                          </div>
                          </Flip>
                            <Zoom right>
                           <div className="textwrapper">
              <h5 className="textheader">React</h5>
              <p className="textsmaller">
                Fast crud operations, rendering a virtual dom.{" "}
               
              </p>
               <div className="desktopspacexs"/>
            </div>
            </Zoom>
            
        </div>
       
        
        
       
        <div className="spacemoreofmec">
          <h4>More about me</h4> 
       
        </div>
        <div className="accordionwrapper_mobile" />
        <div className="accordionwrapper">
          <Accordion />
          <h1 className="xmastile">Christmass begins in.. :</h1>
                    
          <div className="countdownwrapper">   <div className="countdown_item">
              <div className="countdown_time">
                              {this.state.days}
                            </div>
                            <div className="countdown_tag">
                               Days
                        </div>
                    </div>
            
               <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.hours}
                            </div>
                            <div className="countdown_tag">
                                Hs
                        </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.minutes}
                            </div>
                            <div className="countdown_tag">
                                Min
                        </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.seconds}
                            </div>
                            <div className="countdown_tag">
                                 Sec
                        </div>
                        </div>

       
        </div>
        </div>

          
         
       

      
      </Fragment>
    );
  }
}

export default About;

//  <div className="imagewrapper"
//              >
//                 <Image  imageUrl={javajs}/>
//               </div>
//               <div className="imagecdesc">
//  <h5>Here is the descccc</h5>
//               </div>
//         </div>
//    <div className="imagecarroussel">
//  <div className="imagewrapper"
//              >
//                 <Image  imageUrl={nodelogo}/>
//               </div>
//                <div className="imagecdesc">
//               <h5>Javascript</h5>
//               <p>The main langauge i prefer for web and mobike ap</p>
//               </div>
//         </div>
//            <div className="imagecarroussel">
//  <div className="imagewrapper"
//              >
//                 <Image  imageUrl={react}/>
//               </div>
//                <div className="imagecdesc">
//  <h5>Here is the descccc</h5>
//               </div>
