import React, { Component, Fragment } from 'react';

 
 
import Post from "../components/Post/Post"
 

import blogs from "../data"
class Blog   extends React.Component {
  state={blogs: {}, loading: true}
    componentDidMount() {
      this.setState({
        blogs: blogs,
        loading: false
      })
    }
   

    render() {
    return (
     <Fragment>
            <div className="blogheadspace" />
            <div className="blogwrapper">
          {!this.state.loading && (
            <Fragment>
              {this.state.blogs.map((blog, i) => (
              <Post key={blog.date + `${i}`} id={blog.id} author="Wijnand" image={blog.image} date={blog.date} title={blog.title} content={blog.content} clicked={() => this.setpostHandler(blog)}/> 

              ))}
            </Fragment  >
           
          )}
            
       {/* <Post image={fity} date={`2-dec-2020`} title={'Yoga for better coding skills'}/>
              <Post image={fit} date={`11-nov-2020`} title={'You get out wat you put in'}/> */}        
            </div>
          </Fragment>    
      
    )
  }
}

export default Blog;