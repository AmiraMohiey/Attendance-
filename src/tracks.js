import React from 'react';
import {List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectField, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';


export const TrackList = (props) => (
    <List {...props}>
        <Datagrid>
            
            <TextField source="id" />
            <TextField source="code" />
            <TextField source="name" />
             <ReferenceField label="Branch" source="branch['id']" reference="branches" allowEmpty>
             <TextField source="name" />
             </ReferenceField>
           
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
               <ReferenceInput label="Track" source="id" reference="branches" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
           
        </SimpleForm>
    </Edit>
);

export const TrackCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
         
            <TextInput source="name" />
            <TextInput source="code" />
               <ReferenceInput label="Track" source="id" reference="branches" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);