import React from 'react'
import { shallow } from 'enzyme';
import { PatientCard } from '../../components/PatientCard/PatientCard';
import patients from '../fixtures/patients';

jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useContext: () => ({
        updateFilter: jest.fn()
    }),
}));



describe("PatientCard", () => {
    it("renders as expected in snapshot", () => {
        const wrapper = shallow(<PatientCard key={patients[0].id} {...patients[0]} />);
        expect(wrapper).toMatchSnapshot();
    });
});