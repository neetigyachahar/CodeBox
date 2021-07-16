import { FC } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { Box } from '@material-ui/core'
import Editor from 'react-simple-code-editor'
import theme from 'prism-react-renderer/themes/vsDark'

export interface CodeEditorProps {
    code: string
    onChange: (s: string) => void
    language: Language
}

const useStyles = makeStyles(() =>
    createStyles({
        lineNumber: {
            position: 'absolute',
            transform: 'translateX(-120%)',
            paddingRight: '4px'
        }
    })
)

const CodeEditor: FC<CodeEditorProps> = ({ code, language, onChange }) => {
    const classes = useStyles()

    const highlight = (code: any) => (
        <Highlight {...defaultProps} theme={theme} code={code} language={language}>
            {({ tokens, getTokenProps, getLineProps }) => (
                <>
                    {tokens.map((line, i) => (
                        <Box key={i} {...getLineProps({ line, key: i })}>
                            <Box component="span" className={classes.lineNumber}>{i + 1}</Box>
                            <Box component="span">
                                {line.map((token, key) => (
                                    <Box component="span" key={key} {...getTokenProps({ token, key })} />
                                ))}
                            </Box>
                        </Box>
                    ))}
                </>
            )}
        </Highlight>
    )

    return (
        <Editor
            value={code}
            onValueChange={onChange}
            highlight={highlight}
            padding={34}
            style={{
                minHeight: '100%',
                fontFamily: '"Dank Mono", "Fira Code", monospace',
                boxSizing: 'border-box',
                ...theme.plain
            } as any}
        />
    )
}

export default CodeEditor;