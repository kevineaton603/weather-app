export interface ITemperature {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

const create = (args: Partial<ITemperature>): ITemperature => {
  return {
    feels_like: args.feels_like ?? Number.MIN_SAFE_INTEGER,
    humidity: args.humidity ?? Number.MIN_SAFE_INTEGER,
    pressure: args.pressure ?? Number.MIN_SAFE_INTEGER,
    temp: args.temp ?? Number.MIN_SAFE_INTEGER,
    temp_max: args.temp_max ?? Number.MIN_SAFE_INTEGER,
    temp_min: args.temp_min ?? Number.MIN_SAFE_INTEGER,
  };
};

const Temperature = {
  create,
};

export default Temperature;
