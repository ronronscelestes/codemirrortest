import React from 'react';
import WysiwygNav from './WysiwygNav';
import WysiwygFooter from './WysiwygFooter';
import Wysiwyg from './Wysiwyg';

import { TextButton, Box } from "@strapi/design-system";

// import PreviewWysiwyg from '../PreviewWysiwyg';


const Index = ({ label, name, placeholder, options, value, onChange }) => {

    return (
        <>
            <TextButton>{label}</TextButton>
            <Box paddingTop={1}>
                <WysiwygNav placeholder={placeholder} options={options} />
                <Wysiwyg value={value || ''} onChange={modifiedData => onChange({ name, value: modifiedData })}></Wysiwyg>
                <WysiwygFooter />
            </Box>
            {/* <PreviewWysiwyg data='**hello world**' /> */}
        </>
    )
}

export default Index;
