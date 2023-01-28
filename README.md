### ```Pagina 2``` é uma aplicação back-end que tem como objetivo facilitar a organização das leituras pessoais do usuário.

> *<p>Para executar a aplicação em modo de desenvolvimento utilize o comando ```npm run dev```</p>*
> *<p>Para executar a aplicação em produção, execute os camando ```npm run build``` e ```npm start```</p>*

## Como usar:
> **POST: /minhas-leituras**
<p>Use essa rota para adicionar uma nova leitura à sua lista.</p>
<p>Body: </br>
 { "obraId": 1, </br>
  "edicao": "1ª",  </br>
  "numeroDePag": "300",  </br>
  "formatoId": 1,  </br>
  "statusId": 1}
</p>

> **GET: /minhas-leituras**
<p>Use essa rota para listar todas as leituras do usuário.</p>

> **GET: /minhas-leituras/:id**
<p>Use essa rota para obter uma leitura a partir do id.</p>

> **DELETE /minhas-leituras/:leituraId**
<p>Use essa rota para excluir uma leitura da lista.</p>

> **PUT /minhas-leituras/:leituraId/pag-atual**
<p>Use essa rota para atualizar a página atual de uma leitura.</p>
<p>Body: 
{ "pagAtual": "10"}
</p>

> **PUT /minhas-leituras/:leituraId/:statusId**
<p>Use essa rota para atualizar o status de uma leitura.</p>

> **GET /autores**
<p>Use essa rota para obter a lista de todos os autores registrados.</p>

> **GET /autores**
<p>Use essa rota para obter a lista de todas as obras registradas.</p>

> **GET /status**
<p>Use essa rota para obter a lista de opções de status.</p>

> **GET /formatos**
<p>Use essa rota para obter a lista de opções de formatos.</p>
