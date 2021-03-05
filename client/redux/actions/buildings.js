import * as t from '../types';

export const setBuildings = (buildings) => ({
  type: t.SET_BUILDINGS,
  payload: buildings,
});

export const addBuilding = (building) => ({
  type: t.ADD_BUILDING,
  payload: {
    ...building,
    units: [],
  },
});

export const addUnit = (unit) => ({
  type: t.ADD_UNIT,
  payload: unit,
});

export const feedUnit = (data) => ({
  type: t.FEED_UNIT,
  payload: {
    ...data,
  },
});
