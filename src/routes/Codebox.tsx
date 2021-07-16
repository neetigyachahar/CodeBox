import { FC } from 'react'
import Layout from '../containers/Layout'

import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

import CodeEditor from '../components/CodeEditor'

import { filesType } from '../store/reducers/files';
import { fileType } from '../Types';

export interface CodeboxProps {
    files: filesType
    udpateFileOnChange: (file: filesType) => void
}

const Codebox: FC<CodeboxProps> = ({ files, udpateFileOnChange }) => {

    // usememo here
    const openedFile = Object.values(files).filter(file => file.language === 'markup')[0]

    return (
        <Layout
            codeEditor={
                <CodeEditor
                    code={openedFile.content}
                    onChange={(content: string) => udpateFileOnChange({ ...openedFile, content })}
                    language={openedFile.language}
                />
            }
            hotView={
                <div>hello</div>
            }
        />
    )
}

const mapStateToProps = (state: any) => {
    return {
        files: state.files
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        udpateFileOnChange: (file: fileType) => dispatch(actions.udpateFileOnChange(file))
    }
}

export default connect<any, any>(mapStateToProps, mapDispatchToProps)(Codebox);