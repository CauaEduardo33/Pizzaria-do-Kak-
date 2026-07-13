const express = require('express');
const app = express();

var logado = false;

const itens = [
  // Pizzas
  { nome: 'Pizza Margherita',      preco: 49.90, tipo: 'pizza' },
  { nome: 'Pizza Calabresa',       preco: 54.90, tipo: 'pizza' },
  { nome: 'Pizza Quatro Queijos',  preco: 59.90, tipo: 'pizza' },
  { nome: 'Pizza Portuguesa',      preco: 57.90, tipo: 'pizza' },

  { nome: 'Pudim de Leite',        preco: 12.90, tipo: 'sobremesa' },
  { nome: 'Petit Gateau',          preco: 18.90, tipo: 'sobremesa' },
  { nome: 'Mousse de Maracujá',    preco: 10.90, tipo: 'sobremesa' },

  { nome: 'Batata Frita',          preco: 24.90, tipo: 'porcao' },
  { nome: 'Frango à Passarinho',   preco: 34.90, tipo: 'porcao' },
  { nome: 'Anéis de Cebola',       preco: 22.90, tipo: 'porcao' },

  { nome: 'Coca-Cola 350ml',       preco: 7.50,  tipo: 'refrigerante' },
  { nome: 'Guaraná Antarctica 350ml', preco: 7.00, tipo: 'refrigerante' },

  { nome: 'Suco de Laranja',       preco: 9.50,  tipo: 'suco' },
  { nome: 'Suco de Uva',           preco: 9.50,  tipo: 'suco' }
];

const USUARIO_PADRAO = 'admin';
const SENHA_PADRAO = 'caeve321';

app.use(express.json());

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html'); 
});

app.get('/tipos', (req, res)=>{
   
    const tipo = req.query.tipo;

    if(!tipo){
        return res.status(200).json(itens);
    }

    const filtrados = [];

    for(let i=0; i<itens.length; i++){
        if(itens[i].tipo == tipo) filtrados.push(itens[i]);
    }

    return res.status(200).json(filtrados);


});

app.post('/login', (req, res)=>{
    const usuario = req.body.usuario;
    const senha = req.body.senha;

     if (usuario === USUARIO_PADRAO && senha === SENHA_PADRAO) {
            logado = true;
            res.status(200).json({ mensagem: 'Login realizado com sucesso!' });
        } else {
            res.status(401).json({ erro: 'Usuário ou senha incorretos.' });
        }
});

app.post('/pedido', (req, res)=>{
    const itens_pedido = req.body;

    if(!logado){
        return res.status(401).json({mensagem: 'Você precisa estar logado para realizar o pedido.'});
    }
    if(!itens_pedido.endereco || itens_pedido.itens.length==0 ){
        return res.status(400).json({mensagem: 'Você deve inserir o seu endereço e ao menos um item.'});
    }

    return res.status(200).json({mensagem: 'Seu pedido foi registrado!'});
})

app.listen(3000, () => {
  console.log('Pizzaria do Kaká rodando em http://localhost:3000');
});