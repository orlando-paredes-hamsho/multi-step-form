import React from 'react';
import { Card, Box, Padding, Text, Title, Divider, Field, Input, Button } from '@/ui';

export default function PrimaryContact(): JSX.Element {
  return (
    <Card>
      <Box>
        <Padding top={30} bottom={0} right={30} left={30}>
          <Title size={20} as="h3" marginBottom={12}>
            Who is the primary contact for this policy?
          </Title>
          <Text>
            This person will receive all communications from Newfront about this policy. You can change this information
            later. If you&apos;re not sure, just add your contact information.
          </Text>
        </Padding>
      </Box>
      <Box borderBottom={1}>
        <Padding top={20} bottom={20} right={30} left={30}>
          <Field fieldId="fullName" label="Full name" hint="">
            <Input fieldId="fullName" type="text" style={{ marginBottom: 10 }} isRequired />
          </Field>
          <Field fieldId="role" label="Role" hint="">
            <Input fieldId="role" type="text" style={{ marginBottom: 10 }} />
          </Field>
          <Field fieldId="phoneNumber" label="Phone Number" hint="">
            <Input fieldId="phoneNumber" type="text" />
          </Field>
        </Padding>
      </Box>
      <Box>
        <Padding top={20} bottom={20} right={30} left={30}>
          <Button style={{ float: 'right' }}>Next</Button>
        </Padding>
      </Box>
    </Card>
  );
}
