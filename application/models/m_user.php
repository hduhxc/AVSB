<?php
class m_user extends CI_Model
{
	function __construct() {
		parent::__construct(); //必须先调用父类构造函数
		$this->load->database(); 
	}
	function user_query($name) {
		return $this->db->get_where('user',array('user_name'=>$name))->result(); //返回对象数组
	}
	function user_insert($arr) {
		$this->load->helper("array");
		$arr = elements(
			array('user_name','user_pwd','user_mail','user_profile'),$arr); //选出指定项目
		$this->db->insert('user',$arr);
	}
}
?>