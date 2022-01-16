import React from 'react';
import CommentList from "../CommentList"
import CommentForm from "../CommentForm"

function CommentsSection({items, onSubmitClick}) {
    return( <div>
        <CommentList items={items} />
      <CommentForm items={items} onSubmitClick={onSubmitClick} />
    </div>
    );
}

export default CommentsSection;