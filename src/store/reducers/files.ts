import { UPDATE_FILE_ON_CHANGE } from '../actions/actionTypes';

import { fileType } from '../../Types/index'

import deepCopy from 'clone-deep'

// Such keys because we only have these 3 files.
// If it were dynamic, we would have used file ids in list.
export interface filesType {
    markup: fileType
    css: fileType
    js: fileType
}

export type languageIndexType = 'markup' | 'css' | 'js'

export interface actionType{
    type: string
    [key: string]: any
}

const initialState: filesType = {
    markup: {
        unsavedChanges: false,
        opened: true,
        content: '',
        language: 'markup'
    },
    css: {
        unsavedChanges: false,
        opened: false,
        content: '',
        language: 'css'
    },
    js: {
        unsavedChanges: false,
        opened: true,
        content: '',
        language: 'javascript'
    }
}

const udpateFileOnChange = (state: filesType, action: actionType) => {
    let newState:filesType = deepCopy(state)
    newState[action.file.language as languageIndexType].content = action.file.content
    return newState
};


const reducer = (state = initialState, actions: any) => {
    switch (actions.type) {
        case UPDATE_FILE_ON_CHANGE: return udpateFileOnChange(state, actions);
        default: return state;
    }
}

export default reducer;