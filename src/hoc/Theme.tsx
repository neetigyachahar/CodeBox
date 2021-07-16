import { ThemeProvider } from '@material-ui/styles'
import { createTheme } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createTheme({
    palette: {
        type: 'dark',
    },
})

const Theme: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default Theme