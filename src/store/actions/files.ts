import { fileType } from '../../Types/index'
import { UPDATE_FILE_ON_CHANGE, SWITCH_FILE } from './actionTypes';

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