# App em React para você testar se sua API funciona no Frontend

## Introdução
Este projeto é um aplicativo React criado para testar se uma API está funcionando corretamente no frontend. Ele consome dados de uma API Node.js utilizando Axios e exibe as informações na tela.

## Tecnologias Utilizadas
- React
- Axios
- JavaScript

## Instalação e Execução

1. Clone este repositório:
   ```bash
   git clone https://github.com/esdrassantos06/consuming-api/
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd consuming-api
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o projeto:
   ```bash
   npm start
   ```

O aplicativo será aberto no navegador em `http://localhost:3000/`.

## Configuração da API
Para garantir que a API esteja corretamente configurada:
1. Certifique-se de que sua API Node.js esteja rodando.
2. Verifique a URL base da API em `utils/api.js`:
   ```javascript
   import axios from "axios";

   const api = axios.create({
     baseURL: "http://localhost:3000/api", // Altere se necessário
     headers: {
       "Content-Type": "application/json",
     },
   });

   export default api;
   ```

## Como Funciona
1. O componente `useFetchData.js` faz a requisição para a API usando Axios e retorna os dados.
2. O `App.js` consome os dados do hook `useFetchData.js` e exibe na tela.

### Exemplo de Uso
No `App.js`:
```javascript
import { useFetchData } from "./components/useFetchData";

export default function App() {
  const { data, loading } = useFetchData();

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          <p>{item.title}</p>
          <p>{item.author}</p>
          <p>{item.description}</p>
          <p>Idade: {item.age !== undefined ? item.age : "Sem idade"}</p>
        </div>
      ))}
    </div>
  );
}
```

## Solução de Problemas
### 1. Erro `api.get is not a function`
- Verifique se o `api.js` está configurado corretamente.
- Certifique-se de que `axios` está instalado (`npm install axios`).

## Contribuição
Sinta-se à vontade para contribuir com melhorias e sugestões para o projeto!

## Licença
Este projeto está sob a licença [MIT](LICENSE).


