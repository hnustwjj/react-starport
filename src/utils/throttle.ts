export function throttle(fn: () => void) {
  let preTime = 0
  return function () {
    const nowTime = new Date().getTime()
    if (nowTime - preTime > 300) {
      fn()
      preTime = nowTime
    }
  }
}
