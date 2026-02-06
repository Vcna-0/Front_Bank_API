import { useState } from 'react';
import Button from '../Button/Button';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/apiService';

function LoginForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('Submitting login form with:', { email, password })
      await login(email, password)
      navigate('/user');
    } catch (error) {
      console.error('Error during login:', error)
    }
  }

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password" >Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <Button variant="cta" type="submit">Sign In</Button>
      </form>
    </section>
  );
}

export default LoginForm;
