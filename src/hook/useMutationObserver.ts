export default function (
  ref: React.RefObject<HTMLElement>,
  callback: (mutations: MutationRecord[]) => void
) {
  // 观察器的配置（需要观察什么变动）
  const config = {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
  }

  // 创建一个观察器实例并传入回调函数
  const observer = new MutationObserver(callback)

  // 以上述配置开始观察目标节点
  if (ref.current) observer.observe(ref.current, config)

  // 之后，可停止观察
  return observer
}
