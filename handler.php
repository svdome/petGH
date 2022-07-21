<?php

$name = $_GET['name'];
$names = ['mary', 'maria', 'marcello'];
$name = strtolower($name);

$response = '';
foreach ($names as $value) {
    if (substr($value, 0, strlen($name)) === $name) {
        $response .= $value . '<br>';
    }
}
echo $response;
