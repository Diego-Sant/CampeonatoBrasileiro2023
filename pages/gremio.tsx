import { useState } from 'react';

import Layout from '@/components/template/Layout'

import Image from 'next/image'
import Fundo from '@/public/jogadores/fundo.png'

import cuiabano from '@/public/jogadores/cuiabano.png'
import renatogaucho from '@/public/jogadores/renatogaucho.png'
import lucasmilla from '@/public/jogadores/lucasmilla.png'
import suarez from '@/public/jogadores/suarez.png'
import cristaldo from '@/public/jogadores/cristaldo.png'
import brunouvini from '@/public/jogadores/brunouvini.png'
import reinaldo from '@/public/jogadores/reinaldo.png'
import bitello from '@/public/jogadores/bitello.png'
import brunoalves from '@/public/jogadores/brunoalves.png'
import nathan from '@/public/jogadores/nathan.png'
import ferreira from '@/public/jogadores/ferreira.png'
import zinho from '@/public/jogadores/zinho.png'
import kannemann from '@/public/jogadores/kannemann.png'
import galdino from '@/public/jogadores/galdino.png'
import andrehenrique from '@/public/jogadores/andrehenrique.png'
import carballo from '@/public/jogadores/carballo.png'
import thomasluciano from '@/public/jogadores/thomasluciano.png'
import joaopedro from '@/public/jogadores/joaopedro.png'
import vina from '@/public/jogadores/vina.png'
import villasanti from '@/public/jogadores/villasanti.png'
import gabrielgrando from '@/public/jogadores/gabrielgrando.png'
import gustavomartins from '@/public/jogadores/gustavomartins.png'

interface ShowBackgroundState {
  renatogaucho: boolean;
  cuiabano: boolean;
  lucasmilla: boolean;
  suarez: boolean;
  cristaldo: boolean;
  brunouvini: boolean;
  reinaldo: boolean;
  bitello: boolean;
  brunoalves: boolean;
  nathan: boolean;
  ferreira: boolean;
  zinho: boolean;
  kannemann: boolean;
  galdino: boolean;
  andrehenrique: boolean;
  carballo: boolean;
  thomasluciano: boolean;
  joaopedro: boolean;
  vina: boolean;
  villasanti: boolean;
  gabrielgrando: boolean;
  gustavomartins: boolean;
}

