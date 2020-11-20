import React, { useContext } from 'react'
import { PatientCardList } from '../PatientCardList/PatientCardList';
import { Header } from '../Header/Header';
import { PatientInfoContext } from '../../PatientInfoProvider'

export const FunctionContextComponent = () => {
    const {
        state: { patientList }
    } = useContext(PatientInfoContext);
    return (
        <div>
            <Header />
            {
                patientList.length === 0 ? (
                    <div>
                        <p>No patients</p>
                    </div>
                ) : (
                        <PatientCardList />
                    )
            }
        </div>
    )
}