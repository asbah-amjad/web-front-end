import { State } from "./state";
import { Patient, PatientEntry, DiagnoseEntry } from "../types";

export type Action =
  | {
    type: "SET_PATIENT_LIST";
    payload: Patient[];
  }
  | {
    type: "ADD_PATIENT";
    payload: Patient;
  }
  | {
    type: "GET_PATIENT";
    payload: PatientEntry;
  }
  | {
    type: "SET_DIAGNOSES_LIST";
    payload: DiagnoseEntry[];
  };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients
        }
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
    case "GET_PATIENT":
      return {
        ...state,
        patientEntries: {
          ...state.patientEntries
        }
      };
    case "SET_DIAGNOSES_LIST":
      return {
        ...state,
        diagnosesDetails: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};
