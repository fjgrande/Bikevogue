import { useState } from "react";
import { BikesData } from "../../store/features/bikes/types";
import Button from "../Button/Button";
import BikeFormStyled from "./BikeFormStyled";

interface FormProps {
  onSubmit: (bikeData: BikesData) => void;
}

const BikeForm = ({ onSubmit }: FormProps): React.ReactElement => {
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

  const [bikeData, setBikeData] = useState(initialBikeFormState);

  const onChangeForm = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setBikeData({
      ...bikeData,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    onSubmit(bikeData);
  };

  const disabledButton =
    !bikeData.brand ||
    !bikeData.component ||
    !bikeData.image ||
    !bikeData.material ||
    !bikeData.modality ||
    !bikeData.model ||
    !bikeData.price ||
    !bikeData.size;

  return (
    <BikeFormStyled
      className="form"
      autoComplete="off"
      onSubmit={handleOnSubmit}
    >
      <div className="form__container">
        <label className="form__label" htmlFor="model">
          model
        </label>
        <input
          className="form__input"
          type="text"
          id="model"
          value={bikeData.model}
          onChange={onChangeForm}
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
          onChange={onChangeForm}
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
          onChange={onChangeForm}
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
          onChange={onChangeForm}
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
          onChange={onChangeForm}
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
          onChange={onChangeForm}
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
          onChange={onChangeForm}
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
          onChange={onChangeForm}
          required
        />
        <Button text="add" disabled={disabledButton} />
      </div>
    </BikeFormStyled>
  );
};

export default BikeForm;
