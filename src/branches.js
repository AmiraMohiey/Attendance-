import React from 'react';
import {List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';


export const BranchList = (props) => (
    <List {...props}>
        <Datagrid>
            
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="address" />
            <TextField source="code" />
 <EditButton />
        </Datagrid>
    </List>
);
const BranchName = ({ record }) => {
    return <span>branch {record ? `"${record.name}"` : ''}</span>;
};
export const BranchEdit = (props) => (
    <Edit title={<BranchName />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            
            <TextInput source="name" />
            <TextInput source="address" />
             <TextInput source="code" />
           
        </SimpleForm>
    </Edit>
);

export const BranchCreate = (props) => (
    <Create {...props}>
        <SimpleForm>    
            <TextInput source="name" />
            <TextInput source="address" />
             <TextInput source="code" />
           
        </SimpleForm>
    </Create>
);