<?php
session_start();

setcookie('id', '');
setcookie('I', '');

unset($_SESSION['id']);
unset($_SESSION['I']);
session_destroy();

?>
<script>
    document.location.href = 'login.html';
</script>