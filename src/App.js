import React from "react";
import { HashRouter, BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    // HashRouter는 url에 '/#/'링크가 포함, github page에서 사용하기에 유용하여 니꼬샘은 이것을 사용함
    // BrowserRouter는 HashRouter와 기능은 비슷하지만 '/#/'링크가 없다.
    <BrowserRouter>
      {/* link를 사용하고 있다면 router안에 위치시켜야함 */}
      <Navigation />
      {/* 첫번째는 렌더링할 스크린, 두번째는 무엇을 할 지 정해준다. */}
      <Route path="/movie_app/" exact={true} component={Home} />
      <Route path="/movie_app/about" component={About} />
      {/*<Route path="/home">
        <h1>Home</h1>
      </Route>
      <Route path="/home/instroduction">
        <h1>Instroduction</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>*/}
      <Route path="/movie/:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
