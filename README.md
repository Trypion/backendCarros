# soCarrosDemo

<h1> Desenvolvido por Israel Schmitt Joaquim </h1>

<p>webapp desenvolvido usando MEAN stack com o unico propósito de demonstração, para testes você pode clonar este repositório
e seguir as instruções ou acessar o link: <a href="http://socarros-env.eba-wh9jbrui.us-east-1.elasticbeanstalk.com/"> Deploy do site na AWS </a> </p>


<h1>Instruções</h1>

<p> 
  antes de tudo você irá precisar do mongoDB instalado ou trocar a url dentro de config/db.config para sua mongoDB cloud caso queira usar uma

  <ol>
    <li> execute npm install na pasta do projeto </li>
    <li> em seguida execute npm start </li>
    <li> se tudo der certo o servidor vai adicionar alguns carros e um usuário pra você </li>
    <li> você vai poder acessar em localhost:3000 no seu browser </li>
  </ol>
  
  para adionar um carro você deve estar logado com um usuário, você pode usar o usuario inicial: login: Israel / senha: 123 ou pode criar
  seu próprio acessando registrar.
  
  usuários podem registrar um carro, editar e deletar apenas carros enviados por ele.
  
  ex.: O usuario Israel não consegue editar nem deletar os carros Ferrari e McLaren pois não foram enviados por ele.  
  
</p>

