# Desafio Node.js e Nginx

Para rodar a aplicação execute o comando abaixo:

```sh
$ docker-compose up -d
```

Para testar a aplicação deve fazer a chamada no seguinte endpoint `/people/:name`, segue o comando de exemplo abaixo:

```sh
$ curl --location --request GET 'http://localhost:8080/people/fulano'
``` 