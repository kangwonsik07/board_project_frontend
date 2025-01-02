import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Container } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom'

function createData(name, calories, fat, carbs, protein) {
   return { name, calories, fat, carbs, protein }
}
const totalRows = 15
const rows = [createData(1, '공지사항', '운영자', 24 - 12 - 12, 3, 2)]
const filledRows = [...rows, ...Array(totalRows - rows.length).fill({})]

export default function BasicTable({ isAuthenticated, user }) {
   return (
      <TableContainer component={Paper} sx={{ width: '1200px', margin: 0, margin: 'auto' }}>
         <Container sx={{ fontSize: '30px', fontStyle: 'bold', textAlign: 'center' }}>공지사항</Container>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell align="center" sx={{ width: 10 }}>
                     No.
                  </TableCell>
                  <TableCell align="center">제목</TableCell>
                  <TableCell align="center">닉네임</TableCell>
                  <TableCell align="center">작성시간</TableCell>
                  <TableCell align="center">추천</TableCell>
                  <TableCell align="center">조회수</TableCell>
               </TableRow>
            </TableHead>

            <TableBody>
               {filledRows.map((row) => (
                  <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                     <TableCell component="th" scope="row">
                        {row.name}
                     </TableCell>
                     <TableCell align="center">{row.calories}</TableCell>
                     <TableCell align="center">{row.fat}</TableCell>
                     <TableCell align="center">{row.carbs}</TableCell>
                     <TableCell align="center">{row.protein}</TableCell>
                     <TableCell align="center">{row.protein}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
         <Stack spacing={2} sx={{ mt: 1, alignItems: 'center' }}>
            <Pagination count={10} shape="rounded" />
            {isAuthenticated ? (
               <>
                  <Link to="/">글쓰기</Link>
               </>
            ) : (
               <></>
            )}
         </Stack>
      </TableContainer>
   )
}
