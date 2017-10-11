## [课程链接](http://ife.baidu.com/course/detail/id/113)

## 利用overflow:hidden实现表单元素宽度自适应
HTML:
```html
<div class="clearfix">
  <label>企业名称：</label>
  <div class="input_wrapper">
    <input type="text" required />
  </div>
</div>
```
CSS:
```css
.input-row label{
    float: left;
    display: inline-block;
}
.input_wrapper{
  overflow: hidden;
}
.input_wrapper input{
  box-sizing: border-box;
  border: 1px solid #dfdfdf;
  width: 100%;
}
```