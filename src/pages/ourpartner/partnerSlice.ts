import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { responseDataPartnersList,responsePartnersList } from './type';

export interface PartnerState {
  loading: boolean;
  list: responsePartnersList<responseDataPartnersList>[];
}

const initialState: PartnerState = {
  loading: false,
  list: [],
};

const partnerSlice = createSlice({
  name: 'partner',
  initialState,
  reducers: {
    getListPartner(state) {
      state.loading = true;
    },
    getListPartnerSuccess(state, action) {
      state.loading = false;
      state.list = action.payload.data || [];
    },
    getListPartnerFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const partnerActions = partnerSlice.actions;

// Selectors
export const selectPartnerList = (state: RootState) => state.partner

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
const partnerReducer = partnerSlice.reducer;
export default partnerReducer;
