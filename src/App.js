import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import ProdDet from './components/ProdDet';
import {Routes, Route, /*Link,*/ NavLink /*useRoutes*/} from "react-router-dom";
import NotFound from './components/NotFound';

function App() {

  // let routeElements = useRoutes([
  //   {
  //       path: "/",
  //       children: [
  //           {
  //               index: true,
  //               element: <Home />
  //           },
  //           {
  //               path: "/about",
  //               element: <About />
  //           },
  //           {
  //               path: "/products",
  //               element: <Products />,
  //               children: [
  //                   {
  //                       path: ":id",
  //                       element: <ProdDet />
  //                   }
  //               ]
  //           },
  //           {
  //               path: "*",
  //               element: <NotFound />
  //           }
  //       ]
  //   }
  // ]);

  const styles = {
    textDecoration: "none",
    marginRight: "2rem",
    fontSize: "18px",
  }
  return (
    <div className="App">
      <ul>
        <li><NavLink to="/" style={styles}>Home</NavLink></li>
        <li><NavLink to="/about" style={styles}>About</NavLink></li>
        <li><NavLink to="/products" style={styles}>Products</NavLink></li>
      </ul>
      <hr />
      <Routes>
        <Route path='/'>
          <Route index = {true} element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/products' element={<Products />}>
            <Route path=':id' element={<ProdDet />}/>
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
      {/* {routeElements} */}
    </div>
  );
}

export default App;
