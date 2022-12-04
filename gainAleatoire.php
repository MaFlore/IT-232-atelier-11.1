<?php
header("Content-Type: text/plain; charset=utf-8");
header("Cache-Control: no-cache . private");
header("Pragma: no-cache");
sleep(2);
if(isset($_REQUEST['nom']))
{ 
    $nomJoueur = $_REQUEST['nom'];
}
else
{
    $nomJoueur = "inconnu";
}

if(isset($_REQUEST['prenom']))
{ 
    $prenomJoueur = $_REQUEST['prenom'];
}
else
{
    $prenomJoueur = "inconnu";
}


$gain = rand(0,100);
$nom = $prenomJoueur." ".$nomJoueur;

$resultat = $nom.':'.$gain;


echo $resultat;

?>