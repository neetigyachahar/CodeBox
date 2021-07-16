import {
    SET_FILES,
    UPDATE_FILE_ON_CHANGE,
    SWITCH_FILE,
    FILES_SAVED
} from '../actions/actionTypes';

import { fileType } from '../../Types/index'

import deepCopy from 'clone-deep'

// Such keys because we only have these 3 files.
// If it were dynamic, we would have used file ids in list.
export interface filesType {
    markup: fileType
    css: fileType
    javascript: fileType
}

export type languageIndexType = 'markup' | 'css' | 'javascript'

export interface actionType {
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
    javascript: {
        unsavedChanges: false,
        opened: false,
        content: '',
        language: 'javascript'
    }
}

const setFiles = (state: filesType, action: actionType) => {
    let newState: filesType = deepCopy(initialState)
    newState.markup.content = action.files.markup.content
    newState.css.content = action.files.css.content
    newState.javascript.content = action.files.javascript.content
    return newState
}

const udpateFileOnChange = (state: filesType, action: actionType) => {
    let newState: filesType = deepCopy(state)
    newState[action.file.language as languageIndexType].content = action.file.content
    newState[action.file.language as languageIndexType].unsavedChanges = true
    return newState
};

const switchFile = (state: filesType, action: actionType) => {
    let newState: filesType = deepCopy(state)
    Object.keys(newState).forEach(fileLanguage => {
        if (newState[fileLanguage as languageIndexType].language === action.language)
            newState[fileLanguage as languageIndexType].opened = true
        else
            newState[fileLanguage as languageIndexType].opened = false
    })
    return newState
}

const filesSaved = (state: filesType, action: actionType) => {
    let newState: filesType = deepCopy(state)
    Object.keys(newState).forEach(fileLanguage => {
        newState[fileLanguage as languageIndexType].unsavedChanges = false
    })
    return newState
}


const reducer = (state = initialState, actions: any) => {
    switch (actions.type) {
        case SET_FILES: return setFiles(state, actions)
        case UPDATE_FILE_ON_CHANGE: return udpateFileOnChange(state, actions)
        case SWITCH_FILE: return switchFile(state, actions)
        case FILES_SAVED: return filesSaved(state, actions)
        default: return state;
    }
}

export default reducer;