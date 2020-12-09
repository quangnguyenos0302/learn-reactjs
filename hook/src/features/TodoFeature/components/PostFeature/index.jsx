import React from "react";
import PropTypes from "prop-types";

PostFeature.propTypes = {
  posts: PropTypes.array,
};

PostFeature.defaultProps = {
  posts: [],
};

function PostFeature(props) {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ul>
  );
}

export default PostFeature;
