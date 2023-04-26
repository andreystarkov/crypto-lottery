import { animateById } from './'
import { rem, getOffset, scrollTo } from 'Utils'

export const removeTicketAnimation = (count, afterAnimation, currentId) => {
  const id = `ticket-container-${currentId || count}`
  const isLast = (!currentId || currentId === count)
  const duration = isLast ? 250 : 100
  const animation = isLast ? 'fadeOutRight' : 'fadeOut'
  animateById(id, animation)
  if (afterAnimation) setTimeout(afterAnimation, duration + 50)
  const isRowRemoved = (count > 1 && (count - 1) % 3 === 0)
  if (isRowRemoved) {
    const el = document.getElementById(`ticket-container-${count - 1}`)
    const { top } = getOffset(el)
    const scrollTop = top - (rem * 5)
    scrollTo(scrollTop, duration)
  }
}

export const addTicketAnimation = (count) => {
  const id = `ticket-container-${count}`
  const animation = 'fadeInRight'
  animateById(id, animation)
  const isNewRow = (count % 3 === 1)
  if (isNewRow) {
    const duration = 340
    const el = document.getElementById(id)
    const { top } = getOffset(el)
    const scrollTop = top - (rem * 5)
    scrollTo(scrollTop, duration)
  }
}
