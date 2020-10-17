import React from "react"
import { useCountActions } from "providers/CountProvider"

function Counter() {
  const { increment } = useCountActions()

  console.log("<Counter /> rendered")

  return <button onClick={increment}>Increment count</button>
}

export default Counter