export default function Gremio() {
  const [showBackground, setShowBackground] = useState<ShowBackgroundState>({ renatogaucho: false, cuiabano: false, lucasmilla: false, suarez: false, cristaldo: false, brunouvini: false, reinaldo: false, bitello: false, brunoalves: false, nathan: false, ferreira: false, andrehenrique: false, carballo: false, thomasluciano: false, vina: false, gabrielgrando: false, gustavomartins: false, villasanti: false, zinho: false, kannemann: false, galdino: false, joaopedro: false});

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
      <Layout title='Grêmio Foot-Ball Porto Alegrense'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>

          <div className={containerClasses} onClick={() => handleClick('renatogaucho')}>
              <PlayerImage src={renatogaucho} alt="renatogaucho" />
              {showBackground.renatogaucho && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <p>Vitórias: 8</p>
                    <p>Empates: 2</p>
                    <p>Derrotas: 3</p>
                    <p>Gols marcados: 24</p>
                    <p>Gols sofridos: 18</p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('gabrielgrando')}>
              <PlayerImage src={gabrielgrando} alt="gabrielgrando" />
              {showBackground.gabrielgrando && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex mb-2'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 10</p>
                    </div>
                    <p>Gols sofridos por jogo: 1.6</p>
                    <p>Pênaltis defendidos: 0/1</p>
                    <p>Defesas por jogo: 3.9(71%)</p>
                    <p>Jogos sem sofrer gols: 1</p>
                    <p>Nota média: <span className='text-green-600'>7.12</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('cuiabano')}>
              <PlayerImage src={cuiabano} alt="cuiabano" />
              {showBackground.cuiabano && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 3</p>
                      <p>Iniciou: 2</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Jogos sem sofrer gols: 0</p>
                    <p>Desarmes por jogo: 0.7</p>
                    <p>Passes decisivos por jogo: 1</p>
                    <p>Bolas longas: 1.7(56%)</p>
                    <p>Disputa de bola vencidas: 2.7</p>
                    <p>Nota média: <span className='text-yellow-400'>6.83</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('reinaldo')}>
              <PlayerImage src={reinaldo} alt="reinaldo" />
              {showBackground.reinaldo && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 1</p>
                      <p>Iniciou: 1</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 1</p>
                    <p>Jogos sem sofrer gols: 0</p>
                    <p>Desarmes por jogo: 0</p>
                    <p>Cortes por jogo: 0</p>
                    <p>Erros defensivos: 0</p>
                    <p>Disputa de bola vencidas: 4</p>
                    <p>Nota média: <span className='text-yellow-400'>6.50</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('brunouvini')}>
              <PlayerImage src={brunouvini} alt="brunouvini" />
              {showBackground.brunouvini && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 10</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Interceptações por jogo: 0.5</p>
                    <p>Jogos sem sofrer gols: 3</p>
                    <p>Desarmes por jogo: 0.5</p>
                    <p>Cortes por jogo: 2</p>
                    <p>Erros defensivos: 0</p>
                    <p>Disputa de bola vencidas: 2</p>
                    <p>Nota média: <span className='text-yellow-400'>6.72</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('kannemann')}>
              <PlayerImage src={kannemann} alt="kannemann" />
              {showBackground.kannemann && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 7</p>
                      <p>Iniciou: 6</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 1.1</p>
                    <p>Jogos sem sofrer gols: 0</p>
                    <p>Desarmes por jogo: 0.7</p>
                    <p>Cortes por jogo: 3.4</p>
                    <p>Erros defensivos: 0</p>
                    <p>Disputa de bola vencidas: 3.7</p>
                    <p>Nota média: <span className='text-yellow-400'>6.90</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('brunoalves')}>
              <PlayerImage src={brunoalves} alt="brunoalves" />
              {showBackground.brunoalves && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 7</p>
                      <p>Iniciou: 6</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 1.1</p>
                    <p>Jogos sem sofrer gols: 0</p>
                    <p>Desarmes por jogo: 0.7</p>
                    <p>Cortes por jogo: 3.4</p>
                    <p>Erros defensivos: 0</p>
                    <p>Disputa de bola vencidas: 3.7</p>
                    <p>Nota média: <span className='text-yellow-400'>6.90</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('gustavomartins')}>
              <PlayerImage src={gustavomartins} alt="gustavomartins" />
              {showBackground.gustavomartins && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 7</p>
                      <p>Iniciou: 5</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 0.7</p>
                    <p>Jogos sem sofrer gols: 1</p>
                    <p>Desarmes por jogo: 0.7</p>
                    <p>Cortes por jogo: 1.9</p>
                    <p>Erros defensivos: 0</p>
                    <p>Disputa de bola vencidas: 2.3</p>
                    <p>Nota média: <span className='text-yellow-400'>6.83</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('thomasluciano')}>
              <PlayerImage src={thomasluciano} alt="thomasluciano" />
              {showBackground.thomasluciano && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 8</p>
                      <p>Iniciou: 5</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 0.4</p>
                    <p>Jogos sem sofrer gols: 0</p>
                    <p>Desarmes por jogo: 2.5</p>
                    <p>Cortes por jogo: 0.4</p>
                    <p>Erros defensivos: 0</p>
                    <p>Disputa de bola vencidas: 3.6</p>
                    <p>Nota média: <span className='text-yellow-400'>6.88</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('joaopedro')}>
              <PlayerImage src={joaopedro} alt="joaopedro" />
              {showBackground.joaopedro && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 7</p>
                      <p>Iniciou: 6</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 0.6</p>
                    <p>Jogos sem sofrer gols: 1</p>
                    <p>Desarmes por jogo: 2.1</p>
                    <p>Cortes por jogo: 1.6</p>
                    <p>Erros defensivos: 0</p>
                    <p>Disputa de bola vencidas: 5.9</p>
                    <p>Nota média: <span className='text-yellow-400'>6.60</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('lucasmilla')}>
              <PlayerImage src={lucasmilla} alt="lucasmilla" />
              {showBackground.lucasmilla && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 8</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Toques por jogo: 60</p>
                    <p>Dribles bem sucedidos: 0.7</p>
                    <p>Passes decisivos por jogo: 0.4</p>
                    <p>Bolas longas: 1.6(52%)</p>
                    <p>Disputa de bola vencidas: 5.7</p>
                    <p>Nota média: <span className='text-yellow-400'>6.85</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('carballo')}>
              <PlayerImage src={carballo} alt="carballo" />
              {showBackground.carballo && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 4</p>
                      <p>Iniciou: 4</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Toques por jogo: 76.3</p>
                    <p>Dribles bem sucedidos: 0.5</p>
                    <p>Passes decisivos por jogo: 0.8</p>
                    <p>Bolas longas: 1.8(47%)</p>
                    <p>Disputa de bola vencidas: 4</p>
                    <p>Nota média: <span className='text-yellow-400'>6.98</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('villasanti')}>
              <PlayerImage src={villasanti} alt="villasanti" />
              {showBackground.villasanti && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 2</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Toques por jogo: 30.9</p>
                    <p>Dribles bem sucedidos: 1.1</p>
                    <p>Passes decisivos por jogo: 0.2</p>
                    <p>Bolas longas: 0.6(78%)</p>
                    <p>Disputa de bola vencidas: 4.5</p>
                    <p>Nota média: <span className='text-yellow-400'>6.60</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('cristaldo')}>
              <PlayerImage src={cristaldo} alt="cristaldo" />
              {showBackground.cristaldo && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 8</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0</p>
                    <p>Finalizações por jogo: 0.7</p>
                    <p>Chutes certos por jogo: 0.3</p>
                    <p>Passes decisivos por jogo: 0.5</p>
                    <p>Impedimentos por jogo: 0.2</p>
                    <p>Grandes chances perdidas: 0</p>
                    <p>Nota média: <span className='text-green-500'>7.05</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('bitello')}>
              <PlayerImage src={bitello} alt="bitello" />
              {showBackground.bitello && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 11</p>
                    </div>
                    <p>Gols: 2</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 4</p>
                    <p>Toques por jogo: 36.4</p>
                    <p>Dribles bem sucedidos: 0.9</p>
                    <p>Passes decisivos por jogo: 1.4</p>
                    <p>Bolas longas: 0.9(48%)</p>
                    <p>Disputa de bola vencidas: 3.6</p>
                    <p>Nota média: <span className='text-yellow-400'>6.91</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('vina')}>
              <PlayerImage src={vina} alt="vina" />
              {showBackground.vina && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 5</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 2</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Toques por jogo: 29.8</p>
                    <p>Dribles bem sucedidos: 0.1</p>
                    <p>Passes decisivos por jogo: 0.8</p>
                    <p>Bolas longas: 0.9(67%)</p>
                    <p>Disputa de bola vencidas: 2.1</p>
                    <p>Nota média: <span className='text-yellow-400'>6.77</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('nathan')}>
              <PlayerImage src={nathan} alt="nathan" />
              {showBackground.nathan && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 7</p>
                      <p>Iniciou: 2</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Grandes chances criadas: 2</p>
                    <p>Toques por jogo: 25.6</p>
                    <p>Dribles bem sucedidos: 0.9</p>
                    <p>Passes decisivos por jogo: 1.1</p>
                    <p>Bolas longas: 0.7(63%)</p>
                    <p>Disputa de bola vencidas: 2.4</p>
                    <p>Nota média: <span className='text-yellow-400'>6.98</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('ferreira')}>
              <PlayerImage src={ferreira} alt="ferreira" />
              {showBackground.ferreira && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 10</p>
                    </div>
                    <p>Gols: 3</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0.3</p>
                    <p>Finalizações por jogo: 2.5</p>
                    <p>Chutes certos por jogo: 1.2</p>
                    <p>Passes decisivos por jogo: 0.8</p>
                    <p>Impedimentos por jogo: 0.4</p>
                    <p>Grandes chances perdidas: 7</p>
                    <p>Nota média: <span className='text-yellow-400'>6.87</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('zinho')}>
              <PlayerImage src={zinho} alt="zinho" />
              {showBackground.zinho && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 8</p>
                      <p>Iniciou: 4</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0.1</p>
                    <p>Finalizações por jogo: 0.6</p>
                    <p>Chutes certos por jogo: 0.5</p>
                    <p>Passes decisivos por jogo: 1.3</p>
                    <p>Impedimentos por jogo: 0</p>
                    <p>Grandes chances perdidas: 0</p>
                    <p>Nota média: <span className='text-yellow-400'>6.86</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('andrehenrique')}>
              <PlayerImage src={andrehenrique} alt="andrehenrique" />
              {showBackground.andrehenrique && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 1</p>
                      <p>Iniciou: 0</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 1</p>
                    <p>Finalizações por jogo: 2</p>
                    <p>Chutes certos por jogo: 1</p>
                    <p>Passes decisivos por jogo: 0</p>
                    <p>Impedimentos por jogo: 1</p>
                    <p>Grandes chances perdidas: 1</p>
                    <p>Nota média: <span className='text-yellow-400'>6.90</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('suarez')}>
              <PlayerImage src={suarez} alt="suarez" />
              {showBackground.suarez && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 10</p>
                    </div>
                    <p>Gols: 5</p>
                    <p className='mb-2'>Assistências: 2</p>
                    <p>Gols por jogo: 0.5</p>
                    <p>Finalizações por jogo: 3.8</p>
                    <p>Chutes certos por jogo: 1.7</p>
                    <p>Passes decisivos por jogo: 1.8</p>
                    <p>Impedimentos por jogo: 1</p>
                    <p>Grandes chances perdidas: 1</p>
                    <p>Nota média: <span className='text-green-600'>7.42</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('galdino')}>
              <PlayerImage src={galdino} alt="galdino" />
              {showBackground.galdino && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 1</p>
                      <p>Iniciou: 0</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0</p>
                    <p>Finalizações por jogo: 0</p>
                    <p>Chutes certos por jogo: 0</p>
                    <p>Passes decisivos por jogo: 1</p>
                    <p>Impedimentos por jogo: 0</p>
                    <p>Grandes chances perdidas: 0</p>
                    <p>Nota média: <span className='text-yellow-400'>6.90</span></p>
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
