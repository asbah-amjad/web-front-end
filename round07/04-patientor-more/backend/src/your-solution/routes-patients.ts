import express from 'express';
import toNewPatientEntry from './utils';
import patientService from './services-patients';
import { PatientEntry } from './types';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(patientService.getNonSensitiveEntries());
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const patient: PatientEntry | undefined = patientService.getPatientById(id);

  if (!patient) {
    res.status(404).send('Not found')
  }

  res.json(patient)
})

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);

    const addedEntry = patientService.addEntry(newPatientEntry);
    res.json(addedEntry);
  } catch (e) {
    res.status(400).send(e.message);
  }
})


export default router;
