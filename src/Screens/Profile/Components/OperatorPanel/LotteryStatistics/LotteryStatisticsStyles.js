import styled, { keyframes } from 'styled-components'
import { Row, Col } from 'react-styled-flexboxgrid'
import { GradientBorderButton } from 'Components'
import { BasicInput } from 'Styles/Inputs'
import { MainBlueButton, SecondaryGrayButton } from 'Styles/Buttons'
import { LinkWrapper, LinkText, Subtitle } from 'Styles/OperatorPanelStyles'

import { Colors, Images } from 'Themes'

import { media } from 'Utils/Media'

const rotateRefresh = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-180deg);
  }
`

export const OperatorPanelContainer = styled.div`
  padding: 1rem 1.5rem 0;
  min-height: 20rem;
`

export const Header = styled.div`
  padding-bottom: 1rem;
  border-bottom: 2px solid ${Colors.grey1};
  ${media.lessThan('xs')`
    padding-bottom: 0;
  `};
`

export const MobHeaderCol = styled(Col)`
  ${media.lessThan('sm')`
    width: 100%;
    margin-bottom: 1rem;
  `};
`

export const HeaderLinkWrapper = styled(LinkWrapper)`
  margin-top: 0.1rem;
`

export const OdometerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  ${media.lessThan('sm')`
    justify-content: flex-start;
  `};
`

export const OdometerIcon = styled.span`
  width: 1.5rem;
  height: 2.375rem;
  margin-right: 1.25rem;
  background-image: url(${Images.icons.sandclockGrey});
  background-size: contain;
  background-position: center;

  ${media.lessThan('lg')`
    margin-right: 0.75rem;
  `};

  ${media.lessThan('xs')`
    margin-right: 0.5rem;
  `};
`

export const OdometerText = styled.span`
  max-width: 3.75rem;
  margin-left: 0.75rem;
  text-align: right;
  color: ${Colors.purpleGrey};

  ${media.lessThan('lg')`
    max-width: 3.5rem;
    margin-left: 0.5rem;
  `};

  ${media.lessThan('xs')`
    max-width: 3rem;
    font-size: 0.875rem;
  `};
`
export const OdometerRefresh = styled.a`
  margin-left: 1rem;
  text-decoration: none;

  & .refresh-icon {
    fill: ${Colors.purpleGrey};
    stroke: ${Colors.purpleGrey};
    transition-property: fill, stroke, transform;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    cursor: pointer;
  }

  &:hover {
    & .refresh-icon {
      fill: ${Colors.lightOrange};
      stroke: ${Colors.lightOrange};
      animation: ${rotateRefresh} 0.3s backwards ease-out;
    }
  }

  ${media.lessThan('lg')`
    margin-left: 0.5rem;
  `};
`

export const ManagerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  ${media.lessThan('xs')`
    padding: 1rem 0 0;
    flex-wrap: wrap;
  `};
`

export const ManagerTitle = styled.div`
  display: flex;
  align-items: center;

  &::before {
    content: '';
    width: 2.062rem;
    height: 2.1875rem;
    margin-right: 0.4rem;
    background-image: url(${Images.icons.manager});
    background-position: center;
    background-size: contain;
  }

  ${media.lessThan('sm')`
    margin-right: 3rem;
  `};

  ${media.lessThan('xs')`
    margin-bottom: 1rem;
  `};
`

export const ManagerContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 22.375rem;

  ${media.lessThan('sm')`
    max-width: 70%;
  `};

  ${media.lessThan('xs')`
    max-width: 100%;
    margin-bottom: 1rem;
    flex-grow: 1;
  `};
`

export const ManagerLinkWrapper = styled(LinkWrapper)`
  margin-right: 1.625rem;
  ${media.lessThan('sm')`
    margin-right: 1rem;
  `};

  ${media.lessThan('xs')`
    width: calc(100% - 5rem);
  `};
`

export const ManagerLinkText = styled(LinkText)`
  max-width: 16.125rem;
  ${media.lessThan('sm')`
    max-width: 14rem;
  `};
  ${media.lessThan('xs')`
    max-width: 100%;
  `};
`

export const ManagerResetButton = styled.span`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  transition: right 0.2s ease-in;
  cursor: pointer;

  .plus-icon {
    display: block;
    width: 1rem;
    height: 1rem;
    transform: rotate(45deg);
    fill: ${Colors.purpleGrey};
    transition: fill 0.2s ease-in-out;
  }

  &:hover {
    .plus-icon {
      fill: rgba(255, 255, 255, 0.5);
    }
  }
`

export const ManagerSaveButton = styled.span`
  opacity: 0;
  visibility: hidden;
  z-index: -2;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${Colors.lightBlue};
  transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -0.75rem;
    transform: translateY(-50%);
    width: 0.125rem;
    height: 1.625rem;
    opacity: 0.3;
    background-color: ${Colors.purpleGrey};
  }

  &:hover {
    background-color: ${Colors.blue};
  }
`

