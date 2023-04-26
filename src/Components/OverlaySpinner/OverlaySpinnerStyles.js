import styled from 'styled-components'

export const ViewportOverlay = styled.div`
  position: fixed;
  z-index: 999999;
  background-color: rgba(0,0,0,0.45);
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
