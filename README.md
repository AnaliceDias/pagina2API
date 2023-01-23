### pagina2API é uma aplicação back-end que tem como objetivo facilitar a organização das leituras pessoais do usuário.

## Como usar:
> **POST: /minhas-leituras**
<p>Use essa rota para adicionar uma nova leitura à sua lista.</p>
<p>Body: </br>
 { "titulo": "Livro 1", </br>
  "autor": "Autor",  </br>
  "edicao": "1ª",  </br>
  "numeroDePag": "300",  </br>
  "formatoId": 1,  </br>
  "statusId": 1}
</p>

> **GET: /minhas-leituras**
<p>Use essa rota para listar todas as leituras do usuário.</p>

> **DELETE /minhas-leituras/:leituraId**
<p>Use essa rota para excluir uma leitura da lista.</p>

> **PUT /minhas-leituras/:leituraId/pag-atual**
<p>Use essa rota para atualizar a página atual de uma leitura.</p>
<p>Body: 
{ "pagAtual": "10"}
</p>
