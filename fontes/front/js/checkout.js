function requisition(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send();
    console.log(JSON.parse(xhttp.responseText));

    return JSON.parse(xhttp.responseText);
}

function post(url, obj) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, false);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify(obj));
    console.log(JSON.parse(xhttp.responseText));

    return JSON.parse(xhttp.responseText);
}

//limpar carrinho
var div_cart = document.getElementById('cart-list');
var div_CartSummary = document.getElementById('cart-summary');
div_cart.innerHTML = '';
div_CartSummary.innerHTML = '';

//receber todos os produtos
const products = requisition('http://localhost:3000/produtos')

//hash categorias
const categorys = new Map();
categorys.set('MOBO', 'Placas-Mães');
categorys.set('CPU', 'Processadores');
categorys.set('RAM', 'Memórias');
categorys.set('GAB', 'Gabinetes');
categorys.set('FON', 'Fontes');
categorys.set('SSD', 'Armazenamentos');
categorys.set('GPU', 'Placas de vídeo');

//limpar mais vendidos
var div_mostSelledProducts = document.getElementById('products-slick');
div_mostSelledProducts.innerHTML = '';

//limpar lançamentos
var div_newProducts = document.getElementById('products-slick-2');
div_newProducts.innerHTML = '';

function openLoginHtml() {
    alert('Você precisa logar para adicionar ao carrinho');
    location.replace("./login-registration.html", "_self");
}

function isLogged() {

    const user = window.localStorage.getItem('id');
    console.log(user);

    //icone login
    var login_icon = document.getElementById('icon-login');
    //icone carrinho
    var cart_icon = document.getElementById('link-cart');
    cart_icon.href = './login-registration.html';

    if (user != null) {
        login_icon.innerHTML = '';
        cart_icon.href = '';

        return true;
    }

    else {
        return false;
    }

}

function getCart() {

    var products_cart = [];
    if (window.localStorage.getItem('cart') != null) {
        products_cart.push(JSON.parse(window.localStorage.getItem('cart')));

        for (let i in products_cart) {

            var product = products_cart[i];

            //carrinho
            var div_pai = document.getElementById('cart-list');

            //produto
            var div_product = document.createElement('div');
            div_product.classList.add('product-widget');
            div_product.id = 'product-cart-' + product.prod_id;
            //append master
            div_pai.appendChild(div_product);

            //div img
            var div_img = document.createElement('div')
            div_img.classList.add('product-img')
            //link img
            var link_img = document.createElement('a');
            link_img.href = './details.html?id=' + product.prod_id;

            link_img.id = product.prod_id;
            //img
            var img = document.createElement("img");
            img.src = '/fontes/front/img/' + product.imgpath + '.jpg';
            img.classList.add("product-img");
            //append
            link_img.appendChild(img);
            //append
            div_img.appendChild(link_img);
            //append pai
            div_product.appendChild(link_img);


            //div body
            var div_body = document.createElement('div');
            div_body.classList.add('product-body');
            //nome
            var name = document.createElement('h3');
            name.classList.add('product-name');
            link_name = document.createElement('a');
            link_img.href = './details.html?id=' + product.prod_id;
            link_name.innerHTML = product.prod_desc;
            name.appendChild(link_name);
            //preço
            var price = document.createElement('h4');
            price.classList.add('product-price');
            price.innerHTML = 'R$ ' + product.prod_preco + ',99';
            //quantidade
            var span = document.createElement('span');
            span.id = 'qty-' + product.prod_id;
            span.classList.add('qty');
            span.innerHTML = 1 + 'x';
            price.appendChild(span);
            //append
            div_body.appendChild(name);
            div_body.appendChild(price);
            //append pai
            div_product.appendChild(div_body);

            //button delete
            var button = document.createElement('button');
            button.classList.add('delete');
            button.onclick = function (e) {
                deleteFromCart(product.prod_id)
            };
            //icon delete
            var icon = document.createElement('i');
            icon.classList.add('fa');
            icon.classList.add('fa-close');
            //append
            button.appendChild(icon);
            //append pai
            div_product.appendChild(button);

            //transforma o produto em struct
            var product_struct
            {
                prod_id: product.prod_id;
                price: product.price;
                qty: 1;
                imgpath: '/fontes/front/img/' + product.imgpath + '.jpg';
            }

            //envia o produto para o carrinho
            products_cart.push(product_struct);
            window.localStorage.setItem('cart', JSON.stringify(product_struct));

            //aplicar quantidade de itens do carrinho no ícone
            cart_qty_icon = document.getElementById('cart-qty');
            cart_qty_icon.innerHTML = products_cart.length
        }
    }

    else {
        cart = document.getElementById('cart-list');
        cart.innerHTML = '';
    }
}

function addOrder()
{
    Ordr = {}





    alert('Pedido enviado');

    //get inputs
    var name = document.getElementById('address');
    var city = document.getElementById('city');
    var country = document.getElementById('country');
    var zip_code = document.getElementById('zip-code');
    var tel = document.getElementById('tel');

    //clear inputs
    name.value = '';
    city.value = '';
    country.value = '';
    zip_code.value = '';
    tel.value = '';

}

