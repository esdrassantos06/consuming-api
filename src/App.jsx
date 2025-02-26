import './App.css';
import { useFetchData } from './components/useFetchData'

export default function App() {

  const { data, loading } = useFetchData();

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      {data.map((item, i) => (
        <div key={i} style={{
          backgroundColor: 'lightgray',
          padding: '10px',
          margin: '10px',
          borderRadius: '5px',
          color: 'black'
        }}>
        {/* É a div que mostra os dados da api, você modifica os dados (exemplo: {item.title} ) conforme os dados que estejam na api que você utilizar */}

          <p>
            Título: {item.title}
          </p>
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
