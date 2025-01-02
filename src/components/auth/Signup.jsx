import React, { useState, useCallback } from 'react'
// import '../css/Signup.css'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import { Container, Typography, Box, CircularProgress } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { signupUserThunk } from '../../features/authSlice'

function Signup({ initialValues = {} }) {
   const [email, setEmail] = useState('')
   const [nick, setNick] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [description, setDescription] = useState('')

   const [imgUrl, setImgUrl] = useState(initialValues.img ? process.env.REACT_APP_API_URL + '/' + initialValues.img : '')
   const [imgFile, setImgFile] = useState(null)

   const [isSignupComplete, setIsSignupComplete] = useState(false)

   const { loading, error } = useSelector((state) => state.auth)
   const dispatch = useDispatch()

   const imgUpload = useCallback((e) => {
      const file = e.target.files && e.target.files[0]
      if (!file) return

      setImgFile(file)

      const reader = new FileReader()

      reader.readAsDataURL(file)
      reader.onload = (event) => {
         setImgUrl(event.target.result)
      }
   }, [])

   const handleSignup = useCallback(() => {
      if (!email.trim() || !nick.trim() || !password.trim() || !confirmPassword.trim() || !description) {
         alert('모든 필드를 입력해 주세요!')
         return
      }

      if (password !== confirmPassword) {
         alert('비밀번호가 일치하지 않습니다!')
         return
      }

      const formData = new FormData()
      formData.append('email', email)
      formData.append('nick', nick)
      formData.append('password', password)
      formData.append('description', description)
      if (imgFile) {
         formData.append('img', imgFile) // 파일 추가
      }

      dispatch(signupUserThunk(formData))
         .unwrap()
         .then(() => {
            setIsSignupComplete(true)
         })
         .catch((error) => {
            console.error('회원가입 에러:', error)
         })
   }, [email, nick, password, confirmPassword, description, imgFile, dispatch])

   if (isSignupComplete) {
      return (
         <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom align="center">
               회원가입이 완료되었습니다!
            </Typography>
            <Typography variant="body1" align="center" style={{ marginTop: '20px' }}>
               로그인 페이지로 이동하거나 다른 작업을 계속 진행할 수 있습니다.
            </Typography>
            <Button
               variant="contained"
               color="primary"
               fullWidth
               style={{ marginTop: '20px' }}
               onClick={() => (window.location.href = '/login')} // 로그인 페이지로 이동
            >
               로그인 하러 가기
            </Button>
         </Container>
      )
   }

   return (
      <Container align="center" encType="multipart/form-data">
         <Typography variant="h4">회원가입</Typography>

         <form>
            이메일:
            <Input value={email} onChange={(e) => setEmail(e.target.value)} required />
         </form>

         <form>
            닉네임:
            <Input value={nick} onChange={(e) => setNick(e.target.value)} required />
         </form>

         <form>
            비밀번호:
            <Input value={password} onChange={(e) => setPassword(e.target.value)} required />
         </form>

         <form>
            비밀번호 확인: <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
         </form>

         <form>
            프로필 사진:{' '}
            <Button>
               <input type="file" name="img" accept="image/*" onChange={imgUpload} />
            </Button>
            {imgUrl && (
               <Box mt={2}>
                  <img src={imgUrl} alt="업로드 이미지 미리보기" style={{ width: '400px' }} />
               </Box>
            )}
         </form>

         <form>
            자기소개: <Input value={description} onChange={(e) => setDescription(e.target.value)} />
         </form>

         <Button variant="contained" color="primary" onClick={handleSignup} fullWidth disabled={loading} style={{ marginTop: '20px' }}>
            {loading ? <CircularProgress size={24} /> : '회원가입'}
         </Button>
      </Container>
   )
}

export default Signup
