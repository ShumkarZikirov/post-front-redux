import {Link, useNavigate} from "react-router-dom";
import React,{useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkIsAuth, registerUser} from "../redux/features/auth/authSlice";
import {toast} from "react-toastify";


const RegisterPage = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const {status} = useSelector(state => state.auth)
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(status){toast(status)}
        if(isAuth) {navigate('/')}
    },[status,isAuth,navigate])
    const handleSubmit = () => {
        try {
            dispatch(registerUser({username, password}))
            setPassword('')
            setUsername('')
        }catch (e){
            console.log(e)
        }
    }

    return(
      <form onSubmit={e => e.preventDefault()} className={'w-1/4 mx-auto h-60 mt-40'}>
          <h1 className={'text-lg text-white text-center'}>Регистрация</h1>
          <label className={'text-xs  text-gray-400'}>
              username
              <input type="text"
                     className={'mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-900'}
                     placeholder={'username'}
                     value={username}
                     onChange={e => setUsername(e.target.value)}
              />
          </label>
          <label className={'text-xs text-gray-400'}>
              pasword
              <input type="password"
                     className={'mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-900'}
                     placeholder={'password'}
                     value={password}
                     onChange={e => setPassword(e.target.value)}
              />
          </label>
          <div className={'flex gap-8 justify-center mt-4'}>
              <button type={'submit'}
                      onClick={handleSubmit}
                      className={'flex items-center justify-center text-xs text-white rounded-sm py-2 px-4 bg-gray-600'}
              >Регистрация</button>
              <Link to={'/login'} className={'flex justify-center items-center text-xs text-white'}>Есть аккаунт?</Link>
          </div>
      </form>
  )
}
export default RegisterPage