import anime from 'animejs'

export const animateById = (id, animation = 'fadeInLeft', duration = 500) => {
  const e = document.getElementById(id)
  animateElement(e, animation, duration)
}

export const animateElement = (e, animation = 'fadeInLeft', duration = 500) => {
  e.classList.add('animated')
  e.classList.add('animation-default-config')
  e.classList.add(animation)
  setTimeout(() => {
    e.classList.remove('animated')
    e.classList.remove(animation)
  }, duration)
}

export const animateModalClose = (duration = 350) => {
  anime({
    targets: '#modal-content',
    opacity: [1, 0],
    scale: [1, 0.95],
    translateY: [0, 100],
    easing: 'easeInOutCirc',
    elasticity: 300,
    duration
  })
  anime({
    targets: '.ReactModal__Overlay',
    opacity: [1, 0],
    easing: 'easeOutSine',
    elasticity: 800,
    duration: duration
  })
}