var ao = new XMLHttpRequest();



function Process() {
    if (ao.readyState === 4 || ao.readyState === 0) {
        ao.open("GET", "handler.php?name=" + document.getElementById("usertext").value, true);
        ao.onreadystatechange = getData;
        ao.send(null);
    }
}

// функция получения данных

function getData() {
    if (ao.readyState === 4 && ao.status === 200) {
        document.getElementById("result").innerHTML = ao.responseText;
    }
}