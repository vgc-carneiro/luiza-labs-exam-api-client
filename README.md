# Getting Started
1.	[Instalar o NodeJS](https://nodejs.org/en/)
2.	Instalar as dependências respectivas: <code>npm install</code>
3.	Rodar o projeto em DEV (Executa o nodemon para auxílio e populas as variáveis de ambiente necessárias): <code>npm run dev</code>
4. <strong>TODA E QUALQUER ALTERAÇÃO</strong> Validar seu código: <code>npm run lint</code>
4. Existe um path para swagger: <code>/docs</code>

# Rotas

<b><strong>GET: </strong>/{id{</b>

-Rota utilizada para consultar cliente por ID:

<ul>
	<li>Input no PATH: <code>id</code></li>
	<li>Input no Header: <code>{"token": String}</code> (Token JWT)</li>
<ul>
	<li>Output:</li>
	<ul>
		<li>StatusCode: <strong>200</strong>
		<br/>
			Exemplo:
		</li>
	</ul>
</ul>


```javascript
{
	"_id":"5e6452ff94fd2082e8b8b6a5",
	"name":"Vinicius Carneiro",
	"email":"vgc.carneiro@gmail.com",
	"active":true,
	"updatedAt":"2020-03-08T02:05:51.997Z",
	"createdAt":"2020-03-08T02:05:51.997Z",
	"__v":0
}
```


<b><strong>GET: </strong>/email/{email}</b>

- Rota utilizada para buscar cliente por email:

<ul>
	<li>Input no PATH: <code>email</code></li>
	<li>Input no Header: <code>{"token": String}</code> (Token JWT)</li>
<ul>
	<li>Output:</li>
	<ul>
		<li>StatusCode: <strong>200</strong>
		<br/>
			Exemplo:
		</li>
	</ul>
</ul>


```javascript
{
	"_id":"5e6452ff94fd2082e8b8b6a5",
	"name":"Vinicius Carneiro",
	"email":"vgc.carneiro@gmail.com",
	"active":true,
	"updatedAt":"2020-03-08T02:05:51.997Z",
	"createdAt":"2020-03-08T02:05:51.997Z",
	"__v":0
}
```

# Build and Test

Este projeto contém uma dependência chamada [HUSKY](https://www.npmjs.com/package/husky), sendo assim, qualquer <b>commit</b> ou <b>push</b>, será acionado automaticamente o [LINT](https://www.npmjs.com/package/eslint) e testes unitários [JASMINE](https://jasmine.github.io/setup/nodejs.html).

<ul>
    <li>
        Rodar projeto em DEV: <code>npm run dev</code>
    </li>
    <li>
        Rodar projeto: <code>npm start</code>, (Colocar variáveis de ambiente)
    </li>
    <li>
        Rodar testes de cobertura: <code>npm run cover</code>
    </li>
    <li>
        Validar seu código: <code>npm run lint</code>
    </li>
    <li>
		SWAGGER <code>/docs/</code>
    </li>
</ul>

Rodando o projeto com DOCKER:

<ul>
	<li>
		No terminal, acessar a raiz do projeto, onde se encontra o Dockerfile.
	</li>
    <li>
        Criar imagem: <code>docker build -t luiza-labs/api-client .</code>
    </li>
    <li>
        Rodar a imagem: <code>docker run -p 3002:3002 luiza-labs/api-client</code>
    </li>
</ul>