## Node, Nginx, Mysql & Docker

Docker Compose up an Nginx reverse proxy to a Nodejs app with connects to a Mysql database.

### How to use

```sh
docker compose up
```

Add person to people table:

```sh
curl -X POST localhost:8080 -H 'Content-Type: application/json'  -d '{"name": "Abraao"}'
```

List all people:

```sh
curl localhost:8080
```