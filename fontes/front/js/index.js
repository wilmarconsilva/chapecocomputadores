function teste()
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",'http://localhost:3000/produtos', false);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send();
    console.log(JSON.parse(xhttp.responseText));
}

function requisition(url)
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send();
    console.log(JSON.parse(xhttp.responseText));

    return JSON.parse(xhttp.responseText);
}

div = document.getElementById('products-slick');
div.innerHTML = '';

function showProducts()
{
    const products = requisition('http://localhost:3000/produtos');

    for (let i = 0; i < products.length; i++) 
    {
        //div principal
        var product = document.createElement("div");
        product.classList.add("product");


        //link img
        var link_img = document.createElement('a');
        link_img.href = 
        link_img.id = prod_id;
        link_img.onclick = function (e)
        {
            details(this.id)
        }
        //img
        var img = document.createElement("img");
        img.src = product[i].prod_img;
        img.classList.add("product-img");
        //append
        link_img.appendChild(img);
        product.appendChild(link_img);


        //div body
        var div_body = document.createElement('div');
        div_body.classList.add('product-body');
        //categoria
        var p = document.createElement('p');
        p.classList.add('product-category');
        p.innerHTML = product.prod_type;
        //nome
        var name





        


        
    }



}