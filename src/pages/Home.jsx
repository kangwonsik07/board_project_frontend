import Post from '../components/page/Post'
import { checkAuthStatusThunk } from '../features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const Home = () => {
   const dispatch = useDispatch()
   const { isAuthenticated, user } = useSelector((state) => state.auth)

   useEffect(() => {
      dispatch(checkAuthStatusThunk())
   }, [dispatch])
   return (
      <>
         <Post isAuthenticated={isAuthenticated} user={user} />
      </>
   )
}

export default Home
