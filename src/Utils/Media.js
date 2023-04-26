import { generateMedia } from 'styled-media-query'

// https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints

export const media = generateMedia({
  xxs: '375px',
  xs: '576px', // Extra small devices (portrait phones, less than 576px)
  sm: '768px', // Small devices (landscape phones, less than 768px)
  md: '992px', // Medium devices (tablets, less than 992px)
  lg: '1200px' // Large devices (desktops, less than 1200px)
})
