import React from 'react';
import { Card, Box, Padding, Text, Title, Divider, Field, Input, Button } from '@/ui';

export default function AboutYourCompany(): JSX.Element {
  return (
    <Card>
      <Box>
        <Padding top={30} bottom={0} right={30} left={30}>
          <Title size={20} as="h3" marginBottom={12}>
            Tell us about your company
          </Title>
        </Padding>
      </Box>
      <Box borderBottom={1}>
        <Padding top={20} bottom={20} right={30} left={30}>
          <Field fieldId="companyName" label="Company name" hint="">
            <Input fieldId="companyName" type="text" isRequired />
          </Field>
          <Field fieldId="fein" label="What is your Federal Employer Identification Number? (FEIN)" hint="">
            <Input fieldId="fein" type="text" isRequired />
          </Field>
          <Field fieldId="yearsInBusiness" label="Years in business" hint="">
            <Input fieldId="yearsInBusiness" type="number" />
          </Field>
          <Field fieldId="numberOfLocations" label="Number of locations" hint="">
            <Input fieldId="numberOfLocations" type="number" />
          </Field>
          <Field fieldId="operationStates" label="In which states do you Operate" hint="">
            <Input fieldId="operationStates" type="text" />
          </Field>
        </Padding>
      </Box>
      <Box>
        <Padding top={20} bottom={20} right={30} left={30}>
          <Button size="secondary">Back</Button>
          <Button size="primary" style={{ float: 'right' }}>
            Next
          </Button>
        </Padding>
      </Box>
    </Card>
  );
}
