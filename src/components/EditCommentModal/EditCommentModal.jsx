import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./EditCommentModal.module.css";

export default function EditCommentModal() {

  const {
    setShowEditCommentModal, currentUser, comments, setComments, editingComment, setEditingComment
  } = useContext(AuthContext);

  let [comment, setComment] = useState(() => editingComment.body);

  const isDisabled = !comment.trim();

  const handleUpdate = () => {

    if (!comment.trim()) return;
    let updatedComment = { ...editingComment, body: comment }
    const updatedComments = comments.map((comment) =>
      comment.id === editingComment.id
        ? updatedComment
        : comment
    );

    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));

    setComment("")
    setEditingComment(null)
    setShowEditCommentModal(false);
  };

  let handleDelete = () => {

    const filteredComments = comments.filter(
      (comment) => comment.id !== editingComment.id
    );

    setComments(filteredComments);
    localStorage.setItem("comments", JSON.stringify(filteredComments));

    setEditingComment(null)
    setShowEditCommentModal(false);
  }


  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>

        <button
          className={styles.closeBtn}
          onClick={() =>
            setShowEditCommentModal(false)
          }
        >
          ✕
        </button>

        <div className={styles.postHeader}>
          <div className={styles.avatar}>
            {currentUser.name[0]}
          </div>

          <div className={styles.inputContainer}>
            <textarea
              placeholder="Edit your comment..."
              className={styles.textarea}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={`${styles.postBtn} ${isDisabled ? styles.disabled : ""}`}
            onClick={handleUpdate}
          >
            Update
          </button>

          <button
            className={styles.deleteBtn}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}