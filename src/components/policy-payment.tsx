/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { observer } from 'mobx-react-lite';
import { AppProps } from '../stores/application';
import { Card, Box, Padding, Title, SelectableRow, Button } from '@/ui';

const PolicyPayment = observer(
  (props: AppProps): JSX.Element => {
    const { app } = props;
    return (
      <Card>
        <Box>
          <Padding top={32} bottom={0} right={32} left={32}>
            <Title size={24} as="h3" marginBottom={12}>
              How do you want to pay for your policy?
            </Title>
          </Padding>
        </Box>
        <Box borderBottom={1}>
          <Padding top={20} bottom={20} right={32} left={32}>
            <SelectableRow
              title="I want to pay Newfront"
              subtitle="You'll pay Newfront instead of paying each insurance company separately. There are no fees"
              onClick={() => {}}
              isSelected
            />
            <SelectableRow
              title="I want to pay the insurance company directly"
              subtitle={`You'll receive bills from the insurance company and it will be your
              responsibility to make sure they are paid to keep your coverage`}
              categoryLabel="RECOMMENDED"
              categoryType="success"
              onClick={() => {}}
              isSelected={false}
            />
          </Padding>
        </Box>
        <Box>
          <Padding top={20} bottom={20} right={32} left={32}>
            <Button size="secondary" onClick={() => app.setStep(app.step - 1)}>
              Back
            </Button>
            <Button size="primary" style={{ float: 'right' }}>
              Finish
            </Button>
          </Padding>
        </Box>
      </Card>
    );
  },
);

export default PolicyPayment;
