# react-starport
灵感来自于antfu的vue-starport

# 项目难点
1、封装KeepAlive缓存组件解决Portal重新渲染children的问题

2、在update前等待了一个Tick，解决切换路由时Proxy组件渲染抖动的问题

3、修改传入的metadata时，有几率出现Proxy组件渲染抖动问题，这是由于Proxy改变之后Container才变为起飞状态，所以需要在这之前改变Container的landed

4、待完成：抽离成库与完善readme

# 使用注意事项

1、最好给FloatProxy一个初始宽高，否则会因为div内部没有内容撑开而引起跳变