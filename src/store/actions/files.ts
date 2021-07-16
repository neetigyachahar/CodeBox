import { fileType } from '../../Types/index'
import { filesType } from '../reducers/files';
import {
    UPDATE_FILE_ON_CHANGE,
    SWITCH_FILE,
    SET_FILES,
    FILES_SAVED
} from './actionTypes';


export const setFiles = (files: filesType) => {
    return {
        type: SET_FILES,
        files
    };
}

export const udpateFileOnChange = (file: fileType) => {
    return {
        type: UPDATE_FILE_ON_CHANGE,
        file
    };
};

export const switchFile = (language: string) => {
    return {
        type: SWITCH_FILE,
        language
    }
}

export const filesSaved = () => {
    return {
        type: FILES_SAVED
    }
}