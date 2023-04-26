import styled, { css } from 'styled-components'
import { Colors, Images } from 'Themes'

const width = 40
const height = 40

export const LanguageSelectorWrapper = styled.div`
  width: ${width}px;
  height: ${height}px;
  position: relative;
`

export const CurrentLanguage = styled.div`
  width: ${width}px;
  height: ${height}px;
  border-radius: 50%;
  border:2px solid ${Colors.blue};
  cursor:pointer;

${props => props.selected && css`
  background-image: url(${Images.lang[props.selected]});
  background-size: cover;
  background-position: center;
`}
`

export const LanguageSelectorContent = styled.div`
  position:absolute;
  background-color: #313151;
  border-radius: ${width / 2}px;
`

export const LanguageListWrapper = styled.div`
  ${props => !props.show && css`
    display:none;
  `}

  padding:  0.2rem 0 ${width / 3}px;
`
export const LanguageItem = styled.div`
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.8rem;
  color: ${Colors.white};
  padding: 0.2rem 0;

  &:hover {
    background-color: rgba(255,255,255,0.2)
  }
`
