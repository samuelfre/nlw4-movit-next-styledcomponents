import { session, signIn, signOut, useSession } from 'next-auth/client'
import React from 'react'


function index() {
  const [session, loading] = useSession();
  return (
    <>
      {!session && <>
        Not signed in <br />
        <button onClick={() => signIn('github', { callbackUrl: `${process.env.NEXTAUTH_URL}/home` })}>Sign in</button>
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
