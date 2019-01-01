# The Most Minimal React Build System

ပြီးခဲ့တဲ့ ပို့စ်မှာ React ကို ချဉ်းကပ်ပုံအသစ်နဲ့ ဖော်ပြခဲ့ပါတယ်။ ဘာ Build System မှ မပါပဲ HTML Document တစ်ခုအတွင်းမှာ တိုက်ရိုက်ရေးသားခဲ့ခြင်းဖြစ်ပါတယ်။ ဒီတစ်ခါတော့ အရိုးဆုံးနဲ့ အရှင်းဆုံး Build System တစ်ခုကို တည်ဆောက် ကြည့်ကြမှာဖြစ်ပါတယ်။ ဒီအကြောင်းအရာဟာ ကျွန်တော်ပို့ချနေတဲ့ Rockstar Developer Course မှာ ထည့်သွင်းသင်ကြားမယ့် အကြောင်းအရာ တစ်ခုပါ။ ကြိုစမ်းမထားပဲ လက်တမ်းသင်ရင် အမှားပါပြီး အချိန်ကြာမှာစိုးလို့ အခုလို ကြိုစမ်းပြီး စာအဖြစ် ကြိုရေးထားလိုက်တာပါ။ ဒီ Course မှာ တက်ရောက် သင်ယူနေသူ ဟုတ်ဟုတ် မဟုတ်ဟုတ် JavaScript နည်းပညာတွေကို စိတ်ဝင်စားသူဆိုရင် ဒီပို့စ်က အသုံးဝင်ပါလိမ့်မယ်။

စာနည်းနည်း ရှည်ပါမယ်။ အချိန်ပေးနိုင်မှ တစ်ခါတည်းဖတ်ပြီး တစ်ခါတည်းလိုက်လုပ်ကြည့်ပါ။ အချိန်မပေးနိုင်သေးရင် Bookmark လုပ်ပြီး သိမ်းထားပြီး အချိန်ရမှ ပြန်ဖတ်ပါ။ တစ်ဝက်တစ်ပျက်ပဲ ဖက်ရင်တော့ အလကားဖြစ်သွားမှာပါပဲ။ လိုက်မလုပ်ရင်လည်း အလကားပါပဲ။ သိသလိုလို မသိသလိုလို ဖြစ်သွားမယ်။ လိုက်လုပ်ကြည့်မှ တစ်ခါတည်း သဘောပေါက်မှာပါ။

## Babel in Browser

လက်ရှိ ရိုးရိုး HTML ထဲမှာ ရေးထားတဲ့ နမူနာကို နောက်တစ်ခါ ပြန်ဖော်ပြချင်ပါတယ်။

```HTML
<div id="app"></div>

<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

<script type="text/babel">
    function Element(props) {
        return ( <p>{props.content}</p> )
    }

    ReactDOM.render(
        <Element content="A React Component" />,
        document.getElementById("app")
    )
</script>
```

ကုဒ်ရဲ့အဓိပ္ပါယ်တော့ ပြန်မရှင်းတော့ပါဘူး။ လိုအပ်ရင် <a href="https://gist.github.com/eimg/f48b602107907fe5cefdb4d4297cd665">အရင်ပို့စ်ကို</a> ပြန်ဖတ်ကြည့်ပါ။

ဒီကုဒ်နမူနာမှာ JSX ကို အသုံးပြုရေးသားထားလို့ လိုအပ်ချက်အရ Babel ကို ထည့်သွင်း အသုံးပြုထားပါတယ်။ `<script src>` နဲ့ပဲ သူ့ကိုလည်း တိုက်ရိုက်ထည့်သွင်း အသုံးပြုထားတာပါ။ အခုနေ Browser Console ကို ဖွင့်ကြည့်ရင် အခုလို Warning တစ်ခုကို တွေ့ရနိုင်ပါတယ်။

    You are using the in-browser Babel transformer. Be sure to precompile your scripts for production - https://babeljs.io/docs/setup/

အဓိပ္ပါယ်ကတော့.. JSX တွေကို Bable နဲ့ Browser ထဲမှာ တိုက်ရိုက် ဖလှယ်အလုပ်လုပ်နေတယ်။ လက်တွေ့သုံးဖို့ဆိုရင် ကြိုတင်ဖလှယ်ထားပေးပါဆိုတဲ့ သဘောပါ။ Run တော့မှ ဖလှယ်ပြီး Run နေတော့ နှေးတာပေါ့။ မြန်ချင်ရင်တော့ ကြိုဖလှယ်ထားနိုင်ဖို့ လိုပါတယ်။ လုပ်ပုံလုပ်နည်း ဖော်ပြပေးပါမယ်။

## Babel CLI

