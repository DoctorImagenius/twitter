import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./EditPostModal.module.css";

export default function EditPostModal() {

  const {
    currentUser,
    posts,
    setPosts,
    showEditPostModal,
    setShowEditPostModal,
    editingPost
  } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title || "");
      setBody(editingPost.body || "");
    }
  }, [editingPost]);

  const handleUpdate = () => {
    if (!title.trim() || !body.trim()) return;

    const updatedPosts = posts.map((post) =>
      post.id === editingPost.id
        ? { ...post, title: title.trim(), body: body.trim() }
        : post
    );

    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    setShowEditPostModal(false);
  };

  const handleDelete = () => {

    const filteredPosts = posts.filter(
      (post) => post.id !== editingPost.id
    );

    setPosts(filteredPosts);
    localStorage.setItem("posts", JSON.stringify(filteredPosts));
    setShowEditPostModal(false);
  };

  const isDisabled = !title.trim() || !body.trim();

  if (!showEditPostModal) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>

        <button
          className={styles.closeBtn}
          onClick={() => setShowEditPostModal(false)}
        >
          ✕
        </button>

        <div className={styles.postHeader}>
          <div className={styles.avatar}>
            {currentUser.name[0]}
          </div>

          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.inputTitle}
            />

            <textarea
              placeholder="Edit your post..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className={styles.textarea}
            />
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={`${styles.postBtn} ${isDisabled ? styles.disabled : ""}`}
            onClick={handleUpdate}
            disabled={isDisabled}
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