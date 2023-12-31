<?php
session_start();
if (!isset($_SESSION['fnev'])) header("Location: login.php");
session_unset(); 
session_destroy(); 
header("Location: index.php");
?>