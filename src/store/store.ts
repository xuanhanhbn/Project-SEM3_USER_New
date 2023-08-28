import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { history } from "utils";
import { all } from "redux-saga/effects";

// LOGIN
import loginReducer from "pages/auth/components/login/loginSlice";
import loginSaga from "pages/auth/components/login/loginSaga";

// ABOUT
import aboutReducer from "pages/about/aboutSlice";
import aboutSaga from "pages/about/aboutSaga";

// FORGOTPASSWORD
import forgotPasswordReducer from "pages/auth/components/forgotpassword/forgotPasswordSlice";
import forgotPasswordSaga from "pages/auth/components/forgotpassword/forgotPasswordSaga";

//CAUSES
import causesReducer from "pages/causes/causesSlice";
import causesSaga from "pages/causes/causesSaga";

// REGISTER
import registerReducer from "pages/auth/components/signup/registerSlice";
import registerSaga from "pages/auth/components/signup/registerSaga";

// CHANGEPASSWORD
import changePasswordReducer from "pages/auth/components/changepassword/changePasswordSlice";
import changePasswordSaga from "pages/auth/components/changepassword/changePasswordSaga";

//CONTACT
import contactReducer from "pages/contact/contactSlice";
import contactSaga from "pages/contact/contactSaga";

//PARTNER
import partnerReducer from "pages/ourpartner/partnerSlice";
import partnerSaga from "pages/ourpartner/partnerSaga";

const rootReducer = combineReducers({
  router: connectRouter(history),
  login: loginReducer,
  about: aboutReducer,
  forgotPassword: forgotPasswordReducer,
  causes: causesReducer,
  register: registerReducer,
  changePassword: changePasswordReducer,
  contact: contactReducer,
  partner: partnerReducer,
});
function* rootSaga() {
  yield all([
    loginSaga(),
    aboutSaga(),
    forgotPasswordSaga(),
    causesSaga(),
    registerSaga(),
    changePasswordSaga(),
    contactSaga(),
    partnerSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga);

export { default as Actions } from "./actions";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
