import { useState } from 'react';

import Layout from '@/components/template/Layout'

import Image from 'next/image'
import Fundo from '@/public/jogadores/fundo.png'

import ayrtonlucas from '@/public/jogadores/ayrtonlucas.png'
import sampaoli from '@/public/jogadores/sampaoli.png'
import thiagomaia from '@/public/jogadores/thiagomaia.png'
import pedro from '@/public/jogadores/pedro.png'
import arrascaeta from '@/public/jogadores/arrascaeta.png'
import evertonribeiro from '@/public/jogadores/evertonribeiro.png'
import fabriciobruno from '@/public/jogadores/fabriciobruno.png'
import filipeluis from '@/public/jogadores/filipeluis.png'
import matheusfranca from '@/public/jogadores/matheusfranca.png'
import davidluiz from '@/public/jogadores/davidluiz.png'
import gerson from '@/public/jogadores/gerson.png'
import cebolinha from '@/public/jogadores/cebolinha.png'
import brunohenrique from '@/public/jogadores/brunohenrique.png'
import luizaraujo from '@/public/jogadores/luizaraujo.png'
import victorhugo from '@/public/jogadores/victorhugo.png'
import gabigol from '@/public/jogadores/gabigol.png'
import pulgar from '@/public/jogadores/pulgar.png'
import wesleycrf from '@/public/jogadores/wesleycrf.png'
import rossi from '@/public/jogadores/rossi.png'
import vidal from '@/public/jogadores/vidal.png'
import allan from '@/public/jogadores/allan.png'
import matheuscunha from '@/public/jogadores/matheuscunha.png'
import santos from '@/public/jogadores/santos.png'
import leopereira from '@/public/jogadores/leopereira.png'

interface ShowBackgroundState {
  sampaoli: boolean;
  ayrtonlucas: boolean;
  thiagomaia: boolean;
  pedro: boolean;
  arrascaeta: boolean;
  evertonribeiro: boolean;
  fabriciobruno: boolean;
  filipeluis: boolean;
  matheusfranca: boolean;
  davidluiz: boolean;
  gerson: boolean;
  cebolinha: boolean;
  brunohenrique: boolean;
  luizaraujo: boolean;
  victorhugo: boolean;
  gabigol: boolean;
  pulgar: boolean;
  wesleycrf: boolean;
  rossi: boolean;
  vidal: boolean;
  allan: boolean;
  matheuscunha: boolean;
  santos: boolean;
  leopereira: boolean;
}

