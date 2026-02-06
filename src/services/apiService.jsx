const API_URL = 'http://localhost:3001/api/v1'

async function authFetch(endpoint, options = {}) {
   const token = localStorage.getItem('token')
   const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
   }
   const response = await fetch(`${API_URL}${endpoint}`, { ...options, headers })
   if (!response.ok) {
      throw new Error(`Error fetching ${endpoint}: ${response.statusText}`)
   }
   return response.json()
}

async function login(email, password) {
   const data = await authFetch('/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
   })
   localStorage.setItem('token', data.body.token)
   return data
}

async function getUserProfile() {
   const data = await authFetch('/user/profile', {
      method: 'POST',
   })
   localStorage.setItem('firstName', data.body.firstName)
   return data
}

export { login, getUserProfile }