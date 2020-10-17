import React from "react"

const CountContext = React.createContext()
const CountContextSetState = React.createContext()

function CountProvider({ children }) {
  const [count, setCount] = React.useState(0)

  return (
    <CountContext.Provider value={count}>
      <CountContextSetState.Provider value={setCount}>
        {children}
      </CountContextSetState.Provider>
    </CountContext.Provider>
  )
}

function useCountState() {
  const count = React.useContext(CountContext)

  if (count === undefined) {
    throw new Error(
      "render <CountProvider /> at top of the tree"
    )
  }

  return count
}

function useCountSetState() {
  const setCount = React.useContext(CountContextSetState)

  if (setCount === undefined) {
    throw new Error(
      "render <CountProvider /> at top of the tree"
    )
  }

  return setCount
}

function useCountActions() {
  const setCount = useCountSetState()

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  return { increment }
}

export { useCountState, useCountSetState, useCountActions }
export default CountProvider
