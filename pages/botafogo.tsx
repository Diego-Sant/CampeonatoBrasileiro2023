import { useState } from 'react';

import Layout from '@/components/template/Layout'

import Image from 'next/image'
import Fundo from '@/public/jogadores/fundo.png'

import hugo from '@/public/jogadores/hugo.png'
import claudiocacapa from '@/public/jogadores/claudiocacapa.png'
import marlonfreitas from '@/public/jogadores/marlonfreitas.png'
import tiquinho from '@/public/jogadores/tiquinho.png'
import eduardo from '@/public/jogadores/eduardo.png'
import adryelson from '@/public/jogadores/adryelson.png'
import segovia from '@/public/jogadores/segovia.png'
import cuesta from '@/public/jogadores/cuesta.png'
import lucasfernandes from '@/public/jogadores/lucasfernandes.png'
import victorsa from '@/public/jogadores/victorsa.png'
import luishenrique from '@/public/jogadores/luishenrique.png'
import juniorsantos from '@/public/jogadores/juniorsantos.png'
import matheusnascimento from '@/public/jogadores/matheusnascimento.png'
import diegohernandez from '@/public/jogadores/diegohernandez.png'
import diplacido from '@/public/jogadores/diplacido.png'
import rafael from '@/public/jogadores/rafael.png'
import tchetche from '@/public/jogadores/tchetche.png'
import perri from '@/public/jogadores/perri.png'

interface ShowBackgroundState {
  claudiocacapa: boolean;
  hugo: boolean;
  marlonfreitas: boolean;
  tiquinho: boolean;
  eduardo: boolean;
  adryelson: boolean;
  segovia: boolean;
  cuesta: boolean;
  lucasfernandes: boolean;
  victorsa: boolean;
  luishenrique: boolean;
  juniorsantos: boolean;
  matheusnascimento: boolean;
  diegohernandez: boolean;
  diplacido: boolean;
  rafael: boolean;
  tchetche: boolean;
  perri: boolean;
}

