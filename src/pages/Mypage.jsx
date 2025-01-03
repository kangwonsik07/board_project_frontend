import MyProfile from '../components/page/MyProfile'
import { Container } from '@mui/material'

const MyPage = ({ auth }) => {
   return (
      <Container>
         <MyProfile auth={auth} />
      </Container>
   )
}

export default MyPage
