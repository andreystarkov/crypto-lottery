import styled from 'styled-components'

import { Colors, Images } from 'Themes'
import { BlueText, BlueLink } from 'Styles/CommonStyles'
import { Col } from 'react-styled-flexboxgrid'
import { media } from 'Utils/Media'

export const AccountStatusContainer = styled.div`
  max-width: 13.5rem;
  margin-right: 1rem;
  cursor: ${props => !props.disabled ? 'pointer' : 'default'};
`
export const Avatar = styled.span`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  cursor: ${props => !props.disabled ? 'pointer' : 'default'};
  font-weight: 600;
  background: url(${Images.icons.user}) center center no-repeat;
  background-size: contain;
  justify-content: center;
  color: ${Colors.purpleGrey};
  text-transform: uppercase;
`

export const Balance = styled.span`
  align-items: center;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: left;
  color: ${Colors.orange};
  border-radius: 3rem;
  text-transform: uppercase;
  transition: opacity 0.44s cubic-bezier(0.19, 1, 0.22, 1);
`

export const LogoutButton = styled.span`
  width: 1.4rem;
  height: 1.3rem;
  display: inline-block;
  background: url(${Images.icons.logout}) center center no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: opacity 0.45s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  &:hover {
    opacity: 0.8;
  }
`

export const Transaction = styled(BlueLink)`
  text-align: left;
  font-size: 0.8rem;
  font-weight: 600;
  width: 100%;
`

export const TransactionText = styled(BlueText)`
  text-align: left;
  font-size: 0.8rem;
  font-weight: 600;
  width: 100%;
`

export const AccountCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${media.greaterThan('xs')`
    padding-left: 0;
    padding-right: 0;
  `}
`
