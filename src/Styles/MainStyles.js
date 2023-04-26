import styled from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import { FlexRow, FlexHalf } from 'Styles/CommonStyles'
import { Colors, Images } from 'Themes'
import { media } from 'Utils/Media'

export const ShadowBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.3rem;
  border-radius: 4px;
  background-color: ${Colors.menuBlue};
  box-shadow: 0 0.3rem 1.3em rgba(0, 0, 0, 0.2);
`

export const WinnerName = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${Colors.white};
  display: block;
  text-align: left;
  margin-bottom: 0.35rem;
  white-space: nowrap;
  line-height: 1.2rem;
  ${props =>
    props.width ? `width: ${props.width};` : `width: 100%;`} overflow: hidden;
  text-overflow: ellipsis;
`

export const WinDate = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: #737594;
  display: block;
  text-align: left;
`

export const WinId = styled.span`
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin-top: 0.8rem;
`

export const WinAmount = styled.span`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 600;
  color: ${Colors.orange};
  display: block;
  text-align: left;
`

export const RightAlign = styled.div`
  text-align: right;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: flex-end;
  display: flex;
  height: 100%;
`

export const DrawItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 4px;
  background-color: ${Colors.menuBlue};
  box-shadow: 0 0.3rem 4.3em rgba(0, 0, 0, 0.2);
  min-height: 307px;
`

export const DrawDate = styled.div`
  display: block;
  margin: 0.5rem auto;
  opacity: 0.75;
  color: #d8d8e3;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`

export const DrawCount = styled.div`
  color: ${Colors.white};
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  background: url(${Images.stickLeft}) left center no-repeat,
    url(${Images.stickRight}) right center no-repeat;
`

export const DrawInfoName = styled.span`
  color: ${Colors.white};
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0.55;
  text-transform: uppercase;
  text-align: left;
`

export const DrawInfoTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0.8em;
  margin-top: 1rem;
`

export const DrawInfoValue = styled.span`
  color: ${Colors.white};
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: right;
`

export const Ball = styled.span`
  font-weight: 600;
  font-size: 1rem;
  width: 2.25rem;
  height: 2.25rem;
  line-height: 2.25rem;
  border-radius: 50%;
  text-align: center;

  ${props =>
    props.win &&
    `
    background-image: radial-gradient(circle 2.2rem at 5% 7%, #46ddb2 0%, #36d2dc 100%);
    color: #0c3b35;
  `}
  ${props =>
    props.power &&
    `
    background-image: linear-gradient(135deg, #ffb037 0%, #f7841d 100%);
    color ${Colors.white}
  `}
  ${props =>
    !props.win &&
    !props.power &&
    `
    background-color: rgba(255, 255, 255, 0.1);
    color: ${Colors.white}
  `}

  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }

  ${media.between('sm', 'lg')`
    width: 1.8rem;
    height: 1.8rem;
    line-height: 1.8rem;
  `}
`

export const BoxItem = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background: url(${Images.verticalDivider}) right center no-repeat;

  ${media.lessThan('xs')`
    background: url(${Images.horizontalDivider}) bottom center no-repeat;
    padding-bottom: 1.25rem;
  `};
`

export const TimerItem = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: url(${Images.verticalDivider}) right center no-repeat;

  ${media.lessThan('xs')`
    background: none;
  `};
