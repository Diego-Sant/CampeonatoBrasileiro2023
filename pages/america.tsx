import { useState } from 'react';

import Layout from '@/components/template/Layout'

import Image from 'next/image'
import Fundo from '@/public/jogadores/fundo.png'

import Avelar from '@/public/jogadores/avelar.png'
import Mancini from '@/public/jogadores/mancini.png'
import Juninho from '@/public/jogadores/juninho.png'
import Aloisio from '@/public/jogadores/aloisio.png'
import Everaldo from '@/public/jogadores/everaldo.png'
import Wanderson from '@/public/jogadores/wanderson.png'
import Marlonlopes from '@/public/jogadores/marlonlopes.png'
import Emmanuel from '@/public/jogadores/emmanuel.png'
import IagoMaidana from '@/public/jogadores/iagomaidana.png'
import Ale from '@/public/jogadores/ale.png'
import Azevedo from '@/public/jogadores/azevedo.png'
import RenatoMarques from '@/public/jogadores/renatomarques.png'
import LucasKal from '@/public/jogadores/lucaskal.png'
import Marcinho from '@/public/jogadores/marcinho.png'
import BrenoCascardo from '@/public/jogadores/brenocascardo.png'
import Cavichioli from '@/public/jogadores/cavichioli.png'
import EderFerreira from '@/public/jogadores/ederferreira.png'
import Mastriani from '@/public/jogadores/mastriani.png'
import Benitez from '@/public/jogadores/benitez.png'
import Pasinato from '@/public/jogadores/pasinato.png'

interface ShowBackgroundState {
  mancini: boolean;
  avelar: boolean;
  juninho: boolean;
  aloisio: boolean;
  marlon: boolean;
  everaldo: boolean;
  wanderson: boolean;
  marlonlopes: boolean;
  emmanuel: boolean;
  iagomaidana: boolean;
  ale: boolean;
  azevedo: boolean;
  renatomarques: boolean;
  lucaskal: boolean;
  marcinho: boolean;
  brenocascardo: boolean;
  cavichioli: boolean;
  ederferreira: boolean;
  mastriani: boolean;
  benitez: boolean;
  pasinato: boolean;
}

