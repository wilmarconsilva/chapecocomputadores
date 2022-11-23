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

//receber todos os produtos
products = requisition('http://localhost:3000/produtos')

//hash categorias
const categorys = new Map();
categorys.set('MOBO', 'Placas-Mães'); 
categorys.set('CPU', 'Processadores');
categorys.set('RAM', 'Memórias');
categorys.set('GAB', 'Gabinetes');

//limpar mais vendidos
div_mostSelledProducts = document.getElementById('products-slick');
div_mostSelledProducts.innerHTML = '';

function showMostSelledProducts()
{

    for (let i = 0; i < products.length; i++) 
    {
        //div principal
        var product = document.createElement("div");
        product.classList.add("product");


        //link img
        var link_img = document.createElement('a');
        link_img.href = '#'
        
        link_img.id = product[i].prod_id;
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
        p.innerHTML = categorys.get(products[i].prod_type);
        //nome
        var name = document.createElement('h3');
        name.classList.add('product-name');
        link_name = document.createElement('a');
        link_name.href = '#'
        link_name.innerHTML = product[i].prod_desc;
        name.appendChild(link_name);
        //preço
        price = document.createElement('h4');
        price.classList.add('product-price');
        price.innerHTML = prod_price;
        //append
        div_body.appendChild(p);
        div_body.appendChild(name);
        div_body.appendChild(price);

        //div add to cart
        var div_addCart = document.createElement('div');
        div_addCart.classList.add('add-to-cart');
        //button
        var btn = document.createElement('button');
        btn.classList.add('add-to-cart-btn');
        btn.innerHTML ='Colocar no carrrinho';
        var i_btn = document.createElement('i');
        i_btn.classList.add('fa fa-shopping-cart');
        //append
        div_addCart.appendChild(btn);
        btn.appendChild(i_btn);

    }

}

function showNewProducts()
{

    for (let i = 0; i < 3; i++) 
    {
        var random = Math.random() * products.length;
        //div principal
        var product = document.createElement("div");
        product.classList.add("product");


        //link img
        var link_img = document.createElement('a');
        link_img.href = '#'
        
        link_img.id = product[random].prod_id;
        link_img.onclick = function (e)
        {
            details(this.id)
        }
        //img
        var img = document.createElement("img");
        img.src = product[random].prod_img;
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
        p.innerHTML = categorys.get(products[random].prod_type);
        //nome
        var name = document.createElement('h3');
        name.classList.add('product-name');
        link_name = document.createElement('a');
        link_name.href = '#'
        link_name.innerHTML = product[random].prod_desc;
        name.appendChild(link_name);
        //preço
        price = document.createElement('h4');
        price.classList.add('product-price');
        price.innerHTML = prod_price;
        //append
        div_body.appendChild(p);
        div_body.appendChild(name);
        div_body.appendChild(price);

        //div add to cart
        var div_addCart = document.createElement('div');
        div_addCart.classList.add('add-to-cart');
        //button
        var btn = document.createElement('button');
        btn.classList.add('add-to-cart-btn');
        btn.innerHTML ='Colocar no carrrinho';
        var i_btn = document.createElement('i');
        i_btn.classList.add('fa fa-shopping-cart');
        //append
        div_addCart.appendChild(btn);
        btn.appendChild(i_btn);

    }

}