import * as t from '../types';

export const setFarms = (farms) => ({
  type: t.SET_FARMS,
  payload: farms,
});

export const addFarm = (farm) => ({
  type: t.ADD_FARM,
  payload: farm,
});