export default function America() {
  const [showBackground, setShowBackground] = useState<ShowBackgroundState>({ mancini: false, avelar: false, juninho: false, aloisio: false, marlon: false, everaldo: false, wanderson: false, marlonlopes: false, emmanuel: false, iagomaidana: false, ale: false, azevedo: false, renatomarques: false, lucaskal: false, marcinho: false, brenocascardo: false, cavichioli: false, ederferreira: false, mastriani: false, benitez: false, pasinato: false});

  const handleClick = (player: keyof ShowBackgroundState) => {
    setShowBackground((prevState) => ({
      ...prevState,
      [player]: !prevState[player]
    }));
  };

  const PlayerImage = ({ src, alt }: { src: any; alt: keyof ShowBackgroundState }) => (
    <div className={`transition-[2s] ${showBackground[alt] ? 'hidden' : ''}`}>
      <Image src={src} alt={alt} />
    </div>
  );

  const containerClasses = "flex justify-around items-center mb-4 cursor-pointer transition-[2s] hover:scale-110";

  return (
    <div>
      <Layout title='América Futebol Clube'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>

          <div className={containerClasses} onClick={() => handleClick('mancini')}>
              <PlayerImage src={Mancini} alt="mancini" />
              {showBackground.mancini && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <p>Vitórias: 2</p>
                    <p>Empates: 3</p>
                    <p>Derrotas: 8</p>
                    <p>Gols marcados: 15</p>
                    <p>Gols sofridos: 29</p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('cavichioli')}>
              <PlayerImage src={Cavichioli} alt="cavichioli" />
              {showBackground.cavichioli && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex mb-2'>
                      <p className='mr-4'>Jogados: 7</p>
                      <p>Iniciou: 7</p>
                    </div>
                    <p>Gols sofridos por jogo: 2.7</p>
                    <p>Pênaltis defendidos: 1/2</p>
                    <p>Defesas por jogo: 3.7(58%)</p>
                    <p>Jogos sem sofrer gols: 0</p>
                    <p>Nota média: <span className='text-red-500'>6.36</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('pasinato')}>
              <PlayerImage src={Pasinato} alt="pasinato" />
              {showBackground.pasinato && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex mb-2'>
                      <p className='mr-4'>Jogados: 6</p>
                      <p>Iniciou: 6</p>
                    </div>
                    <p>Gols sofridos por jogo: 1.5</p>
                    <p>Pênaltis defendidos: 0/1</p>
                    <p>Defesas por jogo: 3.7(71%)</p>
                    <p>Jogos sem sofrer gols: 1</p>
                    <p>Nota média: <span className='text-green-500'>7.00</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('avelar')}>
              <PlayerImage src={Avelar} alt="avelar" />
              {showBackground.avelar && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 8</p>
                    </div>
                    <p>Gols: 3</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Jogos sem sofrer gols: 1</p>
                    <p>Desarmes por jogo: 1.9</p>
                    <p>Passes decisivos por jogo: 0.7</p>
                    <p>Bolas longas: 1.1(39%)</p>
                    <p>Disputa de bola vencidas: 7.6</p>
                    <p>Nota média: <span className='text-green-500'>7.02</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('marlonlopes')}>
              <PlayerImage src={Marlonlopes} alt="marlonlopes" />
              {showBackground.marlonlopes && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 8</p>
                      <p>Iniciou: 6</p>
                    </div>
                    <p>Gols: 3</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Jogos sem sofrer gols: 1</p>
                    <p>Desarmes por jogo: 1.6</p>
                    <p>Passes decisivos por jogo: 1.3</p>
                    <p>Bolas longas: 1.4(42%)</p>
                    <p>Disputa de bola vencidas: 5.4</p>
                    <p>Nota média: <span className='text-yellow-400'>6.69</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('wanderson')}>
              <PlayerImage src={Wanderson} alt="wanderson" />
              {showBackground.wanderson && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 7</p>
                      <p>Iniciou: 5</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 0.6</p>
                    <p>Jogos sem sofrer gols: 1</p>
                    <p>Desarmes por jogo: 0.7</p>
                    <p>Cortes por jogo: 4</p>
                    <p>Erros defensivos: 0</p>
                    <p>Disputa de bola vencidas: 3.1</p>
                    <p>Nota média: <span className='text-yellow-400'>6.57</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('iagomaidana')}>
              <PlayerImage src={IagoMaidana} alt="iagomaidana" />
              {showBackground.iagomaidana && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 9</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 0.7</p>
                    <p>Jogos sem sofrer gols: 0</p>
                    <p>Desarmes por jogo: 1.4</p>
                    <p>Cortes por jogo: 3.5</p>
                    <p>Erros defensivos: 0</p>
                    <p>Disputa de bola vencidas: 4</p>
                    <p>Nota média: <span className='text-yellow-400'>6.51</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('ederferreira')}>
              <PlayerImage src={EderFerreira} alt="ederferreira" />
              {showBackground.ederferreira && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 7</p>
                      <p>Iniciou: 7</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 1.4</p>
                    <p>Jogos sem sofrer gols: 0</p>
                    <p>Desarmes por jogo: 2.1</p>
                    <p>Cortes por jogo: 4.1</p>
                    <p>Erros defensivos: 0</p>
                    <p>Disputa de bola vencidas: 5.6</p>
                    <p>Nota média: <span className='text-red-500'>6.41</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('marcinho')}>
              <PlayerImage src={Marcinho} alt="marcinho" />
              {showBackground.marcinho && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 9</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Jogos sem sofrer gols: 0</p>
                    <p>Desarmes por jogo: 0.9</p>
                    <p>Passes decisivos por jogo: 0.8</p>
                    <p>Bolas longas: 2.5(36%)</p>
                    <p>Disputa de bola vencidas: 2.5</p>
                    <p>Nota média: <span className='text-red-500'>6.44</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('juninho')}>
              <PlayerImage src={Juninho} alt="juninho" />
              {showBackground.juninho && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 12</p>
                      <p>Iniciou: 10</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 2</p>
                    <p>Toques por jogo: 35.4</p>
                    <p>Dribles bem sucedidos: 0.4</p>
                    <p>Passes decisivos por jogo: 1</p>
                    <p>Bolas longas: 0.5(29%)</p>
                    <p>Disputa de bola vencidas: 2.9</p>
                    <p>Nota média: <span className='text-yellow-400'>6.66</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('brenocascardo')}>
              <PlayerImage src={BrenoCascardo} alt="brenocascardo" />
              {showBackground.brenocascardo && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 6</p>
                      <p>Iniciou: 6</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Toques por jogo: 37.7</p>
                    <p>Dribles bem sucedidos: 1.2</p>
                    <p>Passes decisivos por jogo: 0.7</p>
                    <p>Bolas longas: 0.7(50%)</p>
                    <p>Disputa de bola vencidas: 4.0</p>
                    <p>Nota média: <span className='text-red-500'>6.48</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('lucaskal')}>
              <PlayerImage src={LucasKal} alt="lucaskal" />
              {showBackground.lucaskal && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 9</p>
                      <p>Iniciou: 7</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Toques por jogo: 37.3</p>
                    <p>Dribles bem sucedidos: 0.2</p>
                    <p>Passes decisivos por jogo: 0.4</p>
                    <p>Bolas longas: 2.0(55%)</p>
                    <p>Disputa de bola vencidas: 2.0</p>
                    <p>Nota média: <span className='text-yellow-400'>6.54</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('ale')}>
              <PlayerImage src={Ale} alt="ale" />
              {showBackground.ale && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 5</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Toques por jogo: 39.1</p>
                    <p>Dribles bem sucedidos: 0.2</p>
                    <p>Passes decisivos por jogo: 0.6</p>
                    <p>Bolas longas: 0.8(73%)</p>
                    <p>Disputa de bola vencidas: 3.3</p>
                    <p>Nota média: <span className='text-yellow-400'>6.67</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('benitez')}>
              <PlayerImage src={Benitez} alt="benitez" />
              {showBackground.benitez && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 6</p>
                      <p>Iniciou: 4</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Grandes chances criadas: 3</p>
                    <p>Toques por jogo: 53.8</p>
                    <p>Dribles bem sucedidos: 2.8</p>
                    <p>Passes decisivos por jogo: 1.8</p>
                    <p>Bolas longas: 2.8(52%)</p>
                    <p>Disputa de bola vencidas: 7.7</p>
                    <p>Nota média: <span className='text-green-500'>7.07</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('emmanuel')}>
              <PlayerImage src={Emmanuel} alt="emmanuel" />
              {showBackground.emmanuel && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 5</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 3</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Toques por jogo: 37.2</p>
                    <p>Dribles bem sucedidos: 0.9</p>
                    <p>Passes decisivos por jogo: 1.3</p>
                    <p>Bolas longas: 0.7(38%)</p>
                    <p>Disputa de bola vencidas: 3.6</p>
                    <p>Nota média: <span className='text-yellow-400'>6.68</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('everaldo')}>
              <PlayerImage src={Everaldo} alt="everaldo" />
              {showBackground.everaldo && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 10</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 2</p>
                    <p>Gols por jogo: 0.1</p>
                    <p>Finalizações por jogo: 1</p>
                    <p>Chutes certos por jogo: 0.3</p>
                    <p>Passes decisivos por jogo: 1.2</p>
                    <p>Impedimentos por jogo: 0.4</p>
                    <p>Grandes chances perdidas: 1</p>
                    <p>Nota média: <span className='text-yellow-400'>6.80</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('azevedo')}>
              <PlayerImage src={Azevedo} alt="azevedo" />
              {showBackground.azevedo && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 9</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0.09</p>
                    <p>Finalizações por jogo: 1</p>
                    <p>Chutes certos por jogo: 0.4</p>
                    <p>Passes decisivos por jogo: 1</p>
                    <p>Impedimentos por jogo: 0.2</p>
                    <p>Grandes chances perdidas: 0</p>
                    <p>Nota média: <span className='text-yellow-400'>6.66</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('mastriani')}>
              <PlayerImage src={Mastriani} alt="mastriani" />
              {showBackground.mastriani && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 9</p>
                    </div>
                    <p>Gols: 3</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Gols por jogo: 0.3</p>
                    <p>Finalizações por jogo: 3.1</p>
                    <p>Chutes certos por jogo: 1.1</p>
                    <p>Passes decisivos por jogo: 0.5</p>
                    <p>Impedimentos por jogo: 0.5</p>
                    <p>Grandes chances perdidas: 2</p>
                    <p>Nota média: <span className='text-yellow-400'>6.90</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('aloisio')}>
              <PlayerImage src={Aloisio} alt="aloisio" />
              {showBackground.aloisio && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 9</p>
                    </div>
                    <p>Gols: 3</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Gols por jogo: 0.3</p>
                    <p>Finalizações por jogo: 3.1</p>
                    <p>Chutes certos por jogo: 1.1</p>
                    <p>Passes decisivos por jogo: 0.5</p>
                    <p>Impedimentos por jogo: 0.5</p>
                    <p>Grandes chances perdidas: 2</p>
                    <p>Nota média: <span className='text-yellow-400'>6.90</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('renatomarques')}>
              <PlayerImage src={RenatoMarques} alt="renatomarques" />
              {showBackground.renatomarques && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 7</p>
                      <p>Iniciou: 2</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Gols por jogo: 0.1</p>
                    <p>Finalizações por jogo: 0.6</p>
                    <p>Chutes certos por jogo: 0.1</p>
                    <p>Passes decisivos por jogo: 0.4</p>
                    <p>Impedimentos por jogo: 0.3</p>
                    <p>Grandes chances perdidas: 0</p>
                    <p>Nota média: <span className='text-yellow-400'>6.60</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

        </div>
      </Layout>
    </div>
  )
}
