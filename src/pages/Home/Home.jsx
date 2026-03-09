import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './Home.module.css';
import Posts from '../../components/Posts/Posts';
import MyPosts from '../../components/MyPosts/MyPosts';
import CreatePostModal from '../../components/CreatePost/CreatePost';
import EditPost from '../../components/EditPost/EditPost';
import EditComment from '../../components/EditComment/EditComment';

import NavBar from '../../components/NavBar/NavBar'




export default function Home() {
  const { currentUser, setCurrentUser, activeComponent, showCreatePostModal, posts, setPosts, showEditPostModal, loading, showEditCommentModal } = useContext(AuthContext);

  const navigate = useNavigate();

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const handlePost = () => {
    if (!postTitle.trim() || !postBody.trim()) return;

    const newPost = {
      id: posts.length ? Math.max(...posts.map(p => p.id)) + 1 : 1,
      userId: currentUser.userId,
      title: postTitle.trim(),
      body: postBody.trim(),
    };

    setPosts([newPost, ...posts]);
    localStorage.setItem('posts', JSON.stringify([newPost, ...posts]));
    setPostTitle('');
    setPostBody('');
  };

  useEffect(() => {
    if (!currentUser) navigate('/login');
  }, [currentUser, navigate]);


  const components = {
    Posts: <Posts />,
    MyPosts: <MyPosts />,
    Notifications: <div className={styles.component}>Notifications Component</div>,
    Messages: <div className={styles.component}>Messages Component</div>,
    Bookmarks: <div className={styles.component}>Bookmark Component</div>,
    Profile: <div className={styles.component}>Profile Component</div>,
    More: <div className={styles.component}>More Component</div>,
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  if (!currentUser) return null;

  return (
    <div className={styles.homeLayout}>

      <div className={styles.webHeader}>
        <Header onLogout={handleLogout} />
      </div>

      {loading ? "Loading..." :
        <main className={styles.feed}>
          <div className={styles.feedHeader}>
            <h2>{activeComponent}</h2>
          </div>

          <div className={styles.whatsHappening}>
            <div className={styles.avatarSmall}>{currentUser.name[0]}</div>
            <div className={styles.postInputs}>
              <input
                className={styles.titleInput}
                placeholder="Title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
              />
              <textarea
                className={styles.bodyInput}
                placeholder="What's happening?"
                value={postBody}
                onChange={(e) => setPostBody(e.target.value)}
              />
            </div>
            <button
              className={styles.miniPostBtn}
              onClick={handlePost}
              disabled={!postTitle.trim() || !postBody.trim()}
            >
              Post
            </button>

          </div>

          {components[activeComponent]}
        </main>
      }

      <aside className={styles.widgets}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" />
        </div>
        <div className={styles.trendingCard}>
          <h3>Today's News</h3>
          <div className={styles.trendItem}>@ReactJS</div>
          <div className={styles.trendItem}>@WebDev</div>
          <div className={styles.trendItem}>@JavaScript</div>
        </div>

        <div className={styles.trendingCard}>
          <h3>What's Happening</h3>
          <div className={styles.trendItem}>World War#1</div>
          <div className={styles.trendItem}>World War#2</div>
          <div className={styles.trendItem}>World War#3</div>
        </div>
      </aside>
      {
        showCreatePostModal && (<CreatePostModal />)
      }
      {
        showEditPostModal && (<EditPost />)
      }
      {
        showEditCommentModal && (<EditComment />)
      }

      <div className={styles.mobileHeader}>
        <NavBar onLogout={handleLogout} />
      </div>

    </div>
  );

}