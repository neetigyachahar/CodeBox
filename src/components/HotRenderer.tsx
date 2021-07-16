import {
    createStyles,
    makeStyles
} from '@material-ui/core/styles'

import compileFiles from '../utils/compileFiles'

import { filesType } from '../store/reducers/files'

const useStyles = makeStyles(() =>
    createStyles({
        iframe: {
            width: '100%',
            height: '99%',
            border: 'none',
            backgroundColor: 'white'
        }
    })
)

export interface HotRendererProps {
    files: filesType
}

const HotRenderer: React.FC<HotRendererProps> = ({ files }) => {
    const classes = useStyles()
    return (
        <iframe
            title="hot-renderer"
            className={classes.iframe}
            srcDoc={compileFiles(
                files.markup.content,
                files.css.content,
                files.javascript.content
            )}
        />
    )
}

export default HotRenderer