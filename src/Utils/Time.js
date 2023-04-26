
export const secondsToTime = (input, separator) => {
  const pad = (input) => {
    return input < 10 ? '0' + input : input
  }
  return [
    // pad(Math.floor(input / 3600)),
    pad(Math.floor(input % 3600 / 60)),
    pad(Math.floor(input % 60))
  ].join(typeof separator !== 'undefined' ? separator : ':')
}
