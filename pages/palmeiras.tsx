import { useState } from 'react';

import Layout from '@/components/template/Layout'

import Image from 'next/image'
import Fundo from '@/public/jogadores/fundo.png'

import piquerez from '@/public/jogadores/piquerez.png'
import abelferreira from '@/public/jogadores/abelferreira.png'
import fabinho from '@/public/jogadores/fabinho.png'
import flaco from '@/public/jogadores/flaco.png'
import veiga from '@/public/jogadores/veiga.png'
import artur from '@/public/jogadores/artur.png'
import gomez from '@/public/jogadores/gomez.png'
import luisguilherme from '@/public/jogadores/luisguilherme.png'
import luan from '@/public/jogadores/luan.png'
import jhonjhon from '@/public/jogadores/jhonjhon.png'
import rony from '@/public/jogadores/rony.png'
import brenolopes from '@/public/jogadores/brenolopes.png'
import dudu from '@/public/jogadores/dudu.png'
import endrick from '@/public/jogadores/endrick.png'
import menino from '@/public/jogadores/menino.png'
import mayke from '@/public/jogadores/mayke.png'
import marcosrocha from '@/public/jogadores/marcosrocha.png'
import zerafael from '@/public/jogadores/zerafael.png'
import rios from '@/public/jogadores/rios.png'
import weverton from '@/public/jogadores/weverton.png'
import murilo from '@/public/jogadores/murilo.png'

interface ShowBackgroundState {
  abelferreira: boolean;
  piquerez: boolean;
  fabinho: boolean;
  flaco: boolean;
  veiga: boolean;
  artur: boolean;
  gomez: boolean;
  luisguilherme: boolean;
  luan: boolean;
  jhonjhon: boolean;
  rony: boolean;
  brenolopes: boolean;
  dudu: boolean;
  endrick: boolean;
  menino: boolean;
  mayke: boolean;
  marcosrocha: boolean;
  zerafael: boolean;
  rios: boolean;
  weverton: boolean;
  murilo: boolean;
}

export default function Palmeiras() {
  const [showBackground, setShowBackground] = useState<ShowBackgroundState>({ abelferreira: false, piquerez: false, fabinho: false, flaco: false, veiga: false, gomez: false, luisguilherme: false, luan: false, jhonjhon: false, rony: false, endrick: false, menino: false, mayke: false, zerafael: false, weverton: false, murilo: false, rios: false, brenolopes: false, dudu: false, marcosrocha: false, artur: false});

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
      <Layout title='Sociedade Esportiva Palmeiras'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>

          <div className={containerClasses} onClick={() => handleClick('abelferreira')}>
              <PlayerImage src={abelferreira} alt="abelferreira" />
              {showBackground.abelferreira && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <p>Vitórias: 6</p>
                    <p>Empates: 5</p>
                    <p>Derrotas: 2</p>
                    <p>Gols marcados: 24</p>
                    <p>Gols sofridos: 12</p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('weverton')}>
              <PlayerImage src={weverton} alt="weverton" />
              {showBackground.weverton && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex mb-2'>
                      <p className='mr-4'>Jogados: 12</p>
                      <p>Iniciou: 12</p>
                    </div>
                    <p>Gols sofridos por jogo: 0.9</p>
                    <p>Pênaltis defendidos: 0/1</p>
                    <p>Defesas por jogo: 2.8(75%)</p>
                    <p>Jogos sem sofrer gols: 3</p>
                    <p>Nota média: <span className='text-yellow-400'>6.89</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('piquerez')}>
              <PlayerImage src={piquerez} alt="piquerez" />
              {showBackground.piquerez && (
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

            <div className={containerClasses} onClick={() => handleClick('murilo')}>
              <PlayerImage src={murilo} alt="murilo" />
              {showBackground.murilo && (
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

            <div className={containerClasses} onClick={() => handleClick('gomez')}>
              <PlayerImage src={gomez} alt="gomez" />
              {showBackground.gomez && (
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

            <div className={containerClasses} onClick={() => handleClick('luan')}>
              <PlayerImage src={luan} alt="luan" />
              {showBackground.luan && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 9</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Jogos sem sofrer gols: 3</p>
                    <p>Desarmes por jogo: 0.6</p>
                    <p>Passes decisivos por jogo: 0.2</p>
                    <p>Bolas longas: 7.5(67%)</p>
                    <p>Disputa de bola vencidas: 4.9</p>
                    <p>Nota média: <span className='text-green-600'>7.19</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('marcosrocha')}>
              <PlayerImage src={marcosrocha} alt="marcosrocha" />
              {showBackground.marcosrocha && (
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

            <div className={containerClasses} onClick={() => handleClick('mayke')}>
              <PlayerImage src={mayke} alt="mayke" />
              {showBackground.mayke && (
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
            
            <div className={containerClasses} onClick={() => handleClick('fabinho')}>
              <PlayerImage src={fabinho} alt="fabinho" />
              {showBackground.fabinho && (
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

            <div className={containerClasses} onClick={() => handleClick('zerafael')}>
              <PlayerImage src={zerafael} alt="zerafael" />
              {showBackground.zerafael && (
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

            <div className={containerClasses} onClick={() => handleClick('rios')}>
              <PlayerImage src={rios} alt="rios" />
              {showBackground.rios && (
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

            <div className={containerClasses} onClick={() => handleClick('menino')}>
              <PlayerImage src={menino} alt="menino" />
              {showBackground.menino && (
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

            <div className={containerClasses} onClick={() => handleClick('jhonjhon')}>
              <PlayerImage src={jhonjhon} alt="jhonjhon" />
              {showBackground.jhonjhon && (
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

            <div className={containerClasses} onClick={() => handleClick('veiga')}>
              <PlayerImage src={veiga} alt="veiga" />
              {showBackground.veiga && (
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

            <div className={containerClasses} onClick={() => handleClick('luisguilherme')}>
              <PlayerImage src={luisguilherme} alt="luisguilherme" />
              {showBackground.luisguilherme && (
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

            <div className={containerClasses} onClick={() => handleClick('dudu')}>
              <PlayerImage src={dudu} alt="dudu" />
              {showBackground.dudu && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 12</p>
                      <p>Iniciou: 12</p>
                    </div>
                    <p>Gols: 2</p>
                    <p className='mb-2'>Assistências: 3</p>
                    <p>Gols por jogo: 0.2</p>
                    <p>Finalizações por jogo: 2.7</p>
                    <p>Chutes certos por jogo: 0.3</p>
                    <p>Passes decisivos por jogo: 2</p>
                    <p>Impedimentos por jogo: 0.3</p>
                    <p>Grandes chances perdidas: 1</p>
                    <p>Nota média: <span className='text-green-600'>7.33</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('brenolopes')}>
              <PlayerImage src={brenolopes} alt="brenolopes" />
              {showBackground.brenolopes && (
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

            <div className={containerClasses} onClick={() => handleClick('rony')}>
              <PlayerImage src={rony} alt="rony" />
              {showBackground.rony && (
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

            <div className={containerClasses} onClick={() => handleClick('endrick')}>
              <PlayerImage src={endrick} alt="endrick" />
              {showBackground.endrick && (
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

            <div className={containerClasses} onClick={() => handleClick('flaco')}>
              <PlayerImage src={flaco} alt="flaco" />
              {showBackground.flaco && (
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

            <div className={containerClasses} onClick={() => handleClick('artur')}>
              <PlayerImage src={artur} alt="artur" />
              {showBackground.artur && (
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

        </div>
      </Layout>
    </div>
  )
}
