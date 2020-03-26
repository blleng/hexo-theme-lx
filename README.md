<img src="https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg" alt="logo" width="140" height="140" align="right">

Hexo-Theme-Lx
---

[![Github Release](https://img.shields.io/github/release/blleng/hexo-theme-lx.svg)](https://github.com/blleng/hexo-theme-lx/releases/)
[![Github License](https://img.shields.io/github/license/blleng/hexo-theme-lx.svg)](https://github.com/blleng/hexo-theme-lx/blob/master/LICENSE)

>If you like the theme, please give me star.

Languages: English | [中文](README/README.zh.md)

Live Demo: [https://lx.js.org](https://lx.js.org)

*THE SUBDOMAIN IS PROVIDED BY [JS.ORG](https://github.com/js-org/js.org)*

Telegram: [https://t.me/themelx](https://t.me/themelx)

Any problem: [issue](https://github.com/blleng/hexo-theme-lx/issues)

## The latest release

### V0.3.9

- Comment area improved
- Segment spacing improved

## Usage

### The stable version

https://github.com/blleng/hexo-theme-lx/releases

Unzip the file and rename it as `lx`. Put it under `themes`

>Don't use V0.3.3 and V0.3.5!!

### Latest version

At theme blog root dir:

```bash
$ git clone https://github.com/blleng/hexo-theme-lx themes/lx
```

>This version is under development and it may have bugs.

### Apply

Edit `_config.yml`:

```yml
theme: lx
```

## Features

>The description here is not complete. You should read the comment in `themes/lx/_config.yml`

### Analytics

`lx` use Baidu and Google as analytics.

Usage:

Edit `themes/lx/_config.yml`:

```yml
google_analytics: ... ##Google analytics ID
baidu_analytics: ... ##Baidu analytics ID
```

### Local search

1. Install the `hexo-generator-searchdb`:

At the blog root dir:

```bash
$ npm install hexo-generator-searchdb -s
```

2. Edit `themes/lx/_config.yml`:

```yml
local_search:
  enable: true
```

More features in `themes/lx/_config.yml`

### Comment

`lx` use valine as comment system.
The official site: [https://valine.js.org](https://valine.js.org)

Usage:

Edit `themes/lx/_config.yml`:

```yml
comment:
  enable: true
  appid: ... #leancloud appid
  appkey: ... #leancloud appkey
  notify: false
  verify: false
  placeholder: Say something #placeholder
  avatar: identicon #the guest avatar
  guest_info: nick,mail,link #optional choice
  pageSize: 10
  language: en
```

In the page front-matter:
`comment: true`

```markdown
---
date: ...
title: ...
categories: ...
tags: ...
comment: true //use comment in this page
mathjax: ...
---
```

You should create an application in Leancloud to get `appid` and `appkey`.

### Social links

Edit the `themes/_config.yml`

```yml
social:
  enable: true
  links:
    Github:  //the name of the link
      icon: gihub //font-awesmome icon
      link: ... //link
```

### Mathjax

Support Mathematical formulas and chemical equations

Usage:

Edit`themes/lx/_config.yml`:

```yml
mathjax:
  enable: true
  cdn: //cdn.bootcss.com/mathjax/2.7.5/latest.js?config=TeX-MML-AM_SVG
```

In the page front-matter: `mathjax: true`

```markdown
---
date: ...
title: ...
categories: ...
tags: ...
comment: ...
mathjax: true //use Mathjax in this page
---
```

### Font

```yml
font:
  enable: true
  host: //fonts.googleapis.com
  codes: ##the font of codes
    enable: true
    family: Fira Code
  else:
    enable: false
    family: 
```

## Style

### Excerpt

the content before `<!--more-->` will be showed at the home page.

### Note tag

options: `default`、`info`、`primary`、`success`、`warning`、`danger`

eg：

```markdown
{%note default%}
### title
content
{%endnote%}
```

### Label tag

options: `default`、`info`、`primary`、`success`、`warning`、`danger`

eg：

```markdown
{%label default@content%}
```

### Button tag

buttion：

```markdown
{%btn url,content,hand-o-right fa-fw,title%}
```

options: `url` `content` `hand-o-right fa-fw` `fa-fw` `title`

### center-quote tag

eg：

```markdown
{%cq%}
人类的悲欢并不相通，我只觉得他们吵闹。<br><strong>——鲁迅</strong>
{%endcq%}
```

### video tag

eg：

```markdown
{% video url %}
```
options: `url`
