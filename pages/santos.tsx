import { useState } from 'react';

import Layout from '@/components/template/Layout'

import Image from 'next/image'
import Fundo from '@/public/jogadores/fundo.png'

import lucaspires from '@/public/jogadores/lucaspires.png'
import pauloturra from '@/public/jogadores/pauloturra.png'
import dodi from '@/public/jogadores/dodi.png'
import marcosleonardo from '@/public/jogadores/marcosleonardo.png'
import danielruiz from '@/public/jogadores/danielruiz.png'
import angelo from '@/public/jogadores/angelo.png'
import joaquim from '@/public/jogadores/joaquim.png'
import lucaslima from '@/public/jogadores/lucaslima.png'
import messias from '@/public/jogadores/messias.png'
import soteldo from '@/public/jogadores/soteldo.png'
import mezenga from '@/public/jogadores/mezenga.png'
import mendoza from '@/public/jogadores/mendoza.png'
import deivid from '@/public/jogadores/deivid.png'
import rodrigofernandez from '@/public/jogadores/rodrigofernandez.png'
import inocencio from '@/public/jogadores/inocencio.png'
import nathansfc from '@/public/jogadores/nathansfc.png'
import joaopaulo from '@/public/jogadores/joaopaulo.png'

interface ShowBackgroundState {
  pauloturra: boolean;
  lucaspires: boolean;
  dodi: boolean;
  marcosleonardo: boolean;
  danielruiz: boolean;
  angelo: boolean;
  joaquim: boolean;
  lucaslima: boolean;
  messias: boolean;
  soteldo: boolean;
  mezenga: boolean;
  mendoza: boolean;
  deivid: boolean;
  rodrigofernandez: boolean;
  inocencio: boolean;
  nathansfc: boolean;
  joaopaulo: boolean;
}

export default function Santos() {
  const [showBackground, setShowBackground] = useState<ShowBackgroundState>({ pauloturra: false, lucaspires: false, dodi: false, marcosleonardo: false, danielruiz: false, joaquim: false, lucaslima: false, messias: false, soteldo: false, deivid: false, rodrigofernandez: false, inocencio: false, joaopaulo: false, mezenga: false, mendoza: false, nathansfc: false, angelo: false});

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
      <Layout title='Santos Futebol Clube'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>

          <div className={containerClasses} onClick={() => handleClick('pauloturra')}>
              <PlayerImage src={pauloturra} alt="pauloturra" />
              {showBackground.pauloturra && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <p>Vitórias: 3</p>
                    <p>Empates: 4</p>
                    <p>Derrotas: 6</p>
                    <p>Gols marcados: 11</p>
                    <p>Gols sofridos: 16</p>
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

            <div className={containerClasses} onClick={() => handleClick('lucaspires')}>
              <PlayerImage src={lucaspires} alt="lucaspires" />
              {showBackground.lucaspires && (
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

            <div className={containerClasses} onClick={() => handleClick('messias')}>
              <PlayerImage src={messias} alt="messias" />
              {showBackground.messias && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 13</p>
                      <p>Iniciou: 13</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 1.7</p>
                    <p>Jogos sem sofrer gols: 4</p>
                    <p>Desarmes por jogo: 0.8</p>
                    <p>Cortes por jogo: 6.3</p>
                    <p>Erros defensivos: 2</p>
                    <p>Disputa de bola vencidas: 4.5</p>
                    <p>Nota média: <span className='text-yellow-400'>6.81</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('joaquim')}>
              <PlayerImage src={joaquim} alt="joaquim" />
              {showBackground.joaquim && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 10</p>
                      <p>Iniciou: 10</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 1.1</p>
                    <p>Jogos sem sofrer gols: 4</p>
                    <p>Desarmes por jogo: 1.8</p>
                    <p>Cortes por jogo: 6.7</p>
                    <p>Erros defensivos: 1</p>
                    <p>Disputa de bola vencidas: 6.6</p>
                    <p>Nota média: <span className='text-green-500'>7.05</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('inocencio')}>
              <PlayerImage src={inocencio} alt="inocencio" />
              {showBackground.inocencio && (
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

            <div className={containerClasses} onClick={() => handleClick('nathansfc')}>
              <PlayerImage src={nathansfc} alt="nathansfc" />
              {showBackground.nathansfc && (
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

            <div className={containerClasses} onClick={() => handleClick('rodrigofernandez')}>
              <PlayerImage src={rodrigofernandez} alt="rodrigofernandez" />
              {showBackground.rodrigofernandez && (
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

            <div className={containerClasses} onClick={() => handleClick('dodi')}>
              <PlayerImage src={dodi} alt="dodi" />
              {showBackground.dodi && (
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

            <div className={containerClasses} onClick={() => handleClick('danielruiz')}>
              <PlayerImage src={danielruiz} alt="danielruiz" />
              {showBackground.danielruiz && (
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

            <div className={containerClasses} onClick={() => handleClick('lucaslima')}>
              <PlayerImage src={lucaslima} alt="lucaslima" />
              {showBackground.lucaslima && (
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

            <div className={containerClasses} onClick={() => handleClick('soteldo')}>
              <PlayerImage src={soteldo} alt="soteldo" />
              {showBackground.soteldo && (
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

            <div className={containerClasses} onClick={() => handleClick('mezenga')}>
              <PlayerImage src={mezenga} alt="mezenga" />
              {showBackground.mezenga && (
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

            <div className={containerClasses} onClick={() => handleClick('deivid')}>
              <PlayerImage src={deivid} alt="deivid" />
              {showBackground.deivid && (
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

            <div className={containerClasses} onClick={() => handleClick('marcosleonardo')}>
              <PlayerImage src={marcosleonardo} alt="marcosleonardo" />
              {showBackground.marcosleonardo && (
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

            <div className={containerClasses} onClick={() => handleClick('angelo')}>
              <PlayerImage src={angelo} alt="angelo" />
              {showBackground.angelo && (
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

            <div className={containerClasses} onClick={() => handleClick('mendoza')}>
              <PlayerImage src={mendoza} alt="mendoza" />
              {showBackground.mendoza && (
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
