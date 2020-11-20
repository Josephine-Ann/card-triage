import './PatientCardList.css'
import React, { useContext } from 'react'
import { PatientInfoContext } from '../../PatientInfoProvider'
import { PatientCard } from '../PatientCard';


export const PatientCardList = () => {
    const {
        state: {
            patientList,
            doneIs,
            pendingIs,
            rejectedIs
        }
    } = useContext(PatientInfoContext);
    return (
        <div id="list__three-columns">
            <div id="list__columns">
                <div className={pendingIs ? 'list' : 'list-hidden'}>
                    <div className="list__titles-desktop">
                        <p className="list__titles-top">Pending Tests</p>
                    </div>
                    {
                        patientList.map((patient) => {
                            if (patient.status === 'PENDING') {
                                return <PatientCard key={patient.id} {...patient} />
                            }
                        })
                    }
                </div>
                <div className={doneIs ? 'list' : 'list-hidden'}>
                    <div className="list__titles-desktop">
                        <p className="list__titles-top">Tests Done</p>
                    </div>
                    {
                        patientList.map((patient) => {
                            if (patient.status === 'DONE') {
                                return <PatientCard key={patient.id} {...patient} />
                            }
                        })
                    }
                </div>
                <div className={rejectedIs ? 'list' : 'list-hidden'}>
                    <div className="list__titles-desktop">
                        <p className="list__titles-top">Tests Rejected</p>
                    </div>
                    {
                        patientList.map((patient) => {
                            if (patient.status === 'REJECTED') {
                                return <PatientCard key={patient.id} {...patient} />
                            }
                        })
                    }
                </div>
            </div>
        </div >
    )
}


export default PatientCardList