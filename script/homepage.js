$(document).ready(function() {
	$('#login').css({ //登陆表单
		'width' : $(document).height * 0.1,
		'height' : $(document).width * 0.1,
		'position' : 'absolute',
		'top' : $('#menu').height(), 
		'right' : 0
		});
	$('#login').hide();
	$('#error').hide(); //登陆表单内错误输出div
	function toggle_login() 
	{
		$('#publish').show(); //发布新消息按钮
		$('#login_button span').html("注销");
		$('#login_button').unbind('click').click(function() { //必须先解除绑定
			$.get('/index.php/c_user/user_logout');
			toggle_logout();
		});
	}
	function toggle_logout()
	{
		$('#publish').hide();
		$('#login_button span').html("登陆");
		$('#login_button').unbind('click').click(function() {
			$('#login').slideToggle();
			$(this).toggleClass('active');
		});
	}
	$('form').submit(function() {
		var formData = $(this).serialize(); //格式化表单内容
		$.get('/index.php/c_user/user_login',formData,function(data){
			if (data != "登陆成功") {
				$('#error').html(data);
				$('#error').show();
			} else {
				$('#login').slideUp(); 
				$('#login_button').removeClass('active');
				toggle_login();
			}
		});
		return false; //防止浏览器提交表单
	});	
	$.get('/index.php/c_user/user_checkLogin',function(data){
		if (data == "您已经登陆") {
			toggle_login();
		} else {
			toggle_logout();
		}
	});
	$('.iframe').click(function() {
		$(this).colorbox( {close:"关闭"} ); //关闭按钮文本
	});
	setInterval(function(){
		window.location.reload();
	},30000);
});