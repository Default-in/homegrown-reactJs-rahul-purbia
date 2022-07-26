import React, { useRef } from 'react'

const MyButton = ({ label, counter }) => {
    console.log('rendered-child', counter)
    const renderCount = useRef(0);

    return (
        // <div className='child-render-count'>Child-render-count {renderCount.current++}</div>
        <div>{label}</div>
    )
}
const shouldNotRender = () => true // prevCounter !== nextCounter
// const bailOutFn = ({ counter: prevCounter }, { counter: nextCounter }) => prevCounter !== nextCounter

export default React.memo(MyButton, shouldNotRender);