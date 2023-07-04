import { useState } from 'react';

import Layout from '@/components/template/Layout'

import Image from 'next/image'
import Fundo from '@/public/jogadores/fundo.png'

import chavez from '@/public/jogadores/chavez.png'
import renatopaiva from '@/public/jogadores/renatopaiva.png'
import diegorosa from '@/public/jogadores/diegorosa.png'
import everaldoecb from '@/public/jogadores/everaldoecb.png'
import thaciano from '@/public/jogadores/thaciano.png'
import mingotti from '@/public/jogadores/mingotti.png'
import davidduarte from '@/public/jogadores/davidduarte.png'
import cauly from '@/public/jogadores/cauly.png'
import kanu from '@/public/jogadores/kanu.png'
import rezende from '@/public/jogadores/rezende.png'
import jacare from '@/public/jogadores/jacare.png'
import kayky from '@/public/jogadores/kayky.png'
import biel from '@/public/jogadores/biel.png'
import ademir from '@/public/jogadores/ademir.png'
import arthursales from '@/public/jogadores/arthursales.png'
import acevedo from '@/public/jogadores/acevedo.png'
import cicinho from '@/public/jogadores/cicinho.png'
import yagofelipe from '@/public/jogadores/yagofelipe.png'
import marcosfelipe from '@/public/jogadores/marcosfelipe.png'
import vitorhugo from '@/public/jogadores/vitorhugo.png'

interface ShowBackgroundState {
  renatopaiva: boolean;
  chavez: boolean;
  diegorosa: boolean;
  everaldoecb: boolean;
  thaciano: boolean;
  mingotti: boolean;
  davidduarte: boolean;
  cauly: boolean;
  kanu: boolean;
  rezende: boolean;
  jacare: boolean;
  kayky: boolean;
  biel: boolean;
  ademir: boolean;
  arthursales: boolean;
  acevedo: boolean;
  cicinho: boolean;
  yagofelipe: boolean;
  marcosfelipe: boolean;
  vitorhugo: boolean;
}

