import styles from './Post.module.css';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import PostComment from '../PostComments/PostComment'
import UploadComment from '../UploadComment/UploadComment'

import {
  HiOutlineChatBubbleOvalLeft,
  HiOutlineHeart,
  HiOutlineArrowPathRoundedSquare,
  HiOutlineBookmark,
  HiOutlineShare,
  HiOutlineEllipsisHorizontal
} from "react-icons/hi2";

export default function Post({ post }) {

  const { currentUser, setShowEditPostModal, setEditingPost, comments } = useContext(AuthContext);

  let [showComments, setShowComments] = useState(false)
  let [postComments, setPostComments] = useState([])

  useEffect(() => {
    let thisPostComments = comments.filter((comment) => {
      return comment.postId === post.id
    })
    setPostComments(thisPostComments)
    // eslint-disable-next-line
  }, [postComments])


  return (

    <div className={styles.postCard}>
      <div className={styles.avatar}>
        <img
          src={`https://picsum.photos/500/300?random=${post.id}`}
          alt="post"
        />
      </div>

      <div className={styles.postContent}>

        <div className={styles.postHeader}>
          <span className={styles.userName}>
            {post.title}
          </span>
          <span className={styles.userHandle}>
            @user{post.userId}
          </span>
          {
            currentUser.userId === post.userId ?
              <div className={styles.editButton} title='Edit your post...' onClick={() => {
                setEditingPost(post);
                setShowEditPostModal(true)
              }}>
                <HiOutlineEllipsisHorizontal />
              </div> :
              ""
          }
        </div>

        <p className={styles.postBody}>
          {post.body}
        </p>

        <img
          src={`https://picsum.photos/500/300?random=${post.id}`}
          alt="post"
          className={styles.postImage}
        />

        <div className={styles.postActions}>
          <HiOutlineChatBubbleOvalLeft onClick={() => setShowComments(!showComments)} />
          <HiOutlineArrowPathRoundedSquare />
          <HiOutlineHeart />
          <HiOutlineBookmark />
          <HiOutlineShare />
        </div>
        {
          showComments &&
          <>{
            postComments.length > 0 ?
              <>{
                postComments.map((comment) => (
                  <PostComment key={comment.id} comment={comment} />
                ))}
                <UploadComment key={post.id} post={post} />
              </>
              :
              <>
                "no comment yet!"
                <UploadComment post={post} />
              </>
          }
          </>
        }
      </div>
      

    </div>
  );
}