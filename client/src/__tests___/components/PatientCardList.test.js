import React from 'react'
import { shallow } from 'enzyme';
import { PatientCardList } from '../../components/PatientCardList/PatientCardList';
import patients from '../fixtures/patients';

jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useContext: () => ({
        state: {
            patientList: [{
                "arrhythmias": [
                    "AFib",
                    "AV Block",
                    "Pause",
                    "PSVC",
                    "PVC"
                ],
                "created_date": "2020-03-10T13:14:59+0000",
                "id": 0,
                "patient_name": "Anita",
                "status": "PENDING"
            }]
        },
        // Mock the function to do nothing
        updateToDo: jest.fn(),
    }),
}));



describe("PatientCardList", () => {
    it("renders as expected in snapshot", () => {
        const wrapper = shallow(<PatientCardList />);
        expect(wrapper).toMatchSnapshot();
    });
});