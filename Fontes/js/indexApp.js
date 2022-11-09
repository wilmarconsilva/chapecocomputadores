function showProducts(){
    /*
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let id = urlParams.get('id')

    <input type="button" value="anonymous function" onclick="(function(v){
    console.log(v);
    console.log('ok2');})('ok')">
    */
    var url = './php/showProducts.php'

    var oJson = {
        "modelo": 'mobo',
    }

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, false);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify(oJson));
    console.log(xhttp.responseText);
}