import React, { Component, Fragment } from "react";

import Image from "../components/Image/Image";
import i from "../static/images/i.png"
import Button from "../components/Button/Button"
import blogs from "../data";

class BlogPost extends Component {
  state = {
    blogs: blogs,
    title: "",
    author: "",
    date: "",
    image: "",
    content: "",
    post: {},
  };

  async componentDidMount() {
    const blogz = [...this.state.blogs];
    const postId = parseInt(this.props.match.params.postId);

    const post = blogz.filter((blog) => {
      return blog.id === postId;
    });
 
    this.setState({
      title: post[0].title,
      content: post[0].content,
      date: post[0].date,
      author: post[0].author,
      image: post[0].image,
      q: post[0].q
    });
  }

  render() {
    return (
      <div className="contain_wrapper fadein">
          <div className="single-post_space"/>
      <div className="single-post_space_img"> 
        <Image imageUrl={i} contain/>
      </div>
      <section className="single-post">
      
        <h1>{this.state.title}</h1>
        <h2>
          Created by {this.state.author} on {this.state.date}
        </h2>
        <div className="single-post__image">
          <Image center imageUrl={this.state.image} />
        </div>
        <p className="single-post__text">{this.state.content}</p>
        <div className="singe-post__qoute"><h4>{this.state.q ? `" ${this.state.q} "`: null}   </h4></div>
      
      <Button mode="raised" link="/blog"> Back to Blogs</Button>
      <div style={{paddingBottom: '100px'}}/>
      </section>
      
      </div>
    );
  }
}
 
export default BlogPost;
