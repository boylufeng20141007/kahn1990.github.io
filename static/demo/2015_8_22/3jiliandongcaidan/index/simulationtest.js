;(function() {
	window['st'] = {};	//把kcool这个命名空间注册到了window上,进行库封装，防止对象污染
	// 保证AMD分模块可用
	if (typeof define !== 'undefined'){
		define([], function () {
			return kcool;
		});
	}
  	else if (typeof window !== 'undefined'){
  		// 保证客户端可用
  		if (!window.st) {
			window.st = st;
		}
	}else{
    		// 保证后台可用
    		module.exports = st;
  	}
	//对象用于获得当前页面的地址(URL),并把浏览器重定向到新的页面
  	var location = window.location,
	//body是DOM对象里的body子节点，即 <body> 标签；documentElement 是整个节点树的根节点root，即<html> 标签；
	decu= document.documentElement || document.body,
	docReady = document.ready,
	//Navigator 是HTML DOM中的内置对象，它包含有关浏览器的信息。userAgent是Navigator 的属性方法，可返回由客户机发送服务器的 user-agent 头部的值。作用其实就是返回当前用户所使用的是什么浏览器，toLowerCase() 是将获得的信息变成小写
	userAgent = navigator.userAgent.toLowerCase(),
	ua = window.navigator.userAgent.toLowerCase(),
	quirks = document.compatMode === "BackCompat",
	version = (ua.match(/.(?:rv|it|ra|ie)[\/:]([\d.]+)/) || [])[1],
	isOpera = /opera/.test(userAgent),
	isChrome = /chrome/.test(userAgent),
	isWebKit = /webkit/.test(userAgent),
	isIe6 = /msie6.0/.test(userAgent),
	isIe = /msie/.test(userAgent) && !isOpera,
	isSafari = /webkit/.test(userAgent),
	//isSafari = !isChrome && isWebKit,
	isFirefox = /firefox/.test(userAgent);
	//用于提示信息
	var prompt = {
		require: '缺少参数，参数必须的',
		rule: '参数不合法'
	};
	st = {
		//工具
		test: {
			//测试
			tabletest: function (aa,bb,cc){
	            function creatArr(str,arrNode,arrlength){
	                for(i = 1; i < arrlength+1; i++) {
	                    arrNode.push(str+'选项的第'+i+'条数据')
	                };
	                return arrNode;
	            };
	            var aArr = creatArr(aa,[],10),bArr = creatArr(bb,[],10),cArr = creatArr(cc,[],10),JosnList=[];
	            for(var index =0, len = aArr.length;  index<len; index++) {
	                JosnList[index] = {"AA":aArr[index],"BB":bArr[index],"CC":cArr[index]};
	            };
	            var simulationjson = {
	                dataArr:JosnList
	            };
	            //这里以上是测试数据，生产环境simulationjson为节后到的后台数据
	            return simulationjson.dataArr;
	        }
		}
	}
	//kcool为自己的库名，把方法注册到了kcool这个对象上
	window['st']['test'] = st.test;
}) ();
//测试
//kcool.tools.G();