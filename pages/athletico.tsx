import { useState } from 'react';

import Layout from '@/components/template/Layout'

import Image from 'next/image'
import Fundo from '@/public/jogadores/fundo.png'

import Fernando from '@/public/jogadores/fernando.png'
import WesleyCarvalho from '@/public/jogadores/wesleycarvalho.png'
import Fernandinho from '@/public/jogadores/fernandinho.png'
import Pablo from '@/public/jogadores/pablo.png'
import DavidTerans from '@/public/jogadores/davidterans.png'
import ZeIvaldo from '@/public/jogadores/zeivaldo.png'
import Madson from '@/public/jogadores/madson.png'
import VitorBueno from '@/public/jogadores/vitorbueno.png'
import ThiagoHeleno from '@/public/jogadores/thiagoheleno.png'
import Erick from '@/public/jogadores/erick.png'
import Cuello from '@/public/jogadores/cuello.png'
import ThiagoAndrade from '@/public/jogadores/thiagoandrade.png'
import Willian from '@/public/jogadores/willian.png'
import Canobbio from '@/public/jogadores/canobbio.png'
import VitorRoque from '@/public/jogadores/vitorroque.png'
import HugoMoura from '@/public/jogadores/hugomoura.png'
import Khellven from '@/public/jogadores/khellven.png'
import AlexSantana from '@/public/jogadores/alexsantana.png'
import Christian from '@/public/jogadores/christian.png'
import Bento from '@/public/jogadores/bento.png'
import PedroHenrique from '@/public/jogadores/pedrohenrique.png'
import Esquivel from '@/public/jogadores/esquivel.png'

interface ShowBackgroundState {
  wesleycarvalho: boolean;
  fernando: boolean;
  fernandinho: boolean;
  pablo: boolean;
  davidterans: boolean;
  zeivaldo: boolean;
  madson: boolean;
  vitorbueno: boolean;
  thiagoheleno: boolean;
  erick: boolean;
  cuello: boolean;
  thiagoandrade: boolean;
  willian: boolean;
  canobbio: boolean;
  vitorroque: boolean;
  hugomoura: boolean;
  khellven: boolean;
  alexsantana: boolean;
  christian: boolean;
  bento: boolean;
  pedrohenrique: boolean;
  esquivel: boolean;
}

