import { jwtDecode } from 'jwt-decode';

 function useAuth() {
   const token = localStorage.getItem('token');

   if (!token) {
      return { isAuthenticated: false, userId: null }
   }

   const decodedToken = jwtDecode(token)
   const currentTime = Date.now()

   if (decodedToken.exp * 1000 < currentTime) {
      localStorage.removeItem('token')
      return { isAuthenticated: false, userId: null }
   }

   return {
      isAuthenticated: true,
      userId: decodedToken.id,
      token: token
    } 
 }

export default useAuth;

