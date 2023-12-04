import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <div className="loading">
        <div className="loader" />
        <div className="loading__text">
          <span>Loading...</span>
        </div>
      </div>
    </LoadingStyled>
  );
};

export default Loading;
