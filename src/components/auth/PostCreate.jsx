import { Button, Container, Input, Typography } from '@mui/material'
import { createPostThunk } from '../../features/postSlice'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const PostCreate = () => {
   const [title, setTitle] = useState('')
   const [content, setContent] = useState('')
   const dispatch = useDispatch()
   const { loading, error } = useSelector((state) => state.auth)

   const handlePost = useCallback(
      (e) => {
         e.preventDefault()

         if (!title.trim()) {
            alert('제목을 입력하세요')
            return
         }

         if (!content.trim()) {
            alert('내용을 입력하세요')
            return
         }

         if (title.trim() && content.trim()) {
            dispatch(createPostThunk({ title, content }))
               .unwrap()
               .then(() => {
                  window.location.href = '/'
               })
               .catch((error) => console.error('게시물 등록 실패', error))
         }
      },
      [dispatch, title, content]
   )

   return (
      <Container>
         <Typography>
            제목:
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
         </Typography>
         <Typography>
            내용:
            <Input value={content} onChange={(e) => setContent(e.target.value)} />
         </Typography>
         <Button type="submit" disabled={loading} onClick={handlePost}>
            등록
         </Button>
      </Container>
   )
}

export default PostCreate
