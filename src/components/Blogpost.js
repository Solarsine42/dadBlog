import React from "react";
// import RmvPost from "./RmvPost";
// import EditPostModal from "./EditPostModal";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Card } from "react-bootstrap";

const Blogpost = props => {
  return (
    <Card className="mb-3">
      <Card.Header>{props.post.user_id}</Card.Header>
      <Card.Body>
        <Card.Title>{props.post.title}</Card.Title>
        <Card.Text>{props.post.body}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

Blogpost.propTypes = {
  post: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  };
}

export default connect(mapStateToProps)(Blogpost);
