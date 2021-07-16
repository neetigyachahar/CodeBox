import {
    Dialog,
    DialogContent,
    DialogActions,
    Button,
    Typography
} from '@material-ui/core'

interface MessageCardPropsType {
    message: React.ReactNode | string
    open?: boolean
    handleClose?: () => void
}

const MessageCard: React.FC<MessageCardPropsType> = ({ message, open = true, handleClose = null }) => {
    return (
        <Dialog open={open}>
            <DialogContent>
                <Typography variant="h5" component="p" style={{ textAlign: 'center' }}>
                    {message}
                </Typography>
            </DialogContent>
            {handleClose &&
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>}
        </Dialog >
    );
}

export default MessageCard