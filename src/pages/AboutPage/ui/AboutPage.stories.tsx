import React from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StateDecorator } from 'shared/config/storybook/StateDecorator';
import AboutPage from './AboutPage';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (
    args: Partial<ArgTypes<unknown>>
) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AboutPage {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StateDecorator()];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StateDecorator()];
