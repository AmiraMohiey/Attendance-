import React from 'react';
import {List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectField, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';


export const RuleList = (props) => (
    <List {...props}>
        <Datagrid>
            
            <TextField source="id" />
            <TextField source="days" />
            <TextField source="marks" />
         
           
 <EditButton />
        </Datagrid>
    </List>
);
const RuleName = ({ record }) => {
    return <span>Rule {record ? `"${record.id}"` : ''}</span>;
};
export const RuleEdit = (props) => (
    <Edit title={<RuleName />} {...props}>
         <SimpleForm>
            <DisabledInput source="id" />
            
            <TextInput source="days" />
            <TextInput source="marks" />
     
 
           
        </SimpleForm>
    </Edit>
);

export const RuleCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
         
            <TextInput source="days" />
            <TextInput source="marks" />
          
        </SimpleForm>
    </Create>
);