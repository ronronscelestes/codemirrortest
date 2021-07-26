export const replaceText = (eventName, textToChange) => {
    let editedText;

    switch (eventName) {
        case 'strike':
            editedText = `~~${textToChange}~~`
            break;
        case 'bold':
            editedText = `**${textToChange}**`
            break;
        case 'italic':
            editedText = `_${textToChange}_`
            break;
        case 'underline':
            editedText = `${textToChange}`
            break;
        default:
            editedText = textToChange
    }

    return editedText
}