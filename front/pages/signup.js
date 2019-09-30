import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';

const SignUp = () => {
  const [id, setId] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log({
      id,
      nick,
      password,
      passwordCheck,
      term
    })
  };

  const onChangeId = (e) => {
    setId(e.target.value)
  };

  const onChangeNick = (e) => {
    setNick(e.target.value)
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  };

  const onChangePasswordCheck = (e) => {
    setPasswordError(e.target.value !== password)
    setPasswordCheck(e.target.value)
  };

  const onChangeTerm = (e) => {
    setTermError(false)
    setTerm(e.target.checked)
  };

  const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue)
    const handler = (e) => {
      setter(e.target.value)
    }
    return [value, handler]
  }


  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.4/antd.css" />
      </Head>
      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-id">아이디</label><br/>
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label><br/>
            <Input name="user-nick" value={nick} required onChange={onChangeNick} />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label><br/>
            <Input name="user-password" value={password} type="password" required onChange={onChangePassword} />
          </div>
          <div>
            <label htmlFor="user-password-chk">비밀번호체크</label><br/>
            <Input name="user-password-chk" value={passwordCheck} type="password" required onChange={onChangePasswordCheck} />
            {passwordError && <div style={{ color: "red" }}>비밀번호가 다릅니다.</div>}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm} >동의</Checkbox>
            {termError && <div style={{ color:"red" }}>약관에 동의하셔야 합니다.</div>}
          </div>
          <div>
            <Button type="primary" htmlType="submit">가입하기</Button>
          </div>
        </Form>
        <div>
          화원가입
        </div>
      </AppLayout>
    </>
  )
}

export default SignUp;