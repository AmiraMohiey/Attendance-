import React from 'react';
import {List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';


export const BranchList = (props) => (
    <List {...props}>
        <Datagrid>
             <ReferenceField label="User" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
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
            <ReferenceInput label="User" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const BranchCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);