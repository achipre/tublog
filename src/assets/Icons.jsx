import React from 'react'

export const IconSearch = ({ cssInfo, onHandle }) => {
  return (
    <svg
      onClick={onHandle}
      className={cssInfo}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7D7C7C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

export const IconWrite = ({ cssInfo }) => {
  return (
    <svg className={cssInfo} width="800px" height="800px" viewBox="0 0 15 15">
      <path d="M2 0H13V0.5C13 2.14804 12.2748 3.62625 11.1259 4.63355L13.094 8.56355L8 14.6724V8.99414H7V14.6715L1.90674 8.5636L3.87393 4.63343C2.72515 3.62613 2 2.14797 2 0.5V0Z" />
    </svg>
  )
}

export const IconUser = ({ cssInfo }) => {
  return (
    <svg className={cssInfo} width="800px" height="800px" viewBox="0 0 24 24" >
      <path d="M21,20a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2,6,6,0,0,1,6-6h6A6,6,0,0,1,21,20Zm-9-8A5,5,0,1,0,7,7,5,5,0,0,0,12,12Z">
      </path>
    </svg>
  )
}
export const IconMail = ({ cssInfo }) => {
  return (
    <svg className={cssInfo} width="800px" height="800px" viewBox="0 0 36 36">
      <path d="M32.33,6a2,2,0,0,0-.41,0h-28a2,2,0,0,0-.53.08L17.84,20.47Z">
      </path>
      <path d="M33.81,7.39,19.25,21.89a2,2,0,0,1-2.82,0L2,7.5a2,2,0,0,0-.07.5V28a2,2,0,0,0,2,2h28a2,2,0,0,0,2-2V8A2,2,0,0,0,33.81,7.39ZM5.3,28H3.91V26.57l7.27-7.21,1.41,1.41Zm26.61,0H30.51l-7.29-7.23,1.41-1.41,7.27,7.21Z">
      </path>
    <rect x="0" y="0" width="36" height="36" fillOpacity="0"/>
    </svg>
  )
}
export const IconPassword = ({ cssInfo }) => {
  return (
    <svg className={cssInfo} width="800px" height="800px" viewBox="0 0 256 256" >
      <path d="M160.00244,16A80.05817,80.05817,0,0,0,83.91357,120.77539L26.34521,178.34277A8.00235,8.00235,0,0,0,24.00244,184v40a8.00039,8.00039,0,0,0,8,8h40a8.00039,8.00039,0,0,0,8-8V208h16a8.00039,8.00039,0,0,0,8-8V184h16a8.00235,8.00235,0,0,0,5.65723-2.34277l9.56738-9.56836A80.00922,80.00922,0,1,0,160.00244,16ZM180,92a16,16,0,1,1,16-16A16.00016,16.00016,0,0,1,180,92Z"/>
    </svg>
  )
}
export const IconEyeClose = ({ cssInfo, onHandleClick }) => {
  return (
    <svg onClick={onHandleClick} className={cssInfo} width="800px" height="800px" viewBox="0 0 256 256">
      <path d="M234.35254,160.8125a12.00024,12.00024,0,1,1-20.78516,12l-16.2771-28.19189a127.01451,127.01451,0,0,1-29.36694,13.47021l5.18994,29.43164a11.99973,11.99973,0,1,1-23.63476,4.168l-5.053-28.6543a140.4304,140.4304,0,0,1-32.94116-.01074l-5.05176,28.65234a11.99973,11.99973,0,0,1-23.63477-4.168l5.19165-29.44483A127.0154,127.0154,0,0,1,58.665,144.59326L42.28125,172.9707a12.00024,12.00024,0,0,1-20.78516-12l17.85523-30.92578A153.16947,153.16947,0,0,1,22.665,112.416,11.99959,11.99959,0,0,1,41.333,97.334C57.05859,116.79785,84.8584,140,128,140c43.14063,0,70.94043-23.20215,86.666-42.666a11.99959,11.99959,0,1,1,18.668,15.082,153.08978,153.08978,0,0,1-16.72509,17.66406Z"/>
    </svg>
  )
}
export const IconEyeOpen = ({ cssInfo, onHandleClick }) => {
  return (
    <svg onClick={onHandleClick} className={cssInfo} width="800px" height="800px" viewBox="0 0 36 36">
      <path d="M33.62,17.53c-3.37-6.23-9.28-10-15.82-10S5.34,11.3,2,17.53L1.72,18l.26.48c3.37,6.23,9.28,10,15.82,10s12.46-3.72,15.82-10l.26-.48ZM17.8,26.43C12.17,26.43,7,23.29,4,18c3-5.29,8.17-8.43,13.8-8.43S28.54,12.72,31.59,18C28.54,23.29,23.42,26.43,17.8,26.43Z" className="clr-i-solid clr-i-solid-path-1"></path><circle cx="18.09" cy="18.03" r="6.86" className="clr-i-solid clr-i-solid-path-2"></circle>
      <rect x="0" y="0" width="36" height="36" fillOpacity="0"/>
    </svg>
  )
}
export const IconGoogle = ({ cssInfo }) => {
  return (
    <svg className={cssInfo} width="800px" height="800px" viewBox="0 0 24 24">
      <path d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36003 19.27 5.00003 16.25 5.00003 12C5.00003 7.9 8.20003 4.73 12.2 4.73C15.29 4.73 17.1 6.7 17.1 6.7L19 4.72C19 4.72 16.56 2 12.1 2C6.42003 2 2.03003 6.8 2.03003 12C2.03003 17.05 6.16003 22 12.25 22C17.6 22 21.5 18.33 21.5 12.91C21.5 11.76 21.35 11.1 21.35 11.1Z"/>
    </svg>
  )
}
