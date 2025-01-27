import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, Divider, Header, Container } from "semantic-ui-react";

import { apiBaseUrl } from "./constants";
import { useStateValue } from "./state";
import { Patient, DiagnoseEntry } from "./types";

import PatientListPage from "./PatientListPage";
import PatientDetails from "./PatientDetailsPage";

export { reducer, StateProvider } from "./state";

// ** enter commit sha of your repository in here **
export const commitSHA = "1ca2c5f";

export const App = () => {
  const [, dispatch] = useStateValue();
  React.useEffect(() => {
    void axios.get<void>(`${apiBaseUrl}/ping`);

    const fetchPatientList = async () => {
      try {
        const { data: patientListFromApi } = await axios.get<Patient[]>(
          `${apiBaseUrl}/patients`
        );
        dispatch({ type: "SET_PATIENT_LIST", payload: patientListFromApi });
      } catch (e) {
        console.error(e);
      }
    };
    void fetchPatientList();

    const fetchDiagnoseList = async () => {
      try {
        const { data: diagnoseListFromApi } = await axios.get<DiagnoseEntry[]>(
          `${apiBaseUrl}/diagnoses`
        );
        dispatch({ type: "SET_DIAGNOSES_LIST", payload: diagnoseListFromApi });
      } catch (e) {
        console.error(e);
      }
    };
    void fetchDiagnoseList();
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Container>
          <Header as="h1">Patientor</Header>
          <Button as={Link} to="/" primary>
            Home
          </Button>
          <Divider hidden />
          <Switch>
            <Route path="/patients/:id">
              <PatientDetails />
            </Route>
            <Route path="/">
              <PatientListPage />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
};
