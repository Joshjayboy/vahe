import React, {useEffect, useState} from "react";
import axios from 'axios';
import {makeStyles} from "@material-ui/core/styles";
import {Paper, TableContainer} from "@material-ui/core";
import {BACKEND_BASE_URL} from "../Constants/AppConstants";
import {Alert} from '@mui/material';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function CustomerList() {
    const classes = useStyles();
    const [customers, setCustomers] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [editCustomerModalOpen, setEditCustomerModalOpen] = useState(false);
    const [editingCustomer, setEditingCustomer] = useState(null);
    const [customerToDelete, setCustomerToDelete] = useState(null);
    const [deleteCustomerDialog, setDeleteCustomerDialog] = useState(false);

    const handleDeleteClick = (customer) => {
        setCustomerToDelete(customer);
        setDeleteCustomerDialog(true);
    };

    const handleConfirmDelete = async () => {
        try {
            const response = await axios.delete(`${BACKEND_BASE_URL}/customers/${customerToDelete.id}`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
                }
            });

            if (response.status === 200) {
                // Remove the deleted customer from the customers state
                setCustomers(customers.filter(customer => customer.id !== customerToDelete.id));
                // Close the dialog
                setDeleteCustomerDialog(false);
            }
        } catch (error) {
            setErrorMsg(error.response.data.message);
        }
    };


    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            const response = await axios.get(`${BACKEND_BASE_URL}/customers`, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
                }
            });

            setCustomers(response.data);
        } catch (error) {
            setErrorMsg(error.response.data.message);
        }
    };

    const handleSaveChangesClick = async (editedCustomer) => {
        try {
            const response = await axios.put(`${BACKEND_BASE_URL}/customers/${editedCustomer.id}`, editedCustomer, {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                console.log('Customer edited successfully')

                setEditCustomerModalOpen(false);
                setEditingCustomer(null);

                // Re-fetch customers to update the list with the edited customer
                await fetchCustomers();
            }
        } catch (error) {
            setErrorMsg(error.response.data.message);
        }
    };

    return (
        <>
            {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
            <TableContainer component={Paper}>
                {/* Rest of the code remains the same */}
            </TableContainer>
        </>
    );

}