`

export const PromoSlider = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8rem;
  background-color: rgba(255, 255, 255, 0.1);

  ${media.lessThan('sm')`
    width: 100%;
    justify-content: center;
    flex-direction: column;
    border-radius: 0;

    .promo-slider-play {
      display: block;
      width: 100%;
      border-radius: 0;
      text-align: center;
    }
  `} ${media.between('md', 'lg')`
    .promo-slider-play {
      font-size: 0.8rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  `};
`

export const PromoSliderWrap = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const PromoSliderText = styled.span`
  font-size: 0.85rem;
  text-transform: uppercase;
  color: ${Colors.white};
  display: block;
  text-align: center;
  margin-right: 1.3rem;
  font-weight: 500;

  ${media.lessThan('lg')`
    font-size: 0.75rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  `} ${media.lessThan('sm')`
    margin: 0;
  `};
`

export const BoxTitle = styled.span`
  font-size: 1rem;
  color: ${Colors.white};
`

export const DescText = styled.span`
  font-size: 1.1rem;
  line-height: 1.6rem;
  color: ${Colors.white};
  ${media.lessThan('xs')`
    line-height: 1.25rem;
    font-size: 0.875rem;
  `};
`

export const LeftToPlay = styled.span`
  font-size: 0.9rem;
  line-height: 1.3rem;
  margin-top: 0.55rem;
  color: ${Colors.white};
  opacity: 0.6;
  display: inline-block;
  font-weight: 500;
`

export const JackpotTitle = styled.span`
  font-size: 1rem;
  color: ${Colors.orange};
`

export const JackpotCount = styled.span`
  font-size: 2rem;
  text-transform: uppercase;
  color: ${Colors.orange};
`

export const JackpotCurrency = styled(JackpotCount)`
  opacity: 0.5;
  margin-left: 0.5rem;
`

export const JackpotCurrencyUSD = styled.span`
  font-size: 0.8rem;
  color: ${Colors.white};
  display: block;
  margin-top: 0.5rem;
  font-weight: 400;
`
export const PromoBox = styled.div`
  border-radius: 8rem;
  background-color: ${Colors.menuBlue};
  overflow: hidden;
  margin-bottom: 4rem;

  ${media.lessThan('sm')`
    border-radius: 1.75rem;
    margin-bottom: 2.25rem;
  `} ${media.lessThan('xs')`
    margin-bottom: 1.25rem;
  `};
`

export const PromoCol = styled(Col)`
  padding: 1.3rem 0 1.3rem 2.8rem;
  ${media.lessThan('sm')`
    padding-bottom: 1.875rem;
  `} ${media.lessThan('xs')`
    padding-left: 2rem;
    padding-right: 2rem;
  `};
`

export const PromoRow = styled(Row)`
  ${media.lessThan('xs')`
    flex-direction: column;
  `};
`

export const HowItem = styled.div`
  width: calc(100% / 4);

  ${media.lessThan('sm')`
      width: calc(100%/2)
    `} padding: 0 15px 15px;
`

export const HowList = styled.div`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
  flex-wrap: wrap;
`

export const RecentItem = styled.div`
  padding-right: 0.75rem;
  padding-left: 0.75rem;
`

export const RecentSliderWrapper = styled.div`
  .slick-list {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }
`

export const RecentBetsBall = styled.span`
  display: flex;
  width: 1.9rem;
  height: 1.9rem;
  align-items: center;
  justify-content: center;
  margin-left: 0.2rem;
  margin-right: 0.1rem;
  border-radius: 1.4rem;
  font-size: 0.9rem;
  ${props =>
    props.power
      ? `
    background-image: linear-gradient(135deg, #ffb037 0%, #f7841d 100%);
    color ${Colors.white}
  `
      : `
    background-color: rgba(255, 255, 255, 0.1);
    color: ${Colors.white}
  `} text-align: center;
  font-weight: 600;
`

export const RecentTableSectionBox = styled.div`
  display: block;
  border-radius: 4px;
  background-color: ${Colors.menuBlue};
  min-height: 23.1rem;
  width: 100%;
`

export const RecentTableSectionHead = styled.div`
  display: block;
  padding: 1rem 1.5rem;
  ${props => props.paddingBottom || '1.5rem'};
`

export const RecentTableSectionHeadRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
`

export const RecentTableSectionTitle = styled.span`
  color: ${Colors.white};
  font-weight: 400;
  ${props =>
    props.fontSize
      ? `
    font-size: ${props.fontSize};
  `
      : `
    font-size: 1.4rem;
  `} display: inline-block;
  height: 100%;
  line-height: 2.5rem;
  text-align: left;
  align-self: left;

  ${media.lessThan('xs')`
    font-size: 1.125rem;
    line-height: 2rem;
  `};
`

export const RecentTableStatisticsRow = styled(FlexRow)`
  ${media.lessThan('sm')`
    flex-direction: column;
  `};
`

export const RecentTableStatisticsCol = styled(FlexHalf)`
  ${media.greaterThan('sm')`
    &:first-child {
      margin-right:1px;
    }

    &:last-child {
      margin-left:1px;
    }
  `} ${media.lessThan('sm')`
    width: 100%;
    margin-bottom: 1.25rem;
    border-radius: 0.25rem;
  `};
`

export const RecentTableStatisticsGrid = styled(Grid)`
  ${media.lessThan('xs')`
    padding-right: 0 !important;
    padding-left: 0 !important;
  `};
`
