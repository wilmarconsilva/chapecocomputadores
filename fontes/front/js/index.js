function requisition(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send();
    console.log(JSON.parse(xhttp.responseText));

    return JSON.parse(xhttp.responseText);
}

var isLogged = false;

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

//limpar mais vendidos
var div_mostSelledProducts = document.getElementById('products-slick');
div_mostSelledProducts.innerHTML = '';

//limpar lançamentos
var div_newProducts = document.getElementById('products-slick-2');
div_newProducts.innerHTML = '';

function showMostSelledProducts() {

    for (let i = 0; i < products.length; i++) {

        //div principal
        var product = document.createElement("div");
        product.classList.add("product");


        //link img
        var link_img = document.createElement('a');
        link_img.href = './details.html';
        link_img.classList.add('product-img');

        link_img.id = products[i].prod_id
        link_img.onclick = function (e) {
            details(this.id)
        }
        //img
        var img = document.createElement("img");
        img.src = '/fontes/front/img/' + products[i].imgpath + '.jpg';
        img.classList.add("product-img");
        //append
        link_img.appendChild(img);
        //append pai
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
        link_name.href = './details.html'
        link_name.innerHTML = products[i].prod_desc;
        name.appendChild(link_name);
        //preço
        price = document.createElement('h4');
        price.classList.add('product-price');
        price.innerHTML = 'R$ ' + products[i].prod_preco + ',99';
        //append
        div_body.appendChild(p);
        div_body.appendChild(name);
        div_body.appendChild(price);
        //append pai
        product.appendChild(div_body);

        //div add to cart
        var div_addCart = document.createElement('div');
        div_addCart.classList.add('add-to-cart');
        //button
        var btn = document.createElement('button');
        btn.classList.add('add-to-cart-btn');
        btn.innerHTML = 'Colocar no carrrinho';
        btn.onclick = function (e) {
            addProductCart(products[i].prod_id);
        }
        var i_btn = document.createElement('i');
        i_btn.classList.add('fa');
        i_btn.classList.add('fa-shopping-cart');
        //append
        div_addCart.appendChild(btn);
        btn.appendChild(i_btn);
        //append pai
        product.appendChild(div_addCart);

        //append master
        div_mostSelledProducts.appendChild(product);

    }

}

function showNewProducts() {

    for (let i = 0; i < 3; i++) {
        var random = Math.floor(Math.random() * products.length);

        //div principal
        var product = document.createElement("div");
        product.classList.add("product");


        //link img
        var link_img = document.createElement('a');
        link_img.href = './details.html'
        link_img.classList.add('product-img')

        link_img.id = products[random].prod_id;
        link_img.onclick = function (e) {
            details(this.id)
        }
        //img
        var img = document.createElement("img");
        img.src = '/fontes/front/img/' + products[random].imgpath + '.jpg';
        //append
        link_img.appendChild(img);
        //append pai
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
        link_name.href = './details.html'
        link_name.innerHTML = products[random].prod_desc;
        name.appendChild(link_name);
        //preço
        price = document.createElement('h4');
        price.classList.add('product-price');
        price.innerHTML = 'R$ ' + products[random].prod_preco + ',99';
        //append
        div_body.appendChild(p);
        div_body.appendChild(name);
        div_body.appendChild(price);
        //append pai
        product.appendChild(div_body);

        //div add to cart
        var div_addCart = document.createElement('div');
        div_addCart.classList.add('add-to-cart');
        //button
        var btn = document.createElement('button');
        btn.classList.add('add-to-cart-btn');
        btn.innerHTML = 'Colocar no carrrinho';
        btn.onclick = function (e) {
            addProductCart(products[i].prod_id);
        }
        var i_btn = document.createElement('i');
        i_btn.classList.add('fa');
        i_btn.classList.add('fa-shopping-cart');
        //append
        div_addCart.appendChild(btn);
        btn.appendChild(i_btn);
        //append pai
        product.appendChild(div_addCart);

        //append master
        div_newProducts.appendChild(product);

    }

}

function details(id) {
    for (const i in products) {
        if (products[i].prod_id) {

        }
    }
}

function showProductsbyCategory(category) {
    div_productsByCategoryOrSearch = document.getElementById('products-by-category-or-search');
    div_productsByCategoryOrSearch.innerHTML = '';

    //texto resultados para
    var results_title = document.createElement('h3');
    results_title.classList.add('title');
    results_title.innerHTML = 'Resultados para ' + categorys.get(category);
    console.log(category);
    //append
    div_productsByCategoryOrSearch.appendChild(results_title);


    for (const i in products) {
        if (products[i].prod_type == category) {
            //div principal
            var product = document.createElement("div");
            product.classList.add("product");


            //link img
            var link_img = document.createElement('a');
            link_img.href = './details.html';
            link_img.classList.add('product-img');

            link_img.id = products[i].prod_id;
            link_img.onclick = function (e) {
                details(this.id)
            }
            //img
            var img = document.createElement("img");
            img.src = '/fontes/front/img/' + products[i].imgpath + '.jpg';
            img.classList.add("product-img");
            //append
            link_img.appendChild(img);
            //append pai
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
            link_name.href = './details.html'
            link_name.innerHTML = products[i].prod_desc;
            name.appendChild(link_name);
            //preço
            price = document.createElement('h4');
            price.classList.add('product-price');
            price.innerHTML = 'R$ ' + products[i].prod_preco + ',99';
            //append
            div_body.appendChild(p);
            div_body.appendChild(name);
            div_body.appendChild(price);
            //append pai
            product.appendChild(div_body);

            //div add to cart
            var div_addCart = document.createElement('div');
            div_addCart.classList.add('add-to-cart');
            //button
            var btn = document.createElement('button');
            btn.classList.add('add-to-cart-btn');
            btn.innerHTML = 'Colocar no carrrinho';
            btn.onclick = function (e) {
                addProductCart(products[i].prod_id);
            }
            var i_btn = document.createElement('i');
            i_btn.classList.add('fa');
            i_btn.classList.add('fa-shopping-cart');
            //append
            div_addCart.appendChild(btn);
            btn.appendChild(i_btn);
            //append pai
            product.appendChild(div_addCart);

            //append master
            div_productsByCategoryOrSearch.appendChild(product);

        }

    }
}

