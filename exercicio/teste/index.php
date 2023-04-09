<!DOCTYPE html>
<html>
<body>

<h1>Passar dados (string) do JavaScript para o PHP</h1>
<button onclick="sendStrings()">Entre com o seu nome e sobrenome</button>

<?php 
// obter dados (string) enviados pelo JavaScript
// $nome = filter_input(INPUT_GET, 'nome', FILTER_SANITIZE_SPECIAL_CHARS);
// $sobrenome = filter_input(INPUT_GET, 'sobrenome', FILTER_SANITIZE_SPECIAL_CHARS);
// if ($nome || $sobrenome) {
//     echo "<br/></br>";
//     echo "Meu nome é: ".$nome;
//     echo "<br/></br>";
//     echo "Meu sobrenome é: ".$sobrenome;
// } 
 $x = $_GET["nome"];
 $y = $_GET["sobrenome"];
 echo "<br>seu nome é $x e o seu sobre nome é $y";
?>

<script>
  function sendStrings() {
    let nome = prompt("Digite o seu nome");
    let sobrenome = prompt("Digite o seu sobrenome");
    document.location.href="?nome="+nome+"&sobrenome="+sobrenome 
  }  
</script>

</body>
</html>