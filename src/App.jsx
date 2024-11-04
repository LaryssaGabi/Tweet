/* eslint-disable react-hooks/exhaustive-deps */
import { Sidebar } from './components/Sidebar'
import { Tweet } from './components/Tweet'
import { TwitterForm } from './components/TwitterForm'
import { v4 } from 'uuid'
import { getAvatar, getRandomImage } from './utils/generateImages'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { ThendItem } from './components/ThendItem'
import { FollwItem } from './components/FollwItem'


function App() {
  const [tweets, setTweets] = useState([])


  useEffect(() => {
    const interval = setInterval(() => {
      addNewRandomTweets()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const addNewRandomTweets = () => {
    const randowTweets = [
      "Passei a semana toda querendo descansar. Chega no sábado, tô querendo sair. Qual é meu problema?! 😂",
      "A parte mais difícil de acordar cedo é... acordar cedo. Bom dia pra quem conseguiu!",
      "Objetivo da vida: dormir 8 horas, acordar 6 da manhã e ser uma pessoa funcional... um dia eu chego lá 😅",
      "Se alguém descobrir uma técnica pra motivação durar mais que 24h, por favor, compartilha aqui! 😂📅",
      "Ansioso(a) pro lançamento da nova temporada de Boruto? Já preparando o café e o cobertor! ☕📺 #Maratona",
      "Alguém mais no time que acha que o home office veio pra ficar? Melhor invenção da década! 🖥️🏠 #trabalharemcasa",
      "Se a inteligência artificial vier mesmo dominar o mundo, espero que eu possa negociar minha liberdade com memes 😂 #FuturoDaTecnologia",
      "Incrível como a tecnologia tá transformando nosso dia a dia. Fico me perguntando o que vem a seguir... 🚀 #Inovação",
      "E aí, pessoal? Qual aplicativo vocês não conseguem viver sem? No momento, o meu vício é o passarinho! 📱 #DicasDeApps",
      "Final de semana chegou! Tempo de descansar ou de começar a faxina que adiei a semana toda? 🙈",
      "Às vezes, a missão do dia é simplesmente sobreviver ao dia. E tá tudo bem! 💪😂 #sobrevivência",
      "Alguém mais sente saudade dos tempos em que a única preocupação era qual desenho ia passar na TV? 📺✨ #Nostalgia",
      "A jornada do crescimento é linda e desafiadora. Mas tem dias que só queria uma versão fácil de mim mesmo(a)! 😅 #Autoconhecimento",
      "Existem dois tipos de pessoa: as que amam chuva e as que tentam sobreviver com o guarda-chuva virado. ☔️ #TimeChuva",
      "Trabalhar em equipe é ótimo, até que a decisão final fica pra você. Pressão ou responsabilidade? Haha 😂 #VidaCorporativa",
      "Adulto é quem vai ao mercado comprar uma coisa, mas acaba levando dez, incluindo algo pra limpar a casa. 🧽🍲 #Prioridades",
      "Quer coisa melhor que pizza em um dia de preguiça? A resposta é não. 🍕✨",
      "Café e boa companhia: ingredientes essenciais para uma segunda-feira decente ☕✨",
      "Não sei vocês, mas já estou planejando a minha próxima viagem… mesmo sem data marcada! 🌎✈️ #VontadeDeViajar",
      "Pior coisa de ser adulto: ter que decidir o que vai comer em todas as refeições. Como era bom ter alguém que decidisse isso! 🍲😅",
      "Dica do dia: cuidado com os 'amanhã eu faço'. Eles podem virar 'nunca'! 😉 #procrastinação",
      "Alguém mais tem um cronômetro automático de 5 minutos antes de desligar tudo no final do expediente? 🕒✨ #horadolanche",
      "Meu objetivo de hoje? Fazer meu celular sobreviver até o final do dia. Bateria, ajuda aí! ⚡️📱",
      "Planos para o futuro: abrir uma empresa que só funciona em dias de chuva e frio. Negócio de sucesso ou conforto puro? ☂️❄️",
      "Descobri recentemente que meu horário produtivo é... depois das 23h. Só tem um detalhe: preciso dormir. 😂💤",
      "Sobre amizade verdadeira: quando seu amigo(a) tem a mesma fome que você e topa qualquer coisa com comida. 🍔❤️ #amizade",
      "A vida é um ciclo infinito de 'Eu vou começar a academia na segunda'. Um dia eu começo, de verdade! 💪😆 #promessas",
      "Quando você olha pro seu trabalho e se pergunta 'Quem foi que inventou isso?'... depois lembra que foi você mesmo(a). 😂 #RealidadeDoTrabalho",
      "Os dias estão tão rápidos que sinto que pisco e já é hora de dormir de novo. Quem mexeu no relógio? ⏰👀",
      "Gostaria de me candidatar para o cargo de 'pessoa que tira cochilos' em tempo integral. 💤 #OportunidadeDeCarreira",
      "Tecnologia é incrível, mas por que ainda não temos um robô que arruma a cama? 🤔🤖",
      "Lembrar de tomar água durante o dia já é um desafio. Como as plantas conseguem? 😂🌱 #Autocuidado",
      "Bom mesmo é ter uma playlist que vai de funk a clássicos sem pedir licença! 🎶 #MusicalmenteEclético",
      "Bater um papo com amigos e perceber que todos estamos no mesmo barco chamado 'adulto tentando entender a vida'. 🚤😂 #amizade",
      "Objetivo: ser alguém que resolve as coisas na hora. Realidade: resolve quando dá, se der. 😂",
      "Tem dias que eu só queria uma notificação dizendo que meu dia vai ser maravilhoso. Só pra garantir! 😊✨",
      "Às vezes você não precisa de conselhos, só de alguém que escute e diga 'tamo junto'. 💬🤝 #amizade",
      "Acho que nada me representa mais do que cancelar planos e ficar em casa. E vocês? 😂 #IntrovertidosUnidos",
      "O melhor tipo de pessoa é aquela que sempre encontra uma razão pra rir. Porque rir de tudo é sobreviver com leveza. 😂 #boaenergia",
      "Quando eu era criança, achava que adultos tinham tudo sob controle. Agora eu sei que eles só fingem. 😉",
      "Sério, o que mais precisamos aprender sobre a vida adulta é sobre como lidar com boletos. 💸",
      "Que as segundas-feiras sejam mais gentis e que a nossa semana seja incrível! 💪🌟 #BomDia",
      "Procurando maneiras de acordar cedo sem precisar de cinco cafés… alguém tem dicas? ☕☕☕",
      "Adoro a expressão 'fazer networking', mas na prática é um 'conhecer gente legal e aprender junto'. Simples assim. 🤝",
      "Nunca subestime o poder de uma pausa para um café e um respiro fundo. Pequenas coisas fazem diferença. ☕✨"
    ];

    const randowTweet = randowTweets[
      Math.floor(Math.random() * randowTweets.length)
    ]
    addNewTweet(randowTweet, Math.random() > 0.7)
  }

  const addNewTweet = (content, includImage = false) => {
    const newTweet = {
      id: v4(),
      name: "User",
      username: `user${Math.floor(Math.random() * 1000)}`,
      avatar: getAvatar(`user${Math.floor(Math.random() * 1000)}@email.com`),
      content,
      time: new Date().toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      image: includImage ? getRandomImage() : null,
      likes: 0,
      retweets: 0,
      comments: 0
    }
    setTweets((prevTweets) => [newTweet, ...prevTweets,])
  }

  return (
    <>
      <div className='flex mx-auto max-w-7xl'>
        <Sidebar />
        <main className='flex-grow border-l border-r border-gray-700 max-w-xl'>
          <header className='styck top-0 z-10 bg-twitter-background bg-opacity-80 backdrop-blur-sm'>
            <h2 className='px-4 py-3 text-xl font-bold'>For You</h2>
          </header>
          <TwitterForm onTweet={(content) => addNewTweet(content, Math.random() > 0.6)} />
          <div>
            {tweets.map(tweet => (
              <Tweet key={tweet.id} tweet={tweet} />
            ))}
          </div>
        </main>
        <aside className='hidden xl:block w-80 px-4'>

          <div className='sticky top-0 pt-2'>

            <div className='relative'>
              <FontAwesomeIcon icon={faSearch} className='absolute top-3 left-3 text-gray-500' />
              <input placeholder='Search Twitter' className='w-full bg-gray-800 text-white rounded-full outline-none py-2 pl-10 pr-4 ' />
            </div>

            <div className='bg-gray-800 rounded-xl mt-4 p-4'>
              <h2 className=' font-bold text-xl mb-4'>Subscribe to Premium</h2>
              <p className='text-gray-500 mb-4'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
              <button className='bg-twitter-blue text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200'>Subscribe</button>
            </div>

            <div className='bg-gray-800 rounded-xl mt-4 p-4'>
              <h2 className='font-bold text-xl mb-4'>Whats happening</h2>
              <ThendItem category="NFL . LIVE" name="Cardinals at Bills"  />
              <ThendItem category="Sport . Trending" name="Kyle Dugger" />
              <ThendItem category="Sport . Trending" name="Anthony Richardson" tweetCount='9.999,056' />
              <ThendItem category="Sport . Trending" name="Bryce Young" tweetCount='1,342' />
              <ThendItem category="Sport . Trending" name="Daboll" tweetCount='1,342' />
            </div>

            <div className='bg-gray-800 rounded-xl mt-4 p-4'>
              <h2 className='font-bold text-xl mb-4'>Who ot follow</h2>
              <FollwItem name='Bill Gates' username="BillGates"/>
              <FollwItem name='Justin Bieber' username="JustinBiber"/>
              <FollwItem name='Will Smith' username="WillSmith"/>
            </div>

          </div>
        </aside>
      </div>
    </>
  )
}

export default App
