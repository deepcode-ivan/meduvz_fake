<?php

/*
Форма обратной связи может получать сообщения с любых почтовых ящиков.
Исправлена проблема кодировки при получении писем почтовым клиентом Outlook.
Вы скачали её с сайта Epic Blog https://epicblog.net Заходите на сайт снова!
ВНИМАНИЕ! Лучше всего в переменную myemail прописать почту домена, который использует сайт. А не mail.ru, gmail и тд.
*/
if(isset($_POST['submit'])){
    /* Устанавливаем e-mail Кому и от Кого будут приходить письма */   
    $to = "rob10000@ya.ru"; // Здесь нужно написать e-mail, куда будут приходить письма   
    $from = "test@med.net"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply(собака)epicblog.net
     
    /* Указываем переменные, в которые будет записываться информация с формы */
    $first_name = $_POST['first_name'];
    $email = $_POST['email'];
    /*$phone = $_POST['phone'];*/
    $message = $_POST['message'];
    $subject = "Форма отправки сообщений с сайта med.loc";
         
    /* Проверка правильного написания e-mail адреса */
    if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
    {
    echo("<br> Е-mail адрес не существует");
    } else {
    /* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
    $mail_to_myemail = "Здравствуйте! 
    Было отправлено сообщение с сайта! 
    Имя отправителя: $first_name
    E-mail: $email
    Текст сообщения: $message ";
    /*Чтобы ответить на письмо, создайте новое сообщение, скопируйте электронный адрес и вставьте в поле Кому.";*/
         
    $headers = "From: $from \r\n";
         
    /* Отправка сообщения, с помощью функции mail() */
    mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
   // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
    /*echo "Сообщение отправлено. Спасибо Вам " . $first_name . ".";
	echo "<br /><br /><a href='https://epicblog.net'>Вернуться на сайт.</a>";*/

    echo("<br> Спасибо за отзыв.");
    
    }
}


?>

<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
/*function changeurl(){eval(self.location="https://epicblog.net/index.php");}*/
function changeurl(){eval(self.location="index.html");}
window.setTimeout("changeurl();",3000);
</script>

