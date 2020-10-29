import React, { useContext } from "react";
import UnitContext, { Unit } from "../provider/unit-provider";

const UnitSwitchButton = () => {
  const { unit, setUnit } = useContext(UnitContext);
  const toggle = () => {
    switch (unit) {
      case Unit.FAHRENHEIT:
        setUnit(Unit.CELSIUS);
        break;
      case Unit.CELSIUS:
        setUnit(Unit.FAHRENHEIT);
        break;
    }
  };
  return <button onClick={toggle}>Switch Units</button>;
};

export default UnitSwitchButton;
