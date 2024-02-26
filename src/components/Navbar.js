import {Link,NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {checkIsAuth,logout} from "../redux/features/auth/authSlice";

import {toast} from "react-toastify";
const Navbar = () => {
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        toast('Вы вышли из системы')
    }
    const activeColor = {
        color: 'white'
    }
  return(
      <div className={'flex py-4 justify-between items-center'}>
          <span className={'flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-amber-200 rounded-b-sm'}>E</span>
          {
              isAuth && (
                  <ul className={'flex gap-8 text-white'}>
                      <li><NavLink to="/" style={({isActive}) => isActive? activeColor : undefined} className={'text-sm text-amber-200'}> Главная</NavLink></li>
                      <li><NavLink to="/posts" style={({isActive}) => isActive? activeColor : undefined} className={'text-sm text-amber-200'}>Мои посты</NavLink></li>
                      <li><NavLink to="/new" style={({isActive}) => isActive? activeColor : undefined} className={'text-sm text-amber-200'}>Добавить посты</NavLink></li>
                  </ul>
              )
          }
          <div className={'flex justify-center items-center bg-gray-600 text-xs rounded-sm text-white px-4 py-2'}>
              {
                  isAuth? (
                      <button onClick={logoutHandler}>Выйти </button>
                  ): (
                      <Link to={'/login'}>Войти</Link>
                  )
              }
          </div>
      </div>
  )
}
export default Navbar