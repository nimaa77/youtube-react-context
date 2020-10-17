import React from "react"
import { Counter, CountDisplay, HelloWorld } from "components"

function HomePage() {
  console.log("<HomePage /> rendered")

  return (
    <div>
      <Counter />
      <CountDisplay />
    </div>
  )
}

export default HomePage
