import React from 'react';
import {List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';


export const TrackList = (props) => (
    <List {...props}>
        <Datagrid>
            
            <TextField source="id" />
            <TextField source="code" />
            <TextField source="name" />
            <TextField source="branch[name]" label="Branch"/>
             {/*<ReferenceField label="Branch" source="branch[id]" reference="branches" allowEmpty>
               <SelectInput optionText="name"/>
            </ReferenceField>*/}
           
 <EditButton />
        </Datagrid>
    </List>
);
const TrackName = ({ record }) => {
    return <span>track {record ? `"${record.name}"` : ''}</span>;
};
export const TrackEdit = (props) => (
    <Edit title={<TrackName />} {...props}>
         <SimpleForm>
            <DisabledInput source="id" />
            
            <TextInput source="name" />
            <TextInput source="code" />
             
           
        </SimpleForm>
    </Edit>
);

export const TrackCreate = (props) => (
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