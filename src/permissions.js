import React from 'react';

import {List, Edit, Create, ReferenceField,Datagrid, TextField,DateField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput,EmailField , BooleanField } from 'admin-on-rest';

export const PermissionList = (props) => (
    <List title="All permissions" {...props}>
        <Datagrid>
            <TextField source="id" />
             <BooleanField label="Approved" source="accepted" />
            <DateField  source="date" />
            <TextField  source="user['username']" label="User" />
            
  <EditButton />
        </Datagrid>
    </List>
);
const PermissionName = ({ record }) => {
    return <span>Viewing permission  {record ? `"${record.id}"` : ''}</span>;
};
export const PermissionEdit = (props) => (
    <Edit title={<PermissionName />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            
            <BooleanField source="accepted" />
            <DateField source="date" />
           <TextField  source="user['username']" label="User" />
        </SimpleForm>
    </Edit>
);

