import { useState } from "react";
import { BikesData } from "../../store/features/bikes/types";
import Button from "../Button/Button";
import BikeFormStyled from "./BikeFormStyled";

const BikeForm = (): React.ReactElement => {
  const initialBikeFormState: BikesData = {
    model: "",
    image: "",
    brand: "",
    modality: "",
    material: "",
    component: "",
    size: "",
    price: 0,
  };

  const [bikeData] = useState(initialBikeFormState);

  return (
    <BikeFormStyled className="form" autoComplete="off">
      <div className="form__container">
        <label className="form__label" htmlFor="model">
          model
        </label>
        <input
          className="form__input"
          type="text"
          id="model"
          value={bikeData.model}
          required
        />
        <label className="form__label" htmlFor="image">
          picture URL
        </label>
        <input
          className="form__input"
          type="url"
          id="image"
          value={bikeData.image}
          required
        />
        <label className="form__label" htmlFor="brand">
          brand
        </label>
        <input
          className="form__input"
          type="text"
          id="brand"
          value={bikeData.brand}
          required
        />
        <label className="form__label" htmlFor="modality">
          modality
        </label>
        <input
          className="form__input"
          type="text"
          id="modality"
          value={bikeData.modality}
          required
        />
        <label className="form__label" htmlFor="material">
          material
        </label>
        <input
          className="form__input"
          type="text"
          id="material"
          value={bikeData.material}
          required
        />
        <label className="form__label" htmlFor="component">
          component
        </label>
        <input
          className="form__input"
          type="text"
          id="component"
          value={bikeData.component}
          required
        />
        <label className="form__label" htmlFor="size">
          size (S,M,L, XL)
        </label>
        <input
          className="form__input"
          type="text"
          id="size"
          value={bikeData.size}
          required
        />
        <label className="form__label" htmlFor="price">
          price (€)
        </label>
        <input
          className="form__input"
          type="number"
          id="price"
          value={bikeData.price}
          required
        />
        <Button text="add" />
      </div>
    </BikeFormStyled>
  );
};

export default BikeForm;
