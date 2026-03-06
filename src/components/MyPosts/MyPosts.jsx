import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Post from '../Post/Post'

export default function MyPosts() {

  const { posts, currentUser } = useContext(AuthContext);

  const filteredPosts = posts.filter(post => post.userId === currentUser.userId);

  return (
    <>
      {filteredPosts.length > 0? filteredPosts.map(post =>
        <Post key={post.id} post={post} />
      ) : "There is no Post..."
      }
    </>
  );
}