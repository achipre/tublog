import { Link } from 'react-router-dom'
import { IconGoogle } from '../assets/Icons'
import { InputBox } from './InputBox'
import { AnimationWrapper } from '../common/AnimationWrapper'

export const UserAuthForm = ({ type }) => {
  return (
    <AnimationWrapper>
      <section className="min-h-[calc(100vh-80px)] flex justify-center items-center">
        <form className="w-[80%] max-w-[400px]">
          <h1 className="font-Arvo text-4xl capitalize text-center mb-24">{type === 'sign-in' ? 'Bienvenido' : 'Registrate'}</h1>
          {
            type === 'sign-up'
              ? <InputBox name='fullname' type='text' placeholder='Nombre completo' icon='user' />
              : ''
          }
          <InputBox name='email' type='email' placeholder='Email' icon='email' />
          <InputBox name='password' type='password' placeholder='Contraseña' icon='password' />
          <button className='bg-gray-800 text-gray-200 rounded-full w-24 flex items-center justify-center font-Lato h-11 m-auto mt-14 capitalize'>
            {type.replace('-', ' ')}
          </button>
          <div className="relative flex my-10 gap-2 items-center">
            <hr className="w-1/2 border-gray-400" />
            <p className='text-gray-400'>OR</p>
            <hr className="w-1/2 border-gray-400" />
          </div>
          <button className='relative bg-gray-800 text-gray-200 rounded-full w-[80%] flex items-center justify-center gap-3 font-Lato h-11 m-auto mt-14 capitalize'>
            <IconGoogle cssInfo='top-[10px] left-3 w-6 h-6 pointer-events-none p-1 fill-gray-200'/>
            <p>Ingresa con Google</p>
          </button>
          {
            type === 'sign-in'
              ? <p className='font-Lato text-center mt-6'>¿No tienes cuenta? <Link to='/signup' className='underline underline-offset-4 decoration-gray-400 text-gray-500'>Registrate</Link></p>
              : <p className='font-Lato text-center mt-6'>Ya tengo cuenta <Link to='/signin' className='underline underline-offset-4 decoration-gray-400 text-gray-500'>Ingresa</Link></p>
          }

        </form>

      </section>
    </AnimationWrapper>

  )
}
