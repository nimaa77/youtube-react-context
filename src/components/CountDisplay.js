import React from "react"
import { useCountState } from "providers/CountProvider"

function CountDisplay() {
  const count = useCountState()
  console.log("<CountDisplay /> rendered")

  return <div>The current count is {count}</div>
}

export default CountDisplay
