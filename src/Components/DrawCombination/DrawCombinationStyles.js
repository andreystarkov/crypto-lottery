import styled from 'styled-components'

import { Colors } from 'Themes'

export const Ball = styled.span`
  display: flex;
  width: 2.1rem;
  height: 2.1rem;
  align-items: center;
  justify-content: center;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  border-radius: 1.5rem;
  font-size: 0.85rem;
  ${props => props.win && `
    background-image: radial-gradient(circle 2.2rem at 5% 7%, #46ddb2 0%, #36d2dc 100%);
    color: #0c3b35;
  `}
  ${props => props.power && props.win && `
    background-image: linear-gradient(135deg, #ffb037 0%, #f7841d 100%);
    color ${Colors.white}
  `}
  ${props => !props.win && `
    background-color: rgba(255, 255, 255, 0.1);
    color: ${Colors.white}
  `}
  text-align: center;
  font-weight: 600;
`
