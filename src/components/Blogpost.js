import React from "react";
// import StatusConvo from "../conversations/StatusConvo";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import Moment from "react-moment";

const Blogpost = props => {
  const post = props.posts.filter(post => post.id === props.status.post_id)[0];
  if (post) {
    return (
      <div>
        <p>Blogpost</p>
        {/* <div className="card mb-3">
          <div className="row">
            <div className="col-2">
              <img src={user.photo_url} className="card-img" alt="user" />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/profile/${user.id}`}>{user.name}</Link>
                </h5>
                <p className="card-text">{props.status.content}</p>

                <p className="card-text">
                  <small className="text-muted">Company:{user.company}</small>
                </p>
                <StatusConvo />
              </div>
            </div>
            <div className="col-2">
              <Moment format="MM/DD/YYYY HH:mm A">
                {props.status.createdAt}
              </Moment>
            </div>
          </div>
        </div> */}
      </div>
    );
  } else {
    return "loading...";
  }
};

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  };
}

export default connect(mapStateToProps)(Blogpost);
