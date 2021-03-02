import { signIn, signOut, useSession } from 'next-auth/client'
import React from 'react'
import Home from './home';


function index() {
  const [session, loading] = useSession();
  return (
    <>
      {
        (!session && !loading) &&
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      }

      {
        session && <Home />
      }
    </>
  )
}

export default index
