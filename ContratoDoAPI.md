| MÉTODO | ENDPOINT | ENTRADA | RESPOSTA | STATUS |
|--------|----------|----------|----------|--------|
| GET | `/` | - | Página HTML | 200 |
| GET | `/tipos` | `tipo` (query URL) | Lista em JSON | 200 |
| POST | `/login` | `usuário`, `senha` (body) | `ok` / `erro` | 200 / 401 |
| POST | `/pedido` | `nomeitem`, `quantidade` (body) | Confirmação | 201 / 400 |