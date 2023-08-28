import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { responseAboutList, responseDataAboutList } from './type';

export interface AboutState {
  loading: boolean;
  list: responseAboutList<responseDataAboutList>[];
}

const initialState: AboutState = {
  loading: false,
  list: [],
};

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    getListAbout(state) {
      state.loading = true;
    },
    getListAboutSuccess(state, action) {
      state.loading = false;
      state.list = action.payload.data || [];
    },
    getListAboutFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const aboutActions = aboutSlice.actions;

// Selectors
export const selectCityList = (state: RootState) => state.about

// export const selectCityMap = createSelector(selectCityList, (aboutList) =>
//   aboutList.reduce((map: { [key: string]: City }, city) => {
//     map[city.code] = city;
//     return map;
//   }, {})
// );

// export const selectCityOptions = createSelector(selectCityList, (cityList) =>
//   cityList.map((city) => ({
//     label: city.name,
//     value: city.code,
//   }))
// );

// Reducer
const aboutReducer = aboutSlice.reducer;
export default aboutReducer;
