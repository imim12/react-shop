import React from 'react'
import { Link } from 'react-router-dom'
import {FiLogIn, FiShoppingCart, FiUser} from 'react-icons/fi';
import {GoSignOut} from 'react-icons/go';
import styles from './Nav.module.scss';
import { useAuth } from '../../../hooks/useAuth';
import {getAuth, signOut} from 'firebase/auth'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { removeUser } from '../../../store/user/user.slice';
import { removeUserId } from '../../../store/cart/cart.slice';
import app from '../../../firebase'

const Nav = () => {

    const {isAuth} = useAuth();
    const dispatch = useAppDispatch();
    const auth = getAuth(app);
    const {products} = useAppSelector(state => state.cartSlice)

    const handleSignOut = () => {
        
        signOut(auth)     //파이어베이스에서 제공해주는 로그아웃 함수. 프로미스 반환
        .then(()=>{  //유저 정보 로그아웃 성공 했을때
            dispatch(removeUser());
            dispatch(removeUserId());
        })
        .catch((error)=>{  //실패했을때
            console.error(error)
        })
    }

    return (
    <nav className={styles.nav}>
        <ul>
            <li>
                <div className={styles.counter}>
                    <Link to={"/cart"}>
                        {" "}
                        <FiShoppingCart/>
                    </Link>
                    {products.length > 0 && <b>{products.length}</b>}
                </div>
            </li>
            <li>
                <div className={styles.counter}>
                    <Link to={"/order"}>
                        {" "}
                        <FiUser title="주문"/>
                    </Link>
                </div>
            </li>
            <li>
                {isAuth ? 
                    <GoSignOut
                        className = {styles.nav_sign_out}
                        onClick={handleSignOut}
                        title="로그아웃"
                    />
                :
                    <Link to={"/login"}>
                        <FiLogIn title="로그인"/>
                    </Link>                   
                }
            </li>
        </ul>
    </nav>
  )
}

export default Nav