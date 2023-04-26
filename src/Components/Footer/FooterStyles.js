import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Colors } from 'Themes'
import { media } from 'Utils/Media'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
export const FooterLink = styled(Link)`
  color: ${Colors.purpleGrey};
  text-decoration: none;
  display: inline-block;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 0.9rem;
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    color: ${Colors.lightBlue}
  }

  ${media.lessThan('xs')`
    display:block;
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  `}
`

export const FooterContainer = styled.div`
  border-top: 1px solid #1a1a3d;
  background-color: ${Colors.footerBg};
  margin-top: 6rem;
`

export const FooterText = styled.div`
  font-size: 0.9rem;
  color: ${Colors.purpleGrey}
`

export const SocialButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;

  ${media.lessThan('xs')`
    justify-content:center;
  `}
`

export const SocialButton = styled.a`
  display: inline-block;
  width: 2.4rem;
  height: 2.4rem;
  text-align: center;
  background-image: url(${props => require(`Images/Icons/${props.icon}.svg`)});
  background-size: ${props => props.icon === 'facebook' ? '27%' : '45%'};
  border-radius: 3.5rem;
  background-color: ${Colors.menuBlue};
  background-position: center center;
  opacity: 0.3;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  margin-left: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #0088cc;
    opacity: 1;
  }
`

export const FooterRow = styled(Row)`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  align-items: center;

  ${props => props.space && css`
    justify-content: space-between;
  `}
`

export const FooterCol = styled(Col)`
  > a {
    display: inline-block;
  }

  ${media.lessThan('xs')`
    width: 100%;
    text-align: center;

    padding-bottom: 1rem;

    &:last-child {
      padding-bottom: 0;
    }
  `}
`

export const FooterMenu = styled(Col)`
  text-align: center;
  width: 100%;
`
