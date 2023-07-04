import { useState } from 'react';

import Layout from '@/components/template/Layout'

import Image from 'next/image'
import Fundo from '@/public/jogadores/fundo.png'

import marlon from '@/public/jogadores/marlon.png'
import pepa from '@/public/jogadores/pepa.png'
import filipemachado from '@/public/jogadores/filipemachado.png'
import gilberto from '@/public/jogadores/gilberto.png'
import lucasoliveira from '@/public/jogadores/lucasoliveira.png'
import mateusvital from '@/public/jogadores/mateusvital.png'
import lucianocastan from '@/public/jogadores/lucianocastan.png'
import brunorodrigues from '@/public/jogadores/brunorodrigues.png'
import wesleycec from '@/public/jogadores/wesleycec.png'
import stenio from '@/public/jogadores/stenio.png'
import dourado from '@/public/jogadores/dourado.png'
import wallisson from '@/public/jogadores/wallisson.png'
import william from '@/public/jogadores/william.png'
import palacios from '@/public/jogadores/palacios.png'
import netomoura from '@/public/jogadores/netomoura.png'
import ramiro from '@/public/jogadores/ramiro.png'
import rafaelcabral from '@/public/jogadores/rafaelcabral.png'

interface ShowBackgroundState {
  pepa: boolean;
  filipemachado: boolean;
  gilberto: boolean;
  marlon: boolean;
  lucasoliveira: boolean;
  mateusvital: boolean;
  lucianocastan: boolean;
  brunorodrigues: boolean;
  wesleycec: boolean;
  stenio: boolean;
  dourado: boolean;
  wallisson: boolean;
  william: boolean;
  palacios: boolean;
  netomoura: boolean;
  ramiro: boolean;
  rafaelcabral: boolean;
}

export default function Cruzeiro() {
  const [showBackground, setShowBackground] = useState<ShowBackgroundState>({ pepa: false, filipemachado: false, gilberto: false, marlon: false, lucasoliveira: false, mateusvital: false, lucianocastan: false, brunorodrigues: false, dourado: false, wallisson: false, william: false, netomoura: false, rafaelcabral: false, ramiro: false, wesleycec: false, stenio: false, palacios: false});

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
      <Layout title='Cruzeiro Esporte Clube'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>

          <div className={containerClasses} onClick={() => handleClick('pepa')}>
              <PlayerImage src={pepa} alt="pepa" />
              {showBackground.pepa && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <p>Vitórias: 5</p>
                    <p>Empates: 3</p>
                    <p>Derrotas: 5</p>
                    <p>Gols marcados: 15</p>
                    <p>Gols sofridos: 11</p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('rafaelcabral')}>
              <PlayerImage src={rafaelcabral} alt="rafaelcabral" />
              {showBackground.rafaelcabral && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex mb-2'>
                      <p className='mr-4'>Jogados: 13</p>
                      <p>Iniciou: 13</p>
                    </div>
                    <p>Gols sofridos por jogo: 0.8</p>
                    <p>Pênaltis defendidos: 0/1</p>
                    <p>Defesas por jogo: 3.7(81%)</p>
                    <p>Jogos sem sofrer gols: 5</p>
                    <p>Nota média: <span className='text-green-600'>7.22</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('marlon')}>
              <PlayerImage src={marlon} alt="marlon" />
              {showBackground.marlon && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 13</p>
                      <p>Iniciou: 13</p>
                    </div>
                    <p>Gols: 2</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Grandes chances criadas: 2</p>
                    <p>Jogos sem sofrer gols: 5</p>
                    <p>Desarmes por jogo: 3.8</p>
                    <p>Passes decisivos por jogo: 2.4</p>
                    <p>Bolas longas: 3.8(49%)</p>
                    <p>Disputa de bola vencidas: 6.1</p>
                    <p>Nota média: <span className='text-green-600'>7.36</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('lucianocastan')}>
              <PlayerImage src={lucianocastan} alt="lucianocastan" />
              {showBackground.lucianocastan && (
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

            <div className={containerClasses} onClick={() => handleClick('lucasoliveira')}>
              <PlayerImage src={lucasoliveira} alt="lucasoliveira" />
              {showBackground.lucasoliveira && (
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

            <div className={containerClasses} onClick={() => handleClick('william')}>
              <PlayerImage src={william} alt="william" />
              {showBackground.william && (
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

            <div className={containerClasses} onClick={() => handleClick('palacios')}>
              <PlayerImage src={palacios} alt="palacios" />
              {showBackground.palacios && (
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

            <div className={containerClasses} onClick={() => handleClick('filipemachado')}>
              <PlayerImage src={filipemachado} alt="filipemachado" />
              {showBackground.filipemachado && (
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

            <div className={containerClasses} onClick={() => handleClick('wallisson')}>
              <PlayerImage src={wallisson} alt="wallisson" />
              {showBackground.wallisson && (
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

            <div className={containerClasses} onClick={() => handleClick('netomoura')}>
              <PlayerImage src={netomoura} alt="netomoura" />
              {showBackground.netomoura && (
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

            <div className={containerClasses} onClick={() => handleClick('ramiro')}>
              <PlayerImage src={ramiro} alt="ramiro" />
              {showBackground.ramiro && (
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

            <div className={containerClasses} onClick={() => handleClick('mateusvital')}>
              <PlayerImage src={mateusvital} alt="mateusvital" />
              {showBackground.mateusvital && (
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

            <div className={containerClasses} onClick={() => handleClick('brunorodrigues')}>
              <PlayerImage src={brunorodrigues} alt="brunorodrigues" />
              {showBackground.brunorodrigues && (
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

            <div className={containerClasses} onClick={() => handleClick('wesleycec')}>
              <PlayerImage src={wesleycec} alt="wesleycec" />
              {showBackground.wesleycec && (
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

            <div className={containerClasses} onClick={() => handleClick('gilberto')}>
              <PlayerImage src={gilberto} alt="gilberto" />
              {showBackground.gilberto && (
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

            <div className={containerClasses} onClick={() => handleClick('dourado')}>
              <PlayerImage src={dourado} alt="dourado" />
              {showBackground.dourado && (
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

            <div className={containerClasses} onClick={() => handleClick('stenio')}>
              <PlayerImage src={stenio} alt="stenio" />
              {showBackground.stenio && (
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
