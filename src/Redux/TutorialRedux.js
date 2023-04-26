import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

import tutorialSteps from 'Config/TutorialSteps'

const { Types, Creators } = createActions({
  tutorialToggle: null,
  tutorialOpen: null,
  tutorialClose: null,
  tutorialUpdate: ['params'],
  tutorialNext: null,
  tutorialPrev: null,
  tutorialReset: null,
  tutorialStart: null
})

export const TutorialTypes = Types
export default Creators

export const TUTORIAL_INITIAL_STATE = {
  isStarted: false,
  run: false,
  stepIndex: 0
}

export const INITIAL_STATE = Immutable(TUTORIAL_INITIAL_STATE)

export const tutorialUpdate = (state, action) => state.merge({ ...action.params })

export const toggleTutorial = (state) => state.merge({ run: !state.run })

export const closeTutorial = state => state.merge({ run: false })
export const openTutorial = state => state.merge({ run: true })

export const tutorialStart = state => state.merge({ run: true, isStarted: true, stepIndex: 0 })

export const tutorialNext = state => state.merge({
  run: true,
  stepIndex: state.stepIndex + 1
})

export const tutorialPrev = state => state.merge({
  run: true,
  stepIndex: state.stepIndex - 1
})

export const tutorialReset = state => state.merge(TUTORIAL_INITIAL_STATE)

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TUTORIAL_TOGGLE]: toggleTutorial,
  [Types.TUTORIAL_OPEN]: openTutorial,
  [Types.TUTORIAL_START]: tutorialStart,
  [Types.TUTORIAL_CLOSE]: closeTutorial,
  [Types.TUTORIAL_UPDATE]: tutorialUpdate,
  [Types.TUTORIAL_NEXT]: tutorialNext,
  [Types.TUTORIAL_PREV]: tutorialPrev,
  [Types.TUTORIAL_RESET]: tutorialReset
})
