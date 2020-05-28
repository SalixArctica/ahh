import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import PrivateRoute from "../components/privateRoute"
import Articles from "../components/articles"
import Login from "../components/login"
import articleEditor from "../components/articleEditor"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/admin/articles" component={Articles} />
      <PrivateRoute path="/admin/editor" component={articleEditor} />
      <Login path="/admin/login" />
    </Router>
  </Layout>
)
export default App