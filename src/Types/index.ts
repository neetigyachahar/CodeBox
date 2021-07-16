import { Language } from 'prism-react-renderer'

export interface fileType {
    unsavedChanges: boolean
    opened: boolean
    content: string
    language: Language
}