import Button from "../Button/Button";
import BikeFormStyled from "./BikeFormStyled";

const BikeForm = (): React.ReactElement => {
  return (
    <BikeFormStyled className="form" autoComplete="off">
      <div className="form__container">
        <label className="form__label" htmlFor="model">
          model
        </label>
        <input className="form__input" type="text" id="model" required />
        <label className="form__label" htmlFor="image">
          picture URL
        </label>
        <input className="form__input" type="url" id="image" required />
        <label className="form__label" htmlFor="brand">
          brand
        </label>
        <input className="form__input" type="text" id="brand" required />
        <label className="form__label" htmlFor="modality">
          modality
        </label>
        <input className="form__input" type="text" id="modality" required />
        <label className="form__label" htmlFor="material">
          material
        </label>
        <input className="form__input" type="text" id="material" required />
        <label className="form__label" htmlFor="component">
          component
        </label>
        <input className="form__input" type="text" id="component" required />
        <label className="form__label" htmlFor="size">
          size (S,M,L, XL)
        </label>
        <input className="form__input" type="text" id="size" required />
        <label className="form__label" htmlFor="price">
          price (€)
        </label>
        <input className="form__input" type="number" id="price" required />
        <Button text="create" />
      </div>
    </BikeFormStyled>
  );
};

export default BikeForm;
