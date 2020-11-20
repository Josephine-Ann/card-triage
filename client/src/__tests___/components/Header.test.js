import React from 'react'
import { shallow } from 'enzyme';
import { Header } from '../../components/Header/Header';

jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useContext: () => ({
        filterPatient: jest.fn(),
        updateFilter: jest.fn()
    }),
}));


describe("Header", () => {
    it("renders as expected in snapshot", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });
});