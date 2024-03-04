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
