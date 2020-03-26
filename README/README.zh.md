<img src="https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg" alt="logo" width="140" height="140" align="right">

Hexo-Theme-Lx
---

[![Github Release](https://img.shields.io/github/release/blleng/hexo-theme-lx.svg)](https://github.com/blleng/hexo-theme-lx/releases/)
[![Github License](https://img.shields.io/github/license/blleng/hexo-theme-lx.svg)](https://github.com/blleng/hexo-theme-lx/blob/master/LICENSE)

>如果你喜欢本主题，请点击`star`收藏

Live Demo: [https://lx.js.org](https://lx.js.org)

*该子域名由 [JS.ORG](https://github.com/js-org/js.org) 提供。*

作者的博客: [https://freezing.cool](https://freezing.cool)

Telegram群组: [https://t.me/themelx](https://t.me/themelx)

有任何疑问和建议请提交[issue](https://github.com/blleng/hexo-theme-lx/issues)

## 最近更新

### V0.3.9

- 改善评论框
- 改善段间距

## 使用：

### 获取最稳定的版本：

https://github.com/blleng/hexo-theme-lx/releases

解压后将文件夹命名为`lx`放在`themes`文件夹中。

>推荐使用稳定版本(请勿使用V0.3.3和V0.3.5！！)

### 获取具有最新特性的版本：

在博客根目录:

```bash
$ git clone https://github.com/blleng/hexo-theme-lx themes/lx
```

>不推荐这种方式。虽然我尽量保证没有bug后再推送至GitHub仓库，但正在开发中的版本仍可能有bug。

### 启用本主题：

更改站点设置文件`_config.yml`:

```yml
theme: lx
```
主题的配置将在`themes/lx/_config.yml`中进行。

## 功能配置

>这里的说明并不完整，请参考`themes/lx/_config.yml`中的注释信息。

### 统计

引入了百度统计和谷歌统计。

启用：在`themes/lx/_config.yml`填写:

```yml
google_analytics: ... ##谷歌统计ID
baidu_analytics: ... ##百度统计ID
```

### 本地搜索

先下载插件`hexo-generator-searchdb`:

```bash
$ npm install hexo-generator-searchdb -s
```

在`themes/lx/_config.yml`中配置:

```yml
local_search:
  enable: true
```

更多配置详见`themes/lx/_config.yml`。

### 评论

评论使用valine，官网：[https://valine.js.org](https://valine.js.org)

启用：在`themes/lx/_config.yml`填写:

```yml
comment:
  enable: true # true:启用 | false:停用
  appid: ... #leancloud appid
  appkey: ... #leancloud appkey
  notify: false
  verify: false
  placeholder: 此处留言 #评论框文字
  avatar: identicon #游客默认头像
  guest_info: nick,mail,link #评论时需填写的内容（均为选填）
  pageSize: 10 #一次性展示的评论数
  language: zh-cn
```

在文章头填入`comment: true`即可在该页面启用评论:

```markdown
---
date: ...
title: ...
categories: ...
tags: ...
comment: true //启用评论
mathjax: ...
---
```

`appid`和`appkey`在leancloud创建应用后即可获取。

### Social Links

社交媒体链接，在`themes/lx/_config.yml`配置:

```yml
social:
  enable: true
  links:
    Github:
      icon: gihub //font-awesmome图标名称
      link: ... //链接地址
```

### Mathjax

支持数学公式和化学方程式。

启用：在`themes/lx/_config.yml`填写:

```yml
mathjax:
  enable: true  ##true:启用 | false:停用
  cdn: //cdn.bootcss.com/mathjax/2.7.5/latest.js?config=TeX-MML-AM_SVG
```

在文章头填入`mathjax: true`即可在该页面启用评论:

```markdown
---
date: ...
title: ...
categories: ...
tags: ...
comment: ...
mathjax: true //启用Mathjax
---
```

### 字体设置

```yml
font:
  enable: true
  host: //fonts.googleapis.com
  codes: ##代码字体
    enable: true
    family: Fira Code
  else: ##文字字体
    enable: false
    family: 
```

## 文章写作样式

### 文章摘要

在`<!--more-->`标签之前的内容将作为文章摘要在首页展示。

### Note tag

可选用`default`、`info`、`primary`、`success`、`warning`、`danger`。

示例：

```markdown
{%note default%}
### title
content
{%endnote%}
```

### Label tag

可选用`default`、`info`、`primary`、`success`、`warning`、`danger`。

示例：

```markdown
{%label default@content%}
```

### Button tag

标准样式：

```markdown
{%btn url,content,hand-o-right fa-fw,title%}
```

说明：

`url`：指向的链接

`content`：内容

`hand-o-right fa-fw`：图标，可换成其他图标。`fa-fw`：fix width

`title`：title

### center-quote tag

示例：

```markdown
{%cq%}
人类的悲欢并不相通，我只觉得他们吵闹。<br><strong>——鲁迅</strong>
{%endcq%}
```

### video tag

示例：

```markdown
{% video url %}
```

说明：

`url`：视频链接
