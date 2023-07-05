import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@material-ui/core';
import axios from 'axios';
import {BACKEND_BASE_URL} from "../Constants/AppConstants";

const EditCustomerDialog = ({open, handleClose, customer, setUpdatedCustomer, handleUpdate}) => {
    const [editingCustomer, setEditingCustomer] = useState(null);

    useEffect(() => {
        setEditingCustomer(customer);
    }, [customer]);

    const handleFieldChange = (e) => {
        setEditingCustomer({
            ...editingCustomer,
            [e.target.name]: e.target.value
        });
    }

    const handleSaveChanges = async () => {
        const response = await axios.put(`${BACKEND_BASE_URL}/customers/${editingCustomer.id}`, editingCustomer, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            setUpdatedCustomer(editingCustomer);
            console.log('Customer edited successfully')
            handleUpdate();
            handleClose();
        }
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Customer</DialogTitle>
            <DialogContent>
                <TextField
                    label="First Name"
                    value={editingCustomer?.firstname || ''}
                    name="firstname"
                    onChange={handleFieldChange}
                />
                <TextField
                    label="Last Name"
                    value={editingCustomer?.lastname || ''}
                    name="lastname"
                    onChange={handleFieldChange}
                />
                <TextField
                    label="Email"
                    value={editingCustomer?.email || ''}
                    name="email"
                    onChange={handleFieldChange}
                />
                <TextField
                    label="Role"
                    value={editingCustomer?.role || ''}
                    name="role"
                    onChange={handleFieldChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Cancel
                </Button>
                <Button onClick={handleSaveChanges}>
                    Save Changes
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditCustomerDialog;
