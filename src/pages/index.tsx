import { session, signIn, signOut, useSession } from 'next-auth/client'
import React from 'react'


function index() {
  const [session, loading] = useSession();
  return (
    <>
      {!session && <>
        Not signed in <br />
        <button onClick={() => signIn('github', { callbackUrl: 'https://nlw4-movit.vercel.app/home' })}>Sign in</button>
      </>}
      {session && <>
        <br />
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>}
    </>
  )
}

export default index
