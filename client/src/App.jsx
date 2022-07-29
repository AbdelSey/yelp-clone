import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, UpdatePage, RestaurantDetailPage, Page404 } from "./routes";
import { Header, Footer } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/restaurants/:uuid/update"
            element={<UpdatePage />}
          />
          <Route
            exact
            path="/restaurants/:uuid"
            element={<RestaurantDetailPage />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer limit={1} />
    </>
  );
}

export default App;
