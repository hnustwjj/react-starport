export function debounce(fn: () => void) {
  let timer: number | null = null
  return function () {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, 200)
  }
}
