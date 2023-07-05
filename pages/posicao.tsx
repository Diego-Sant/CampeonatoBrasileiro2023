import { useState } from 'react';

import Layout from '@/components/template/Layout'

import Image from 'next/image'
import Fundo from '@/public/jogadores/fundo.png'

import fabio from '@/public/jogadores/fabio.png'
import perri from '@/public/jogadores/perri.png'
import joaoricardo from '@/public/jogadores/joaoricardo.png'
import matheuscunha from '@/public/jogadores/matheuscunha.png'
import cuesta from '@/public/jogadores/cuesta.png'
import luan from '@/public/jogadores/luan.png'
import leopereira from '@/public/jogadores/leopereira.png'
import beraldo from '@/public/jogadores/beraldo.png'
import davidluiz from '@/public/jogadores/davidluiz.png'
import soteldo from '@/public/jogadores/soteldo.png'
import mezenga from '@/public/jogadores/mezenga.png'
import mendoza from '@/public/jogadores/mendoza.png'
import deivid from '@/public/jogadores/deivid.png'
import rodrigofernandez from '@/public/jogadores/rodrigofernandez.png'
import inocencio from '@/public/jogadores/inocencio.png'
import nathansfc from '@/public/jogadores/nathansfc.png'
import joaopaulo from '@/public/jogadores/joaopaulo.png'

interface ShowBackgroundState {
  perri: boolean;
  fabio: boolean;
  joaoricardo: boolean;
  matheuscunha: boolean;
  cuesta: boolean;
  luan: boolean;
  leopereira: boolean;
  beraldo: boolean;
  davidluiz: boolean;
  soteldo: boolean;
  mezenga: boolean;
  mendoza: boolean;
  deivid: boolean;
  rodrigofernandez: boolean;
  inocencio: boolean;
  nathansfc: boolean;
  joaopaulo: boolean;
}

export default function Posicao() {
  const [showBackground, setShowBackground] = useState<ShowBackgroundState>({ perri: false, fabio: false, joaoricardo: false, matheuscunha: false, cuesta: false, leopereira: false, beraldo: false, davidluiz: false, soteldo: false, deivid: false, rodrigofernandez: false, inocencio: false, joaopaulo: false, mezenga: false, mendoza: false, nathansfc: false, luan: false});

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
      <Layout title='Destaques por posição'>
        <h1 className='flex justify-center items-center text-[#121212] dark:text-white text-2xl md:text-3xl lg:text-[3em] font-bold mb-4'>Top 5 - Goleiros</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>

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

            <div className={containerClasses} onClick={() => handleClick('fabio')}>
              <PlayerImage src={fabio} alt="fabio" />
              {showBackground.fabio && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex mb-2'>
                      <p className='mr-4'>Jogados: 13</p>
                      <p>Iniciou: 13</p>
                    </div>
                    <p>Gols sofridos por jogo: 1.1</p>
                    <p>Pênaltis defendidos: 0/2</p>
                    <p>Defesas por jogo: 4(79%)</p>
                    <p>Jogos sem sofrer gols: 4</p>
                    <p>Nota média: <span className='text-green-600'>7.38</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('joaoricardo')}>
              <PlayerImage src={joaoricardo} alt="joaoricardo" />
              {showBackground.joaoricardo && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex mb-2'>
                      <p className='mr-4'>Jogados: 8</p>
                      <p>Iniciou: 8</p>
                    </div>
                    <p>Gols sofridos por jogo: 0.9</p>
                    <p>Pênaltis defendidos: 1/1</p>
                    <p>Defesas por jogo: 3.3(79%)</p>
                    <p>Jogos sem sofrer gols: 4</p>
                    <p>Nota média: <span className='text-green-600'>7.25</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('joaopaulo')}>
              <PlayerImage src={joaopaulo} alt="joaopaulo" />
              {showBackground.joaopaulo && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex mb-2'>
                      <p className='mr-4'>Jogados: 13</p>
                      <p>Iniciou: 13</p>
                    </div>
                    <p>Gols sofridos por jogo: 1.2</p>
                    <p>Pênaltis defendidos: 0/1</p>
                    <p>Defesas por jogo: 4(76%)</p>
                    <p>Jogos sem sofrer gols: 5</p>
                    <p>Nota média: <span className='text-green-600'>7.23</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

        </div>

        <h1 className='flex justify-center items-center text-[#121212] dark:text-white text-2xl md:text-3xl mt-4 lg:mt-10 lg:text-[3em] font-bold mb-4'>Top 5 - Zagueiros</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>

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
                    <p>Interceptações por jogo: 1.2</p>
                    <p>Jogos sem sofrer gols: 3</p>
                    <p>Desarmes por jogo: 0.6</p>
                    <p>Cortes por jogo: 3.1</p>
                    <p>Erros defensivos: 0</p>
                    <p>Disputa de bola vencidas: 4.9</p>
                    <p>Nota média: <span className='text-green-500'>7.19</span></p>
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

            <div className={containerClasses} onClick={() => handleClick('beraldo')}>
              <PlayerImage src={beraldo} alt="beraldo" />
              {showBackground.beraldo && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 10</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 1</p>
                    <p>Jogos sem sofrer gols: 2</p>
                    <p>Desarmes por jogo: 1.6</p>
                    <p>Cortes por jogo: 4.5</p>
                    <p>Erros defensivos: 1</p>
                    <p>Disputa de bola vencidas: 4</p>
                    <p>Nota média: <span className='text-green-500'>7.13</span></p>
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

        </div>
      </Layout>
    </div>
  )
}
