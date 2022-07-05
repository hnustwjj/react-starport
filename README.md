# react-starport
倘若你希望你的组件在不同的地方使用，在切换的时候保存组件的状态并且拥有平滑的过渡动画，不妨看看这个~

# 使用方法



```js
npm i r-starport
```
在入口文件引入css
```
import 'r-starport/style.css'
```
用Starport组件包裹整个App
```
 ReactDOM.createRoot(document.getElementById('root')!).render(
   <Starport>
     <App />
   </Starport>
)
```
准备工作完成，详细使用看下面的demo
# demo

倘若我们有这些图片数据需要共享

![](https://img.jzsp66.xyz/github/image-20220703165729069.png)

那么我们需要先用`Starport`组件包裹整个`App`（一是为了让`FloatContainer`悬浮在整个`App`下，二是让`Starport`包裹住`Router`），并且渲染`FloatContainer`组件，用slot指定要渲染的内容。这里我们要渲染的是一个图片组件`TheImage`

> 注意：一定要给`Container`唯一的port字符串

```tsx
function App() {
  return (
    <div className='bg-black w-full text-white'>
      <Starport>
        <Router />
        {imgs.map((img, index) => {
          return (
            <FloatContainer
              key={index}
              slot={() => <TheImage src={img} />}
              port={index + 1 + ''}
            />
          )
        })}
        <FloatContainer slot={() => <Info />} port='13' />
      </Starport>
    </div>
  )
}
```

接着，我们就可以在页面中使用`FloatProxy`组件来渲染`FloatContainer`组件的`slot`指定的内容了（渲染的时候`slot`外面会多一层`div`），如下。我们可以给`FloatProxy`传入一些`props`，他们会被挂载到`slot`外的`div`上（一般来说可以传入一些样式，**但是不推荐使用与百分比有关的单位**）。

```tsx
const Foo = memo(() => {
  const [mode, setMode] = useState(false)
  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <div className='py-50px'>current:Foo</div>
        <FloatProxy port='13' w='96px' h='72px' />
        <nav>
		  ...
        </nav>
      </div>
      <div flex='~ wrap' justify='center'>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map(
          item => (
            <FloatProxy
              key={item}
              port={item}
              className={mode ? 'w-60 h-50' : 'w-60 h-30'}
              m='5'
              rounded='xl'
              overflow='hidden'
            />
          )
        )}
      </div>
    </>
  )
})
```

页面最终渲染如下（图片中的数字是组件内为了标记组件是否重新渲染的组件状态）

![](https://img.jzsp66.xyz/github/image-20220703170334235.png)

点击toggle改变显示大小

![](https://img.jzsp66.xyz/github/QQ录屏20220703170523-1656839312199.gif)

我们再新建一个`TransferList`页面，用到了其中一部分图片，如下所示（我们将前六张图片分成了ListA和ListB进行展示）

```tsx
const TransferList = memo(() => {
  const [listA, setListA] = useState(['1', '2', '3'])
  const [listB, setListB] = useState(['4', '5', '6'])

  return (
    <div className='w-full flex flex-col items-center '>
      <div className='py-50px'>current:TransferList</div>
      <nav>
		...
      </nav>
      <div className='my-5'> 试试看点击图片会发生什么</div>
      <div flex='~'>
        <div className='flex flex-col items-center w-60 mr-5'>
          <span>ListA</span>
          {listA.map(item => (
            <FloatProxy
              onClick={() => {
                setListA(listA.filter(i => i !== item))
                setListB([...listB, item])
              }}
              key={item}
              port={item}
              className='m-5 rounded-xl overflow-hidden w-60 h-30'
            />
          ))}
        </div>
        <div className='flex flex-col items-center w-60'>
          <span>ListB</span>
          {listB.map(item => (
            <FloatProxy
              onClick={() => {
                setListB(listB.filter(i => i !== item))
                setListA([...listA, item])
              }}
              key={item}
              port={item}
              className='m-5 rounded-xl overflow-hidden w-60 h-30'
            />
          ))}
        </div>
      </div>
    </div>
  )
})
```

渲染结果如下

![](https://img.jzsp66.xyz/github/image-20220703171022293.png)

切换路由的时候，会有平滑的补间动画，如下所示

![](https://img.jzsp66.xyz/github/QQ录屏20220703171135.gif)



# 项目难点

1、封装KeepAlive缓存组件解决Portal重新渲染children的问题

2、在update前等待了一个Tick，解决切换路由时Proxy组件渲染抖动的问题

3、修改传入的metadata时，有几率出现Proxy组件渲染抖动问题，这是由于Proxy改变之后Container才变为起飞状态，所以需要在这之前改变Container的landed

4、结合portal完成组件“起飞”和“落地”功能

# 使用注意事项

1、最好给FloatProxy一个初始宽高，否则会因为div内部没有内容撑开而引起跳变

2、不要给Proxy组件实则hi与百分比有关的样式