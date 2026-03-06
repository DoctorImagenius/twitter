// import { useState, useContext } from 'react';
// import { AuthContext } from '../../contexts/AuthContext';
// import styles from './CreatePost.module.css';

// export default function CreatePost() {
//   const { currentUser, posts, setPosts, setShowCreatePostModal } = useContext(AuthContext);
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');

//   const handlePost = () => {
//     if (!title.trim() || !body.trim()) return;

//     const newPost = {
//       body: body.trim(),
//       id: posts.length ? Math.max(...posts.map(p => p.id)) + 1 : 1,
//       title: title.trim(),
//       userId: currentUser.userId,
//     };

//     setPosts([...posts, newPost]);
//     localStorage.setItem('posts', JSON.stringify([...posts, newPost]));
//     setShowCreatePostModal(false);
//   };

//   const isDisabled = !title.trim() || !body.trim();

//   return (
//     <div className={styles.overlay}>
//       <div className={styles.modal}>
//         <button className={styles.closeBtn} onClick={() => setShowCreatePostModal(false)}>✕</button>

//         <div className={styles.postHeader}>
//           <div className={styles.avatar}>{currentUser.name[0]}</div>
//           <div className={styles.inputContainer}>
//             <input
//               type="text"
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className={styles.inputTitle}
//             />
//             <textarea
//               placeholder="What's happening?"
//               value={body}
//               onChange={(e) => setBody(e.target.value)}
//               className={styles.textarea}
//             />
//           </div>
//         </div>

//         <button
//           className={`${styles.postBtn} ${isDisabled ? styles.disabled : ''}`}
//           onClick={handlePost}
//           disabled={isDisabled}
//         >
//           Post
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState, useContext, useCallback } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './CreatePost.module.css';

export default function CreatePost() {
  const { currentUser, posts, setPosts, setShowCreatePostModal } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handlePost = useCallback(() => {
    if (!title.trim() || !body.trim()) return;

    const newPost = {
      body: body.trim(),
      id: posts.length ? Math.max(...posts.map(p => p.id)) + 1 : 1,
      title: title.trim(),
      userId: currentUser.userId,
    };

    setPosts([newPost, ...posts]);
    localStorage.setItem('posts', JSON.stringify([newPost, ...posts]));
    setShowCreatePostModal(false);
  }, [title, body, posts, currentUser.userId, setPosts, setShowCreatePostModal]);

  const isDisabled = !title.trim() || !body.trim();

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={() => setShowCreatePostModal(false)}>✕</button>

        <div className={styles.postHeader}>
          <div className={styles.avatar}>{currentUser.name[0]}</div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.inputTitle}
            />
            <textarea
              placeholder="What's happening?"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className={styles.textarea}
            />
          </div>
        </div>

        <button
          className={`${styles.postBtn} ${isDisabled ? styles.disabled : ''}`}
          onClick={handlePost}
          disabled={isDisabled}
        >
          Post
        </button>
      </div>
    </div>
  );
}