export const ManagerInput = styled(BasicInput)`
  min-width: 12.5rem;
  padding: 0.75rem 5.3125rem 0.6875rem 1.25rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;

  &:placeholder {
    color: ${Colors.purpleGrey};
  }

  &:valid {
    & ~ ${ManagerResetButton} {
      right: 3.625rem;
    }
    & ~ ${ManagerSaveButton} {
      opacity: 1;
      visibility: visible;
      z-index: 0;
    }
  }
`

export const StatisticsMobRow = styled(Row)`
  ${media.lessThan('xs')`
    margin-right: -0.5rem;
    margin-left: -0.5rem;
  `};
`

export const StatisticsMobCol = styled(Col)`
  ${media.lessThan('xs')`
    flex-basis: 100%;
    max-width: 100%;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  `};
`

export const StatisticsMobHalfCol = styled(Col)`
  ${media.lessThan('xs')`
    max-width: 100%;
    min-width: 11rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    flex-basis: 50%;
    flex-grow: 1;
  `};
`

export const StatisticsBlock = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem 1.25rem;
  border-radius: 0.25rem;
  border: 0.125rem solid ${Colors.grey1};
  ${media.lessThan('xs')`
    margin-bottom: 1rem;
    padding: 0.75rem 1rem;
  `};
`

export const StatisticsInfoList = styled.ul`
  display: block;
  padding: 0;
  margin: 0.8rem 0 0;
  list-style: none;
`

export const StatisticsInfoItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 0.7rem;
  &:last-child {
    margin-bottom: 0;
  }
`

export const StatisticsInfoTitle = styled.span`
  margin: 0;
  color: ${Colors.white};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
`

export const StatisticsInfoValue = styled.span`
  display: flex;
  flex-grow: 1;
  color: ${Colors.lightOrange};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-transform: uppercase;

  &::before {
    content: '';
    display: block;
    flex-grow: 1;
    margin: 0 0.1875rem 0.375rem;
    border-bottom: 0.0625rem dashed ${Colors.grey1};
  }
`
export const GameResultTop = styled.div`
  display: flex;
  align-items: center;
`

export const GameResultMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.3rem;
`

export const GameResultValue = styled.span`
  color: ${Colors.lightOrange};
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 2.375rem;
  ${media.lessThan('xs')`
    font-size: 1.5rem;
    line-height: 1.875rem;
  `};
`
export const GameResultIcon = styled.span`
  display: block;
  height: 1.875rem;
  width: 1.875rem;
  background-position: center;
  ${props =>
    props.icon === 'tickets'
      ? `
          background-image: url(${Images.icons.ticketsGreyBordered});
          background-size: contain;
        `
      : `
          background-image: url(${Images.icons.square});
          border-radius: 50%;
          border: 2px solid ${Colors.purpleGrey};
          background-size: 55% auto;
      `};
`

export const GameStatusWrapper = styled.ul`
  position: relative;
  display: block;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
`

export const GameStatusProgress = styled.li`
  position: absolute;
  left: -1.3rem;
  top: 1rem;
  bottom: 1rem;
  width: 0.125rem;
  padding: 0;
  margin: 0;
  background-image: linear-gradient(${Colors.lightBlue}, ${Colors.lightBlue}),
    linear-gradient(
      0deg,
      ${Colors.grey1} 0%,
      ${Colors.grey1} 49.9%,
      ${Colors.menuBlue} 50%,
      ${Colors.menuBlue} 100%
    );
  background-size: 100% ${props => props.progress || 0}, 100% 0.375rem;
  background-repeat: no-repeat, repeat-y;
  transform: translateX(-50%);
  transition: background-size 0.2s;

  ${media.lessThan('xs')`
    left: -1.05rem;
  `};

  ${media.lessThan('xxs')`
    bottom: 3.5rem;
  `};
`

export const GameStatusOdometer = styled.div`
  ${media.lessThan('xs')`
    margin-bottom: 0.5rem;
  `};
`

export const GameStatusButtonWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  max-width: 10.625rem;
  margin-right: 2rem;
  ${media.lessThan('xs')`
    min-width: 8.4375rem;
    margin-right: 1.5rem;
    margin-bottom: 0.5rem;
  `};
  ${media.lessThan('xxs')`
    min-width: 9rem;
  `};
`