export default function Bahia() {
  const [showBackground, setShowBackground] = useState<ShowBackgroundState>({ renatopaiva: false, chavez: false, diegorosa: false, everaldoecb: false, thaciano: false, davidduarte: false, cauly: false, kanu: false, rezende: false, jacare: false, arthursales: false, acevedo: false, cicinho: false, yagofelipe: false, marcosfelipe: false, vitorhugo: false, kayky: false, biel: false, ademir: false, mingotti: false});

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
      <Layout title='Esporte Clube Bahia'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>

          <div className={containerClasses} onClick={() => handleClick('renatopaiva')}>
              <PlayerImage src={renatopaiva} alt="renatopaiva" />
              {showBackground.renatopaiva && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <p>Vitórias: 3</p>
                    <p>Empates: 3</p>
                    <p>Derrotas: 7</p>
                    <p>Gols marcados: 14</p>
                    <p>Gols sofridos: 20</p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('marcosfelipe')}>
              <PlayerImage src={marcosfelipe} alt="marcosfelipe" />
              {showBackground.marcosfelipe && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex mb-2'>
                      <p className='mr-4'>Jogados: 12</p>
                      <p>Iniciou: 12</p>
                    </div>
                    <p>Gols sofridos por jogo: 1.5</p>
                    <p>Pênaltis defendidos: 0/1</p>
                    <p>Defesas por jogo: 3.4(69%)</p>
                    <p>Jogos sem sofrer gols: 3</p>
                    <p>Nota média: <span className='text-yellow-400'>6.98</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('chavez')}>
              <PlayerImage src={chavez} alt="chavez" />
              {showBackground.chavez && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 8</p>
                      <p>Iniciou: 6</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Jogos sem sofrer gols: 1</p>
                    <p>Desarmes por jogo: 1.6</p>
                    <p>Passes decisivos por jogo: 1.4</p>
                    <p>Bolas longas: 0.8(43%)</p>
                    <p>Disputa de bola vencidas: 2.9</p>
                    <p>Nota média: <span className='text-yellow-400'>6.61</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('vitorhugo')}>
              <PlayerImage src={vitorhugo} alt="vitorhugo" />
              {showBackground.vitorhugo && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 8</p>
                      <p>Iniciou: 8</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 0.8</p>
                    <p>Jogos sem sofrer gols: 0</p>
                    <p>Desarmes por jogo: 1.1</p>
                    <p>Cortes por jogo: 1.3</p>
                    <p>Erros defensivos: 1</p>
                    <p>Disputa de bola vencidas: 3.6</p>
                    <p>Nota média: <span className='text-yellow-400'>6.58</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('kanu')}>
              <PlayerImage src={kanu} alt="kanu" />
              {showBackground.kanu && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 10</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 1.9</p>
                    <p>Jogos sem sofrer gols: 3</p>
                    <p>Desarmes por jogo: 1.3</p>
                    <p>Cortes por jogo: 3</p>
                    <p>Erros defensivos: 0</p>
                    <p>Disputa de bola vencidas: 4.6</p>
                    <p>Nota média: <span className='text-yellow-400'>6.98</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('davidduarte')}>
              <PlayerImage src={davidduarte} alt="davidduarte" />
              {showBackground.davidduarte && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 8</p>
                      <p>Iniciou: 8</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 0.8</p>
                    <p>Jogos sem sofrer gols: 2</p>
                    <p>Desarmes por jogo: 0.8</p>
                    <p>Cortes por jogo: 4.6</p>
                    <p>Erros defensivos: 1</p>
                    <p>Disputa de bola vencidas: 3.5</p>
                    <p>Nota média: <span className='text-yellow-400'>6.81</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('cicinho')}>
              <PlayerImage src={cicinho} alt="cicinho" />
              {showBackground.cicinho && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 5</p>
                      <p>Iniciou: 5</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 0.6</p>
                    <p>Jogos sem sofrer gols: 2</p>
                    <p>Desarmes por jogo: 2.8</p>
                    <p>Cortes por jogo: 3.2</p>
                    <p>Erros defensivos: 1</p>
                    <p>Disputa de bola vencidas: 7.6</p>
                    <p>Nota média: <span className='text-yellow-400'>6.70</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('rezende')}>
              <PlayerImage src={rezende} alt="rezende" />
              {showBackground.rezende && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 10</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Toques por jogo: 58.3</p>
                    <p>Dribles bem sucedidos: 0.3</p>
                    <p>Passes decisivos por jogo: 0.1</p>
                    <p>Bolas longas: 1.4(50%)</p>
                    <p>Disputa de bola vencidas: 5.1</p>
                    <p>Nota média: <span className='text-yellow-400'>6.72</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('acevedo')}>
              <PlayerImage src={acevedo} alt="acevedo" />
              {showBackground.acevedo && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 6</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Toques por jogo: 76.3</p>
                    <p>Dribles bem sucedidos: 0.4</p>
                    <p>Passes decisivos por jogo: 0.3</p>
                    <p>Bolas longas: 2.3(64%)</p>
                    <p>Disputa de bola vencidas: 5.1</p>
                    <p>Nota média: <span className='text-yellow-400'>6.73</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('diegorosa')}>
              <PlayerImage src={diegorosa} alt="diegorosa" />
              {showBackground.diegorosa && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 6</p>
                      <p>Iniciou: 0</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Toques por jogo: 20.8</p>
                    <p>Dribles bem sucedidos: 0.3</p>
                    <p>Passes decisivos por jogo: 0</p>
                    <p>Bolas longas: 0.8(45%)</p>
                    <p>Disputa de bola vencidas: 1.7</p>
                    <p>Nota média: <span className='text-yellow-400'>6.67</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('yagofelipe')}>
              <PlayerImage src={yagofelipe} alt="yagofelipe" />
              {showBackground.yagofelipe && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 6</p>
                      <p>Iniciou: 4</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Toques por jogo: 32.5</p>
                    <p>Dribles bem sucedidos: 0.3</p>
                    <p>Passes decisivos por jogo: 0.8</p>
                    <p>Bolas longas: 2.5(88%)</p>
                    <p>Disputa de bola vencidas: 3.2</p>
                    <p>Nota média: <span className='text-yellow-400'>6.60</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('thaciano')}>
              <PlayerImage src={thaciano} alt="thaciano" />
              {showBackground.thaciano && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 11</p>
                    </div>
                    <p>Gols: 2</p>
                    <p className='mb-2'>Assistências: 3</p>
                    <p>Gols por jogo: 0.2</p>
                    <p>Finalizações por jogo: 2</p>
                    <p>Chutes certos por jogo: 0.5</p>
                    <p>Passes decisivos por jogo: 0.9</p>
                    <p>Impedimentos por jogo: 0.2</p>
                    <p>Grandes chances perdidas: 3</p>
                    <p>Nota média: <span className='text-green-500'>7.01</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('cauly')}>
              <PlayerImage src={cauly} alt="cauly" />
              {showBackground.cauly && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 12</p>
                      <p>Iniciou: 10</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 2</p>
                    <p>Grandes chances criadas: 2</p>
                    <p>Toques por jogo: 58.8</p>
                    <p>Dribles bem sucedidos: 2.6</p>
                    <p>Passes decisivos por jogo: 2.2</p>
                    <p>Bolas longas: 0.8(53%)</p>
                    <p>Disputa de bola vencidas: 4.7</p>
                    <p>Nota média: <span className='text-yellow-400'>6.93</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('jacare')}>
              <PlayerImage src={jacare} alt="jacare" />
              {showBackground.jacare && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 7</p>
                      <p>Iniciou: 7</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0.1</p>
                    <p>Finalizações por jogo: 1.7</p>
                    <p>Chutes certos por jogo: 0.4</p>
                    <p>Passes decisivos por jogo: 0.9</p>
                    <p>Impedimentos por jogo: 0</p>
                    <p>Grandes chances perdidas: 0</p>
                    <p>Nota média: <span className='text-green-500'>7.14</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('biel')}>
              <PlayerImage src={biel} alt="biel" />
              {showBackground.biel && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 7</p>
                      <p>Iniciou: 5</p>
                    </div>
                    <p>Gols: 2</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0.3</p>
                    <p>Finalizações por jogo: 2.9</p>
                    <p>Chutes certos por jogo: 1</p>
                    <p>Passes decisivos por jogo: 1.3</p>
                    <p>Impedimentos por jogo: 0</p>
                    <p>Grandes chances perdidas: 2</p>
                    <p>Nota média: <span className='text-green-500'>7.03</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('mingotti')}>
              <PlayerImage src={mingotti} alt="mingotti" />
              {showBackground.mingotti && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 6</p>
                      <p>Iniciou: 2</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0.2</p>
                    <p>Finalizações por jogo: 0.7</p>
                    <p>Chutes certos por jogo: 0.3</p>
                    <p>Passes decisivos por jogo: 0.7</p>
                    <p>Impedimentos por jogo: 0.7</p>
                    <p>Grandes chances perdidas: 0</p>
                    <p>Nota média: <span className='text-yellow-400'>6.78</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('everaldoecb')}>
              <PlayerImage src={everaldoecb} alt="everaldoecb" />
              {showBackground.everaldoecb && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 9</p>
                      <p>Iniciou: 8</p>
                    </div>
                    <p>Gols: 2</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0.2</p>
                    <p>Finalizações por jogo: 1.4</p>
                    <p>Chutes certos por jogo: 0.7</p>
                    <p>Passes decisivos por jogo: 1</p>
                    <p>Impedimentos por jogo: 0.6</p>
                    <p>Grandes chances perdidas: 0</p>
                    <p>Nota média: <span className='text-yellow-400'>6.96</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('arthursales')}>
              <PlayerImage src={arthursales} alt="arthursales" />
              {showBackground.arthursales && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 9</p>
                      <p>Iniciou: 2</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0.1</p>
                    <p>Finalizações por jogo: 0.8</p>
                    <p>Chutes certos por jogo: 0.3</p>
                    <p>Passes decisivos por jogo: 0.3</p>
                    <p>Impedimentos por jogo: 0.1</p>
                    <p>Grandes chances perdidas: 2</p>
                    <p>Nota média: <span className='text-yellow-400'>6.52</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('kayky')}>
              <PlayerImage src={kayky} alt="kayky" />
              {showBackground.kayky && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 7</p>
                      <p>Iniciou: 3</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Gols por jogo: 0.1</p>
                    <p>Finalizações por jogo: 0.7</p>
                    <p>Chutes certos por jogo: 0.1</p>
                    <p>Passes decisivos por jogo: 0.6</p>
                    <p>Impedimentos por jogo: 0.1</p>
                    <p>Grandes chances perdidas: 0</p>
                    <p>Nota média: <span className='text-yellow-400'>6.73</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('ademir')}>
              <PlayerImage src={ademir} alt="ademir" />
              {showBackground.ademir && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 9</p>
                      <p>Iniciou: 6</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Gols por jogo: 0.1</p>
                    <p>Finalizações por jogo: 1.1</p>
                    <p>Chutes certos por jogo: 0.6</p>
                    <p>Passes decisivos por jogo: 1.1</p>
                    <p>Impedimentos por jogo: 0.3</p>
                    <p>Grandes chances perdidas: 2</p>
                    <p>Nota média: <span className='text-yellow-400'>6.91</span></p>
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
