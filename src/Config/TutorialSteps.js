import React from 'react'
import { TutorialContent } from 'Components/Tutorial/TutorialStyles'

import l from 'Intl'

const tutorialSteps = [
  {
    content: (
      <TutorialContent text={l.t('tutorial.signin')} />
    ),
    placement: 'bottom',
    disableBeacon: true,
    styles: {
      options: {
        zIndex: 10000
      }
    },
    showProgress: false,
    hideBackButton: true,
    showSkipButton: true,
    disableOverlay: false,
    locale: { skip: l.t('tutorial.skip') },
    target: '.tutorial-step-1',
    continuous: true
  },
  {
    content: (
      <TutorialContent text={l.t('tutorial.blocks_counter')} />
    ),
    placement: 'bottom',
    disableBeacon: true,
    styles: {
      options: {
        zIndex: 10000
      }
    },
    locale: { skip: l.t('tutorial.skip') },
    target: '.tutorial-step-2'
  },
  // {
  //   content: 'Heyhey',
  //   placement: 'bottom',
  //   styles: {
  //     options: {
  //       width: 900
  //     }
  //   },
  //   target: '#some-selector-1',
  //   title: 'Our projects'
  // },
  // {
  //   title: 'Our Mission',
  //   content: (
  //     <div>
  //       You can render anything here.<br />
  //       <h3>Like whatever</h3>
  //     </div>
  //   ),
  //   target: '#some-selector',
  //   placement: 'top'
  // }
]

// It will inherit some properties from the Joyride's own props that can be overridden per step:

// beaconComponent
// disableCloseOnEsc
// disableOverlay
// disableOverlayClose
// disableScrolling
// floaterProps (check the getMergedStep function for more information)
// hideBackButton
// locale
// showProgress
// showSkipButton
// spotlightClicks
// spotlightPadding
// styles
// tooltipComponent
// And you can use these
// content {React.Node|string}
// The tooltip's body.

// disableBeacon {boolean} ▶︎ false
// Don't show the Beacon before the tooltip.

// event {string} ▶︎ click
// The event to trigger the beacon. It can be click or hover

// isFixed {boolean} ▶︎ false
// Force the step to be fixed.

// offset {React.Node|string} ▶︎ 10
// The distance from the target to the tooltip.

// placement {string} ▶︎ bottom
// The placement of the beacon and tooltip. It will re-position itself if there's no space available.
// It can be:

// top (top-start, top-end)
// bottom (bottom-start, bottom-end)
// left (left-start, left-end)
// right (right-start, right-end
// auto
// center
// Check react-floater for more information.

// placementBeacon {string} ▶︎ placement
// The placement of the beacon. It will use the placement if nothing is passed and it can be: top, bottom, left, right.

// styles {Object}
// Override the styling of the step's Tooltip

// target {Element|string} - required
// The target for the step. It can be a CSS selector or an HtmlElement directly (but using refs created in the same render would required an additional render afterwards).

// title {React.Node|string}
// The tooltip's title.

export default tutorialSteps
