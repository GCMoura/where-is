import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Game from './pages/Game/Game'
import Ranking from './pages/Ranking/Ranking'

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/game/*" component={Game} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes