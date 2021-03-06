const debounce = (func, waitTime, immediate) => {
  let timeout

  return function() {
    const context = this
    const args = arguments

    const later = function() {
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      }
    }

    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, waitTime)

    if (callNow) {
      func.apply(context, args)
    }
  }
}

export {
  debounce
}
