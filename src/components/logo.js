import React from "react"
import { logo } from "./logo.module.scss"

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 48"
      className={logo}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M39.47 12.54a19.34 19.34 0 1 0 3.5 7.65.75.75 0 0 1 1.46-.3 20.84 20.84 0 1 1-3.77-8.25.75.75 0 0 1-1.2.9ZM24.05 32.92a7.83 7.83 0 0 1-5.88-2.56 9.12 9.12 0 0 1-1.75-2.79 9.15 9.15 0 0 1-.62-3.38 8.64 8.64 0 0 1 5.2-8.03 7.91 7.91 0 0 1 9.65 2.82l-2.61 1.4a5.17 5.17 0 0 0-3.96-1.95c-.7 0-1.38.14-2.03.43-.64.29-1.21.7-1.72 1.22a6.06 6.06 0 0 0-1.6 4.16 6.02 6.02 0 0 0 1.57 4.09c.5.52 1.07.93 1.71 1.22A4.97 4.97 0 0 0 28.03 28c.33-.42.61-.9.84-1.44H25.8v-2.55h6.5a8.79 8.79 0 0 1-5 8.22c-1 .46-2.09.7-3.26.7Zm17.67-17.34a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default Logo