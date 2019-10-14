import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Blogpost from "./Blogpost";

const BlogpostList = props => {
  let listOfPosts = props.statuses.map(post => {
    return <Blogpost key={post.id} status={post} />;
  });
  return <div>{listOfPosts}</div>;
};

function mapStateToProps(state, props) {
  return {
    posts: state.posts.all
  };
}

export default withRouter(connect(mapStateToProps)(BlogpostList));
