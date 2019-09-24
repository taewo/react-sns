import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const SignUp = () => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.4/antd.css" />
      </Head>
      <AppLayout>
        <div>
          화원가입
        </div>
      </AppLayout>
    </>
  )
}

export default SignUp;