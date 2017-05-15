import React from 'react';

import {List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput,EmailField } from 'admin-on-rest';

export const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <EmailField source="email" />
              {/*<ReferenceInput label="TRACK" source="track_id" reference="tracks">
                <SelectInput optionText="name" />
            </ReferenceInput>*/}
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
            <ReferenceInput label="Track" source="track_id" reference="tracks" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
          
            <TextInput source="username" />
            <TextInput source="email" />
             <TextInput source="password" />
               <ReferenceInput label="Track" source="track_id" reference="tracks" allowEmpty>
                <SelectInput optionText="track" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);