ပထမအဆင့်အနေနဲ့ လက်ရှိကုဒ်တွေရှိနေတဲ့ ဖိုဒါထဲမှာ `npm init -y` Command ကို Run ပေးရမှာ ဖြစ်ပါတယ်။ အခုလို အခြေခံ Setting တွေ ပါဝင်တဲ့ `package.json` ဖိုင်တစ်ခုကို NPM က တည်ဆောက်ပေးသွားမှာပါ။

```JSON
{
  "name": "react-build",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

ဆက်လက်ပြီး Babel Package တွေကို Install လုပ်ပေးရပါမယ်။ Bable မှာက Plugin တွေ Preset တွေ အများကြီး ရှိပါတယ်။ အဲ့ဒါတွေအကြောင်းတော့ ဒီနေရာမှာ မပြောနိုင်ပါဘူး။ ပြောဖို့လည်း မလိုသေးပါဘူး။ မဖြစ်မနေ လိုအပ်တဲ့ Package တွေကို အခုလို ရွေးထည့်လိုက်ရင် ရပါပြီ။

```
npm i @babel/core @babel/cli @babel/preset-react --save-dev
```

`i` ဆိုတာ `install` ရဲ့ အတိုကောက်ဖြစ်ပြီး `--save-dev` ကတော့ အခု Install ပြလုပ်တဲ့ Package တွေကို Package JSon ရဲ့ devDependencies Section မှာ ထည့်သွင်းပေးဖို့ ဖြစ်ကြောင်းကို သိရှိပြီး ဖြစ်တယ်လို့ပဲ ယူဆထားပါတယ်။ အဲ့ဒါတွေ မသိသေးရင်တော့ NPM အကြောင်းကို အရင်လေ့လာဖို့ လိုပါလိမ့်ဦးမယ်။ Install ပြုလုပ်လိုက်တာတွေကတော့ ပင်မ Babel ရယ်၊ Babel Command Line ရယ်၊ React နဲ့ JSX ကုဒ်တွေကို ရိုးရိုး JavaScript ဖြစ်အောင် ဖလှယ်ပေးနိုင်တဲ့ Preset ရယ် (၃) ခု ထည့်သွင်းလိုက်တာပါ။

ပြီးရင် စောစောက HTML ထဲမှာ ရောရေးထားတဲ့ JavaScript ကုဒ်ကို `src` ဖိုဒါထဲမှာ `app.js` ဆိုတဲ့ အမည်နဲ့ ပြောင်းရေးထားဖို့ လိုအပ်ပါတယ်။ ဒါကြောင့် HTML Code က အခုလို ဖြစ်သွားမှာပါ။

```HTML
<div id="app"></div>

<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="js/app.js"></script>
```

Babel ကို `<script src>` နဲ့ မထည့်တော့ပါဘူး။ JavaScript ကုဒ်တွေလည်းမပါဝင်တော့ပဲ `js/app.js` ကို `<script src>` နဲ့ ချိတ်ပေးထားတာကို သတိပြုပါ။ စာလုံးပေါင်းမှာတာ မဟုတ်ပါဘူး `js/app.js` ပါ။ `src/app.js` မဟုတ်ပါဘူး။ ဘာဖြစ်လို့လဲဆိုတော့ `src/app.js` ကုဒ်ကို Babel နဲ့ ရိုးရိုး JavaScript ဖြစ်အောင်ဖလှယ်ပြီး `js/app.js` အဖြစ် သိမ်းသွားမှာ မို့လို့ပဲ ဖြစ်ပါတယ်။

လက်ရှိ `src/app.js` ကုဒ်က အခုလိုဖြစ်ပါလိမ့်မယ်။

```JavaScript
function Element(props) {
    return ( <p>{props.content}</p> )
}

ReactDOM.render(
    <Element content="A React Component" />,
    document.getElementById("app")
)
```

စောစောက HTML ထဲမှာ ရောရေးခဲ့တဲ့ ကုဒ်ပါပဲ။ အပြောင်းအလဲမရှိပါဘူး။ ပြီးတဲ့အခါ Project ဖိုဒါထဲမှာ `.babelrc` ဆိုတဲ့အမည်နဲ့ ဖိုင်တစ်ခုဆောက်ပြီး ဒီကုဒ်ကို ထည့်ပေးရပါမယ်။

```JSON
{
  "presets": ["@babel/preset-react"]
}
```

အဓိပ္ပါယ်ကတော့ Babel ကို အလုပ်လုပ်တဲ့အခါ React Preset ကို အသုံးပြုပေးရမယ်လို့ ကြေငြာပေးလိုက်ခြင်းဖြစ်ပါတယ်။ စမ်းကြည့်လို့ရပါပြီ။ စမ်းရမယ့် Command က ဒီလိုပါ။

```
npx babel src -d js
```

`npx` ဆိုတာက NPM နဲ့ Project ဖိုဒါထဲမှာ Install လုပ်ထားတဲ့ Command တွေကို Run ချင်ရင် သုံးရတာပါ။ ဒီ Command က Babel ကို အသုံးပြုပြီး `src` ထဲကဖိုင်တွေကို ဖလှယ်ပြီး `js` ထဲမှာ သိမ်းပေးသွားမှာပါ။ အခုနေ `js/app.js` ကို ဖွင့်ကြည့်ရင် အခုလိုရလဒ်ကို တွေ့ရနိုင်ပါတယ်။

```JavaScript
function Element(props) {
  return React.createElement("p", null, props.content);
}

