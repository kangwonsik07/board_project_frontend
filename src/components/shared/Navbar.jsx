import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import { logoutUserThunk } from '../../features/authSlice'
import { useDispatch } from 'react-redux'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import { useCallback } from 'react'

function Header({ isAuthenticated, user }) {
   const dispatch = useDispatch()

   const handleLogout = useCallback(() => {
      dispatch(logoutUserThunk())
         .unwrap()
         .then(() => {
            window.location.href = '/'
         })
         .catch((error) => {
            alert(error)
         })
   }, [dispatch])
   return (
      <header className="header">
         {/* 메뉴바 */}
         <nav className="header__menu">
            <ul>
               <li>
                  <Link to="/">공지사항</Link>
               </li>
               <li>
                  <Link to="/free">자유 게시판</Link>
               </li>
               <li>
                  <Link to="/qa">Q&A 게시판</Link>
               </li>
               <li>
                  <Link to="/info">정보 공유</Link>
               </li>
               <li>
                  <Link to="/anonymous">익명 게시판</Link>
               </li>
            </ul>
         </nav>

         {/* 로그인 영역 */}
         {isAuthenticated ? (
            <>
               <Link to="/">
                  <IconButton aria-label="글쓰기">
                     <CreateIcon />
                  </IconButton>
               </Link>
               <Link to="/my" style={{ textDecoration: 'none' }}>
                  <Typography variant="body1" style={{ marginRight: '20px', color: 'black' }}>
                     {/* ?(optional chaining): 값이 undefined이거나 null일때 에러를 반환하지 않고 그냥 undifined를 반환 */}
                     {user?.nick}님
                  </Typography>
               </Link>
               <Button onClick={handleLogout}>로그아웃</Button>
            </>
         ) : (
            <Link to="/login">로그인</Link>
         )}
         {/* <div className="header__auth">
            <Link to="/login">로그인</Link>
         </div> */}
      </header>
   )
}

export default Header
