import React from 'react'

const Input = React.forwardRef((  ref, ...prop) => {

    return <Input ref={ref} placeholder = "Type here..."/>
})

export default Input;