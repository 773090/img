function search_check(obj){if(obj.keyboard.value.length==0){alert('请输入搜索关键字');return false;}return true;}document.write("<table width=99% border=0 cellpadding=3 cellspacing=1><form name=search_js2 method=post action='/e/search/index.php' onsubmit='return search_check(document.search_js2);'><tr><td height=25><div align=center>关键字: <input name=keyboard type=text size=13></div></td></tr><tr><td><div align=center>范围: <select name=show><option value=title>标题</option><option value=smalltext>简介</option><option value=newstext>内容</option><option value=writer>作者</option><option value=title,smalltext,newstext,writer>搜索全部</option></select></div></td></tr><tr><td><div align=center>栏目:<select name=classid><option value=0>所有栏目</option><option value='1'>|-美女热舞</option><option value='10' style='background:#99C4E3'>&nbsp;&nbsp;|-自拍系列</option><option value='11' style='background:#99C4E3'>&nbsp;&nbsp;|-短裙系列</option><option value='12' style='background:#99C4E3'>&nbsp;&nbsp;|-酒吧系列</option><option value='13' style='background:#99C4E3'>&nbsp;&nbsp;|-美腿系列</option><option value='14' style='background:#99C4E3'>&nbsp;&nbsp;|-制服系列</option><option value='15' style='background:#99C4E3'>&nbsp;&nbsp;|-车模系列</option><option value='16' style='background:#99C4E3'>&nbsp;&nbsp;|-舞曲系列</option><option value='17' style='background:#99C4E3'>&nbsp;&nbsp;|-钢管系列</option><option value='2'>|-主播视频</option><option value='18' style='background:#99C4E3'>&nbsp;&nbsp;|-韩国主播</option><option value='19' style='background:#99C4E3'>&nbsp;&nbsp;|-国内主播</option><option value='20' style='background:#99C4E3'>&nbsp;&nbsp;|-美女翻唱</option><option value='3'>|-美女组合</option><option value='21' style='background:#99C4E3'>&nbsp;&nbsp;|-美女组合</option><option value='22' style='background:#99C4E3'>&nbsp;&nbsp;|-练习室</option><option value='23' style='background:#99C4E3'>&nbsp;&nbsp;|-啦啦队</option><option value='4'>|-性感写真</option><option value='24' style='background:#99C4E3'>&nbsp;&nbsp;|-可爱型</option><option value='25' style='background:#99C4E3'>&nbsp;&nbsp;|-气质型</option><option value='26' style='background:#99C4E3'>&nbsp;&nbsp;|-古装型</option><option value='27' style='background:#99C4E3'>&nbsp;&nbsp;|-清纯型</option><option value='28' style='background:#99C4E3'>&nbsp;&nbsp;|-比基尼</option><option value='29' style='background:#99C4E3'>&nbsp;&nbsp;|-美腿丝袜</option><option value='30' style='background:#99C4E3'>&nbsp;&nbsp;|-MAXIM</option><option value='5' style='background:#99C4E3'>|-美女大全</option><option value='6'>|-特别栏目</option><option value='31' style='background:#99C4E3'>&nbsp;&nbsp;|-广告美女</option><option value='32' style='background:#99C4E3'>&nbsp;&nbsp;|-动漫美女</option><option value='33' style='background:#99C4E3'>&nbsp;&nbsp;|-搞笑美女</option><option value='34' style='background:#99C4E3'>&nbsp;&nbsp;|-游戏美女</option><option value='35' style='background:#99C4E3'>&nbsp;&nbsp;|-走秀美女</option><option value='7' style='background:#99C4E3'>|-微拍福利</option><option value='8' style='background:#99C4E3'>|-VR全景美女</option><option value='9' style='background:#99C4E3'>|-VIP专区</option><option value='36' style='background:#99C4E3'>|-首页轮换图</option><option value='37'>|-单页</option><option value='38'>&nbsp;&nbsp;|-免责声明</option><option value='39'>&nbsp;&nbsp;|-广告服务</option><option value='40'>&nbsp;&nbsp;|-友情链接</option><option value='41'>&nbsp;&nbsp;|-联系我们</option><option value='42'>&nbsp;&nbsp;|-留言反馈</option><option value='43'>&nbsp;&nbsp;|-开通VIP会员</option></select></div></td></tr><tr><td><div align=center><input type=submit name=Submit value=搜索></div></td></tr></form></table>");