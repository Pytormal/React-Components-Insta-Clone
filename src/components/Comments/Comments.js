import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  console.log(Comments)
  
  return (
    // comments.map(props =>
      <div >
        
      {
        /* map through the comments prop and render a Comment for every piece of data */
      }
    </div>
  );
};

export default Comments;
