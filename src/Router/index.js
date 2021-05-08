import React, { useEffect, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "../Shared/partnerComponents/messages/pageNotFound";
import Loading from "../Shared/partnerComponents/loading/loading";
import { RouterPublic } from "./routerComponents";

const Router = () => {
  // const [loading, setLoading] = useState(false);
  // const [serviceCallError, setServiceCallError] = useState(false);

  useEffect(() => {
    //Usually we fetch for initial site datas here. and if all good setLoading(false)

    //On any error, errorControl()
  }, []);

  // const errorControl = useCallback(() => {
  //   setServiceCallError(true);
  //   setLoading(false);
  // });

  if (false) {
    return <Loading />;
  } else if (false) {
    return (
      <PageNotFound
        title="lbl500Title"
        description="lbl500Description"
        msgCode="500"
        logoUrl="/"
      />
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" component={RouterPublic} />
      </Switch>
    </Suspense>
  );
};

export default Router;
