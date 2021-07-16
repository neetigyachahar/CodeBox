import { FC } from 'react'
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@material-ui/core'
import {
    createStyles,
    Theme,
    makeStyles
} from '@material-ui/core/styles'
import { FiberManualRecord } from '@material-ui/icons'

import HtmlIcon from './icons/HtmlIcon'
import CssIcon from './icons/CssIcon'
import JsIcon from './icons/JsIcon'

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import { filesType } from '../../store/reducers/files'

interface mapStateToPropsTypes {
    files: filesType
}

interface mapDispatchToPropsTypes {
    switchFile: (s: string) => void
}

export type FileExplorerProps = mapStateToPropsTypes & mapDispatchToPropsTypes

const useStyles = makeStyles(({ mixins, spacing }: Theme) =>
    createStyles({
        toolbar: mixins.toolbar,
        dot: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: spacing(0, 1),
            transform: 'scale(0.6)'
        },
        title: {
            flex: 1
        }
    })
)

const FileExplorer: FC<FileExplorerProps> = ({ files, switchFile }) => {
    const classes = useStyles()

    // usememo here
    const openedFile = Object.values(files).filter(file => file.opened)[0]

    const listItemText = (text: string, active: boolean) => <Box display="flex">
        <Box component="span" className={classes.title}>
            <Typography>
                {text}
            </Typography>
        </Box>
        {active &&
            <Box component="span" className={classes.dot}><FiberManualRecord fontSize="small" /></Box>
        }
    </Box>

    // This list can be generated through map, but again, the list is fixed!
    return (
        <List>
            <Box className={classes.toolbar} />
            <ListItem
                component="li"
                button
                dense
                onClick={() => switchFile('markup')}
                selected={openedFile.language === 'markup'}
            >
                <ListItemIcon><HtmlIcon viewBox="0 0 48 48" /> </ListItemIcon>
                <ListItemText primary={listItemText("index.html", files.markup.unsavedChanges)} />
            </ListItem>
            <ListItem
                component="li"
                button
                dense
                onClick={() => switchFile('css')}
                selected={openedFile.language === 'css'}
            >
                <ListItemIcon><CssIcon viewBox="0 0 48 48" /> </ListItemIcon>
                <ListItemText primary={listItemText("index.css", files.css.unsavedChanges)} />
            </ListItem>
            <ListItem
                component="li"
                button
                dense
                onClick={() => switchFile('javascript')}
                selected={openedFile.language === 'javascript'}
            >
                <ListItemIcon><JsIcon viewBox="0 0 48 48" /> </ListItemIcon>
                <ListItemText primary={listItemText("index.js", files.javascript.unsavedChanges)} />
            </ListItem>
        </List>
    )
}

const mapStateToProps = (state: any) => {
    return {
        files: state.files
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        switchFile: (language: string) => dispatch(actions.switchFile(language))
    }
}

export default connect<
    mapStateToPropsTypes,
    mapDispatchToPropsTypes
>(mapStateToProps, mapDispatchToProps)(FileExplorer);