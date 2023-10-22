import {Meta, StoryObj} from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> ={
    title:'Button',
    component:Button,
    tags: ['autodocs'],
    argTypes:{
        variant:{
            options:['fulfilled','outlined','ghost','white'],
            control:{type:'select'},
            defaultValue:'fulfilled'
        },
        size:{
            options:['small','medium','large'],
            control:{type:'select'},
            defaultValue:'medium'
        }
    }
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    name:'Default',
    render: (args) => <Button {...args}>Button</Button>
}

export const Fulfilled: Story = {
    name:'Fulfilled',
    render: (args) => <Button variant={'fulfilled'} {...args}>Button</Button>
}
export const Outlined: Story = {
    name:'Outlined',
    render: (args) =>
        <div className={'flex flex-col w-[250px] gap-2'}>
            <Button variant={'outlined'} size={'large'} {...args}>Button</Button>
            <Button variant={'outlined'} size={'medium'}{...args}>Button</Button>
            <Button variant={'outlined'} size={'small'}{...args}>Button</Button>
        </div>
}


