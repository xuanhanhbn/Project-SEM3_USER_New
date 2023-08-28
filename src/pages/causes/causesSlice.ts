import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { responseCausesList, responseDataCausesList } from './type';

export interface CausesState {
  loading: boolean;
  list: responseCausesList<responseDataCausesList>[];
}

const initialState: CausesState = {
  loading: false,
  list: [],
};

const causeSlice = createSlice({
  name: 'causes',
  initialState,
  reducers: {
    getListCauses(state) {
      state.loading = true;
    },
    getListCausesSuccess(state, action) {
      state.loading = false;
      state.list = action.payload.data || [];
    },
    getListCausesFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const causesActions = causeSlice.actions;

// Selectors
export const makeSelectCauses = (state: RootState) => state.causes


// Reducer
const causesReducer = causeSlice.reducer;
export default causesReducer;
