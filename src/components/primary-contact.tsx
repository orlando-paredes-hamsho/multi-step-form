import React from 'react';
import { observer } from 'mobx-react-lite';
import { AppProps } from '../stores/application';
import { Card, Box, Text, Padding, Title, Field, Input, Button } from '@/ui';

const PrimaryContact = observer(
  (props: AppProps): JSX.Element => {
    const { app } = props;
    return (
      <Card>
        <Box>
          <Padding top={32} bottom={0} right={32} left={32}>
            <Title size={24} as="h3" marginBottom={12}>
              Who is the primary contact for this policy?
            </Title>
            <Text size="large">
              This person will receive all communications from Newfront about this policy. You can change this
              information later. If you&apos;re not sure, just add your contact information.
            </Text>
          </Padding>
        </Box>
        <Box borderBottom={1}>
          <Padding top={20} bottom={20} right={32} left={32}>
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
          <Padding top={20} bottom={20} right={32} left={32}>
            <Button style={{ display: 'block', marginRight: 0, marginLeft: 'auto' }} onClick={() => app.setStep(2)}>
              Next
            </Button>
          </Padding>
        </Box>
      </Card>
    );
  },
);

export default PrimaryContact;
