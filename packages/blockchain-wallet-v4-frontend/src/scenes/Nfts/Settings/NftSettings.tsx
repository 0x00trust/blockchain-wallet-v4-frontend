import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Switch } from '@blockchain-com/constellation'
import styled from 'styled-components'

import { Text } from 'blockchain-info-components'
import { Flex } from 'components/Flex'
import { Props as OwnProps } from 'layouts/Nfts/Nfts'
import { media } from 'services/styles'

import NftSettingsMenu from './NftSettingsMenu'

const SettingsSection = styled.div`
  padding: 32px;
  border-bottom: 1px solid ${(props) => props.theme.grey000};
`

const SettingsOption = styled.div`
  border-radius: 8px;
  padding: 16px 24px;
  background: ${(props) => props.theme.greyFade000};
`

const SettingsOptionsWrapper = styled.div`
  display: grid;
  gap: 16px;
  width: 100%;
  margin-top: 16px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  ${media.laptop`
    grid-template-columns: repeat(1, minmax(0, 1fr));
  `}
`

const NftSettings: React.FC<Props> = ({ ethAddress, isAuthenticated, routerActions }) => {
  const currentAddress = window.location.href.split('/nfts/address/settings/')[1]
  const [switches, setSwitches] = useState<{ [key in string]?: boolean }>({})

  if (!isAuthenticated) {
    routerActions.push('/login')
  }

  if (ethAddress.toLowerCase() !== currentAddress?.toLowerCase()) {
    routerActions.push('/login')
  }

  return (
    <div style={{ paddingTop: '0px' }}>
      <Flex>
        <NftSettingsMenu />
        <div style={{ width: '100%' }}>
          <SettingsSection>
            <Text size='24px' color='black' weight={600}>
              <FormattedMessage id='copy.notifications' defaultMessage='Notifications' />
            </Text>
          </SettingsSection>
          <SettingsSection>
            <Text size='20px' weight={600} color='black'>
              <FormattedMessage id='copy.my_items_for_sale' defaultMessage='My Items For Sale' />
            </Text>
            <Text size='12px' weight={500}>
              <FormattedMessage
                id='copy.get_notified_for_items_i_own'
                defaultMessage='Get notified for items that I own'
              />
            </Text>
            <SettingsOptionsWrapper>
              <SettingsOption>
                <Flex justifyContent='space-between' alignItems='center'>
                  <Flex flexDirection='column' gap={2}>
                    <Text size='16px' weight={600} color='black'>
                      <FormattedMessage id='copy.item_sold' defaultMessage='Item Sold' />
                    </Text>
                    <Text size='14px' weight={500}>
                      <FormattedMessage
                        id='copy.when_item_sold'
                        defaultMessage='When someone purchases one of your items'
                      />
                    </Text>
                  </Flex>
                  <Switch
                    checked={switches.item_sold}
                    onClick={() => setSwitches((x) => ({ ...x, item_sold: !x.item_sold }))}
                  />
                </Flex>
              </SettingsOption>
              <SettingsOption>
                <Flex justifyContent='space-between' alignItems='center'>
                  <Flex flexDirection='column' gap={2}>
                    <Text size='16px' weight={600} color='black'>
                      <FormattedMessage id='copy.auction_ended' defaultMessage='Auction Ended' />
                    </Text>
                    <Text size='14px' weight={500}>
                      <FormattedMessage
                        id='copy.when_auction_ended'
                        defaultMessage='When a timed auction you created ends'
                      />
                    </Text>
                  </Flex>
                  <Switch
                    checked={switches.auction_ended}
                    onClick={() => setSwitches((x) => ({ ...x, auction_ended: !x.auction_ended }))}
                  />
                </Flex>
              </SettingsOption>
              <SettingsOption>
                <Flex justifyContent='space-between' alignItems='center'>
                  <Flex flexDirection='column' gap={2}>
                    <Text size='16px' weight={600} color='black'>
                      <FormattedMessage id='copy.bid_activity' defaultMessage='Bid Activity' />
                    </Text>
                    <Text size='14px' weight={500}>
                      <FormattedMessage
                        id='copy.when_bid_activity'
                        defaultMessage='When someone bids higher on one of your items'
                      />
                    </Text>
                  </Flex>
                  <Switch
                    checked={switches.bid_activity}
                    onClick={() => setSwitches((x) => ({ ...x, bid_activity: !x.bid_activity }))}
                  />
                </Flex>
              </SettingsOption>
            </SettingsOptionsWrapper>
          </SettingsSection>
          <SettingsSection>
            <Text size='20px' weight={600} color='black'>
              <FormattedMessage id='copy.creator_items' defaultMessage='Other Creators Items' />
            </Text>
            <Text size='12px' weight={500}>
              <FormattedMessage
                id='copy.get_notified_for_items_i_own'
                defaultMessage='Get notified for items that I interact with'
              />
            </Text>
            <SettingsOptionsWrapper>
              <SettingsOption>
                <Flex justifyContent='space-between' alignItems='center'>
                  <Flex flexDirection='column' gap={2}>
                    <Text size='16px' weight={600} color='black'>
                      <FormattedMessage
                        id='copy.successful_purchase'
                        defaultMessage='Successful Purchase'
                      />
                    </Text>
                    <Text size='14px' weight={500}>
                      <FormattedMessage
                        id='copy.when_successful_purchase'
                        defaultMessage='When you successfully buy an item'
                      />
                    </Text>
                  </Flex>
                  <Switch
                    checked={switches.successful_purchase}
                    onClick={() =>
                      setSwitches((x) => ({ ...x, successful_purchase: !x.successful_purchase }))
                    }
                  />
                </Flex>
              </SettingsOption>
              <SettingsOption>
                <Flex justifyContent='space-between' alignItems='center'>
                  <Flex flexDirection='column' gap={2}>
                    <Text size='16px' weight={600} color='black'>
                      <FormattedMessage id='copy.offer_accepted' defaultMessage='Offer Accepted' />
                    </Text>
                    <Text size='14px' weight={500}>
                      <FormattedMessage
                        id='copy.when_offer_accepted'
                        defaultMessage='When a seller accepts your offer'
                      />
                    </Text>
                  </Flex>
                  <Switch
                    checked={switches.offer_accepted}
                    onClick={() =>
                      setSwitches((x) => ({ ...x, offer_accepted: !x.offer_accepted }))
                    }
                  />
                </Flex>
              </SettingsOption>
              <SettingsOption>
                <Flex justifyContent='space-between' alignItems='center'>
                  <Flex flexDirection='column' gap={2}>
                    <Text size='16px' weight={600} color='black'>
                      <FormattedMessage id='copy.outbid' defaultMessage='Outbid' />
                    </Text>
                    <Text size='14px' weight={500}>
                      <FormattedMessage
                        id='copy.when_outbid'
                        defaultMessage='When your offer is exceeded by another user'
                      />
                    </Text>
                  </Flex>
                  <Switch
                    checked={switches.outbid}
                    onClick={() => setSwitches((x) => ({ ...x, outbid: !x.outbid }))}
                  />
                </Flex>
              </SettingsOption>
            </SettingsOptionsWrapper>
          </SettingsSection>
        </div>
      </Flex>
    </div>
  )
}

type Props = OwnProps

export default NftSettings
