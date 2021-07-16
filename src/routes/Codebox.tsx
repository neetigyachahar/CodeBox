import { FC } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Layout from '../containers/Layout'

const useStyles = makeStyles(({ palette, breakpoints }: Theme) =>
    createStyles({

    })
)

const Codebox: FC = () => {
    const classes = useStyles();
    return (
        <Layout />
    )
}

export default Codebox;