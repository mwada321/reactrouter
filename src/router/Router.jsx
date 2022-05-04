import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {Page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
// Switch・・・どのコンポーネントをレンダリングするか、出し分けを行う。
// Route・・・Rootにマッチしたものを表示する。
//         <Route path="/page1" rendar={() => <Page1 />} /> でも書ける
//          デフォルトで取得しているpropsでmatch:url を取得してもう/page1配下を明確にしている。
// exact (defaultはTrue)　完全一致したものを表示対象とする。つけていないとpage1,page2も対象となる。
// Page1にネストされたPageなどはPage1Routesに配列で分割
