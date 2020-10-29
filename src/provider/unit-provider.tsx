import React from "react";
import { createContext, FunctionComponent, useState } from "react";
import { KelvinsToCelsius, KelvinsToFahrenheit } from "../lib";

export enum Unit {
  CELSIUS = "Celsius",
  FAHRENHEIT = "Fahrenheit",
}

interface IUnitContext {
  unit: Unit;
  convert: (temperature: number) => number;
  setUnit: (unit: Unit) => void;
}

const UnitContext = createContext<IUnitContext>({
  unit: Unit.FAHRENHEIT,
  convert: () => Number.MIN_SAFE_INTEGER,
  setUnit: () => {},
});

const UnitProvider: FunctionComponent<{ initialUnit?: Unit }> = ({
  children,
  initialUnit = Unit.FAHRENHEIT,
}) => {
  const [unit, setUnit] = useState(initialUnit);
  const convert = (temperature: number) => {
    switch (unit) {
      case Unit.FAHRENHEIT:
        return KelvinsToFahrenheit(temperature);
      case Unit.CELSIUS:
        return KelvinsToCelsius(temperature);
    }
  };
  return (
    <UnitContext.Provider
      value={{
        unit,
        convert,
        setUnit,
      }}
    >
      {children}
    </UnitContext.Provider>
  );
};

export default UnitContext;
export { UnitProvider };
