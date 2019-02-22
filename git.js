var http = require('http')
var url = require('url')
http.createServer((req, res) => {
	if(req.url=='/favicon.ico'){
		return
	}
	res.writeHead(200, {"Content-Type": "text/html;charset=UTF8"});
	var obj=url.parse(req.url,true).query
	if(obj.username=='123456'&&obj.password=='456'&&obj.yanz=='789'){
		res.end('登录成功')
	}else{
		res.end('账号或密码错误')
	}
	// res.end('用户名：'+obj.username+'密码：'+obj.password)
}).listen(3000)