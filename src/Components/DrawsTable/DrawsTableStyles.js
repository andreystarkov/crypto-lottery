import styled from 'styled-components'
import { Colors } from 'Themes'
export const Ball = styled.span`
  display: flex;
  width: 1.9rem;
  height: 1.9rem;
  align-items: center;
  justify-content: center;
  margin-left: 0.2rem;
  margin-right: 0.1rem;
  border-radius: 1.4rem;
  font-size: 0.9rem;
  ${props => props.power ? `
    background-image: linear-gradient(135deg, #ffb037 0%, #f7841d 100%);
    color ${Colors.white}
  ` : `
    background-color: rgba(255, 255, 255, 0.1);
    color: ${Colors.white}
  `}
  text-align: center;
  font-weight: 600;
`
