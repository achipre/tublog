import { InputBox } from './InputBox'

export const UserAuthForm = ({ type }) => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex justify-center items-center">
      <form className="w-[80%] max-w-[400px]" action="">
        <h1 className="font-Arvo text-4xl capitalize text-center">{type === 'sign-in' ? 'Bienvenido' : 'Registrate'}</h1>
        {
          type === 'sign-in'
            ? <InputBox />
            : ''
        }

      </form>

    </section>
  )
}
