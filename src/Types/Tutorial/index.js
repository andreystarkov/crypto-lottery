import { shape, bool, number } from 'prop-types'

export const tutorialType = {
  isStarted: bool,
  run: bool,
  stepIndex: number
}

export default shape(tutorialType)
