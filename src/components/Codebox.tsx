import { Dispatch, FC } from 'react'
import Layout from '../containers/Layout'

import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

import CodeEditor from './CodeEditor'
import HotRenderer from './HotRenderer';

import { filesType } from '../store/reducers/files';
import { fileType } from '../Types';

export interface mapStateToPropsTypes {
    files: filesType
}

export interface mapDispatchToPropsTypes {
    udpateFileOnChange: (file: filesType) => void
    filesSaved: () => void
}

export type CodeboxProps = mapStateToPropsTypes & mapDispatchToPropsTypes

const Codebox: FC<CodeboxProps> = ({ files, filesSaved, udpateFileOnChange }) => {

    // usememo here
    const openedFile = Object.values(files).filter(file => file.opened)[0]

    return (
        <Layout
            files={files}
            filesSaved={filesSaved}
            codeEditor={
                <CodeEditor
                    code={openedFile.content}
                    onChange={(content: string) => udpateFileOnChange({ ...openedFile, content })}
                    language={openedFile.language}
                />
            }
            hotView={
                <HotRenderer files={files} />
            }
        />
    )
}

const mapStateToProps = (state: any) => {
    return {
        files: state.files
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        filesSaved: () => dispatch(actions.filesSaved()),
        udpateFileOnChange: (file: fileType) => dispatch(actions.udpateFileOnChange(file))
    }
}

export default connect<mapStateToPropsTypes, mapDispatchToPropsTypes>(mapStateToProps, mapDispatchToProps as any)(Codebox);