import { fileType } from '../../Types/index'
import { UPDATE_FILE_ON_CHANGE } from './actionTypes';

export const udpateFileOnChange = (file: fileType) => {
    return {
        type: UPDATE_FILE_ON_CHANGE,
        file
    };
};