import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

const boardApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
   },
   withCredentials: true, //세션쿠키를 요청에 포함
})

// 회원가입
export const signupUser = async (userData) => {
   try {
      const config = {
         headers: {
            'Content-Type': 'multipart/form-data', // 데이터 형식 지정 , 파일 정송시 반드시 지정
         },
      }
      const response = await boardApi.post('/auth/signup', userData, config)
      return response
   } catch (error) {
      console.error(`API Request 오류: ${error.message}`)
      throw error
   }
}

export const loginUser = async (credentials) => {
   try {
      const response = await boardApi.post('/auth/login', credentials)
      return response
   } catch (error) {
      console.error(`API Request 오류: ${error.message}`)
      throw error // request 할때 오류 발생시 에러를 registerUser()함수를 실행한 곳으로 던짐
   }
}

// 로그아웃
export const logoutUser = async () => {
   try {
      const response = await boardApi.get('/auth/logout')
      return response
   } catch (error) {
      console.error(`API Request 오류: ${error.message}`)
      throw error // request 할때 오류 발생시 에러를 registerUser()함수를 실행한 곳으로 던짐
   }
}

export const checkAuthStatus = async () => {
   try {
      const response = await boardApi.get('/auth/status')
      return response
   } catch (error) {
      console.error(`API Request 오류: ${error.message}`)
      throw error // request 할때 오류 발생시 에러를 registerUser()함수를 실행한 곳으로 던짐
   }
}

//포스트 등록

export const createPost = async (postData) => {
   try {
      const response = await boardApi.post('/create/create', postData)
      return response
   } catch (error) {
      console.error(`API Request 오류: ${error.message}`)
      throw error
   }
}

// 포스트 수정
export const updatePost = async (id, postData) => {
   try {
      const response = await boardApi.put(`/create/${id}`, postData)
      return response
   } catch (error) {
      console.error(`API Request 오류: ${error.message}`)
      throw error
   }
}

// 포스트 삭제
export const deletePost = async (id) => {
   try {
      const response = await boardApi.delete(`/create/${id}`)
      return response
   } catch (error) {
      console.error(`API Request 오류: ${error.message}`)
      throw error
   }
}

// 전체 포스트 가져오기
export const getPosts = async (page) => {
   try {
      const response = await boardApi.get('/')
      return response
   } catch (error) {
      console.error(`API Request 오류: ${error.message}`)
      throw error
   }
}
