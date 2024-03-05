import { useState } from 'react'
import { IconEyeClose, IconEyeOpen, IconMail, IconPassword, IconUser } from '../assets/Icons'

export const InputBox = ({ name, type, id, value, placeholder, icon }) => {
  const [passwordVisible, setpasswordVisible] = useState(false)

  const handlePasswordVisible = () => {
    setpasswordVisible(!passwordVisible)
  }
  return (
    <div className="relative w-full mb-4">
      <input className='focus-visible:outline-slate-300 w-full rounded-md focus-visible:outline-1 p-4 font-Lato placeholder:font-Lato bg-gray-200 px-10 placeholder:text-gray-500' id={id} name={name} type={passwordVisible ? 'text' : type} placeholder={placeholder} defaultValue={value} />
      {icon === 'user' && <IconUser cssInfo='absolute top-4 left-3 w-6 h-6 pointer-events-none p-1 fill-[#7D7C7C]' />}
      {icon === 'email' && <IconMail cssInfo='absolute top-4 left-3 w-6 h-6 pointer-events-none p-1 fill-[#7D7C7C]' />}
      {icon === 'password' && <IconPassword cssInfo='absolute top-4 left-3 w-6 h-6 pointer-events-none p-1 fill-[#7D7C7C]' />}
      {(icon === 'password' && !passwordVisible) && <IconEyeClose cssInfo='absolute top-4 right-3 w-7 h-7 cursor-pointer p-1 fill-[#7D7C7C] select-none' onHandleClick={handlePasswordVisible} />}
      {(icon === 'password' && passwordVisible) && <IconEyeOpen cssInfo='absolute top-4 right-3 w-7 h-7 cursor-pointer p-1 fill-[#7D7C7C] select-none' onHandleClick={handlePasswordVisible} />}
    </div>
  )
}
