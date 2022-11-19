function showProducts(){

    var url = 'http://localhost:3000/produtos';

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send();
    console.log(JSON.parse(xhttp.responseText));

    var produto = JSON.parse(xhttp.responseText);

}