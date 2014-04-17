<?php
class m_message extends CI_Model
{
	function __construct() {
		parent::__construct();
		$this->load->database();
	}			
	function message_getSum(){ //返回记录数
		return $this->db->count_all_results('message'); 
	}
	function message_getAll($start) {
		$this->db->select(
			'message_id, message_title, message_kind, message_issuer');
		$this->db->limit(10,$start); //限制返回结果的个数
		$query = $this->db->get('message');
		return $query -> result_array();
	}
	function message_getOne($id) {
		return $this->db->get_where('message',array('message_id'=>$id))
						->result_array();
	}	
	function message_insert($arr) {
		$this->db->insert('message',$arr);	
	}
	
}