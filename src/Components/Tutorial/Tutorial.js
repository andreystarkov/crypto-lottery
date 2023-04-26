import React, { Component } from 'react'

import { ButtonMore, Floater } from 'Components'
import { Colors } from 'Themes'
import { TutorialContent, FloaterFooter, ButtonNext, ButtonPrev, Button } from 'Components/Tutorial/TutorialStyles'
import { scrollTo } from 'Utils'
import { animateElement } from 'Animation'
import { getLotteryBlocksStatus } from 'Utils/Lottery'
import { log } from 'Utils/Log'
import l from 'Intl'

export const TUTORIAL_SCROLL_DURATION = 600
export const TUTORIAL_ANIMATION_DURATION = 1000

export default class Tutorial extends Component {
  constructor (props) {
    super(props)
    this.tutorialSteps = [
      {
        content: l.t('tutorial.signin'),
        target: '.tutorial-step-1',
        customAction: {
          text: l.t('main.buttons.signin'),
          action: () => this.openSignIn()
        },
        page: '/'
      },
      {
        target: '#tickets-button',
        content: l.t('tutorial.buytickets'),
        position: 'bottom-end'
      },
      {
        content: this.getBlockStatusText(),
        target: '.tutorial-step-2',
        page: '/'
      },
      {
        content: l.t('tutorial.startplay'),
        target: '.tutorial-step-3',
        page: '/'
      },
      {
        content: l.t('tutorial.pastdraws'),
        target: '.tutorial-step-4',
        page: '/'
      },
      {
        content: l.t('tutorial.pastbets'),
        target: '.tutorial-step-5',
        page: '/'
      },
      {
        content: l.t('tutorial.pastwinners'),
        target: '.tutorial-step-6',
        page: '/',
        nextPage: '/tickets'
      },
      {
        content: l.t('tutorial.selectwhite'),
        target: '.tutorial-step-white',
        page: '/tickets'
      },
      {
        content: l.t('tutorial.selectpower'),
        target: '.tutorial-step-power'
      },
      {
        content: l.t('tutorial.removeOrAdd'),
        target: '.tutorial-step-add-tickets'
      },
      {
        content: l.t('tutorial.fillOrClear'),
        target: '.tutorial-step-auto-tickets'
      }
    ]
  }

  componentDidUpdate (prevProps) {
    const { tutorial } = this.props
    const { run, stepIndex } = tutorial
    if (prevProps.tutorial.stepIndex !== stepIndex && run) {
      // this.scrollToStep(stepIndex + 1)
      // this.pulseElement(stepIndex + 1)
    }
    if (prevProps.tutorial.run !== run) {
      // if (run) {
      //   disableScrolling()
      // } else {
      //   enableScrolling()
      // }
    }
  }

  nextStep = ({ target }) => {
    const { tutorialNext, tutorialClose, tutorial, location, history } = this.props
    const { stepIndex } = tutorial
    const nextTarget = this.tutorialSteps[stepIndex + 1].target
    log({ nextTarget })
    this.scrollToStep(nextTarget)

    tutorialNext()
    // const { pathname } = location
    // console.log({ pathname, nextPage, history })
    // if (nextPage && nextPage !== pathname) {
    //   tutorialClose()
    //   history.push(nextPage)
    //   setTimeout(() => tutorialNext(), 2000)
    // } else {
    //   tutorialNext()
    // }
  }

  prevStep = ({ target }) => {
    const { tutorialPrev } = this.props
    this.scrollToStep(target)
    tutorialPrev()
  }

  closeTutorial = () => {
    const { tutorialClose } = this.props
    tutorialClose()
  }

  scrollToStep (selector) {
    const e = document.querySelector(selector)
    // console.log({ selector, e })
    if (e) {
      const rect = e.getBoundingClientRect()
      const { top } = rect
      log({ selector, top, total: top + window.scrollY - 120, scrollY: window.scrollY })
      scrollTo(top + window.scrollY - 120, 400)
    }
  }

  pulseElement (selector) {
    // const selector = `.tutorial-step-${index}`
    const e = document.querySelector(selector)
    if (e) {
      // setTimeout(() => animateElement(e, 'pulse', TUTORIAL_ANIMATION_DURATION), TUTORIAL_SCROLL_DURATION)
    }
  }

  getBlockStatusText = () => {
    const { lottery } = this.props
    const { stage, blocksLeft } = getLotteryBlocksStatus(lottery)
    if (stage === 'sale') {
      return l.t('tutorial.inprogress') + ' ' + blocksLeft + ' ' + l.t('tutorial.inprogress')
    } else if (stage === 'raffle') {
      return l.t('tutorial.completed')
    } else if (stage === `profits`) {
      return l.t('tutorial.selected') + ' ' + blocksLeft + ' ' + l.t('tutorial.profit')
    } else {
      return l.t('tutorial.closed')
    }
  }

  renderStep = ({ content, target, page, nextPage, customAction }, key, arr) => {
    const { tutorial } = this.props
    const { run, stepIndex, position } = tutorial
    const showPrev = stepIndex > 0
    const showNext = stepIndex < arr.length - 1
    return (
      <Floater
        key={`floater:${key}`}
        content={content}
        open={run && stepIndex === key}
        position={position || 'auto'}
        target={target}
        debug
        footer={(
          <FloaterFooter>
            <Button onClick={this.closeTutorial}>Skip</Button>
            {showPrev ? <ButtonPrev onClick={() => this.prevStep({ target, page })}>Prev</ButtonPrev> : null}
            {customAction ? <Button onClick={customAction.action}>{customAction.text}</Button> : null}
            {showNext ? <ButtonNext onClick={() => this.nextStep({ target, nextPage })}>Next</ButtonNext> : null}
          </FloaterFooter>
        )} />
    )
  }

  openSignIn = () => {
    const { openModal, tutorialClose } = this.props
    openModal('signIn')
    tutorialClose()
  }

  render () {
    return (
      <div>
        {this.tutorialSteps.map(this.renderStep)}
      </div>
    )
  }
}
