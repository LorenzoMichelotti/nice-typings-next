import router from 'next/router';
import { useEffect } from 'react';
import LoginForm from '../components/login';
import LandingPage from '../components/lolo-ui/masterPage/masterPage';

export default function Login() {

  useEffect(() => {
    if(window.localStorage.getItem('token')){
      router.push('/home');
    }
  }, [])

  return (
    <LandingPage>
      <LoginForm></LoginForm>
    </LandingPage>
  )
}
