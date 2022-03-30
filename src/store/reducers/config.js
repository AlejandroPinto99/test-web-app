import { createSlice } from "@reduxjs/toolkit";

const dataRequest = { data: {}, status: undefined };

const initialState = {
  displayCreateStoreSuggestion: true,
  loginConfig: {
    email: "",
    rememberEmail: false,
  },
  displayHomeTutorial: true,
  displayTaxTutorial: true,
  displayBusinessTutorial: true,
  displayStoreTutorial: true,
  displayInitialTutorial: true,
  isPushTokenSet: false,
  isAdvancedInvoicingActive: false,
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    displayCreateStoreSuggestion(state, action) {
      state.displayCreateStoreSuggestion = action.payload;
    },
    saveLoginConfig(state, action) {
      state.loginConfig = {
        email: action.payload.email,
        rememberEmail: true,
      };
    },
    removeLoginConfig(state) {
      state.loginConfig = initialState.loginConfig;
    },
    displayTaxTutorial(state, action) {
      state.displayTaxTutorial = action.payload;
    },
    displayHomeTutorial(state, action) {
      state.displayHomeTutorial = action.payload;
    },
    displayBusinessTutorial(state, action) {
      state.displayBusinessTutorial = action.payload;
    },
    displayStoreTutorial(state, action) {
      state.displayStoreTutorial = action.payload;
    },
    displayInitialTutorial(state, action) {
      state.displayInitialTutorial = action.payload;
    },
    changeIsPushTokenSet(state, action) {
      state.isPushTokenSet = action.payload;
    },
    changeIsAdvancedInvoicingActive(state, action) {
      state.isAdvancedInvoicingActive = action.payload;
    },
  },
});

export const {
  displayCreateStoreSuggestion,
  saveLoginConfig,
  removeLoginConfig,
  displayTaxTutorial,
  displayHomeTutorial,
  displayBusinessTutorial,
  displayStoreTutorial,
  displayInitialTutorial,
  changeIsPushTokenSet,
  changeIsAdvancedInvoicingActive,
} = configSlice.actions;
export const configReducer = configSlice.reducer;
