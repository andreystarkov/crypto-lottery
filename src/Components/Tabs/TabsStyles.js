import styled from 'styled-components'
import Color from 'color'
import { Colors } from 'Themes'
import { media } from 'Utils/Media'

export const Tab = styled.span`
  display: inline-block;
  padding-bottom: 0.9rem;

  text-transform: uppercase;
  font-size: 0.88rem;
  font-weight: 600;
  margin-right: 1.5rem;
  cursor: pointer;
  transition: 0.45s cubic-bezier(0.23, 1, 0.320, 1);
  ${props => props.active ? `
    border-bottom: 4px solid ${Colors.lightBlue};
    color: ${Colors.lightBlue};
  ` : `
    border-bottom: 4px solid ${Color(Colors.lightBlue).alpha(0)};
    color: ${Colors.purpleGrey};
    &:hover {
      color: ${Colors.lightBlue};
      border-bottom: 4px solid ${Color(Colors.lightBlue).alpha(0.5)};
    }
  `}
`

export const TabsContainer = styled.div`
  position: relative;
  display: block;
  padding-left: 1.8rem;
  width: 100%;
  z-index: 2;

  ${media.lessThan('xs')`
    overflow: hidden;
    white-space: nowrap;
  `}
`

export const TabContent = styled.div`
  position: relative;
  display: block;
  width: 100%;
  border-top: 2px solid #313152;
`

export const TabCount = styled.div`
  display: inline-block;
  padding: 0.1rem 0.55rem;
  border-radius: 8px;
  background-color: #008cff;
  color: #fff;
  text-align:center;
  margin-left: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
`
