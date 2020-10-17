import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { HomePage, CountPage } from "pages"
import { MainTemplate } from "templates"
import CountProvider from "providers/CountProvider"
import { Compose } from "components"

const providers = [CountProvider, BrowserRouter, MainTemplate]

function App() {
  return (
    <Compose components={providers}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/count" component={CountPage} />
      </Switch>
    </Compose>
  )
}

export default App