export default function Flamengo() {
  const [showBackground, setShowBackground] = useState<ShowBackgroundState>({ sampaoli: false, ayrtonlucas: false, thiagomaia: false, pedro: false, arrascaeta: false, fabriciobruno: false, filipeluis: false, matheusfranca: false, davidluiz: false, gerson: false, cebolinha: false, gabigol: false, pulgar: false, wesleycrf: false, vidal: false, matheuscunha: false, leopereira: false, allan: false, brunohenrique: false, luizaraujo: false, victorhugo: false, rossi: false, evertonribeiro: false, santos: false});

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
      <Layout title='Clube de Regatas do Flamengo'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>

          <div className={containerClasses} onClick={() => handleClick('sampaoli')}>
              <PlayerImage src={sampaoli} alt="sampaoli" />
              {showBackground.sampaoli && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <p>Vitórias: 8</p>
                    <p>Empates: 1</p>
                    <p>Derrotas: 4</p>
                    <p>Gols marcados: 26</p>
                    <p>Gols sofridos: 17</p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('matheuscunha')}>
              <PlayerImage src={matheuscunha} alt="matheuscunha" />
              {showBackground.matheuscunha && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex mb-2'>
                      <p className='mr-4'>Jogados: 9</p>
                      <p>Iniciou: 8</p>
                    </div>
                    <p>Gols sofridos por jogo: 1</p>
                    <p>Pênaltis defendidos: 1/2</p>
                    <p>Defesas por jogo: 4.6(82%)</p>
                    <p>Jogos sem sofrer gols: 3</p>
                    <p>Nota média: <span className='text-green-600'>7.41</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('santos')}>
              <PlayerImage src={santos} alt="santos" />
              {showBackground.santos && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex mb-2'>
                      <p className='mr-4'>Jogados: 6</p>
                      <p>Iniciou: 5</p>
                    </div>
                    <p>Gols sofridos por jogo: 1.3</p>
                    <p>Pênaltis defendidos: 0/1</p>
                    <p>Defesas por jogo: 2.7(67%)</p>
                    <p>Jogos sem sofrer gols: 2</p>
                    <p>Nota média: <span className='text-yellow-400'>6.67</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('rossi')}>
              <PlayerImage src={rossi} alt="rossi" />
              {showBackground.rossi && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex mb-2'>
                      <p className='mr-4'>Jogados: 0</p>
                      <p>Iniciou: 0</p>
                    </div>
                    <p>Gols sofridos por jogo: 0</p>
                    <p>Pênaltis defendidos: 0/0</p>
                    <p>Defesas por jogo: 0(0%)</p>
                    <p>Jogos sem sofrer gols: 0</p>
                    <p>Nota média: <span>-</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('ayrtonlucas')}>
              <PlayerImage src={ayrtonlucas} alt="ayrtonlucas" />
              {showBackground.ayrtonlucas && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 13</p>
                      <p>Iniciou: 11</p>
                    </div>
                    <p>Gols: 3</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Jogos sem sofrer gols: 3</p>
                    <p>Desarmes por jogo: 1.5</p>
                    <p>Passes decisivos por jogo: 0.6</p>
                    <p>Bolas longas: 2.4(65%)</p>
                    <p>Disputa de bola vencidas: 5.4</p>
                    <p>Nota média: <span className='text-yellow-400'>6.89</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('filipeluis')}>
              <PlayerImage src={filipeluis} alt="filipeluis" />
              {showBackground.filipeluis && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 3</p>
                      <p>Iniciou: 0</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Jogos sem sofrer gols: 0</p>
                    <p>Desarmes por jogo: 1.3</p>
                    <p>Passes decisivos por jogo: 0</p>
                    <p>Bolas longas: 0.7(100%)</p>
                    <p>Disputa de bola vencidas: 1.3</p>
                    <p>Nota média: <span className='text-yellow-400'>6.83</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('leopereira')}>
              <PlayerImage src={leopereira} alt="leopereira" />
              {showBackground.leopereira && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 12</p>
                      <p>Iniciou: 12</p>
                    </div>
                    <p>Gols: 3</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 0.9</p>
                    <p>Jogos sem sofrer gols: 3</p>
                    <p>Desarmes por jogo: 1.5</p>
                    <p>Cortes por jogo: 1.8</p>
                    <p>Erros defensivos: 1</p>
                    <p>Disputa de bola vencidas: 3.9</p>
                    <p>Nota média: <span className='text-green-500'>7.16</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('davidluiz')}>
              <PlayerImage src={davidluiz} alt="davidluiz" />
              {showBackground.davidluiz && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 8</p>
                      <p>Iniciou: 5</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Interceptações por jogo: 0.8</p>
                    <p>Jogos sem sofrer gols: 1</p>
                    <p>Desarmes por jogo: 0.5</p>
                    <p>Cortes por jogo: 4.6</p>
                    <p>Erros defensivos: 0</p>
                    <p>Disputa de bola vencidas: 2.8</p>
                    <p>Nota média: <span className='text-green-500'>7.11</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('fabriciobruno')}>
              <PlayerImage src={fabriciobruno} alt="fabriciobruno" />
              {showBackground.fabriciobruno && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 13</p>
                      <p>Iniciou: 13</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Interceptações por jogo: 0.5</p>
                    <p>Jogos sem sofrer gols: 5</p>
                    <p>Desarmes por jogo: 1.4</p>
                    <p>Cortes por jogo: 4.3</p>
                    <p>Erros defensivos: 0</p>
                    <p>Disputa de bola vencidas: 3.5</p>
                    <p>Nota média: <span className='text-green-500'>7.07</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('wesleycrf')}>
              <PlayerImage src={wesleycrf} alt="wesleycrf" />
              {showBackground.wesleycrf && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 13</p>
                      <p>Iniciou: 12</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Grandes chances criadas: 4</p>
                    <p>Jogos sem sofrer gols: 4</p>
                    <p>Desarmes por jogo: 1.9</p>
                    <p>Passes decisivos por jogo: 1.2</p>
                    <p>Bolas longas: 0.5(35%)</p>
                    <p>Disputa de bola vencidas: 5.5</p>
                    <p>Nota média: <span className='text-yellow-400'>6.62</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('thiagomaia')}>
              <PlayerImage src={thiagomaia} alt="thiagomaia" />
              {showBackground.thiagomaia && (
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

            <div className={containerClasses} onClick={() => handleClick('allan')}>
              <PlayerImage src={allan} alt="allan" />
              {showBackground.allan && (
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

            <div className={containerClasses} onClick={() => handleClick('vidal')}>
              <PlayerImage src={vidal} alt="vidal" />
              {showBackground.vidal && (
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

            <div className={containerClasses} onClick={() => handleClick('pulgar')}>
              <PlayerImage src={pulgar} alt="pulgar" />
              {showBackground.pulgar && (
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

            <div className={containerClasses} onClick={() => handleClick('victorhugo')}>
              <PlayerImage src={victorhugo} alt="victorhugo" />
              {showBackground.victorhugo && (
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

            <div className={containerClasses} onClick={() => handleClick('gerson')}>
              <PlayerImage src={gerson} alt="gerson" />
              {showBackground.gerson && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 9</p>
                      <p>Iniciou: 9</p>
                    </div>
                    <p>Gols: 2</p>
                    <p className='mb-2'>Assistências: 6</p>
                    <p>Grandes chances criadas: 6</p>
                    <p>Toques por jogo: 71.1</p>
                    <p>Dribles bem sucedidos: 1.8</p>
                    <p>Passes decisivos por jogo: 2.6</p>
                    <p>Bolas longas: 2.4(76%)</p>
                    <p>Disputa de bola vencidas: 6.8</p>
                    <p>Nota média: <span className='text-green-600'>7.42</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('arrascaeta')}>
              <PlayerImage src={arrascaeta} alt="arrascaeta" />
              {showBackground.arrascaeta && (
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

            <div className={containerClasses} onClick={() => handleClick('matheusfranca')}>
              <PlayerImage src={matheusfranca} alt="matheusfranca" />
              {showBackground.matheusfranca && (
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

            <div className={containerClasses} onClick={() => handleClick('cebolinha')}>
              <PlayerImage src={cebolinha} alt="cebolinha" />
              {showBackground.cebolinha && (
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

            <div className={containerClasses} onClick={() => handleClick('brunohenrique')}>
              <PlayerImage src={brunohenrique} alt="brunohenrique" />
              {showBackground.brunohenrique && (
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

            <div className={containerClasses} onClick={() => handleClick('pedro')}>
              <PlayerImage src={pedro} alt="pedro" />
              {showBackground.pedro && (
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

            <div className={containerClasses} onClick={() => handleClick('gabigol')}>
              <PlayerImage src={gabigol} alt="gabigol" />
              {showBackground.gabigol && (
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

            <div className={containerClasses} onClick={() => handleClick('evertonribeiro')}>
              <PlayerImage src={evertonribeiro} alt="evertonribeiro" />
              {showBackground.evertonribeiro && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 10</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0</p>
                    <p>Finalizações por jogo: 1</p>
                    <p>Chutes certos por jogo: 0.09</p>
                    <p>Passes decisivos por jogo: 0.8</p>
                    <p>Impedimentos por jogo: 0.09</p>
                    <p>Grandes chances perdidas: 2</p>
                    <p>Nota média: <span className='text-yellow-400'>6.64</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('luizaraujo')}>
              <PlayerImage src={luizaraujo} alt="luizaraujo" />
              {showBackground.luizaraujo && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 7</p>
                    </div>
                    <p>Gols: 2</p>
                    <p className='mb-2'>Assistências: 3</p>
                    <p>Gols por jogo: 0.2</p>
                    <p>Finalizações por jogo: 1.5</p>
                    <p>Chutes certos por jogo: 0.5</p>
                    <p>Passes decisivos por jogo: 1</p>
                    <p>Impedimentos por jogo: 0</p>
                    <p>Grandes chances perdidas: 0</p>
                    <p>Nota média: <span className='text-yellow-400'>6.92</span></p>
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
