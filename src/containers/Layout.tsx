import { FC, ReactNode, useState } from 'react'
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Hidden,
    Drawer
} from '@material-ui/core'
import {
    createStyles,
    Theme,
    useTheme,
    makeStyles
} from '@material-ui/core/styles'
import { Menu, Code, Share } from '@material-ui/icons'
import { DRAWER_WIDTH_IN_PX } from '../variables'
import FileExplorer from '../components/FileExplorer/FileExplorer'
import MessageCard from '../components/MessageCard'
import { createPaste } from '../pastebin'
import { filesType } from '../store/reducers/files'

export interface LayoutProps {
    codeEditor: ReactNode
    hotView: ReactNode
    files: filesType
    filesSaved: () => void
}

const useStyles = makeStyles(({ spacing, mixins, breakpoints, palette }: Theme) =>
    createStyles({
        container: {
            height: '100vh'
        },
        innerContainer: {
            display: 'flex'
        },
        appBar: {
            zIndex: 110,
            backgroundColor: palette.grey['800']
        },
        brandName: {
            flex: 1,
            padding: spacing(0, 1)
        },
        drawer: {
            zIndex: 100,
            [breakpoints.up('sm')]: {
                width: DRAWER_WIDTH_IN_PX,
                flexShrink: 0,
            },
        },
        menuButton: {
            marginRight: spacing(2),
            [breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        toolbar: mixins.toolbar,
        drawerPaper: {
            width: DRAWER_WIDTH_IN_PX,
        },
        content: {
            flexGrow: 1,
            display: 'flex',
            [breakpoints.down('sm')]: {
                height: `calc(100vh - ${mixins.toolbar.minHeight}px)`,
                flexDirection: 'column'
            },
        },
        sections: {
            flex: 1,
            minWidth: 256,
            height: `calc(100vh - ${mixins.toolbar.minHeight}px)`,
            overflow: 'auto'
        }
    })
)

const Layout: FC<LayoutProps> = ({ files, filesSaved, codeEditor, hotView }) => {
    const classes = useStyles();
    const theme = useTheme();

    const [drawerOnMobileOpen, setMobileOpen] = useState(false)
    const [openShareDialog, setOpenShareDialog] = useState(false)
    const [link, setLink] = useState('')

    const handleDrawerToggle = () => {
        setMobileOpen(!drawerOnMobileOpen);
    };

    const saveAndShareHandler = async () => {
        let link: string = await createPaste(JSON.stringify(files))
        console.log(link)
        link = `https://localhost:3000/codebox/${link.split('/')[link.split('/').length - 1]}`
        navigator.clipboard.writeText(link)
        setLink(link)
        setOpenShareDialog(true)
        filesSaved()
    }

    return (
        <Box className={classes.container}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <Menu />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="Codebox"
                        edge="start"
                    >
                        <Code />
                    </IconButton>
                    <Typography variant="h6" className={classes.brandName} noWrap>
                        CodeBox
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="Share"
                        edge="end"
                        onClick={saveAndShareHandler}
                    >
                        <Share />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box className={classes.toolbar} />
            <Box className={classes.innerContainer}>
                <Box component="nav" className={classes.drawer} >
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={window.document.body}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={drawerOnMobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true,
                            }}
                        >
                            <FileExplorer />
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            <FileExplorer />
                        </Drawer>
                    </Hidden>
                </Box>
                <Box className={classes.content}>
                    <Box className={classes.sections}>
                        {codeEditor}
                    </Box>
                    <Box className={classes.sections}>
                        {hotView}
                    </Box>
                </Box>
            </Box>
            <MessageCard
                open={openShareDialog}
                handleClose={() => setOpenShareDialog(false)}
                message={
                    <Box>
                        <Typography component="div" variant="h6">
                            link copied to clipboard!
                        </Typography>
                        <Typography component="div" variant="caption">
                            {link}
                        </Typography>
                    </Box>
                }
            />
        </Box>
    )
}

export default Layout;