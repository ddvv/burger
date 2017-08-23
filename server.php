<?php
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$street = $_POST['street'];
	$home = $_POST['home'];
	$part = $_POST['part'];
	$appt = $_POST['appt'];
	$floor = $_POST['floor'];
	$comment = $_POST['comment'];
	$payment = $_POST['payment'];

	$callback = $_POST['callback'];
	$callback = isset($disturb) ? 'НЕТ' : 'ДА';
	
	$mail_message = '
		<html>
			<head>
				<title>Заявка</title>
			</head>
			<body>
				<h2>Заказ</h2>
				<ul>
					<li>Имя: ' . $name . '</li>
					<li>Телефон: ' . $phone . '</li>
					<li>Улица: ' . $street . '</li>
					<li>Дом: ' . $home . '</li>
					<li>Корпус: ' . $part . '</li>
					<li>Квартира: ' . $appt . '</li>
					<li>Этаж: ' . $floor . '</li>
					<li>Способ оплаты: ' . $payment . '</li>
					<li>Комментарии к заказу: ' . $comment . '</li>
					<li>Нужно ли перезванивать клиенту: ' . $callback . '</li>
				</ul>
			</body>
		</html>
	';
	
	$headers = "From: Администратор сайта <dimadanilov1995@gmail.com>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('dima-danilov1995@mail.ru', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
	}
	
	echo json_encode($data);
?>