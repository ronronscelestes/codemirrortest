export const replaceText = (eventName, textToChange) => {
    let editedText;

    switch (eventName) {
        case 'strike':
            editedText = `~~${textToChange}~~`;
            break;
        case 'bold':
            editedText = `**${textToChange}**`;
            break;
        case 'italic':
            editedText = `_${textToChange}_`;
            break;
        case 'underline':
            editedText = `<u>${textToChange}</u>`;
            break;
        case 'code':
            editedText = `\`\`\`${textToChange}\`\`\``;
            break;
        case 'link':
            editedText = `[${textToChange}](link)`;
            break;
        case 'quote':
            editedText = `>${textToChange}`;
            break;
        default:
            editedText = textToChange;
    }
    console.log(editedText)
    return editedText
};

export const insertText = (eventName) => {
    const textToInsert = eventName[0].toUpperCase() + eventName.substring(1, eventName.length);
    let editedText;
    //object to calculate text that will be selected
    let selection = {start: eventName.length, end: 0}

    switch (eventName) {
        case 'strike':
            editedText = `~~${textToInsert}~~`;
            selection.end = 2;
            break;
        case 'bold':
            editedText = `**${textToInsert}**`;
            selection.end = 2;
            break;
        case 'italic':
            editedText = `_${textToInsert}_`;
            selection.end = 1;
            break;
        case 'underline':
            editedText = `<u>${textToInsert}</u>`;
            selection.end = 4;
            break;
        case 'code':
            editedText = `\`\`\`${textToInsert}\`\`\``;
            selection.end = 3;
            break;
        case 'textLink':
            editedText = `[${textToInsert}](link)`;
            selection.end = 7;
            break;
        case 'quote':
            editedText = `>${textToInsert}`;
            selection.end = 0;
            break;
        default:
            editedText = '';
    }
    return {editedText, selection}
}