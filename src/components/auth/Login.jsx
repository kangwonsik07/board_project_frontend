import React, { useCallback, useState } from 'react'

import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import { Container, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserThunk } from '../../features/authSlice'

function Login() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { loading, error } = useSelector((state) => state.auth)

   const handleLogin = useCallback(
      (e) => {
         e.preventDefault()
         if (email.trim() && password.trim()) {
            dispatch(loginUserThunk({ email, password }))
               .unwrap()
               .then(() => {
                  window.location.href = '/'
               })
               .catch((error) => console.error('로그인 실패:', error))
         }
      },
      [dispatch, email, password, navigate]
   )

   return (
      <Container align="center">
         <Typography variant="h4">로그인</Typography>

         <form onSubmit={handleLogin}>
            이메일:
            <Input name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            비밀번호: <Input name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Button color="black" type="submit" className="login-button" disabled={loading} onClick={handleLogin}>
               로그인
            </Button>{' '}
            <Link to="/signup">회원가입</Link>
         </form>
      </Container>
   )
}

export default Login
