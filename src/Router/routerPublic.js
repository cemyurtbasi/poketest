import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Public, PokemonDetail, Pokemons } from "./routerComponents";
import LayoutPublic from "../Shared/layout/layoutPublic";
import Loading from "../Shared/partnerComponents/loading/loading";
import PageNotFound from "../Shared/partnerComponents/messages/pageNotFound";

const RouterPublic = () => {
  return (
    <LayoutPublic>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={`/pokemon/:name`}  element={<PokemonDetail/>} />
          <Route path={`/pokemon`} exact element={<Pokemons/>} />
          <Route path={`/`} exact element={<Public/>} />
          <Route element={<PageNotFound pageInnerNotFound={true} />} />
        </Routes>
      </Suspense>
    </LayoutPublic>
  );
};

export default RouterPublic;
