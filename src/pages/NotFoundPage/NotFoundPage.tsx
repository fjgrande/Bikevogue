import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled>
      <div className="notFound__info">
        <img
          className="notFound__image"
          src="/images/notFoundPage.webp"
          alt="Page Not Found"
          width="260"
          height="260"
        />
        <span className="notFound__details">404</span>
        <h1 className="notFound__details">Not found...</h1>
        <span className="notFound__detail">Please go back to homepage</span>
      </div>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
