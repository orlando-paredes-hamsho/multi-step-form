import React from 'react';
import { Card, Box, Padding, Text, Title, Divider, SelectableRow, Button } from '@/ui';

export default function PolicyPayment(): JSX.Element {
  return (
    <Card>
      <Box>
        <Padding top={30} bottom={0} right={30} left={30}>
          <Title size={20} as="h3" marginBottom={12}>
            How do you want to pay for your policy?
          </Title>
        </Padding>
      </Box>
      <Box borderBottom={1}>
        <Padding top={20} bottom={20} right={30} left={30}>
          <SelectableRow
            title="I want to pay Newfront"
            subtitle="You'll pay Newfront instead of paying each insurance company separately. There are no fees"
            isSelected
          />
          <SelectableRow
            title="I want to pay the insurance company directly"
            subtitle={`You'll receive bills from the insurance company and it will be your
              responsibility to make sure they are paid to keep your coverage`}
            categoryLabel="RECOMMENDED"
            categoryType="success"
            isSelected={false}
          />
        </Padding>
      </Box>
      <Box>
        <Padding top={20} bottom={20} right={30} left={30}>
          <Button size="secondary">Back</Button>
          <Button size="primary">Finish</Button>
        </Padding>
      </Box>
    </Card>
  );
}
