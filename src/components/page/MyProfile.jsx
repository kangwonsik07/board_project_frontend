import { Container, Typography, Box } from '@mui/material'

const MyProfile = ({ auth }) => {
   return (
      <Container maxWidth="sm">
         <Typography variant="h4" align="center">
            {auth.nick}
         </Typography>
         <Typography align="center">이메일: {auth.email}</Typography>
         <Typography align="center">닉네임: {auth.nick}</Typography>
         <Typography align="center">자기소개: {auth.description}</Typography>
         <Box mt={2}>
            <img src={`${process.env.REACT_APP_API_URL}/${auth.img}`} alt="이미지" style={{ width: '400px' }} />
         </Box>
      </Container>
   )
}

export default MyProfile
