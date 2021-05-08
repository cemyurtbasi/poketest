import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Public,PokemonDetail,Pokemons } from "./routerComponents";
import LayoutPublic from "../Shared/layout/layoutPublic";
import Loading from "../Shared/partnerComponents/loading/loading";
import PageNotFound from "../Shared/partnerComponents/messages/pageNotFound";

const RouterPublic = ({ match }) => {
  return (
    <LayoutPublic>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path={`${match.url}pokemon/:name`}  component={PokemonDetail} />
          <Route path={`${match.url}pokemon`} exact component={Pokemons} />
          <Route path={`${match.url}`} exact component={Public} />
          <Route component={() => <PageNotFound pageInnerNotFound={true} />} />
        </Switch>
      </Suspense>
    </LayoutPublic>
  );
};

export default RouterPublic;
