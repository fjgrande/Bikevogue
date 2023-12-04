import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <div className="loading">
        <span className="loader"></span>
      </div>
      <div className="loading__text">
        <span>Loading...</span>
      </div>
    </LoadingStyled>
  );
};

export default Loading;