export const GameStatusButton = styled.div`
  position: relative;
  padding: 0.34rem 0.8rem 0.41rem;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 0.75rem;
  text-transform: uppercase;
  text-align: center;
  color: ${Colors.purpleGrey};
  background-color: ${Colors.grey1};
  border-radius: 0.1875rem;
  box-sizing: border-box;
  transition-property: color, background-color;
  transition-duration: 0.4s;
  z-index: 1;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    height: 1.1rem;
    width: 1.1rem;
    background-color: ${Colors.grey1};
    border-radius: 0.1875rem;
    transform: translate(40%, -50%) rotate(45deg);
    transition-property: background-color;
    transition-duration: 0.4s;
    z-index: -1;
  }

  &:hover {
    color: ${Colors.white};
    background-color: ${Colors.lightBlue};

    &::before {
      background-color: ${Colors.lightBlue};
    }
  }

  ${media.lessThan('xs')`
    padding: 0.34rem 0.25rem 0.41rem;
  `};
`

export const GameStatusDot = styled.div`
  position: absolute;
  left: -1.3rem;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background-color: ${Colors.grey1};

  &::before {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    width: 1.2725rem; /* parent left value */
    height: 0.125rem;
    background-image: linear-gradient(
      90deg,
      ${Colors.grey1} 0%,
      ${Colors.grey1} 49.9%,
      ${Colors.menuBlue} 50%,
      ${Colors.menuBlue} 100%
    );
    background-repeat: repeat-x;
    background-size: 0.375rem 100%;
    transform: translateY(-50%);
    transition: background-size 0.2s;
  }

  ${media.lessThan('xs')`
    left: -1.05rem;
  `};
`

export const GameStatusField = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin-bottom: 1.25rem;
  &:last-child {
    margin-bottom: 0;
  }

  &:last-child ${GameStatusDot} {
    &::after {
      content: none;
    }
  }

  & ${GameStatusButton} {
    ${props =>
    props.active
      ? `
      background-color: ${Colors.lightBlue};
      color: ${Colors.white};
      pointer-events: none;
    `
      : ''};
  }

  & ${GameStatusButton} {
    &::before {
      ${props =>
    props.active
      ? `
      background-color: ${Colors.lightBlue};
    `
      : ''};
    }
  }

  & ${GameStatusDot} {
    ${props =>
    props.active
      ? `
      background-color: ${Colors.lightBlue};
    `
      : ''};
  }

  & ${GameStatusDot} {
    &::before {
      ${props =>
    props.active
      ? `
      background-image: none;
      background-color: ${Colors.lightBlue};
    `
      : ''};
    }
  }

  ${media.lessThan('xs')`
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
  `};
`

export const HintToggler = styled.a`
  position: relative;
  display: block;
  width: 1rem;
  height: 1rem;
  background-image: url(${Images.icons.questionVector});
  background-size: contain;
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
  ${props =>
    props.inline
      ? `
    margin-left: ${props.inline};
  `
      : null};
`

export const WinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.lessThan('sm')`
    width: 100%;
    margin-bottom: 2rem;
  `};
`

export const WinnerTitle = styled(Subtitle)`
  margin-bottom: 0.65rem;
`

export const FooterButtonWrapper = styled.div`
  ${media.lessThan('sm')`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 -0.5rem;
  `}
  ${media.lessThan('xs')`
    margin-bottom: -1rem;
  `}
`

export const FooterButtonLeft = styled.div`
  position: absolute;
  left: 0;
  bottom: 1.8rem;

  ${media.lessThan('sm')`
    position: static;
    left: auto;
    bottom: auto;
    flex: 40% 1 0;
    padding: 0 0.5rem;
  `};
  ${media.lessThan('xs')`
    min-width: 9.375rem;
    margin-bottom: 1rem;
  `}
`

export const FooterButtonRight = styled.div`
  position: absolute;
  right: 0;
  bottom: 1.65rem;

  ${media.lessThan('sm')`
    position: static;
    right: auto;
    bottom: auto;
    flex: 40% 1 0;
    padding: 0 0.5rem;
  `};
  ${media.lessThan('xs')`
    min-width: 9.375rem;
    margin-bottom: 1rem;
  `}
`

export const FooterActionButton = styled(GradientBorderButton)`
  padding: 1.05rem 2.88rem 1.1rem;
  font-size: 0.875rem;
  ${media.lessThan('sm')`
    width: 100%;
    text-align: center;
  `}
  ${media.lessThan('xs')`
    padding: 0.75rem 0.75rem 0.8rem;
  `}
`

export const FooterCancelButton = styled(SecondaryGrayButton)`
  padding: 0.93rem 2.4rem 0.97rem;
  ${media.lessThan('sm')`
    width: 100%;
    text-align: center;
  `}
  ${media.lessThan('xs')`
    padding: 0.63rem 0.75rem 0.67rem;
  `}
`

export const FooterBigButton = styled(MainBlueButton)`
  margin-left: auto;
  padding: 1rem 4rem;

  ${media.lessThan('xs')`
    margin-left: 0;
    width: 100%;
    padding: 1rem;
  `};
`
