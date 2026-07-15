import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Ethics from "./pages/Ethics";
import { AllRoutes } from "./AllRoutes";
import Collection from "./pages/Collection";
import Processing from "./pages/Processing";
import Results from "./pages/Results";
import Introduction from "./pages/Introduction";

function App() {
  // non-breaking space (avoid line breaks)
  const nbsp = "\u00A0";
  return (
    <main className="app">
      <div className="navbar">
        <NavLink className={"navlink"} to={AllRoutes.introduction}>
          Introduction
        </NavLink>
        <NavLink className={"navlink"} to={AllRoutes.ethics}>
          Ethics
        </NavLink>
        <NavLink className={"navlink"} to={AllRoutes.collection}>
          Data{nbsp}Collection
        </NavLink>
        <NavLink className={"navlink"} to={AllRoutes.processing}>
          Data{nbsp}Processing
        </NavLink>
        <NavLink className={"navlink"} to={AllRoutes.results}>
          Results
        </NavLink>
      </div>
      <div className="routed-pages">
        <Routes>
          <Route
            path="*"
            element={<Navigate to={AllRoutes.introduction} replace />}
          />
          <Route path={AllRoutes.introduction} element={<Introduction />} />
          <Route path={AllRoutes.ethics} element={<Ethics />} />
          <Route path={AllRoutes.collection} element={<Collection />} />
          <Route path={AllRoutes.processing} element={<Processing />} />
          <Route path={AllRoutes.results} element={<Results />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
