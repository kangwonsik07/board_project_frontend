import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './styles/common.css'
import Navbar from './components/shared/Navbar'
import Loginpage from './pages/Loginpage'
import SignupPage from './pages/Signuppage'
import { checkAuthStatusThunk } from './features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

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
         </Routes>
      </>
   )
}

export default App
