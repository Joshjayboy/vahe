import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, Button } from '@material-ui/core';

function DeleteConfirmDialog({ open, onClose, onConfirm }) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete this customer? This action cannot be undone.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={onConfirm} color="primary" autoFocus>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteConfirmDialog;
