# sweetheart

> Ms.Li and I

## Build Setup

``` bash
1.站点结构
  1）合理设计网站结构， 安排栏目；
  2）合理布局
  
2.版面规范
  1）内容积极、健康向上；
  2）设计独到，主题突出，网页设计和谐统一；
  3）网页整体设计思路清晰，色彩搭配合理，布局紧凑美观，版块结构清晰

3.结构规范
  1）层次分明，链接合理清晰，便于浏览；
  2）原则上不使用相关的模板；
  3）网页使用的字体在所有计算机内均能正常显示，无乱码
  
4.通用要求

  1）除个别要求以外，其它布局均使用浮动布局；
  2）站点结构清晰，素材分类别的放置于不同文件夹内；
  3）网页中至少包含一个音频文件和一个视频文件，并使用多浏览器兼容的方法来设置；
  4）每个网站要求包含至少4个页面

5.个别要求
  1）所有导航均使用项目符号列表；
  2）网站至少有一个页面使用div表格布局；
  3）网站至少有一个页面使用弹性布局flex；
  4）网页中至少有一个页面使用相对定位和绝对定位布局；
  5）网页中至少包含一个HTML5表单，要求实现验证功能；
  6）网页中至少实现一个HTML5拖放功能；
  7）网页中至少使用一个CSS3新样式（阴影，边框，SVG等）；
  8）网页中至少使用一个CSS3动画；
  9）网页中至少使用一个HTML5音频或视频
  
6.附加分（至少使用两项）
  1）使用响应式页面Bootstrap；
  2）使用js代码；
  3）使用Vue渐进式前段框架；
  4）使用webpack+Vue构建模块化项目
  
7.提交要求
  1）要求提交课程设计文档。（需包含网站设计目的、网站功能结构图、主要界面、设计总结）
  2）网站代码压缩包（班级+学号+姓名）
  3）本学期17周星期四或星期五（根据各班上课时间而定）提交，提交时需进行演示答辩。
```

**构建项目**  
###### 写好Dockerfile和default.conf
```text
启动docker： service docker start
进入管理员账号：su
1.下载相关依赖： npm install   
2.编译项目： npm run build
3.打包镜像： docker build -t soldierdocker/sweetheart:v1.0.0 .
3.推送到仓库： docker push soldierdocker/sweetheart:v1.0.0
```
**部署项目**  
```text
登录服务器：ssh 116.62.48.112
1.下拉镜像： docker pull soldierdocker/sweetheart:v1.0.0
2.运行容器： docker run -d --name sweetheart-vue-[datatime] -p 5201:5201 <imageId>
```
### 使用阿里云镜像服务部署
#####本地构建项目
```text
启动docker： service docker start
进入管理员账号：su
1.下载相关依赖： npm install
2.编译项目： npm run build
3.打包镜像： docker build -t registry.cn-hangzhou.aliyuncs.com/soldier-hub/sweetheart:[镜像版本号] .
4.登录： docker login --username=soldier_ali registry.cn-hangzhou.aliyuncs.com
5.推送：docker push registry.cn-hangzhou.aliyuncs.com/soldier-hub/sweetheart:[镜像版本号]
```
#####部署项目
```text
登录服务器：ssh 116.62.48.112
1.登录： docker login --username=soldier_ali registry.cn-hangzhou.aliyuncs.com
1.下拉镜像： docker pull registry.cn-hangzhou.aliyuncs.com/soldier-hub/sweetheart:[镜像版本号]
2.运行容器： docker run -d --name sweetheart-vue-[datatime] -p 5200:5200 <imageId>
```
**后面的5200是default.conf里设置的，前面的5200是你要运行的、会映射到后面那个的端口上**

####软件架构说明
vue + element UI
#####组件
vue、webpack、element UI、router、vuex、Iconfont-阿里巴巴矢量图标库、axios、vue-waterfall-easy 2.x


