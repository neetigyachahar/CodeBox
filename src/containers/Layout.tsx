
import { useEffect } from 'react'
import { Box } from '@material-ui/core'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'


import Prism from "prismjs"

const useStyles = makeStyles(({ palette, breakpoints }: Theme) =>
    createStyles({
        container: {
            display: 'flex',
        },
        a: {
            flex: 1
        }
    })
)

const Layout = () => {
    const classes = useStyles();

    useEffect(() => {
        setTimeout(() => Prism.highlightAll(), 100)
    }, []);

    return (
        <Box className={classes.container}>
            <Box className={classes.a}>
                <pre className="line-numbers">
                    <code className="language-js">
                        {`
                            const foo = 'foo';
                            const bar = 'bar';
                            console.log(foo + bar);
                        `}
                    </code>
                </pre>
            </Box>
            <Box className={classes.a}>
                data
            </Box>
        </Box>
    )
}

export default Layout;