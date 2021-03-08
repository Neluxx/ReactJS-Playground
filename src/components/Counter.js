import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

function Counter() {
  const [counter, setCounter] = useState(0)

  const decrease = () => {
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(0)
  }

  const increase = () => {
    setCounter(counter + 1)
  }

  return (
    <div className='text-center'>
      <br />
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <br />
      <ButtonGroup>
        <Button variant='danger' onClick={decrease}>
          Decrease
        </Button>
        <Button variant='warning' onClick={reset}>
          Reset
        </Button>
        <Button variant='success' onClick={increase}>
          Increase
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default Counter
