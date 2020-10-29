import React, {
  FunctionComponent,
  useContext,
} from 'react';
import UnitContext from '../../provider/unit-provider';
import { IFiveDayForecastResponseListItem } from '../../data-source/weather';

const DayForecastCard: FunctionComponent<{
  forecasts: IFiveDayForecastResponseListItem[];
}> = ({ forecasts }) => {
  const { convert } = useContext(UnitContext);
  const [forecast] = forecasts;
  const [weather] = forecast.weather;
  return (
    <div
      style={{
        height: '275px',
        width: '250px',
        margin: '5px',
        backgroundColor: 'whitesmoke',
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      }}
    >
      <div>{forecast.dt_txt}</div>
      <div>{weather.main}</div>
      <div>{convert(forecast?.main?.temp).toFixed(2)}</div>
      <div>{convert(forecast?.main?.temp_min).toFixed(2)}</div>
      <div>{convert(forecast?.main?.temp_max).toFixed(2)}</div>
    </div>
  );
};

export default DayForecastCard;
