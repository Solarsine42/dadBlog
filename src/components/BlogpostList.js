import React from "react";
import { connect } from "react-redux";
import Blogpost from "./Blogpost";

const BlogpostList = props => {
  const listOfPosts = props.posts.map((post, i) => (
    <Blogpost key={i} post={post} />
  ));
  return <div className="container">{listOfPosts}</div>;
};

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  };
}

export default connect(mapStateToProps)(BlogpostList);
