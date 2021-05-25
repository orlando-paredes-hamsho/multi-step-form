import React from 'react';
import { Card, Box, Padding, Title, Field, Input, Button, CheckboxRow } from '@/ui';

export default function AboutYourEmployees(): JSX.Element {
  return (
    <Card>
      <Box>
        <Padding top={32} bottom={0} right={32} left={32}>
          <Title size={24} as="h3" marginBottom={12}>
            Tell us about your employees
          </Title>
        </Padding>
      </Box>
      <Box borderBottom={1}>
        <Padding top={20} bottom={20} right={32} left={32}>
          <Field
            fieldId="doctorName"
            label="What is the name of the clinic, physician or ER used for work injuries?"
            hint=""
          >
            <Input fieldId="doctorName" type="text" isRequired />
          </Field>
          <Padding top={20} bottom={12}>
            <CheckboxRow label="Do you provide medical insurance?" />
            <CheckboxRow label="Do you offer a retirement or pension plan?" />
            <CheckboxRow label="Do you give paid vacation?" isActive />
          </Padding>
          <Field fieldId="vacationDetails" label="Please provide details about paid vacation" hint="">
            <Input fieldId="vacationDetails" type="text" />
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
