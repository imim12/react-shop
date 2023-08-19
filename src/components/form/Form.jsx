import React from 'react'
import styles from './Form.module.scss'
import { useForm } from 'react-hook-form'

const Form = ({title, getDataForm, firebaseError}) => {

  const { register, handleSubmit, formState: {errors}, reset } = useForm({ mode : 'onChange'})  //정합성 체크용

  const onSubmit = ({email, password}) => {
    getDataForm(email, password);  //email과 pasword 값을 받아서 SignUp.jsx에 있는 handleSignupAndLogin()으로 넘어가게 됨
    reset();  //input text에 있는 값 초기화
  }

  const userEmail = {
    required : "필수 필드입니다"
  }

  const userPassword = {
    required : "필수 필드입니다",
    minLength : {
      value : 6,
      message : "최소 6자 입니다."
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input 
          type="email"
          placeholder='E-mail'
          {...register("email",userEmail)}  //userEmail이라는 객체 생성해서 인자값에 넣어줌
        />
        {errors?.email &&
            <div>
              <span className={styles.form_error}>
                {errors.email.message}
              </span>
            </div>
        }
      </div>

      <div>
        <input 
          type="password"
          placeholder='password'
          {...register("password",userPassword)}
        />
      </div>
      {errors?.password &&
            <div>
              <span className={styles.form_error}>
                {errors.password.message}
              </span>
            </div>
        }
      <button type='submit'>{title}</button>
      {firebaseError && (
        <span className={styles.form_error}>{firebaseError}</span>
      )}
      
    </form>
  )
}

export default Form