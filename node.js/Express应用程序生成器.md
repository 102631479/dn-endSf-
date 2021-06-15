#### Express应用程序生成器
    使用应用程序生成器工具express-generator来快速创建应用程序框架。

    您可以使用以下npx命令运行应用程序生成器（在Node.js 8.2.0中可用）。

#### $ npx express-generator
    对于早期的Node版本，将应用程序生成器作为全局npm软件包安装，然后启动它。
  
#### $ npm install -g express-generator
#### $ express
    显示带有以下-h选项的命令选项：

#### $ express -h

    Usage: express [options] [dir]

    + Options:

```josn
    -h, --help          output usage information
        --version       output the version number
    -e, --ejs           add ejs engine support
        --hbs           add handlebars engine support
        --pug           add pug engine support
    -H, --hogan         add hogan.js engine support
        --no-view       generate without view engine
    -v, --view <engine> add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory
   ```
    例如，以下创建了一个名为myapp的Express应用程序。该应用程序将在当前工作目录的名为myapp的文件夹中创建，并且视图引擎将设置为Pug：

#### $ express --view=pug myapp
```josn
   create : myapp
   create : myapp/package.json
   create : myapp/app.js
   create : myapp/public
   create : myapp/public/javascripts
   create : myapp/public/images
   create : myapp/routes
   create : myapp/routes/index.js
   create : myapp/routes/users.js
   create : myapp/public/stylesheets
   create : myapp/public/stylesheets/style.css
   create : myapp/views
   create : myapp/views/index.pug
   create : myapp/views/layout.pug
   create : myapp/views/error.pug
   create : myapp/bin
   create : myapp/bin/www
   ```
然后安装依赖项：

#### $ cd myapp
#### $ npm install
    在MacOS或Linux上，使用以下命令运行应用程序：

#### $ DEBUG=myapp:* npm start
    在Windows命令提示符上，使用以下命令：

> set DEBUG=myapp:* & npm start
    在Windows PowerShell上，使用以下命令：

    PS> $env:DEBUG='myapp:*'; npm start
    然后http://localhost:3000/在浏览器中加载以访问该应用程序。

    生成的应用程序具有以下目录结构：


```josn
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug
 ``` 
7 directories, 9 files