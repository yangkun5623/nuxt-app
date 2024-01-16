- .nuxt               // 自动生成的目录，用于展示结果
- node_modules        // 项目依赖包存放目录
- .gitignore          // Git 的配置目录，比如一些文件不用 Git 管理就可以在这个文件中配置
- app.vue             // 项目入口文件，你可以在这里配置路由的出口
- nuxt.config.ts      // nuxt 项目的配置文件 ，这个里边可以配置 Nuxt 项目的方法
- package-lock.json   // 锁定安装时包的版本，以保证其他人在 npm install 时和你保持一致
- package.json        // 包的配置文件和项目的启动调式命令配置
- README.md           // 项目的说明文件
- tsconfig.json       // TypeScript 的配置文件


- pages               // 开发的页面目录
- components          // 组件目录
- assets              // 静态资源目录
- layouts             // 项目布局目录
--plugins			//(插件目录)
--static				//(静态资源目录)
--store				//(Vuex状态树)
--middleware			//(中间件目录)
--assets				//(资源目录)