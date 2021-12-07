(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.ts-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./components/typography/heading.stories.tsx":"./src/components/typography/heading.stories.tsx","./components/typography/text.stories.tsx":"./src/components/typography/text.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src/components/typography/heading.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Heading",(function(){return heading_stories_Heading}));var _templateObject,objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),taggedTemplateLiteral=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js")),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fonts=__webpack_require__("./src/tokens/fonts.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),HeadingStyle=styled_components_browser_esm.a.div(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n  font-family: ",";\n  line-height: 1.25;\n  font-size: ",';\n  color: "darkgrey";\n'])),fonts.a.heading,(function(props){return props.fontSize})),heading_Heading=function Heading(_ref){var as=_ref.as,children=_ref.children,fontSize=_ref.fontSize;return Object(jsx_runtime.jsx)(HeadingStyle,{as:as,fontSize:fontSize,children:children})};try{heading_Heading.displayName="Heading",heading_Heading.__docgenInfo={description:"",displayName:"Heading",props:{as:{defaultValue:null,description:"",name:"as",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/heading.tsx#Heading"]={docgenInfo:heading_Heading.__docgenInfo,name:"Heading",path:"src/components/typography/heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Tokens/Heading",component:heading_Heading};var heading_stories_Heading=function Template(args){return Object(jsx_runtime.jsx)(heading_Heading,Object(objectSpread2.a)({},args))}.bind({});heading_stories_Heading.args={as:"h1",fontSize:"2rem",children:"Heading Component"},heading_stories_Heading.parameters=Object(objectSpread2.a)({storySource:{source:"(args: HeadingProps) => <HeadingComponent {...args} />"}},heading_stories_Heading.parameters)},"./src/components/typography/text.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Text",(function(){return text_stories_Text}));var _templateObject,objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),objectWithoutProperties=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fonts=__webpack_require__("./src/tokens/fonts.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["color"],TextStyle=styled_components_browser_esm.a.p(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n  color: ",";\n  font-family: ",";\n  line-height: 1.4;\n"])),(function(props){return props.color}),fonts.a.body),Text=react_default.a.forwardRef((function(_ref,ref){var color=_ref.color,rest=Object(objectWithoutProperties.a)(_ref,_excluded);return Object(jsx_runtime.jsx)(TextStyle,Object(objectSpread2.a)(Object(objectSpread2.a)({color:color},rest),{},{ref:ref}))}));try{TextStyle.displayName="TextStyle",TextStyle.__docgenInfo={description:"",displayName:"TextStyle",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/text.tsx#TextStyle"]={docgenInfo:TextStyle.__docgenInfo,name:"TextStyle",path:"src/components/typography/text.tsx#TextStyle"})}catch(__react_docgen_typescript_loader_error){}try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/typography/text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/typography/text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Tokens/Text",component:Text};var text_stories_Text=function Template(args){return Object(jsx_runtime.jsx)(Text,Object(objectSpread2.a)({},args))}.bind({});text_stories_Text.args={children:"The quick brown fox jumps over the lazy dog."},text_stories_Text.parameters=Object(objectSpread2.a)({storySource:{source:"(args: TextProps) => <TextComponent {...args} />"}},text_stories_Text.parameters)},"./src/tokens/fonts.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return fonts}));var ProximaNova_Regular=__webpack_require__.p+"static/media/ProximaNova-Regular.dec7e81e.ttf",proxima_nova_ProximaNova_Regular=__webpack_require__.p+"static/media/ProximaNova-Regular.6061578c.woff",ProximaNova_Regular_woff2=__webpack_require__.p+"static/media/ProximaNova-Regular.29a7c7f0.woff2",fonts_proxima_nova_ProximaNova_Regular=__webpack_require__.p+"static/media/ProximaNova-Regular.7bc9ce40.otf",fontFamily={regular:"".concat("Proxima Nova"),bold:"".concat("Proxima Nova"," Bold")},fonts={heading:"".concat(fontFamily.bold,", ").concat("Helvetica Neue, Arial, sans-serif"),body:"".concat(fontFamily.regular,", ").concat("Helvetica Neue, Arial, sans-serif")};"\n@font-face {\n  font-family: 'Proxima Nova';\n  src: url(".concat(fonts_proxima_nova_ProximaNova_Regular,") format('opentype'),\n    url(").concat(ProximaNova_Regular,") format('ttf'),\n    url(").concat(ProximaNova_Regular_woff2,") format('woff2'),\n    url(").concat(proxima_nova_ProximaNova_Regular,") format('woff');\n  font-weight: 400;\n  font-style: normal;\n  font-display: optional;\n  fallback: ").concat("Helvetica Neue, Arial, sans-serif",";\n}\n")},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-a11y/dist/esm/a11yRunner.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-a11y/dist/esm/a11yHighlight.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.ts-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);