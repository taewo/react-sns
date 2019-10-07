import React, { useState, useCallback } from 'react'
import Link from 'next/link'
import { Button, Form, Input } from 'antd'
import { useInput } from '../pages/signup'
import { useDispatch } from 'react-redux'
import { loginAction } from '../reducers/user'

const LoginForm = () => {
  const dispatch = useDispatch()
  const [id, onChangeId] = useInput('')
  const [password, onChangePassword] = useInput('')

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch(loginAction)
    console.log({id, password})
  }, [id, password])

  return (
    <Form onSubmit={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label><br/>
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label><br/>
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
      </div>
      <div>
        <Button type="primary" htmlType="submit">로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </div>
    </Form>
  )
}

export default LoginForm