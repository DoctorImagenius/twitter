import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Post from '../Post/Post'

export default function MyPosts() {

  const { posts, currentUser } = useContext(AuthContext);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const filteredPosts = posts.filter(post => post.userId === currentUser.userId);
      setMyPosts(filteredPosts);
    }

  }, [posts, currentUser])

  return (
    <>
      {myPosts.length > 0? myPosts.map(post =>
        <Post key={post.id} post={post} />
      ) : "There is no Post..."
      }
    </>
  );
}