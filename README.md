# react-starport
倘若你希望你的组件在不同的地方使用，在切换的时候保存组件的状态并且拥有平滑的过渡动画，不妨看看这个~

# 使用方法

还未发布！！！只是写readme

```js
npm i react-starport
```



倘若我们有这些图片数据需要共享

![](https://img.jzsp66.xyz/github/image-20220703165729069.png)

那么我们需要先用`Starport`组件包裹整个`App`（一是为了让`FloatContainer`悬浮在整个`App`下，二是让`Starport`包裹住`Router`），并且渲染`FloatContainer`组件，用slot指定要渲染的内容。这里我们要渲染的是一个图片组件`TheImage`

> 注意：一定要给`Container`唯一的port字符串

![](https://img.jzsp66.xyz/github/image-20220703165832869.png)

接着，我们就可以在页面中使用`FloatProxy`组件来渲染`FloatContainer`组件的`slot`指定的内容了（渲染的时候`slot`外面会多一层`div`），如下。我们可以给`FloatProxy`传入一些`props`，他们会被挂载到`slot`外的`div`上（一般来说可以传入一些样式，**但是不推荐使用与百分比有关的单位**）。

![](https://img.jzsp66.xyz/github/image-20220703170116040.png)

页面最终渲染如下（图片中的数字是组件内为了标记组件是否重新渲染的组件状态）

![](https://img.jzsp66.xyz/github/image-20220703170334235.png)

点击toggle改变显示大小

![](https://img.jzsp66.xyz/github/QQ录屏20220703170523-1656839312199.gif)

我们再新建一个`TransferList`页面，用到了其中一部分图片，如下所示（我们将前六张图片分成了ListA和ListB进行展示）

![](https://img.jzsp66.xyz/github/image-20220703170944222.png)

渲染结果如下

![](https://img.jzsp66.xyz/github/image-20220703171022293.png)

切换路由的时候，会有平滑的补间动画，如下所示

![](https://img.jzsp66.xyz/github/QQ录屏20220703171135.gif)



# 项目难点

1、封装KeepAlive缓存组件解决Portal重新渲染children的问题

2、在update前等待了一个Tick，解决切换路由时Proxy组件渲染抖动的问题

3、修改传入的metadata时，有几率出现Proxy组件渲染抖动问题，这是由于Proxy改变之后Container才变为起飞状态，所以需要在这之前改变Container的landed

4、待完成：抽离成库与完善readme

# 使用注意事项

1、最好给FloatProxy一个初始宽高，否则会因为div内部没有内容撑开而引起跳变

2、不要给Proxy组件实则hi与百分比有关的样式