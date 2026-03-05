import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Post from '../Post/Post'

export default function Posts() {

  const {posts} = useContext(AuthContext);

  return (
    <>
      {posts? posts.map(post =>
              <Post key={post.id} post={post} />
            ) : "There is no Post..."
            }
    </>
  );
}