let html = document.querySelector("#demo");
let style = document.querySelector("#style");
let str = `/*你好，我叫YXC，
*下面展示我的前端demo
**/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来把div1变成一个八卦图
 *
 *首先把div1变成一个圆
 **/
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦左右一黑一白
 *
 **/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个中间颜色相反的小球*/
#div1::before{
    width: 100px;
    height: 100px;
    top:0;
    right:50%;
    transform:translate(50%);
    border-radius:50%;
    background:black;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom:0;
    right:50%;
    transform:translate(50%);
    border-radius:50%;
    background:white;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let n = 0;
//第二种方法，建立新的空数组，第一个数组逐字判断是否等于\n
let str2 = ``;
//该方法替换会跳出<，无法解决。换一种方法
// str = str.replace(/\n/g,"<br>")
// html.innerHTML = str.substring(0, n);
let step = () => {
  if (str[n] === "\n") {
    str2 += "<br>";
  } else if (str[n] === " ") {
    str2 += "&nbsp";
  } else {
    str2 += str[n];
  }
  style.innerHTML = str.substring(0, n);
  html.innerHTML = str2;
  n += 1;
  window.scrollTo(0,99999);
  html.scrollTo(0,99999);
  if (n < str.length) {
    setTimeout(() => {
      step();
    }, 50);
  }
};
step();
// setTimeout(()=>{
//     step();
// },1000);
