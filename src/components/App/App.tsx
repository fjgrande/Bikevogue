import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Appstyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <Appstyled>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </Appstyled>
  );
};

export default App;
