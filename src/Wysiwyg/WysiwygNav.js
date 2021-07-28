import React from 'react';

import {
    MainButtons,
    SubMainButtons,
    CollapsableButtons,
    CustomIconButton,
    NavWrapper,
    MoreButton
} from './WysiwygStyles';

import {
    Option,
    Button,
    Row, 
    Select
} from "@strapi/design-system";

import {
    Bold,
    Italic,
    Underline,
    Strikethrough,
    BulletList,
    NumberList,
    Code,
    Image,
    Link,
    Quote,
    More
} from "@strapi/icons";

const WysiwygNav = ({ placeholder, options }) => {
    return (
        <NavWrapper padding={2} background='neutral100'>
            <Row justifyContent='space-between'>
                <Row>
                    <Select placeholder={placeholder} size='S'>
                        {options.map((option) => (
                            <Option key={option} value={option}>
                                {option}
                            </Option>
                        ))}
                    </Select>

                    <MainButtons>
                        <CustomIconButton onClick={() => console.log('bold')} label="Bold" icon={<Bold />} />
                        <CustomIconButton onClick={() => console.log('italic')} label="Italic" icon={<Italic />} />
                        <CustomIconButton onClick={() => console.log('underline')} label="Underline" icon={<Underline />} />
                        <SubMainButtons>
                            <CustomIconButton onClick={() => console.log('strikethrough')} label="Strikethrough" icon={<Strikethrough />} />
                            <CustomIconButton onClick={() => console.log('bulletlist')} label="BulletList" icon={<BulletList />} />
                            <CustomIconButton onClick={() => console.log('numberlist')} label="NumberList" icon={<NumberList />} />
                        </SubMainButtons>
                    </MainButtons>
                    
                    <CollapsableButtons>
                        <CustomIconButton onClick={() => console.log('code')} label="Code" icon={<Code />} />
                        <CustomIconButton onClick={() => console.log('image')} label="Image" icon={<Image />} />
                        <CustomIconButton onClick={() => console.log('link')} label="Link" icon={<Link />} />
                        <CustomIconButton onClick={() => console.log('quote')} label="Quote" icon={<Quote />} />
                    </CollapsableButtons>

                    <MoreButton onClick={() => console.log('more')} label="more" icon={<More />} />
                </Row>

                <Button variant='tertiary' size='L'>Preview mode</Button>
            </Row>
        </NavWrapper>
    )
}

export default WysiwygNav;
