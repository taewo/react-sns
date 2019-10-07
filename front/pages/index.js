import React, { useEffect } from 'react';
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction, logoutAction } from '../reducers/user'

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: '제로초',
    },
    content: '첫 번째 게시글',
    img: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
  }],
};


const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  console.log(1, user)
  useEffect(() => {
    dispatch(loginAction)
    dispatch(logoutAction)
  }, [])  //  componentDidMount
  return (
    <>
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map((c) => {
        return (
          <PostCard key={c} post={c} />
        )
      })}
    </>
  );
};

export default Home;