<?php
class c_message extends CI_Controller
{
	function message_display($id) {
		$this->load->library('pagination'); //分页类
		$this->load->library('parser'); //模板解析类
		$this->load->model('m_message'); 
		$config['total_rows'] = $this->m_message->message_getSum();
		$config['base_url'] = '/index.php/c_message/message_display';
		$config['per_page'] = 10;
		$id = $id ? $id : 0;
		$this->pagination->initialize($config);
		$arr = $this->m_message->message_getAll($id);
		for ($i = 0; $i < count($arr); $i++) {
			$arr[$i]['message_link'] = 
				'/index.php/c_message/message_detail/'.$arr[$i]['message_id'];
		}
		$data = array('message'=>$arr,
					'pagelist'=>$this->pagination->create_links());
		$this->parser->parse('v_message.html',$data);
	}
	function message_publish() {
		$this->load->view('v_message_publish.html');
		$this->load->model('m_message');
		$result = $this->input->post();
		if ($result) {
			$this->m_message->message_insert($result);
			$this->output //输出类，直接用echo会输出先前view的内容
				->set_content_type('text')
				->set_output('成功发布新公告!');
		}
	}
	function message_detail($id) {
		$this->load->model('m_message');
		$this->load->library('parser');
		$data = array('message' => $this->m_message->message_getOne($id));
		$this->parser->parse('v_message_detail.html',$data);
	}
} 
?>