export default function Athletico() {
  const [showBackground, setShowBackground] = useState<ShowBackgroundState>({ wesleycarvalho: false, fernando: false, fernandinho: false, pablo: false, davidterans: false, zeivaldo: false, madson: false, vitorbueno: false, thiagoheleno: false, erick: false, cuello: false, vitorroque: false, hugomoura: false, khellven: false, alexsantana: false, bento: false, pedrohenrique: false, christian: false, thiagoandrade: false, willian: false, canobbio: false, esquivel: false});

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
      <Layout title='Clube Athletico Paranaense'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>

          <div className={containerClasses} onClick={() => handleClick('wesleycarvalho')}>
              <PlayerImage src={WesleyCarvalho} alt="wesleycarvalho" />
              {showBackground.wesleycarvalho && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <p>Vitórias: 6</p>
                    <p>Empates: 2</p>
                    <p>Derrotas: 5</p>
                    <p>Gols marcados: 18</p>
                    <p>Gols sofridos: 17</p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('bento')}>
              <PlayerImage src={Bento} alt="bento" />
              {showBackground.bento && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex mb-2'>
                      <p className='mr-4'>Jogados: 12</p>
                      <p>Iniciou: 12</p>
                    </div>
                    <p>Gols sofridos por jogo: 1.3</p>
                    <p>Pênaltis defendidos: 1/2</p>
                    <p>Defesas por jogo: 3.3(73%)</p>
                    <p>Jogos sem sofrer gols: 4</p>
                    <p>Nota média: <span className='text-green-600'>7.07</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('esquivel')}>
              <PlayerImage src={Esquivel} alt="esquivel" />
              {showBackground.esquivel && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 0</p>
                      <p>Iniciou: 0</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Jogos sem sofrer gols: 0</p>
                    <p>Desarmes por jogo: 0</p>
                    <p>Passes decisivos por jogo: 0</p>
                    <p>Bolas longas: 0(0%)</p>
                    <p>Disputa de bola vencidas: 0</p>
                    <p>Nota média: <span>-</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('fernando')}>
              <PlayerImage src={Fernando} alt="fernando" />
              {showBackground.fernando && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 6</p>
                      <p>Iniciou: 6</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 2</p>
                    <p>Grandes chances criadas: 2</p>
                    <p>Jogos sem sofrer gols: 2</p>
                    <p>Desarmes por jogo: 1.8</p>
                    <p>Passes decisivos por jogo: 1.3</p>
                    <p>Bolas longas: 1.5(47%)</p>
                    <p>Disputa de bola vencidas: 2.8</p>
                    <p>Nota média: <span className='text-green-600'>7.02</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('thiagoheleno')}>
              <PlayerImage src={ThiagoHeleno} alt="thiagoheleno" />
              {showBackground.thiagoheleno && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 12</p>
                      <p>Iniciou: 11</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 1.1</p>
                    <p>Jogos sem sofrer gols: 3</p>
                    <p>Desarmes por jogo: 1.1</p>
                    <p>Cortes por jogo: 4</p>
                    <p>Erros defensivos: 0</p>
                    <p>Disputa de bola vencidas: 3.9</p>
                    <p>Nota média: <span className='text-yellow-400'>6.98</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('pedrohenrique')}>
              <PlayerImage src={PedroHenrique} alt="pedrohenrique" />
              {showBackground.pedrohenrique && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 10</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 1.2</p>
                    <p>Jogos sem sofrer gols: 3</p>
                    <p>Desarmes por jogo: 0.8</p>
                    <p>Cortes por jogo: 2.8</p>
                    <p>Erros defensivos: 0</p>
                    <p>Disputa de bola vencidas: 3.8</p>
                    <p>Nota média: <span className='text-green-600'>7.05</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('zeivaldo')}>
              <PlayerImage src={ZeIvaldo} alt="zeivaldo" />
              {showBackground.zeivaldo && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 8</p>
                      <p>Iniciou: 6</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 1.1</p>
                    <p>Jogos sem sofrer gols: 2</p>
                    <p>Desarmes por jogo: 0.9</p>
                    <p>Cortes por jogo: 3.1</p>
                    <p>Erros defensivos: 1</p>
                    <p>Disputa de bola vencidas: 5.4</p>
                    <p>Nota média: <span className='text-yellow-400'>6.76</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('khellven')}>
              <PlayerImage src={Khellven} alt="khellven" />
              {showBackground.khellven && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 9</p>
                      <p>Iniciou: 8</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Jogos sem sofrer gols: 2</p>
                    <p>Desarmes por jogo: 1.1</p>
                    <p>Passes decisivos por jogo: 1</p>
                    <p>Bolas longas: 1.6(37%)</p>
                    <p>Disputa de bola vencidas: 3.2</p>
                    <p>Nota média: <span className='text-yellow-400'>6.88</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('madson')}>
              <PlayerImage src={Madson} alt="madson" />
              {showBackground.madson && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 6</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Grandes chances criadas: 2</p>
                    <p>Jogos sem sofrer gols: 1</p>
                    <p>Desarmes por jogo: 0.9</p>
                    <p>Passes decisivos por jogo: 1.3</p>
                    <p>Bolas longas: 0.6(33%)</p>
                    <p>Disputa de bola vencidas: 4.4</p>
                    <p>Nota média: <span className='text-yellow-400'>6.82</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('fernandinho')}>
              <PlayerImage src={Fernandinho} alt="fernandinho" />
              {showBackground.fernandinho && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 5</p>
                      <p>Iniciou: 4</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Toques por jogo: 50.2</p>
                    <p>Dribles bem sucedidos: 0.4</p>
                    <p>Passes decisivos por jogo: 1.4</p>
                    <p>Bolas longas: 3.8(70%)</p>
                    <p>Disputa de bola vencidas: 2.4</p>
                    <p>Nota média: <span className='text-yellow-400'>6.60</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('erick')}>
              <PlayerImage src={Erick} alt="erick" />
              {showBackground.erick && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 8</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Toques por jogo: 44.9</p>
                    <p>Dribles bem sucedidos: 1.4</p>
                    <p>Passes decisivos por jogo: 0.6</p>
                    <p>Bolas longas: 1.2(44%)</p>
                    <p>Disputa de bola vencidas: 6.2</p>
                    <p>Nota média: <span className='text-green-600'>7.03</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('hugomoura')}>
              <PlayerImage src={HugoMoura} alt="hugomoura" />
              {showBackground.hugomoura && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 7</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Toques por jogo: 39.3</p>
                    <p>Dribles bem sucedidos: 0.3</p>
                    <p>Passes decisivos por jogo: 0</p>
                    <p>Bolas longas: 2.0(57%)</p>
                    <p>Disputa de bola vencidas: 4.1</p>
                    <p>Nota média: <span className='text-yellow-400'>6.71</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('christian')}>
              <PlayerImage src={Christian} alt="christian" />
              {showBackground.christian && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 7</p>
                    </div>
                    <p>Gols: 3</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Toques por jogo: 41</p>
                    <p>Dribles bem sucedidos: 1.2</p>
                    <p>Passes decisivos por jogo: 0.9</p>
                    <p>Bolas longas: 1.2(55%)</p>
                    <p>Disputa de bola vencidas: 3.8</p>
                    <p>Nota média: <span className='text-green-600'>7.00</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('alexsantana')}>
              <PlayerImage src={AlexSantana} alt="alexsantana" />
              {showBackground.alexsantana && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 7</p>
                      <p>Iniciou: 6</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Toques por jogo: 38.1</p>
                    <p>Dribles bem sucedidos: 0.6</p>
                    <p>Passes decisivos por jogo: 0.4</p>
                    <p>Bolas longas: 1.7(67%)</p>
                    <p>Disputa de bola vencidas: 4.1</p>
                    <p>Nota média: <span className='text-yellow-400'>6.63</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('vitorbueno')}>
              <PlayerImage src={VitorBueno} alt="vitorbueno" />
              {showBackground.vitorbueno && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 9</p>
                      <p>Iniciou: 5</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 3</p>
                    <p>Grandes chances criadas: 6</p>
                    <p>Toques por jogo: 40</p>
                    <p>Dribles bem sucedidos: 0.8</p>
                    <p>Passes decisivos por jogo: 2.7</p>
                    <p>Bolas longas: 0.9(42%)</p>
                    <p>Disputa de bola vencidas: 3.3</p>
                    <p>Nota média: <span className='text-green-600'>7.16</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('davidterans')}>
              <PlayerImage src={DavidTerans} alt="davidterans" />
              {showBackground.davidterans && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 8</p>
                      <p>Iniciou: 5</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0</p>
                    <p>Finalizações por jogo: 1.5</p>
                    <p>Chutes certos por jogo: 0.3</p>
                    <p>Passes decisivos por jogo: 1</p>
                    <p>Impedimentos por jogo: 0.5</p>
                    <p>Grandes chances perdidas: 1</p>
                    <p>Nota média: <span className='text-yellow-400'>6.69</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('cuello')}>
              <PlayerImage src={Cuello} alt="cuello" />
              {showBackground.cuello && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 7</p>
                      <p>Iniciou: 4</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0</p>
                    <p>Finalizações por jogo: 1.3</p>
                    <p>Chutes certos por jogo: 0.7</p>
                    <p>Passes decisivos por jogo: 0.7</p>
                    <p>Impedimentos por jogo: 0</p>
                    <p>Grandes chances perdidas: 0</p>
                    <p>Nota média: <span className='text-yellow-400'>6.84</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('thiagoandrade')}>
              <PlayerImage src={ThiagoAndrade} alt="thiagoandrade" />
              {showBackground.thiagoandrade && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 8</p>
                      <p>Iniciou: 2</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0</p>
                    <p>Finalizações por jogo: 0.5</p>
                    <p>Chutes certos por jogo: 0.1</p>
                    <p>Passes decisivos por jogo: 0</p>
                    <p>Impedimentos por jogo: 0</p>
                    <p>Grandes chances perdidas: 0</p>
                    <p>Nota média: <span className='text-yellow-400'>6.59</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('willian')}>
              <PlayerImage src={Willian} alt="willian" />
              {showBackground.willian && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 6</p>
                      <p>Iniciou: 1</p>
                    </div>
                    <p>Gols: 2</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0.3</p>
                    <p>Finalizações por jogo: 0.5</p>
                    <p>Chutes certos por jogo: 0.3</p>
                    <p>Passes decisivos por jogo: 0.7</p>
                    <p>Impedimentos por jogo: 0</p>
                    <p>Grandes chances perdidas: 0</p>
                    <p>Nota média: <span className='text-yellow-400'>6.88</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('vitorroque')}>
              <PlayerImage src={VitorRoque} alt="vitorroque" />
              {showBackground.vitorroque && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 12</p>
                      <p>Iniciou: 9</p>
                    </div>
                    <p>Gols: 6</p>
                    <p className='mb-2'>Assistências: 2</p>
                    <p>Gols por jogo: 0.5</p>
                    <p>Finalizações por jogo: 2.2</p>
                    <p>Chutes certos por jogo: 1</p>
                    <p>Passes decisivos por jogo: 0.8</p>
                    <p>Impedimentos por jogo: 0.3</p>
                    <p>Grandes chances perdidas: 3</p>
                    <p>Nota média: <span className='text-yellow-400'>6.98</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('pablo')}>
              <PlayerImage src={Pablo} alt="pablo" />
              {showBackground.pablo && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 8</p>
                      <p>Iniciou: 5</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 2</p>
                    <p>Gols por jogo: 0.1</p>
                    <p>Finalizações por jogo: 1.9</p>
                    <p>Chutes certos por jogo: 0.5</p>
                    <p>Passes decisivos por jogo: 1</p>
                    <p>Impedimentos por jogo: 0.1</p>
                    <p>Grandes chances perdidas: 0</p>
                    <p>Nota média: <span className='text-yellow-400'>6.93</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('canobbio')}>
              <PlayerImage src={Canobbio} alt="canobbio" />
              {showBackground.canobbio && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 9</p>
                      <p>Iniciou: 4</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Gols por jogo: 0.1</p>
                    <p>Finalizações por jogo: 2</p>
                    <p>Chutes certos por jogo: 0.9</p>
                    <p>Passes decisivos por jogo: 1</p>
                    <p>Impedimentos por jogo: 0.2</p>
                    <p>Grandes chances perdidas: 2</p>
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
