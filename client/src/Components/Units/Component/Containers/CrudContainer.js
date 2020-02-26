import React, { useState } from "react";
import {
  ButtonsContainer,
  CrudButton
} from "../../../Buttons/ButtonsContainer";
export default function CrudContainer({add}) {
  const [Add, setAdd] = useState(true);
  const Data = () => {
    if (Add) {
      return (
        <ButtonsContainer
          containerStyle={CrudButton.Container}
          buttonStyle={CrudButton}
          Plus={{
            onClick: () => add(!Add),
            state: "active"
          }}
        />
      );
    } else {
      return (
        <div style={{ color: "white" }}>
          <div>Контейнер</div>
          <div onClick={() => setAdd(!Add)}>Отмена</div>
        </div>
      );
    }
  };
  return (
    <ButtonsContainer
      containerStyle={CrudButton.Container}
      buttonStyle={CrudButton}
      Plus={{
        onClick: () => setAdd(!Add),
        state: "active"
      }}
    />
  );
}
