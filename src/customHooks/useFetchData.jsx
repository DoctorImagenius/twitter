import { useState, useEffect } from 'react'

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
        const initializeApp = async () => {

            try {
                const storedUsers = localStorage.getItem('users');
                if (storedUsers) {
                    setUsers(JSON.parse(storedUsers));
                } else {
                    setUsers([]);
                    localStorage.setItem('users', JSON.stringify([]));
                }

                const storedPosts = localStorage.getItem('posts');
                if (storedPosts) {
                    if (JSON.parse(storedPosts).length === 0) {
                        try {
                            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                            const data = await res.json();
                            setPosts(data);
                            localStorage.setItem('posts', JSON.stringify(data));
                        }
                        catch (err) {
                            setPosts([]);
                            localStorage.setItem('posts', JSON.stringify([]));
                        }
                    }
                    else {
                        setPosts(JSON.parse(storedPosts));
                    }
                } else {
                    try {
                        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                        const data = await res.json();
                        setPosts(data);
                        localStorage.setItem('posts', JSON.stringify(data));
                    }
                    catch (err) {
                        setPosts([]);
                        localStorage.setItem('posts', JSON.stringify([]));
                    }
                }
                const storedComments = localStorage.getItem('comments');
                if (storedComments) {
                    if (JSON.parse(storedComments).length === 0) {
                        try {
                            const res = await fetch('https://jsonplaceholder.typicode.com/comments');
                            const data = await res.json();
                            setComments(data);
                            localStorage.setItem('comments', JSON.stringify(data));
                        }
                        catch (err) {
                            setComments([]);
                            localStorage.setItem('comments', JSON.stringify([]));
                        }
                    }
                    else {
                        setComments(JSON.parse(storedComments));

                    }
                } else {
                    try {
                        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
                        const data = await res.json();
                        setComments(data);
                        localStorage.setItem('comments', JSON.stringify(data));
                    }
                    catch (err) {
                        setComments([]);
                        localStorage.setItem('comments', JSON.stringify([]));
                    }
                }
                const storedCurrentUser = localStorage.getItem('currentUser');
                if (storedCurrentUser) {
                    setCurrentUser(JSON.parse(storedCurrentUser));
                }
            }
            catch (error) {
                console.error('Error initializing app:', error);
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
    }
}
