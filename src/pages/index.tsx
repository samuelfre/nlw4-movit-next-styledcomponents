import { useSession } from 'next-auth/client'
import React from 'react'
import { Login } from '../components/Login';
import Home from './home';


function Index() {
  const [session, loading] = useSession();
  return (
    <>
      {
        (!session && !loading) && <Login />
      }

      {
        session && <Home />
      }
    </>
  )
}

export default Index
