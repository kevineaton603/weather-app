export interface IWeatherCondition {
  description: string;
  icon: string;
  id: number;
  main: string;
}

const create = (args: Partial<IWeatherCondition>): IWeatherCondition => {
  return {
    description: args.description ?? "",
    icon: args.icon ?? "",
    id: args.id ?? Number.MIN_SAFE_INTEGER,
    main: args.main ?? "",
  };
};

const WeatherCondition = {
  create,
};

export default WeatherCondition;
