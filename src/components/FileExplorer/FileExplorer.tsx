import { FC } from 'react'
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core'
import {
    createStyles,
    Theme,
    makeStyles
} from '@material-ui/core/styles'
import { MoveToInbox } from '@material-ui/icons'

const useStyles = makeStyles(({ mixins }: Theme) =>
    createStyles({
        toolbar: mixins.toolbar
    })
)

const FileExplorer: FC = () => {
    const classes = useStyles()

    return (
        <List>
            <Box className={classes.toolbar} />
            <ListItem button dense>
                <ListItemIcon><MoveToInbox /> </ListItemIcon>
                <ListItemText primary="index.html" />
            </ListItem>
            <ListItem button dense selected>
                <ListItemIcon><MoveToInbox /> </ListItemIcon>
                <ListItemText primary="index.html" />
            </ListItem>
            <ListItem button dense >
                <ListItemIcon><MoveToInbox /> </ListItemIcon>
                <ListItemText primary="index.html" />
            </ListItem>
        </List>
    )
}

export default FileExplorer;