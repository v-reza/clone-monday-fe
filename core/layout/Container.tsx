import React, { PropsWithChildren } from 'react'

const Container = (props: PropsWithChildren) => {
  return (
    <div className='pl-20'>
      {props.children}
    </div>
  )
}

export default Container