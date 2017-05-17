import React from 'react';

import {List, Edit, Create, ReferenceField,Datagrid, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput,EmailField } from 'admin-on-rest';

export const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <EmailField source="email" />
              <ReferenceField label="TRACK" source="trackid" reference="tracks" allowEmpty>
                <TextField source="name" />
            </ReferenceField>
  <EditButton />
        </Datagrid>
    </List>
);
const UserName = ({ record }) => {
    return <span>Editing user {record ? `"${record.username}"` : ''}</span>;
};
export const UserEdit = (props) => (
    <Edit title={<UserName />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            
            <TextInput source="username" />
            <TextInput source="email" />
            {/*<ReferenceInput label="Track" source="trackid" reference="tracks" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>*/}
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
          
            <TextInput source="username" />
            <TextInput source="email" />
             <TextInput source="password" />
              <ReferenceInput label="track" source="trackid" reference="tracks" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);