import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./EditComment.module.css";

export default function EditComment() {

  const {
        showEditCommentModal, 
        setShowEditCommentModal
  } = useContext(AuthContext);


  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>

        <button
          className={styles.closeBtn}
          onClick={()=>
            setShowEditCommentModal(false)
          }
        >
          ✕
        </button>

        <div className={styles.postHeader}>
          <div className={styles.avatar}>
            1
          </div>

          <div className={styles.inputContainer}>
            <textarea
              placeholder="Edit your comment..."
              className={styles.textarea}
            />
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.postBtn}

          >
            Update
          </button>

          <button
            className={styles.deleteBtn}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}