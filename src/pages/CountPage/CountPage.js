import React from "react"
import { useCountState } from "providers/CountProvider"

function CountPage() {
  const count = useCountState()
  return <h1>you clicked {count} times</h1>
}

export default CountPage
