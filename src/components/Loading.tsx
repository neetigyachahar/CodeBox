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
            style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 10000,
                height: '100vh',
                width: '100vw'
            }}
        >
            <CircularProgress size="108px" />
        </Box>
    )
}

export default Loading