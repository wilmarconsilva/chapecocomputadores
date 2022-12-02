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
    const user = window.sessionStorage.getItem('id');

    //icone login
    var login_icon = document.getElementById('icon-login');
    //icone carrinho
    var cart_icon = document.getElementById('link-cart');
    cart_icon.href = './login-registration.html';

    if (user.id != 'undefined' || user.id != 'null' || user.id !=  null) 
    {
        login_icon.innerHTML = '';
        cart_icon.href = '';

        return true;
    }

    else
    {
        return false;
    }

}

function getCart() {

    var products_cart = [];
    if(window.localStorage.getItem('cart') != 'undefined' || window.localStorage.getItem('cart') !=  null || window.localStorage.getItem('cart') !=  'null') 
    
    {
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

function showMostSelledProducts() {

    for (let i = 0; i < products.length; i++) {

        //div principal
        var product = document.createElement("div");
        product.classList.add("product");


        //link img
        var link_img = document.createElement('a');
        link_img.href = './details.html?id=' + products[i].prod_id;
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
        link_img.href = './details.html?id=' + products[i].prod_id;
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
        btn.id = 'add-to-cart-btn';
        btn.classList.add('add-to-cart-btn');
        btn.innerHTML = 'Colocar no carrrinho';
        if (isLogged()) 
        {
            btn.onclick = function (e) 
            {
                addProductCart(products[i].prod_id);
            };
        }
        else
        {
            btn.onclick = function(e) 
            {
                openLoginHtml()
            };
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
        link_img.href = './details.html?id=' + products[random].prod_id;
        link_img.classList.add('product-img')

        link_img.id = products[random].prod_id;
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
        link_img.href = './details.html?id=' + products[random].prod_id;
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
        btn.id = 'add-to-cart-btn';
        btn.classList.add('add-to-cart-btn');
        btn.innerHTML = 'Colocar no carrrinho';
        if (isLogged()) 
        {
            btn.onclick = function (e) 
            {
                addProductCart(products[i].prod_id);
            };
        }
        else
        {
            btn.onclick = function(e) 
            {
                openLoginHtml()
            };
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


    for (let i in products) {
        if (products[i].prod_type == category) {
            //div principal
            var product = document.createElement("div");
            product.classList.add("product");


            //link img
            var link_img = document.createElement('a');
            link_img.href = './details.html?id=' + products[i].prod_id;
            link_img.classList.add('product-img');

            link_img.id = products[i].prod_id;
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
            link_img.href = './details.html?id=' + products[i].prod_id;
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

    for (let i in products) {
        if (products[i].prod_desc.includes(name)) {
            //div principal
            var product = document.createElement("div");
            product.classList.add("product");


            //link img
            var link_img = document.createElement('a');
            link_img.href = '';
            link_img.classList.add('product-img');

            link_img.id = products[i].prod_id;
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
            link_img.href = './details.html?id=' + product.prod_id;
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

    //vef login
    if (isLogged()) {

        //recebe produtos do carrinho
        var products_cart = [];
        if (window.sessionStorage.getItem('cart')) {
            products_cart.push(JSON.parse(window.sessionStorage.getItem('cart')));
        }

        var product;
        //procurar pelo produto
        for (const i in products) {
            if (products[i].prod_id == prod_id) {
                product = products[i];
            }
        }

        //procura se o produto já existe no carrinho
        var product_cart
        var flag = 0;
        for (let i in products_cart) {
            if (products_cart[i].prod_id == prod_id) {
                product_cart = products_cart[i];
                flag = 1;
            }
        }

        if (flag == 0) {

            //carrinho
            var div_pai = document.getElementById('cart-list');


            //produto
            var div_product = document.createElement('div');
            div_product.classList.add('product-widget');
            div_product.id = 'product-cart-' + product.prod_id;
            //append master
            div_pai.appendChild(div_product);

            //div img
            var div_img = document.createElement('div');
            div_img.classList.add('product-img');
            //link img
            var link_img = document.createElement('a');
            link_img.href = './details.html?id=' + product.prod_id;

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
            span.id = 'qty-' + prod_id;
            span.classList.add('qty');
            span.innerHTML = ' ' + 1 + 'x';
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
            var product_struct =
            {
                prod_id: product.prod_id,
                price: product.price,
                qty: 1,
                imgpath: '/fontes/front/img/' + product.imgpath + '.jpg'
            };

            if (products_cart,length != 0) {
                //envia o produto para o carrinho
                products_cart.push(product_cart);
                window.sessionStorage.setItem('cart', JSON.stringify(product_struct));

                //aplicar quantidade de itens do carrinho no ícone
                cart_qty_icon = document.getElementById('cart-qty');
                cart_qty_icon.innerHTML = products_cart.length
            }

            else {
                //aplicar quantidade de itens do carrinho no ícone
                cart_qty_icon = document.getElementById('cart-qty');
                cart_qty_icon.innerHTML = 1;
                window.localStorage.setItem('cart', JSON.stringify(product_struct));
            }

            alert('Produto adicionado ao carrinho');
        }

        else {
            //quantidade + 1 no carrinho
            var qty = document.getElementById('qty-' + prod_id);
            qty = parseInt(qty.textContent, 10);
            qty.innerHTML = qty + 1 + ' x';

            //quantidade + 1 no localstorage
            product_cart.qty = product_cart.qty + 1;
            //atualiza o carrinho
            window.localStorage.setItem('cart', JSON.stringify(product_cart));

            alert('Quantidade do produto aumentada no carrinho');
        }
    }
}

function deleteFromCart(prod_id) {
    //deletar do carrrinho
    div_ProductCart = document.getElementById('product-cart-' + prod_id);
    div_ProductCart.innerHTML = '';

    //deletar do local storage
    var product_cart = JSON.parse(window.localStorage.getItem('cart'));

    for (let i in product_cart) {
        if (product_cart[i].prod_id == prod_id) {
            product_cart.splice(i, 1);
        }
    }

    window.localStorage.setItem('cart', JSON.stringify(product_cart));

    alert('Produto deletado do carrinho');
}

function sendNewUser() {

    //get data
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    const cpf = document.getElementById('user-cpf').value;

    var user_register =
    {
        cli_nome: name,
        cli_email: email,
        cli_password: password,
        cli_cpfcnpj: cpf
    };

    const user = post('localhost:3000/clientes', user_register);

    if (!user.message) {
        alert('Usuário cadastrado');
    }

    else {
        alert(user.message)
    }

}

function login() {
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;

    var user_login =
    {
        cli_email: email,
        cli_password: password
    }

    const user = post('localhost:3000/clientes', user_login);

    if (user.id != 0) {
        window.sessionStorage.setItem('id', user.id)
        alert('Login efetuado com sucesso')
    }

    else {
        alert('Credenciais incorretas');
    }

}
