| METODO | ENDPOINT | ENTRADA | RESPOSTA | STATUS |
|--------|----------|----------|----------|--------|
| GET | `/` | - | Pagina HTML | 200 |
| GET | `/tipos` | `tipo` (query URL) | Lista em JSON | 200 |
| POST | `/login` | `usuário`, `senha` (body) | `ok` / `erro` | 200 / 401 |
| POST | `/pedido` | `itens`, `endereco` (body) | Confirmacao | 201 / 400 |