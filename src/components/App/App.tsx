import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Appstyled from "./AppStyled";
import HomePage from "../../pages/HomePage/HomePage";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <Appstyled>
      {uiState.isLoading && <Loading />}
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Appstyled>
  );
};

export default App;
