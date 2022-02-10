import React from "react"
import {Route,Link, Switch} from "react-router-dom"
import Main from "./Main"
import JunYeoung from "./Junyeong"
import Inkyu from "./Inkyu"
import SoNa from "./SoNa"
import KangHyn from "./KangHyn"
import NotFound from './NotFound';


const LayOut = () => {
    return(
        <Switch>
      <Route path="/" exact>
        <Main></Main>
      </Route>
      <Route path="/junyeoung">
        <JunYeoung></JunYeoung>
      </Route>
      <Route path="/Inkyu">
        <Inkyu></Inkyu>
      </Route>
      <Route path="/SoNa">
      <SoNa></SoNa>
      </Route>
      <Route path="/KangHyn">
        <KangHyn></KangHyn>
      </Route>
      <Route>
        <NotFound></NotFound>
      </Route>
      </Switch>
    );
    
}

export default LayOut;