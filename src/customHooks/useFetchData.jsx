import { useState, useEffect } from 'react';
import {postApi, commentApi} from '../config/Config'

export default function useFetchData() {

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeComponent, setActiveComponent] = useState("Posts");
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const [showEditPostModal, setShowEditPostModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [showEditCommentModal, setShowEditCommentModal] = useState(false);
  const [editingComment, setEditingComment] = useState(null);

  useEffect(() => {

    const getData = async (key, url, setter) => {
      const stored = localStorage.getItem(key);
        const parsed = stored ? JSON.parse(stored) : null;

      if (parsed && parsed.length > 0) {
        setter(parsed);
      } else {
        try {
          const res = await fetch(url);
          const data = await res.json();
          setter(data);
          localStorage.setItem(key, JSON.stringify(data));
        } catch {
          setter([]);
          localStorage.setItem(key, JSON.stringify([]));
        }
      }
    };

    const initializeApp = async () => {

      await getData("posts", postApi, setPosts);
      await getData("comments", commentApi, setComments);

      const storedUsers = localStorage.getItem("users");
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      } else {
        localStorage.setItem("users", JSON.stringify([]));
      }

      const storedCurrentUser = localStorage.getItem("currentUser");
      if (storedCurrentUser) {
        setCurrentUser(JSON.parse(storedCurrentUser));
      }

      setLoading(false);
    };

    initializeApp();
  }, []);

  return {
    users,
    setUsers,
    posts,
    setPosts,
    comments,
    setComments,
    currentUser,
    setCurrentUser,
    loading,
    activeComponent,
    setActiveComponent,
    showCreatePostModal,
    setShowCreatePostModal,
    showEditPostModal,
    setShowEditPostModal,
    editingPost,
    setEditingPost,
    showEditCommentModal,
    setShowEditCommentModal,
    editingComment,
    setEditingComment,
  };
}