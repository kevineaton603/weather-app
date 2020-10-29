import { useCallback, useEffect, useState } from "react";

interface IUseGeoLocationConfig {
  options?: PositionOptions;
}

const useGeoLocation = ({ options }: IUseGeoLocationConfig) => {
  const [watchId, setWatchId] = useState<number>(0);
  const [position, setPosition] = useState<Position>();
  const [positionError, setPositionError] = useState<PositionError>();

  const onSuccess = useCallback(
    (p: Position) => {
      if (
        p.coords.latitude.toFixed(2) !== position?.coords.latitude.toFixed(2) &&
        p.coords.longitude.toFixed(2) !== position?.coords.longitude.toFixed(2)
      ) {
        setPosition(p);
      }
    },
    [position?.coords.latitude, position?.coords.longitude]
  );

  const onFailure = useCallback((pe: PositionError) => {
    setPositionError(pe);
  }, []);

  useEffect(() => {
    console.log(options, watchId);
    if ("geolocation" in navigator && watchId === 0) {
      setWatchId(
        navigator.geolocation.watchPosition(onSuccess, onFailure, options)
      );
    }
    return () => {
      return navigator.geolocation.clearWatch(watchId);
    };
  }, [onFailure, onSuccess, options, watchId]);

  return {
    position,
    positionError,
  };
};

export default useGeoLocation;
