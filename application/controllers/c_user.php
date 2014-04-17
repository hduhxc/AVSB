<?php
class c_user extends CI_Controller
{
	function user_checkLogin() {
		$this->load->library('session');
		if ($this->session->userdata('user_name')) {
			echo '您已经登陆'; //向前端返回
		}
	}
	function user_login() {
		$this->load->library('session');
		$this->load->model('m_user');
		$user_name = $this->input->get('user_name');
		$user_pwd = $this->input->get('user_pwd');
		$result = $this->m_user->user_query($user_name);
		if (!$result) 
			echo '该用户不存在'; else
		if ($user_pwd != $result[0]->user_pwd) 
			echo '您输入的密码不正确'; else {
			$this->session->set_userdata(array('user_name' => $user_name));
			echo '登陆成功';
		}
	}
	function user_reg() {
		$this->load->view('v_user_reg.html');
		$this->load->model('m_user');
		$result = $this->input->post();
		if ($result) {
			$user = $this->m_user->user_query($result['user_name']);
			if ($user)
					$error = '该用户名已存在'; else {
					$this->m_user->user_insert($result);
					$error = '恭喜您,注册成功!';
				}
			$this->output //向前端输出
				->set_content_type('text')
				->set_output($error);
		}
	}
	function user_logout() {
		$this->load->library('session');
		$user_name = $this->session->userdata('user_name');
		$this->session->unset_userdata('user_name');
	}
}
?>