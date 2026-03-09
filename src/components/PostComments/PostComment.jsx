import { useContext } from 'react';
import styles from './PostComment.module.css';
import { AuthContext } from '../../contexts/AuthContext';


import {
  HiOutlineEllipsisHorizontal,
} from "react-icons/hi2";

export default function PostComment({ comment }) {

  const { currentUser, setShowEditCommentModal, setEditingComment } = useContext(AuthContext);


  return (
    <div className={styles.commentCard}>

      <div className={styles.avatar}>
        {comment?.name[0].toUpperCase()}
      </div>
      <div className={styles.commentSection}>
        <div className={styles.commentHeader}>
          <span className={styles.commentName}>{comment.name}</span>
          
          <span className={styles.commentEmail}>@{comment.email.split('@')[0]}</span>
          {
            currentUser.email === comment.email ?
              <HiOutlineEllipsisHorizontal className={styles.commentDot}
                onClick={() => {
                  setEditingComment(comment)
                  setShowEditCommentModal(true)
                }
                }
              />
              : ""
          }
          
        </div>
        <div className={styles.commentBody}>{comment.body}</div>
      </div>
    </div>
  );
}
