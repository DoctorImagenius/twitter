import { useState, useContext } from 'react'
import styles from './UploadComment.module.css'
import { AuthContext } from '../../contexts/AuthContext';


export default function UploadComment({ post }) {

  const { currentUser, comments, setComments } = useContext(AuthContext);

  let [comment, setComment] = useState("")
  let handleUploadComment = () => {

    const newCommentId = comments.length > 0 ? Math.max(...comments.map((c) => c.id)) + 1 : 1;

    let newComment = {
      body: comment,
      email: currentUser.email,
      name: currentUser.name,
      postId: post.id,
      id: newCommentId
    }

    let updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setComment("");
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  }

return (
  <div className={styles.commentCard}>
    <div className={styles.avatar}>
      <img
        src={`https://picsum.photos/500/300?random=${post.id}`}
        alt="avatar"
      />
    </div>

    <input 
      className={styles.input}
      placeholder="Post your reply"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    />

    <button
      className={styles.miniPostBtn}
      disabled={!comment.trim()}
      onClick={handleUploadComment}
    >
      Reply
    </button>
  </div>
);
}

