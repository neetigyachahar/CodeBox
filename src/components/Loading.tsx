import {
    Box,
    CircularProgress
} from '@material-ui/core'

const Loading: React.FC = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            aria-busy
            style={{ height: '100vh', width: '100vw' }}
        >
            <CircularProgress size="108px" />
        </Box>
    )
}

export default Loading