function showProductsbySearch() {
    //recebe o conteudo do input
    var name = document.querySelector("#search-product").value;

    //limpar div
    var div_ProductsByCategoryOrSearch = document.getElementById('products-by-category-or-search');
    div_ProductsByCategoryOrSearch.innerHTML = '';

    //texto resultados para
    var results_title = document.getElementById('title-products-by-category-or-search')
    results_title.innerHTML = 'Resultados para ' + '"' + name + '"';
    //append
    div_ProductsByCategoryOrSearch.appendChild(results_title);

    //dados no BD em caixa alta, transformar input em caixa alta
    name = name.toUpperCase();

    for (const i in products) {
        if (products[i].prod_desc.includes(name)) {
            //div principal
            var product = document.createElement("div");
            product.classList.add("product");


            //link img
            var link_img = document.createElement('a');
            link_img.href = '';
            link_img.classList.add('product-img');

            link_img.id = products[i].prod_id;
            link_img.onclick = function (e) {
                details(this.id)
            }
            //img
            var img = document.createElement("img");
            img.src = '/fontes/front/img/' + products[i].imgpath + '.jpg';
            img.classList.add("product-img");
            //append
            link_img.appendChild(img);
            //append pai
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
            link_name.href = './details.html'
            link_name.innerHTML = products[i].prod_desc;
            name.appendChild(link_name);
            //preço
            price = document.createElement('h4');
            price.classList.add('product-price');
            price.innerHTML = 'R$ ' + products[i].prod_preco + ',99';
            //append
            div_body.appendChild(p);
            div_body.appendChild(name);
            div_body.appendChild(price);
            //append pai
            product.appendChild(div_body);

            //div add to cart
            var div_addCart = document.createElement('div');
            div_addCart.classList.add('add-to-cart');
            //button
            var btn = document.createElement('button');
            btn.classList.add('add-to-cart-btn');
            btn.innerHTML = 'Colocar no carrrinho';
            btn.onclick = function (e) {
                addProductCart(products[i].prod_id);
            }
            var i_btn = document.createElement('i');
            i_btn.classList.add('fa');
            i_btn.classList.add('fa-shopping-cart');
            //append
            div_addCart.appendChild(btn);
            btn.appendChild(i_btn);
            //append pai
            product.appendChild(div_addCart);

            //append master
            div_ProductsByCategoryOrSearch.appendChild(product);

        }
    }
}

function addProductCart(prod_id) {

    var product;

    //procurar pelo produto
    for (const i in products) {
        if (products[i].prod_id == prod_id) {
            product = products[i];
        }
    }
        //carrinho
        var div_pai = document.getElementById('cart-list');


        //produto
        var div_product = document.createElement('div');
        div_product.classList.add('product-widget');
        div_product.id = 'product-cart-' + product.prod_id;

        //link img
        var link_img = document.createElement('a');
        link_img.href = '';
        link_img.classList.add('product-img');

        link_img.id = product.prod_id;
        link_img.onclick = function (e) {
            details(this.id)
        }
        //img
        var img = document.createElement("img");
        img.src = '/fontes/front/img/' + product.imgpath + '.jpg';
        img.classList.add("product-img");
        //append
        link_img.appendChild(img);
        //append pai
        div_product.appendChild(link_img);

        //div body
        var div_body = document.createElement('div');
        div_body.classList.add('product-body');
        //nome
        var name = document.createElement('h3');
        name.classList.add('product-name');
        link_name = document.createElement('a');
        link_name.href = './details.html'
        link_name.innerHTML = product.prod_desc;
        name.appendChild(link_name);
        //preço
        var price = document.createElement('h4');
        price.classList.add('product-price');
        price.innerHTML = 'R$ ' + product.prod_preco + ',99';
        //quantidade
        var span = document.createElement('span');
        span.classList.add('qty');
        var qty = 1;
        span.innerHTML = qty;
        price.appendChild(span);
        //append
        div_body.appendChild(name);
        div_body.appendChild(price);
        //append pai
        div_pai.appendChild(div_body);

        //button delete
        var button = document.createElement('button');
        button.classList.add('delete');
        button.onclick = function (e) {
            deleteFromCart(product.prod_id)
        };
        //icon delete
        var i = document.createElement('i');
        i.classList.add('fa');
        i.classList.add('fa-close');
        //append
        button.appendChild(i);
        //append pai
        div_pai.appendChild(button);
    }

function deleteFromCart(prod_id) {
    div_ProductCart = document.getElementById('product-cart-' + prod_id);
    div_ProductCart.innerHTML = '';
}
