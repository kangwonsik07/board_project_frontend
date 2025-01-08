import Board from '../components/page/Board'
import { checkAuthStatusThunk } from '../features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const Home = () => {
   const dispatch = useDispatch()
   const { isAuthenticated, user } = useSelector((state) => state.auth)
   console.log(user)
   useEffect(() => {
      dispatch(checkAuthStatusThunk())
   }, [dispatch])
   return (
      <>
         <Board isAuthenticated={isAuthenticated} user={user} />
      </>
   )
}

export default Home
