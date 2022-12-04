function jouer() {


    document.getElementById('nom').style.backgroundImage = "white";
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;

    if (nom == "") {
        document.getElementById('nom').style.backgroundColor = "red";
        alert("Attention : vous devez saisir votre nom avant de jouer");
        return null;
    }

    var parametres = "nom=" + codeContenu("nom") + "&prenom=" + codeContenu("prenom");

    objet_xml_http_request = creation_objet_xml_http_request();

    objet_xml_http_request.open('post', 'gainAleatoire.php', true);

    objet_xml_http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    objet_xml_http_request.onreadystatechange = actualiserPage;

    document.getElementById('button').disabled = true;
    document.getElementById('charge').style.visibility = "visible";

    objet_xml_http_request.send(parametres);
}