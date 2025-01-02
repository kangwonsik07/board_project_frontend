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
