import { log } from 'Utils/Log'

export function addClass (elem, clazz) {
  if (!hasClass(elem, clazz)) {
    elem.className += ' ' + clazz
  }
}

export function hasClass (elem, clazz) {
  return new RegExp('( |^)' + clazz + '( |$)').test(elem.className)
}

export function getViewportOffset (element) {
  var node = element
  let left = node.offsetLeft
  let top = node.offsetTop

  node = node.parentNode

  do {
    var styles = getComputedStyle(node)

    if (styles) {
      var position = styles.getPropertyValue('position')

      left -= node.scrollLeft
      top -= node.scrollTop

      if (/relative|absolute|fixed/.test(position)) {
        left += parseInt(styles.getPropertyValue('border-left-width'), 10)
        top += parseInt(styles.getPropertyValue('border-top-width'), 10)
        left += node.offsetLeft
        top += node.offsetTop
      }

      node = position === 'fixed' ? null : node.parentNode
    } else {
      node = node.parentNode
    }
  } while (node)

  return { left: left, top: top }
}

export function getOffsetByClassName (className) {
  const el = document.getElementsByClassName(className)
  log({ className, el })
  return getOffset(el)
}

export function getOffsetById (id) {
  const el = document.getElementById(id)
  log({ id, el })
  return el && getOffset(el)
}

export function getOffset (el) {
  const rect = el.getBoundingClientRect()
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
    rect
  }
}

export function disableScrolling () {
  var x = window.scrollX
  var y = window.scrollY
  window.onscroll = function () { window.scrollTo(x, y) }
}

export function enableScrolling () {
  window.onscroll = function () {}
}
