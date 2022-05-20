import { useState } from 'react';
import Swal from "sweetalert2";

const AddTask = ({ onSave }) => {
    const [ename, setename] = useState('');
    const [eid, seteid] = useState('');
    const [email, setemail] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!ename && !eid) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in the Name and employee ID or close the form!'
            })
        } else if (!ename && eid) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in the Name!'
            })
        } else if (ename && !eid) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in the employee ID!'
            })
        } else {
            onSave({ ename, eid ,email });
        }

        setename('');
        seteid('');
        setemail('')
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Name</label>
                <input type="text" placeholder="Add your name" value={ename} onChange={(e) => setename(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Employee ID</label>
                <input type="text" placeholder="Add your employee ID" value={eid} onChange={(e) => seteid(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Email</label>
                <input type="text" placeholder="Add your email" value={email} onChange={(e) => setemail(e.target.value)} />
            </div>

            <input type="submit" className="btn btn-block" value="Save Record" />
        </form>
    )
}

export default AddTask
