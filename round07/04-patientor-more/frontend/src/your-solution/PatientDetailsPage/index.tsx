import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { apiBaseUrl } from "../constants";
import { useStateValue } from "../state";
import { PatientEntry, Entry, DiagnoseEntry } from "../types";

const Entry = ({ entry }: { entry: Entry }) => {
  const [{ diagnosesDetails }] = useStateValue();

  const getDiagnoseDesc = (code: string) => {
    const diagnoseObj: DiagnoseEntry | undefined = Object.values(
      diagnosesDetails
    ).find((diagnoseDetail: DiagnoseEntry) => diagnoseDetail.code === code);
    if (diagnoseObj) {
      return diagnoseObj.name;
    } else {
      return "";
    }
  };

  switch (entry.type) {
    case "Hospital":
      return (
        <div>
          <p>
            {" "}
            {entry.date} <i>{entry.description}</i>{" "}
          </p>
          <ul>
            {entry.diagnosisCodes?.map((code) => (
              <li key={code}>
                {code} {getDiagnoseDesc(code)}
              </li>
            ))}
          </ul>
        </div>
      );
    case "OccupationalHealthcare":
      return (
        <div>
          <p>
            {" "}
            {entry.date} <i>{entry.description}</i>{" "}
          </p>
          <ul>
            {entry.diagnosisCodes?.map((code) => (
              <li key={code}>
                {code} {getDiagnoseDesc(code)}
              </li>
            ))}
          </ul>
        </div>
      );
    case "HealthCheck":
      return (
        <div>
          <p>
            {entry.date} <i>{entry.description}</i>{" "}
          </p>
          <ul>
            {entry.diagnosisCodes?.map((code) => (
              <li key={code}>
                {code} {getDiagnoseDesc(code)}
              </li>
            ))}
          </ul>
        </div>
      );
  }
};

const PatientDetails = () => {
  const [, dispatch] = useStateValue();
  const [patientDetails, setPatientDetails] = React.useState<PatientEntry>();
  const { id } = useParams<{ id: string }>();
  React.useEffect(() => {
    const fetchPatientDetails = async (id: string) => {
      try {
        const { data: patientDetailsFromApi } = await axios.get<PatientEntry>(
          `${apiBaseUrl}/patients/${id}`
        );
        setPatientDetails(patientDetailsFromApi);
        dispatch({ type: "GET_PATIENT", payload: patientDetailsFromApi });
      } catch (e) {
        console.error(e);
      }
    };
    void fetchPatientDetails(id);
  }, [dispatch]);

  return (
    <div>
      <h1>
        {patientDetails?.name}{" "}
        <Icon
          name={
            patientDetails && patientDetails.gender === "male"
              ? "venus"
              : "mars"
          }
        ></Icon>
      </h1>
      <span>ssn: {patientDetails?.ssn}</span>
      <br />
      <span>Occupation: {patientDetails?.occupation}</span>
      <br />
      <span>Date of Birth: {patientDetails?.dateOfBirth}</span>
      <br />
      <h3>Entries</h3>
      {patientDetails?.entries?.map((entry) => (
        <Entry entry={entry} key={entry.id}></Entry>
      ))}
    </div>
  );
};

export default PatientDetails;
