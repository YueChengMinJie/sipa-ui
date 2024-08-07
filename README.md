<!--
 * @Author: zhouxiajie86@gmail.com
 * @Date: 2023-08-15 14:53:45
 * @LastEditors: zhouxiajie86@gmail.com
 * @LastEditTime: 2023-10-07 16:21:42
 * @FilePath: /sipa-ui/README.md
 * @Description:
-->

# SIPA UI

可扩展的工业平台架构-UI库。

## 组件构建

一个组件包含的东西有: 组件（本体）、样式（css）

### 预构建

```shell
pnpm prebuild
```

### 预构建 & 构建组件 & 样式 & 类型

```shell
pnpm build:all
```

### 仅构建组件

```shell
pnpm build:core
```

### 仅构建样式

```shell
pnpm build:css
```

## 文档

### 运行文档

```shell
pnpm docs:dev
```

### 构建文档

```shell
pnpm docs:build
```

## 测试

### 执行一次测试

```shell
pnpm test
```

### 监听变化运行测试

```shell
pnpm test:watch
```

## 调试组件

启动一个干净项目，用以开发调试组件

### 启动

```shell
pnpm debug:dev
```
