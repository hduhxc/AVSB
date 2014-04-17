var rules = 
{
		user_name: {
			identifier : 'user_name' ,
			rules: [
			{ type : 'empty', prompt : '请输入用户名' },
			{ type : 'length[6]', prompt : '用户名长度应不小于6个字符'},
			{ type : 'maxLength[16]', prompt : '用户名长度应不大于16个字符'}
			]
		},
		user_pwd: {
			identifier : 'user_pwd' ,
			rules: [
			{ type : 'empty', prompt : '请输入密码' },
			{ type : 'length[6]', prompt : '密码长度应不小于6个字符'},
			{ type : 'maxLength[16]', prompt : '密码长度应不大于16个字符'},
			]
		},
		user_confirmpwd: {
			identifier : 'user_confirmpwd' , 
			rules: [
			{ type : 'match[user_pwd]', prompt : '两次输入的密码不一致'},
			{ type : 'empty',prompt : '请再次输入密码'}
			]
		},
		user_mail: {
			identifier : 'user_mail' ,
			rules: [
			{ type : 'empty', prompt : '请输入Email地址' },
			{ type : 'email', prompt : '您输入的Email地址不合法'}
			]
		}
}
var rule_message = 
{
		message_title: {
			identifier : 'message_title' ,
			rules: [{ type : 'empty', prompt : '请输入活动标题' }]
		},
		message_issuer: {
			identifier : 'message_issuer' ,
			rules: [{ type : 'empty', prompt : '请输入活动组织人' }]
		},
		message_time: {
			identifier : 'message_time' , 
			rules: [{ type : 'empty',prompt : '请输入活动时间'}]
		},
		message_location: {
			identifier : 'message_location' ,
			rules: [{ type : 'empty', prompt : '请输入活动地点' }]
		},
		message_contact: {
			identifier : 'message_contact' ,
			rules: [{ type : 'empty', prompt : '请输入活动组织人联系方式' }]
		},
		message_kind: {
			identifier : 'message_kind' ,
			rules: [{ type : 'empty', prompt : '请输入活动类型' }]
		}
}