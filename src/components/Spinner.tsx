import React from 'react'
import { Oval } from 'react-loader-spinner'
type Props = {}

const Spinner = (props: Props) => {
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      color="#2563eb"
      secondaryColor="#f0f0f0"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  )
}

export default Spinner