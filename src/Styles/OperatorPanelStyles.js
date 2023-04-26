import styled from 'styled-components'

import { Colors, Images, Gradients } from 'Themes'
import { Text } from 'Styles/Typography'
import { SectionHeader } from 'Styles/CommonStyles'
import { GradientButton, RoundButton } from 'Components'

import { media } from 'Utils/Media'

export const PanelWrapper = styled.div`
  padding: 1rem 1.5rem 0;
  min-height: 20rem;

  ${media.lessThan('sm')`
    padding-left: 1rem;
    padding-right: 1rem;
  `};
`

export const CenteredContent = styled.div`
  margin: 0 auto;
  padding-bottom: 2rem;
  text-align: center;
  ${props =>
    props.wide
      ? `
    max-width: 30.25rem;
  `
      : `
    max-width: 24.5rem;
  `};
`

export const PanelRow = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.8rem;
`

export const Title = styled(SectionHeader)`
  display: block;
  margin: 0;
  ${media.lessThan('sm')`
    font-size: 1.125rem;
    line-height: 1.5rem;
  `};
`

export const CenteredTitle = styled(Title)`
  margin: 1rem 0;
  text-align: center;
`

export const Subtitle = styled.h4`
  display: block;
  margin: ${props => props.margin || '0'};
  color: ${Colors.purpleGrey};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.5rem;
  text-transform: uppercase;
  text-align: ${props => props.align || 'left'};
  transition: color 0.2s ease-in-out;
`

export const Description = styled(Text)`
  display: block;
  margin: 0;
  text-align: center;
  color: ${Colors.purpleGrey};
  ${media.lessThan('sm')`
    font-size: 0.875rem;
    line-height: 1.5rem;
  `};
`

export const CenteredDescription = styled(Description)`
  max-width: 17.5rem;
  margin: 0 auto;
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`

export const LinkText = styled.span`
  display: block;
  max-width: 16.875rem;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: ${Colors.purpleGrey};
  text-overflow: ellipsis;
  overflow: hidden;
`

export const LinkIcon = styled.a`
  display: block;
  margin-left: 0.2rem;
  min-width: 0.8rem;
  width: 0.8rem;
  height: 0.8rem;
  background-image: url(${Images.icons.link});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;
`

export const Footer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 2rem;

  &::before {
    ${props =>
    props.border
      ? `
      content: '';
    `
      : `
      content: none;
    `} position: absolute;
    top: 0;
    left: 50%;
    height: 0.125rem;
    width: calc(100% + 3rem);
    transform: translateX(-50%);
    background-color: ${Colors.grey1};

    ${media.lessThan('sm')`
      width: 100%;
    `};
  }

  ${media.lessThan('sm')`
    flex-wrap: wrap;
  `};
  ${media.lessThan('xs')`
    padding: 1rem 0 2rem;
  `};
`
