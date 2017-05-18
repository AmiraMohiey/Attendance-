import React from 'react';
import {List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectField, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';


export const QrcodeList = (props) => (
    <List {...props}>
        <Datagrid>
            
            <TextField source="id" />
            <TextField source="code" />
            <TextField source="name" />
        
           
         <EditButton  label="view Qrcode"   />
        </Datagrid>
    </List>
);
const QrcodeName = ({ record }) => {
    return <span>track {record ? `"${record.name}"` : ''}</span>;
};
export const QrcodeEdit = (props) => (
    <Edit title={<QrcodeName />} {...props}>
         <SimpleForm>
            <DisabledInput source="id" />
            
            <TextInput source="name" />
            <TextInput source="code" />
     
              
           
        </SimpleForm>
    </Edit>
);

