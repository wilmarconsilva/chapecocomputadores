<?php

    $dados = file_get_contents('php://input');
    
    $objeto = json_decode($dados);

    $con = new PDO("mysql:host=localhost;dbname=netflix;charset=utf8", "root", "");
    $sql = "insert into accounts (nome, email, cpf, senha) values (:nome, :email, :cpf, :senha)";
    $sql = 'select * from produtos where '
    $qry = $con->prepare($sql);
    $qry->bindParam(":nome", $objeto->nome, PDO::PARAM_STR);
    $qry->bindParam(":email", $objeto->email, PDO::PARAM_STR);
    $qry->bindParam(":cpf", $objeto->cpf, PDO::PARAM_STR);
    $qry->bindParam(":senha", $objeto->senha, PDO::PARAM_STR);
    $qry->execute();

?>