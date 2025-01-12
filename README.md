# AsyncPreactLoader  

`AsyncPreactLoader` 是一个自定义 Web 组件，允许动态加载和渲染 Preact 组件。它支持异步加载外部组件，并通过 Shadow DOM 隔离样式和行为。  

## 特性  

- **动态加载**: 通过 `src` 属性指定外部 Preact 组件的 URL。  
- **异步渲染**: 组件在加载完成后自动渲染。  
- **Shadow DOM**: 使用 Shadow DOM 隔离组件样式，避免与其他样式冲突。  

## 安装  

你可以通过 npm 或直接在 HTML 文件中引入组件。  

### 通过 npm 初始化

```bash  
npm install
```

## 直接引入
在你的 HTML 文件中，添加以下代码：
```html
<script type="module" src="path/to/AsyncPreactLoader.js"></script>
```

## 使用示例
### 1. 定义 Preact 组件
首先，你需要定义一个 Preact 组件，并将其暴露为全局函数 __PREACT_COMPONENT__。以下是一个简单的示例：
```js
// my-component.js  
window.__PREACT_COMPONENT__ = (h, Component) => {  
    return class MyComponent extends Component {  
        render(props) {  
            return <div>Hello, {props.name}!</div>;  
        }  
    };  
};
```

### 2. 使用 AsyncPreactLoader 组件
```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>PreactLoader Example</title>  
    <script type="module" src="path/to/AsyncPreactLoader.js"></script>  
</head>  
<body>  
    <async-preact-loader src="https://example.com/my-component.js" name="World"></async-preact-loader>  

    <script>  
        // 你可以在这里添加其他 JavaScript 代码  
    </script>  
</body>  
</html>
```

### 3. 属性
- src: 指定要加载的 Preact 组件的 URL。
- name: 传递给组件的属性（在上面的示例中，name 属性被传递给 MyComponent）。


## 贡献
欢迎任何形式的贡献！请提交问题、建议或拉取请求。
