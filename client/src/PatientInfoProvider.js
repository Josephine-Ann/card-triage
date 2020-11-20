import React from 'react'
import axios from 'axios';

export const PatientInfoContext = React.createContext();

export class PatientInfoProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patientList: [],
            pendingIs: true,
            rejectedIs: true,
            doneIs: true,
            unfilteredPatientList: [],
            filters: 'name',
            input: '',
            loading: true,
            pendingOrRejected: 'Done',
            done: 'Rejected'
        };
    }

    getPatient = async () => {
        axios.get('http://localhost:5000/cards').then(response => {
            let newPatientList = response.data
            newPatientList.map((patient) => {
                const date = new Date(patient.created_date)
                patient.created_date = `${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}, ${("0" + date.getDate()).slice(-2)}/${("0" + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`
            })
            this.setState({
                patientList: newPatientList,
                unfilteredPatientList: newPatientList,
                loading: false,
            });
        }).catch(error => {
            console.log(error)
        })
    }

    updatePatient = async (id) => {
        const newPatientList = this.state.patientList;

        for (var patient in newPatientList) {
            if (newPatientList[patient].id === id && newPatientList[patient].status === 'PENDING') {
                newPatientList[patient].status = 'DONE'
            } else if (newPatientList[patient].id === id && newPatientList[patient].status === 'DONE') {
                newPatientList[patient].status = 'REJECTED'
            } else if (newPatientList[patient].id === id && newPatientList[patient].status === 'REJECTED') {
                newPatientList[patient].status = 'DONE'
            }
        }

        this.setState({
            patientList: newPatientList,
        });
    };

    selectColumnFilter = (stateKey) => {
        this.setState({
            [stateKey]: !this.state[stateKey]
        })
    }

    filterPatient = async (writing) => {
        new Promise((resolve) => {
            this.setState({
                input: writing
            })
            resolve()
        }).then(() => {
            if (this.state.filters === 'arrhythmias') {
                const arrythmiaMatch = (element) => element.includes(this.state.input);
                this.setState({
                    patientList: this.state.unfilteredPatientList.filter(patient => patient.arrhythmias.some(arrythmiaMatch))
                })
            } else {
                this.setState({
                    patientList: this.state.unfilteredPatientList.filter(patient => patient.patient_name.toLowerCase().includes(this.state.input.toLowerCase()))
                })
            }
        });
    };

    updateFilter = async (button) => {
        this.setState({
            filters: button
        })
    };

    componentDidMount() {
        this.getPatient();
    }


    render() {
        return (
            <PatientInfoContext.Provider
                value={{
                    state: this.state,
                    filterPatient: this.filterPatient,
                    updatePatient: this.updatePatient,
                    updateFilter: this.updateFilter,
                    selectColumnFilter: this.selectColumnFilter
                }}>
                {!this.state.loading ? this.props.children : "Loading Patient List..."}
            </PatientInfoContext.Provider>
        );
    }
}

export default PatientInfoContext;