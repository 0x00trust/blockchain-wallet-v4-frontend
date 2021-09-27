import React from 'react'
import { FormattedMessage } from 'react-intl'

import {
  BankWaitIndicator,
  BankWrapper,
  Hr,
  LinkOptionsWrapper,
  LinkViaDesktop,
  ModalNavWithCloseIcon,
  ScanWithPhone,
  Section
} from '../../../../components'
import { Props as _P } from '.'

type Props = _P

const Success = (props: Props) => {
  const { order } = props.formValues
  const authUrl =
    (order.extraAttributes &&
      'authorisationUrl' in order.extraAttributes &&
      order.extraAttributes.authorisationUrl) ||
    ''
  const qrCode =
    (order.extraAttributes &&
      'qrcodeUrl' in order.extraAttributes &&
      order.extraAttributes.qrcodeUrl) ||
    ''

  return (
    <BankWrapper>
      <ModalNavWithCloseIcon handleClose={props.handleClose}>
        <FormattedMessage id='copy.connect_to_your_bank' defaultMessage='Connect to your bank' />
      </ModalNavWithCloseIcon>
      <LinkOptionsWrapper>
        <ScanWithPhone qrCode={qrCode}>
          <FormattedMessage
            id='modals.brokerage.link_via_mobile'
            defaultMessage='Link via mobile'
          />
        </ScanWithPhone>
        <Hr />
        <Section>
          <LinkViaDesktop authUrl={authUrl}>
            <FormattedMessage
              id='modals.brokerage.link_via_desktop'
              defaultMessage='Link via desktop'
            />
          </LinkViaDesktop>
          <BankWaitIndicator qrCode={qrCode} />
        </Section>
      </LinkOptionsWrapper>
    </BankWrapper>
  )
}

export default Success
