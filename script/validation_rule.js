var rules = 
{
		user_name: {
			identifier : 'user_name' ,
			rules: [
			{ type : 'empty', prompt : '�������û���' },
			{ type : 'length[6]', prompt : '�û�������Ӧ��С��6���ַ�'},
			{ type : 'maxLength[16]', prompt : '�û�������Ӧ������16���ַ�'}
			]
		},
		user_pwd: {
			identifier : 'user_pwd' ,
			rules: [
			{ type : 'empty', prompt : '����������' },
			{ type : 'length[6]', prompt : '���볤��Ӧ��С��6���ַ�'},
			{ type : 'maxLength[16]', prompt : '���볤��Ӧ������16���ַ�'},
			]
		},
		user_confirmpwd: {
			identifier : 'user_confirmpwd' , 
			rules: [
			{ type : 'match[user_pwd]', prompt : '������������벻һ��'},
			{ type : 'empty',prompt : '���ٴ���������'}
			]
		},
		user_mail: {
			identifier : 'user_mail' ,
			rules: [
			{ type : 'empty', prompt : '������Email��ַ' },
			{ type : 'email', prompt : '�������Email��ַ���Ϸ�'}
			]
		}
}
var rule_message = 
{
		message_title: {
			identifier : 'message_title' ,
			rules: [{ type : 'empty', prompt : '����������' }]
		},
		message_issuer: {
			identifier : 'message_issuer' ,
			rules: [{ type : 'empty', prompt : '��������֯��' }]
		},
		message_time: {
			identifier : 'message_time' , 
			rules: [{ type : 'empty',prompt : '������ʱ��'}]
		},
		message_location: {
			identifier : 'message_location' ,
			rules: [{ type : 'empty', prompt : '�������ص�' }]
		},
		message_contact: {
			identifier : 'message_contact' ,
			rules: [{ type : 'empty', prompt : '��������֯����ϵ��ʽ' }]
		},
		message_kind: {
			identifier : 'message_kind' ,
			rules: [{ type : 'empty', prompt : '����������' }]
		}
}