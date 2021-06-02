import React, { createContext, useContext, useReducer } from "react";
import { Patient, DiagnoseEntry, PatientEntry } from "../types";

import { Action } from "./reducer";

export type State = {
  patients: { [id: string]: Patient };
  patientEntries: { [id: string]: PatientEntry };
  diagnosesDetails: DiagnoseEntry[];
};

const initialState: State = {
  patients: {},
  patientEntries: {},
  diagnosesDetails: [],
};

export const StateContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => initialState,
]);

type StateProviderProps = {
  reducer: React.Reducer<State, Action>;
  children: React.ReactElement;
};

export const setPatientList = (patientsList: Patient[]) => {
  return {
    type: "SET_PATIENT_LIST",
    payload: { patientsList },
  };
};

export const setDiagnosesDetails = (diagnosesDetails: DiagnoseEntry[]) => {
  return {
    type: "SET_DIAGNOSES_LIST",
    payload: { diagnosesDetails },
  };
};

export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  children,
}: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
