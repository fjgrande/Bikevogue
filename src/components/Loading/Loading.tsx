import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <div className="loading">
        <span className="loader" />
        Loading...
      </div>
    </LoadingStyled>
  );
};

export default Loading;
