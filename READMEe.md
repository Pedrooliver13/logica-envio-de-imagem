<p align=center>Lógica de envio de imagem com javascript</p>

<p>forEach() = executa uma data função em cada elemento da <strong>array</strong></p>

//TODOS ESTÃO NO SCRIPTS.JS
<br>
<p>1ºPASSO: Criar um limite de fotos a serem enviadas</p>
<p>2ªPASSO: arrumar o erro, de colocar uma imagem, e excluir a anterior sem querer </p>
<p>para isso transformamos o fileList que pegava todos os files do input em uma array</p>

assim: Array.from(fileList)

<p>e usaremos o Array.from(fileList)<strong>forEach</strong>(file => {})</p>
<p>3ºPasso: faremos uma varialvel que lê o file(new FileReader() == esse é um contructors responsável por ler o file)</p>
<p>4ºPasso: vai passar o eesult para uma tag img</p>
<p>e adicionaremos tudo dentro da div</p>

