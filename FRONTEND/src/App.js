import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom/cjs/react-router-dom";

import Users from "./user/pages/users";
import NewPlace from "./places/pages/new-place";
import MainNavigation from "./shared/components/Navigation/main-navigation";
import UpdatePlace from "./places/pages/update-place";
import UserPlaces from "./places/pages/user-places";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route path="/places/:placeId" exact>
            <UpdatePlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
