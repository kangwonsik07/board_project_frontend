import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './styles/common.css'
import Navbar from './components/shared/Navbar'
import Loginpage from './pages/Loginpage'
import SignupPage from './pages/Signuppage'
import { checkAuthStatusThunk } from './features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import MyPage from './pages/Mypage'
import PostCreatePage from './pages/PostCreatePage'

function App() {
   const dispatch = useDispatch()
   const { isAuthenticated, user } = useSelector((state) => state.auth)

   useEffect(() => {
      dispatch(checkAuthStatusThunk())
   }, [dispatch])

   return (
      <>
         <Navbar isAuthenticated={isAuthenticated} user={user} />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/my/" element={<MyPage auth={user} />} />
            <Route Path="/my/:id" element={<MyPage auth={user} />} />
            <Route path="/create/" element={<PostCreatePage />} />
         </Routes>
      </>
   )
}

export default App