export default function Botafogo() {
  const [showBackground, setShowBackground] = useState<ShowBackgroundState>({ claudiocacapa: false, hugo: false, marlonfreitas: false, tiquinho: false, eduardo: false, adryelson: false, segovia: false, cuesta: false, lucasfernandes: false, victorsa: false, matheusnascimento: false, diegohernandez: false, diplacido: false, tchetche: false, perri: false, luishenrique: false, juniorsantos: false, rafael: false});

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
      <Layout title='Botafogo de Futebol e Regatas'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>

          <div className={containerClasses} onClick={() => handleClick('claudiocacapa')}>
              <PlayerImage src={claudiocacapa} alt="claudiocacapa" />
              {showBackground.claudiocacapa && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <p>Vitórias: 11</p>
                    <p>Empates: 0</p>
                    <p>Derrotas: 2</p>
                    <p>Gols marcados: 22</p>
                    <p>Gols sofridos: 7</p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('perri')}>
              <PlayerImage src={perri} alt="perri" />
              {showBackground.perri && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex mb-2'>
                      <p className='mr-4'>Jogados: 13</p>
                      <p>Iniciou: 13</p>
                    </div>
                    <p>Gols sofridos por jogo: 0.5</p>
                    <p>Pênaltis defendidos: 0/1</p>
                    <p>Defesas por jogo: 4.3(89%)</p>
                    <p>Jogos sem sofrer gols: 8</p>
                    <p>Nota média: <span className='text-green-600'>7.52</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('hugo')}>
              <PlayerImage src={hugo} alt="hugo" />
              {showBackground.hugo && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 6</p>
                      <p>Iniciou: 6</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Jogos sem sofrer gols: 5</p>
                    <p>Desarmes por jogo: 4.3</p>
                    <p>Passes decisivos por jogo: 1.2</p>
                    <p>Bolas longas: 1(35%)</p>
                    <p>Disputa de bola vencidas: 6.8</p>
                    <p>Nota média: <span className='text-green-500'>7.12</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('cuesta')}>
              <PlayerImage src={cuesta} alt="cuesta" />
              {showBackground.cuesta && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 12</p>
                      <p>Iniciou: 12</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Interceptações por jogo: 1.2</p>
                    <p>Jogos sem sofrer gols: 8</p>
                    <p>Desarmes por jogo: 1.8</p>
                    <p>Cortes por jogo: 4.2</p>
                    <p>Erros defensivos: 1</p>
                    <p>Disputa de bola vencidas: 4.3</p>
                    <p>Nota média: <span className='text-green-500'>7.21</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('adryelson')}>
              <PlayerImage src={adryelson} alt="adryelson" />
              {showBackground.adryelson && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 13</p>
                      <p>Iniciou: 13</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 1.7</p>
                    <p>Jogos sem sofrer gols: 6</p>
                    <p>Desarmes por jogo: 0.8</p>
                    <p>Cortes por jogo: 6.5</p>
                    <p>Erros defensivos: 2</p>
                    <p>Disputa de bola vencidas: 3.5</p>
                    <p>Nota média: <span className='text-green-500'>7.05</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('diplacido')}>
              <PlayerImage src={diplacido} alt="diplacido" />
              {showBackground.diplacido && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 12</p>
                      <p>Iniciou: 7</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 2</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Jogos sem sofrer gols: 3</p>
                    <p>Desarmes por jogo: 2.5</p>
                    <p>Passes decisivos por jogo: 1.1</p>
                    <p>Bolas longas: 0.8(31%)</p>
                    <p>Disputa de bola vencidas: 4.4</p>
                    <p>Nota média: <span className='text-yellow-400'>6.71</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('rafael')}>
              <PlayerImage src={rafael} alt="rafael" />
              {showBackground.rafael && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 9</p>
                      <p>Iniciou: 8</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Jogos sem sofrer gols: 1</p>
                    <p>Desarmes por jogo: 2.8</p>
                    <p>Passes decisivos por jogo: 0.6</p>
                    <p>Bolas longas: 0.8(44%)</p>
                    <p>Disputa de bola vencidas: 5</p>
                    <p>Nota média: <span className='text-yellow-400'>6.80</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('marlonfreitas')}>
              <PlayerImage src={marlonfreitas} alt="marlonfreitas" />
              {showBackground.marlonfreitas && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 8</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Toques por jogo: 51.9</p>
                    <p>Dribles bem sucedidos: 0.1</p>
                    <p>Passes decisivos por jogo: 0.5</p>
                    <p>Bolas longas: 3.3(63%)</p>
                    <p>Disputa de bola vencidas: 2.5</p>
                    <p>Nota média: <span className='text-yellow-400'>6.92</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('lucasfernandes')}>
              <PlayerImage src={lucasfernandes} alt="lucasfernandes" />
              {showBackground.lucasfernandes && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 8</p>
                      <p>Iniciou: 4</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Toques por jogo: 30.8</p>
                    <p>Dribles bem sucedidos: 0.6</p>
                    <p>Passes decisivos por jogo: 0.5</p>
                    <p>Bolas longas: 1.1(100%)</p>
                    <p>Disputa de bola vencidas: 1.5</p>
                    <p>Nota média: <span className='text-yellow-400'>6.61</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('tchetche')}>
              <PlayerImage src={tchetche} alt="tchetche" />
              {showBackground.tchetche && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 12</p>
                      <p>Iniciou: 9</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Toques por jogo: 30.8</p>
                    <p>Dribles bem sucedidos: 1</p>
                    <p>Passes decisivos por jogo: 0.7</p>
                    <p>Bolas longas: 1.3(64%)</p>
                    <p>Disputa de bola vencidas: 2.6</p>
                    <p>Nota média: <span className='text-yellow-400'>6.72</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('eduardo')}>
              <PlayerImage src={eduardo} alt="eduardo" />
              {showBackground.eduardo && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 9</p>
                    </div>
                    <p>Gols: 2</p>
                    <p className='mb-2'>Assistências: 3</p>
                    <p>Gols por jogo: 0.2</p>
                    <p>Finalizações por jogo: 0.5</p>
                    <p>Chutes certos por jogo: 0.3</p>
                    <p>Passes decisivos por jogo: 1.9</p>
                    <p>Impedimentos por jogo: 0</p>
                    <p>Grandes chances perdidas: 2</p>
                    <p>Nota média: <span className='text-green-500'>7.02</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('segovia')}>
              <PlayerImage src={segovia} alt="segovia" />
              {showBackground.segovia && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 7</p>
                      <p>Iniciou: 0</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Toques por jogo: 18.1</p>
                    <p>Dribles bem sucedidos: 0.6</p>
                    <p>Passes decisivos por jogo: 0.9</p>
                    <p>Bolas longas: 0.9(50%)</p>
                    <p>Disputa de bola vencidas: 2.6</p>
                    <p>Nota média: <span className='text-yellow-400'>6.69</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('diegohernandez')}>
              <PlayerImage src={diegohernandez} alt="diegohernandez" />
              {showBackground.diegohernandez && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 0</p>
                      <p>Iniciou: 0</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0</p>
                    <p>Finalizações por jogo: 0</p>
                    <p>Chutes certos por jogo: 0</p>
                    <p>Passes decisivos por jogo: 0</p>
                    <p>Impedimentos por jogo: 0</p>
                    <p>Grandes chances perdidas: 0</p>
                    <p>Nota média: <span>-</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('victorsa')}>
              <PlayerImage src={victorsa} alt="victorsa" />
              {showBackground.victorsa && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 7</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0.09</p>
                    <p>Finalizações por jogo: 1.9</p>
                    <p>Chutes certos por jogo: 0.7</p>
                    <p>Passes decisivos por jogo: 0.6</p>
                    <p>Impedimentos por jogo: 0.2</p>
                    <p>Grandes chances perdidas: 3</p>
                    <p>Nota média: <span className='text-yellow-400'>6.84</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('luishenrique')}>
              <PlayerImage src={luishenrique} alt="luishenrique" />
              {showBackground.luishenrique && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 12</p>
                      <p>Iniciou: 4</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0.08</p>
                    <p>Finalizações por jogo: 0.6</p>
                    <p>Chutes certos por jogo: 0.3</p>
                    <p>Passes decisivos por jogo: 0.8</p>
                    <p>Impedimentos por jogo: 0.08</p>
                    <p>Grandes chances perdidas: 0</p>
                    <p>Nota média: <span className='text-yellow-400'>6.73</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('matheusnascimento')}>
              <PlayerImage src={matheusnascimento} alt="matheusnascimento" />
              {showBackground.matheusnascimento && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 4</p>
                      <p>Iniciou: 1</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0.3</p>
                    <p>Finalizações por jogo: 0.8</p>
                    <p>Chutes certos por jogo: 0.5</p>
                    <p>Passes decisivos por jogo: 0.5</p>
                    <p>Impedimentos por jogo: 0</p>
                    <p>Grandes chances perdidas: 0</p>
                    <p>Nota média: <span className='text-yellow-400'>6.85</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('tiquinho')}>
              <PlayerImage src={tiquinho} alt="tiquinho" />
              {showBackground.tiquinho && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 12</p>
                      <p>Iniciou: 11</p>
                    </div>
                    <p>Gols: 10</p>
                    <p className='mb-2'>Assistências: 4</p>
                    <p>Gols por jogo: 0.8</p>
                    <p>Finalizações por jogo: 3.3</p>
                    <p>Chutes certos por jogo: 1.3</p>
                    <p>Passes decisivos por jogo: 1.2</p>
                    <p>Impedimentos por jogo: 0.8</p>
                    <p>Grandes chances perdidas: 1</p>
                    <p>Nota média: <span className='text-green-600'>7.55</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('juniorsantos')}>
              <PlayerImage src={juniorsantos} alt="juniorsantos" />
              {showBackground.juniorsantos && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 12</p>
                      <p>Iniciou: 11</p>
                    </div>
                    <p>Gols: 2</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0</p>
                    <p>Finalizações por jogo: 2</p>
                    <p>Chutes certos por jogo: 0.5</p>
                    <p>Passes decisivos por jogo: 0.7</p>
                    <p>Impedimentos por jogo: 0.2</p>
                    <p>Grandes chances perdidas: 1</p>
                    <p>Nota média: <span className='text-yellow-400'>6.83</span></p>
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
