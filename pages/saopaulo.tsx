import { useState } from 'react';

import Layout from '@/components/template/Layout'

import Image from 'next/image'
import Fundo from '@/public/jogadores/fundo.png'

import beraldo from '@/public/jogadores/beraldo.png'
import dorival from '@/public/jogadores/dorival.png'
import neves from '@/public/jogadores/neves.png'
import calleri from '@/public/jogadores/calleri.png'
import rodriguinho from '@/public/jogadores/rodriguinho.png'
import juan from '@/public/jogadores/juan.png'
import alanfranco from '@/public/jogadores/alanfranco.png'
import caiopaulista from '@/public/jogadores/caiopaulista.png'
import pato from '@/public/jogadores/pato.png'
import arboleda from '@/public/jogadores/arboleda.png'
import michelaraujo from '@/public/jogadores/michelaraujo.png'
import david from '@/public/jogadores/david.png'
import alisson from '@/public/jogadores/alisson.png'
import marcospaulo from '@/public/jogadores/marcospaulo.png'
import rato from '@/public/jogadores/rato.png'
import luciano from '@/public/jogadores/luciano.png'
import luanspfc from '@/public/jogadores/luanspfc.png'
import nathanmendes from '@/public/jogadores/nathanmendes.png'
import rafinha from '@/public/jogadores/rafinha.png'
import rodrigonestor from '@/public/jogadores/rodrigonestor.png'
import pablomaia from '@/public/jogadores/pablomaia.png'
import rafaelspfc from '@/public/jogadores/rafaelspfc.png'
import diegocosta from '@/public/jogadores/diegocosta.png'

interface ShowBackgroundState {
  dorival: boolean;
  beraldo: boolean;
  neves: boolean;
  calleri: boolean;
  rodriguinho: boolean;
  juan: boolean;
  alanfranco: boolean;
  caiopaulista: boolean;
  pato: boolean;
  arboleda: boolean;
  michelaraujo: boolean;
  david: boolean;
  alisson: boolean;
  marcospaulo: boolean;
  rato: boolean;
  luciano: boolean;
  luanspfc: boolean;
  nathanmendes: boolean;
  rafinha: boolean;
  rodrigonestor: boolean;
  pablomaia: boolean;
  rafaelspfc: boolean;
  diegocosta: boolean;
}

export default function SaoPaulo() {
  const [showBackground, setShowBackground] = useState<ShowBackgroundState>({ dorival: false, beraldo: false, neves: false, calleri: false, rodriguinho: false, alanfranco: false, caiopaulista: false, pato: false, arboleda: false, michelaraujo: false, david: false, luciano: false, luanspfc: false, nathanmendes: false, rodrigonestor: false, rafaelspfc: false, diegocosta: false, pablomaia: false, alisson: false, marcospaulo: false, rato: false, rafinha: false, juan: false});

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
      <Layout title='São Paulo Futebol Clube'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>

          <div className={containerClasses} onClick={() => handleClick('dorival')}>
              <PlayerImage src={dorival} alt="dorival" />
              {showBackground.dorival && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <p>Vitórias: 6</p>
                    <p>Empates: 3</p>
                    <p>Derrotas: 4</p>
                    <p>Gols marcados: 18</p>
                    <p>Gols sofridos: 13</p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('rafaelspfc')}>
              <PlayerImage src={rafaelspfc} alt="rafaelspfc" />
              {showBackground.rafaelspfc && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex mb-2'>
                      <p className='mr-4'>Jogados: 13</p>
                      <p>Iniciou: 13</p>
                    </div>
                    <p>Gols sofridos por jogo: 1</p>
                    <p>Pênaltis defendidos: 0/2</p>
                    <p>Defesas por jogo: 3(75%)</p>
                    <p>Jogos sem sofrer gols: 4</p>
                    <p>Nota média: <span className='text-green-600'>7.09</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('caiopaulista')}>
              <PlayerImage src={caiopaulista} alt="caiopaulista" />
              {showBackground.caiopaulista && (
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

            <div className={containerClasses} onClick={() => handleClick('beraldo')}>
              <PlayerImage src={beraldo} alt="beraldo" />
              {showBackground.beraldo && (
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

            <div className={containerClasses} onClick={() => handleClick('arboleda')}>
              <PlayerImage src={arboleda} alt="arboleda" />
              {showBackground.arboleda && (
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

            <div className={containerClasses} onClick={() => handleClick('alanfranco')}>
              <PlayerImage src={alanfranco} alt="alanfranco" />
              {showBackground.alanfranco && (
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

            <div className={containerClasses} onClick={() => handleClick('diegocosta')}>
              <PlayerImage src={diegocosta} alt="diegocosta" />
              {showBackground.diegocosta && (
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

            <div className={containerClasses} onClick={() => handleClick('nathanmendes')}>
              <PlayerImage src={nathanmendes} alt="nathanmendes" />
              {showBackground.nathanmendes && (
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

            <div className={containerClasses} onClick={() => handleClick('rafinha')}>
              <PlayerImage src={rafinha} alt="rafinha" />
              {showBackground.rafinha && (
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

            <div className={containerClasses} onClick={() => handleClick('luanspfc')}>
              <PlayerImage src={luanspfc} alt="luanspfc" />
              {showBackground.luanspfc && (
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

            <div className={containerClasses} onClick={() => handleClick('neves')}>
              <PlayerImage src={neves} alt="neves" />
              {showBackground.neves && (
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

            <div className={containerClasses} onClick={() => handleClick('pablomaia')}>
              <PlayerImage src={pablomaia} alt="pablomaia" />
              {showBackground.pablomaia && (
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

            <div className={containerClasses} onClick={() => handleClick('rodrigonestor')}>
              <PlayerImage src={rodrigonestor} alt="rodrigonestor" />
              {showBackground.rodrigonestor && (
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

            <div className={containerClasses} onClick={() => handleClick('rodriguinho')}>
              <PlayerImage src={rodriguinho} alt="rodriguinho" />
              {showBackground.rodriguinho && (
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

            <div className={containerClasses} onClick={() => handleClick('michelaraujo')}>
              <PlayerImage src={michelaraujo} alt="michelaraujo" />
              {showBackground.michelaraujo && (
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

            <div className={containerClasses} onClick={() => handleClick('pato')}>
              <PlayerImage src={pato} alt="pato" />
              {showBackground.pato && (
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

            <div className={containerClasses} onClick={() => handleClick('david')}>
              <PlayerImage src={david} alt="david" />
              {showBackground.david && (
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

            <div className={containerClasses} onClick={() => handleClick('marcospaulo')}>
              <PlayerImage src={marcospaulo} alt="marcospaulo" />
              {showBackground.marcospaulo && (
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

            <div className={containerClasses} onClick={() => handleClick('luciano')}>
              <PlayerImage src={luciano} alt="luciano" />
              {showBackground.luciano && (
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

            <div className={containerClasses} onClick={() => handleClick('calleri')}>
              <PlayerImage src={calleri} alt="calleri" />
              {showBackground.calleri && (
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

            <div className={containerClasses} onClick={() => handleClick('juan')}>
              <PlayerImage src={juan} alt="juan" />
              {showBackground.juan && (
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

            <div className={containerClasses} onClick={() => handleClick('rato')}>
              <PlayerImage src={rato} alt="rato" />
              {showBackground.rato && (
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

            <div className={containerClasses} onClick={() => handleClick('alisson')}>
              <PlayerImage src={alisson} alt="alisson" />
              {showBackground.alisson && (
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

        </div>
      </Layout>
    </div>
  )
}
