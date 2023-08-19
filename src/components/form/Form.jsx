import React from 'react'
import styles from './Form.module.scss'
import { useForm } from 'react-hook-form'

const Form = ({title}) => {

  const { register, handleSubmit, formState: {errors}, reset } = useForm({ mode : 'onChange'})

  const onSubmit = ({email, password}) => {
    console.log(email,password);
  }

  const userEmail = {
    required : "필수 필드입니다"
  }

  const userPassword = {
    required : "필수 필드입니다",
    minLength : {
      value : 4,
      message : "최소 4자 입니다."
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
      <span className={styles.form_error}></span>
    </form>
  )
}

export default Form