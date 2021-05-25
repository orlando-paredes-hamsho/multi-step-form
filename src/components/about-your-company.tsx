import React from 'react';
import { Card, Box, Padding, Title, Field, Input, Button } from '@/ui';

export default function AboutYourCompany(): JSX.Element {
  return (
    <Card>
      <Box>
        <Padding top={32} bottom={0} right={32} left={32}>
          <Title size={24} as="h3" marginBottom={12}>
            Tell us about your company
          </Title>
        </Padding>
      </Box>
      <Box borderBottom={1}>
        <Padding top={20} bottom={20} right={32} left={32}>
          <Field fieldId="companyName" label="Company name" hint="">
            <Input fieldId="companyName" type="text" style={{ marginBottom: 10 }} isRequired />
          </Field>
          <Field fieldId="fein" label="What is your Federal Employer Identification Number? (FEIN)" hint="">
            <Input fieldId="fein" type="text" style={{ marginBottom: 10 }} isRequired />
          </Field>
          <Field fieldId="yearsInBusiness" label="Years in business" hint="">
            <Input fieldId="yearsInBusiness" style={{ marginBottom: 10 }} type="number" />
          </Field>
          <Field fieldId="numberOfLocations" label="Number of locations" hint="">
            <Input fieldId="numberOfLocations" style={{ marginBottom: 10 }} type="number" />
          </Field>
          <Field fieldId="operationStates" label="In which states do you Operate" hint="">
            <Input fieldId="operationStates" type="text" />
          </Field>
        </Padding>
      </Box>
      <Box>
        <Padding top={20} bottom={20} right={32} left={32}>
          <Button size="secondary">Back</Button>
          <Button size="primary" style={{ float: 'right' }}>
            Next
          </Button>
        </Padding>
      </Box>
    </Card>
  );
}
