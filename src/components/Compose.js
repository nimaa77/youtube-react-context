import React from "react"

function Compose({ components, children }) {
  return (
    <>
      {components.reverse().reduce((acc, curr) => {
        const [Provider, props] = Array.isArray(curr)
          ? [curr[0], curr[1]]
          : [curr, {}]
        return <Provider {...props}>{acc}</Provider>
      }, children)}
    </>
  )
}

export default Compose