ReactDOM.render(React.createElement(Element, {
  content: "A React Component"
}), document.getElementById("app"));
```

ကျွန်တော်တို့ ရေးထားတဲ့ကုဒ်နဲ့ မတူတော့ပါဘူး။ JSX တွေအစား ရိုးရိုး JavaScript ကုဒ်တွေနဲ့ Babel က ဖလှယ်ပေးလိုက်ပြီ ဖြစ်ပါတယ်။ ဒါကြောင့်မူလ HTML ကို စမ်းကြည့်ရင် နဂိုအတိုင်း ဆက်အလုပ်လုပ်နေတယ် ဆိုတာကို တွေ့ရမှာပဲ ဖြစ်ပါတယ်။ Babel ကို HTML ထဲမှာ ထည့်သုံးတာ မဟုတ်တော့ပဲ ကြိုတင် ဖလှယ်ပြီးမှ သုံးတာ ဖြစ်သွားပါပြီ။

ဒီတော့ ရေးစရာရှိတဲ့ ကုဒ်တွေရေး၊ ပြီးရင် Babel Command Run ပြီးဖလှယ်၊ ပြီးရင် စမ်းကြည့်ဆိုတဲ့ သဘော ဖြစ်သွားတဲ့ သဘောပါ။ သိပ်အဆင်မပြေသေးပါဘူး။ ဒါကြောင့် နောက်တစ်ဆင့်အနေနဲ့ ကိုယ်တိုင် Manual Run စရာမလိုပဲ ကုဒ်ဖိုင်ကို Save လုပ်လိုက်တာနဲ့ အလိုအလျှောက Command ကို Run ပေးအောင် စီစဉ်ထားမှာ ဖြစ်ပါတယ်။ ဒီအတွက် Webpack ကို အသုံးပြုရမှာပါ။

## Webpack CLI

Babel မှာလိုပဲ Webpack မှာလည်း လုပ်ဆောင်ချက်တွေ အများကြီးရှိပါတယ်။ အကုန်လျှောက်ကြည့်စရာ မလိုသေးပါဘူး။ မဖြစ်မနေ လိုအပ်တာကိုပဲ ရွေးပြီးထည့်သွင်းဖော်ပြသွားမှာ ဖြစ်ပါတယ်။ ပထမဆုံးအနေနဲ့ လိုအပ်တဲ့ Package တွေကို အခုလို Install လုပ်ပေးပါ။

```
npm i webpack webpack-cli babel-loader --save-dev
```

ပင်မ Webpack ရယ်၊ Webpack Command Line ရယ် Webpack ကနေ Babel ကို လှမ်းသုံးပေးနိုင်တဲ့ Babel Loader ရယ် (၃) ခုထည့်သွင်းလိုက်တာပါ။ ပြီးတဲ့အခါ `webpack.config.js` အမည်နဲ့ Setting ဖိုင်တစ်ခု ဆောက်ပေးရပါမယ်။ ရေးရမယ့်ကုဒ်က ဒီလိုပါ။

```JavaScript
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "/js"),
    filename: "js/app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      }
    ]
  }
};
```

`.js` ဖိုင်တွေအားလုံးကို `babel-loader` သုံးပြီး Compile လုပ်ပေးဖို့ ပြောလိုက်တာပါ။ Webpack ကို Module Loader လို့ ခေါ်ပါတယ်။ မူလ JavaScript ကနားမလည်တဲ့ Module ရေးထုံးကို အသုံးပြု ရေးသားထားတဲ့ကုဒ်တွေကို ရိုးရိုး JavaScript ဖြစ်အောင် ပေါင်းစပ်ပေးနိုင်တဲ့ နည်းပညာလို့ အလွယ်ပြောနိုင်ပါတယ်။ Webpack ရဲ့ မူလရည်ရွယ်ချက်ကတစ်မျိုး အခုအသုံးပြုနေပုံက တစ်မျိုးမို့လို အမှတ်မှားမှာစိုးလို့ ထည့်ပြောတာပါ။ အခုကတော့ ရပါပြီး။ စတင်အသုံးပြုနိုင်ဖို့ ဒီလို Command နဲ့ Run ပေးရပါမယ်။

```
npx webpack --mode development --watch
```

`--mode development` ဆိုတာက ကုဒ်ကို Minify မလုပ်ဖို့ ပြောလိုက်တာပါ။ ဒီနေရာမှာ အရေးကြီးတာက `--watch` ဖြစ်ပါတယ်။ ဒီ Command Option ကြောင့် Webpack က ကုဒ်ဖိုင်မှာ အပြောင်းအလဲ ရှိသလား စောင့်ကြည့်ပြီး ရှိခဲ့ရင် နောက်တစ်ကြိမ် အလိုအလျှောက် ကုဒ်တွေကို ဖလှယ်ပေးတော့မှာပါ။ ဒါကြောင့် အခုဆိုရင် ရေးစရာရှိတဲ့ကုဒ်ကိုရေး၊ ပြီးရင် Browser မှာ Refresh လုပ်ကြည့်ရင် ရလဒ်ကို မြင်ရပြီ ဖြစ်ပါတယ်။ အထက်ကလို Babel Command ကို Run ပြီးမှ စမ်းစရာ မလိုအပ်တော့ပါဘူး။ ရေး၊ Save, စမ်း၊ လုပ်နိုင်သွားလို့ ကုဒ်ရေးရတာ အများကြီး လျှင်မြန်သွားပြီပဲ ဖြစ်ပါတယ်။

## Webpack Dev Server

ဆက်လက်ပြီး Browser ကို Refresh ကို လုပ်စရာ မလိုတော့ပဲ ရေးလိုက် ပြင်လိုက်တာနဲ့ ရလဒ်ကို အလိုအလျှောက် တန်းဖော်ပြအောင် ဆက်လုပ်ပါဦးမယ်။ ဒီအတွက် အသုံးပြုရမှာကတော့ Webpack Dev Server ဖြစ်ပါတယ်။ အခုလို Install လုပ်နိုင်ပါတယ်။

```
npm i webpack-dev-server --save-dev
```

ဒီလို Install လုပ်ပြီးပြီဆိုရင် သုံးရမယ့် Command က ဒီလိုပါ။

```
npx webpack-dev-server --mode development --open --့hot
```

`--open` Option ကြောင့် ဒီ Command ကို Run လိုက်တာနဲ့ Project ကို Browser မှာ တစ်ခါတည်း ဖွင့်ပေးသွားမှာဖြစ်ပြီး `--hot` Option ကြောင့် ကုဒ်မှာပြင်ဆင်မှုတစ်ခု ပြုလုပ်လိုက်တိုင်း ရလဒ်ကို အလိုအလျှောက် လိုက်ပြောင်းပေးသွားမှာ ဖြစ်လို့ Browser Refresh တောင်လုပ်နေဖို့ မလိုတော့ပါဘူး။ ရေးလို့အရမ်းကောင်းသွားပါပြီ။

ဒါပါပဲ။ ကိုယ့်နည်းကိုယ့်ဟန်နဲ့ React Build System တစ်ခု တည်ဆောက်လိုက်ခြင်း ဖြစ်ပါတယ်။ လိုအပ်သလားဆိုတော့ လိုတော့ မလိုအပ်ပါဘူး။ အသင့်သုံးလို့ရတဲ့ <a href="https://github.com/facebook/create-react-app">create-react-app</a> လို နည်းပညာတွေရှိပါတယ်။ လိုအပ်တဲ့ Build System Setup ကို အစအဆုံး အသေးစိတ် အကုန်လုပ်ထားပေးပြီးသားပါ။

ဒီပို့စ်ရဲ့ ရည်ရွယ်ချက်ကတော့ အဲ့ဒီ Build System က နောက်ကွယ်မှာ ဘာတွေဘယ်လိုလုပ်သွားသလဲ ဆိုတာကို သိမြင်စေချင်လို့ ဖော်ပြခြင်းဖြစ်ပါတယ်။ နည်းပညာမှာ "မည်သို့မည်ပုံ လုပ်လိုက်သည်မသိ" ဆိုပြီး အလုပ်တော့ လုပ်နေတယ် ဘာကြောင့် လုပ်သွားမှန်းမသိဘူးဆိုတာမျိုး မရှိသင့်ဘူးလို့ ယူဆပါတယ်။ အသင့်သုံးလို့ရတဲ့ နည်းပညာကို ထိရောက်အောင် ရယူအသုံးချရပါမယ်။ ဒါပေမယ့် ဘာကြောင့်အဲ့ဒီနည်းပညာတွေ အလုပ်လုပ်နေသလဲ ဆိုတာကိုတော့ သိရှိနားလည်ထားရမယ်လို့ ဆိုချင်ပါတယ်။

ဖော်ပြခဲ့တဲ့ ကုဒ်အပြည့်အစုံကို <a href="https://github.com/eimg/minimal-react-build">ဒီမှာ</a> ဒေါင်းနိုင်ပါတယ်။
