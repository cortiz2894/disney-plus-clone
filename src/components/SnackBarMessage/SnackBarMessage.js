import { forwardRef } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBarMessage = ({ estado, handleClose, type, message}) => {
    
    return(
        <Snackbar open={estado} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={type} >
                {message}
            </Alert>
        </Snackbar>
    )
}

export default SnackBarMessage