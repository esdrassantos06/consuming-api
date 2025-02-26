import './App.css';
import { useFetchData } from './components/useFetchData'

export default function App() {

  const { data, loading } = useFetchData();

  if (loading) return <p>Carregando...</p>;

  return (
    <div className='app-container'>
      {data.map((item, i) => (
        <div key={i} className='inside-box' style={{
          backgroundColor: 'lightgray',
          padding: '10px',
          margin: '10px',
          width: '40rem', 
          borderRadius: '5px',
          color: 'black'
        }}>

        {/* A div só vai aparecer se os dados estiverem corretos e a api estiver conectada, caso a página esteja vazia, olhe o console */}

        {/* É a div que mostra os dados da api, você modifica os dados (exemplo: {item.title} ) conforme os dados que estejam na api que você utilizar */}

          <h1>
            Título: {item.title}
          </h1>
          <p>
            Autor: {item.author}
          </p>
          <p>
            Descrição: {item.description}
          </p>
          <p>
            Idade: {item.age !== undefined ? item.age : "Sem idade"}
          </p>


        </div>
      ))}
    </div>
  )
}
