import React, { useEffect, useState } from 'react';
import moment from 'moment';
import useWeatherStore from '../../store/use-weather-store';
import { IFiveDayForecastResponseListItem } from '../../data-source/weather';
import { IDictionary } from '../../models/dictionary';
import DayForecastCard from './DayForecastCard';

const FiveDayForecast = () => {
  const fiveDayForecast = useWeatherStore((state) => state.fiveDayForecast);
  const [forecastByDay, setForecastByDay] = useState<IDictionary>({});

  useEffect(() => {
    if (fiveDayForecast !== undefined) {
      setForecastByDay(
        fiveDayForecast?.list.reduce((acc, item) => {
          const date = moment.unix(item.dt).format('MM-DD-YYYY');
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          return { ...acc, [date]: acc[date] ? [...acc[date], item] : [item] };
        }, {} as IDictionary),
      );
    }
  }, [fiveDayForecast]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
      }}
    >
      {Object.keys(forecastByDay).map((day) => (
        <DayForecastCard
          key={day}
          forecasts={forecastByDay[day] as IFiveDayForecastResponseListItem[]}
        />
      ))}
    </div>
  );
};

export default FiveDayForecast;
