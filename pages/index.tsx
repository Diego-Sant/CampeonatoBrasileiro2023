import { useState } from 'react';

import Layout from '@/components/template/Layout'

import Image from 'next/image'
import Fundo from '@/public/jogadores/fundo.png'

import Tiquinho from '@/public/jogadores/tiquinho.png'
import Perri from '@/public/jogadores/perri.png'
import Gerson from '@/public/jogadores/gerson.png'
import Hulk from '@/public/jogadores/hulk.png'
import Marlon from '@/public/jogadores/marlon.png'
import Dudu from '@/public/jogadores/dudu.png'
import Luan from '@/public/jogadores/luan.png'
import Tinga from '@/public/jogadores/tinga.png'
import Ganso from '@/public/jogadores/ganso.png'
import LeoPereira from '@/public/jogadores/leopereira.png'
import Evangelista from '@/public/jogadores/evangelista.png'

interface ShowBackgroundState {
  perri: boolean;
  tiquinho: boolean;
  gerson: boolean;
  hulk: boolean;
  marlon: boolean;
  dudu: boolean;
  luan: boolean;
  tinga: boolean;
  ganso: boolean;
  leopereira: boolean;
  evangelista: boolean;
}

export default function Home() {
  const [showBackground, setShowBackground] = useState<ShowBackgroundState>({ perri: false, tiquinho: false, gerson: false, hulk: false, marlon: false, dudu: false, luan: false, tinga: false, ganso: false, leopereira: false, evangelista: false});

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
      <Layout title='Destaques do campeonato'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>

          <div className={containerClasses} onClick={() => handleClick('perri')}>
              <PlayerImage src={Perri} alt="perri" />
              {showBackground.perri && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex mb-2'>
                      <p className='mr-4'>Jogados: 12</p>
                      <p>Iniciou: 12</p>
                    </div>
                    <p>Gols sofridos por jogo: 0,6</p>
                    <p>Pênaltis defendidos: 0/1</p>
                    <p>Defesas por jogo: 4.3(88%)</p>
                    <p>Jogos sem sofrer gols: 7</p>
                    <p>Nota média: <span className='text-green-600'>7.51</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('marlon')}>
              <PlayerImage src={Marlon} alt="marlon" />
              {showBackground.marlon && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 12</p>
                      <p>Iniciou: 12</p>
                    </div>
                    <p>Gols: 2</p>
                    <p className='mb-2'>Assistências: 1</p>
                    <p>Grandes chances criadas: 2</p>
                    <p>Jogos sem sofrer gols: 4</p>
                    <p>Desarmes por jogo: 4.1</p>
                    <p>Passes decisivos por jogo: 2.4</p>
                    <p>Bolas longas: 3.6(48%)</p>
                    <p>Disputa de bola vencidas: 6.3</p>
                    <p>Nota média: <span className='text-green-600'>7.35</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('leopereira')}>
              <PlayerImage src={LeoPereira} alt="leopereira" />
              {showBackground.leopereira && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 11</p>
                    </div>
                    <p>Gols: 3</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 0</p>
                    <p>Jogos sem sofrer gols: 3</p>
                    <p>Desarmes por jogo: 1.6</p>
                    <p>Passes decisivos por jogo: 0.2</p>
                    <p>Bolas longas: 3.8(71%)</p>
                    <p>Disputa de bola vencidas: 4.3</p>
                    <p>Nota média: <span className='text-green-600'>7.22</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('luan')}>
              <PlayerImage src={Luan} alt="luan" />
              {showBackground.luan && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 11</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Jogos sem sofrer gols: 5</p>
                    <p>Desarmes por jogo: 2</p>
                    <p>Passes decisivos por jogo: 0.9</p>
                    <p>Bolas longas: 2.9(52%)</p>
                    <p>Disputa de bola vencidas: 6.8</p>
                    <p>Nota média: <span className='text-green-600'>7.25</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('tinga')}>
              <PlayerImage src={Tinga} alt="tinga" />
              {showBackground.tinga && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 9</p>
                      <p>Iniciou: 9</p>
                    </div>
                    <p>Gols: 1</p>
                    <p className='mb-2'>Assistências: 0</p>
                    <p>Interceptações por jogo: 1.3</p>
                    <p>Jogos sem sofrer gols: 3</p>
                    <p>Desarmes por jogo: 0.7</p>
                    <p>Cortes por jogo: 3.3</p>
                    <p>Erros defensivos: 0</p>
                    <p>Disputa de bola vencidas: 5.3</p>
                    <p>Nota média: <span className='text-green-600'>7.28</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('evangelista')}>
              <PlayerImage src={Evangelista} alt="evangelista" />
              {showBackground.evangelista && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 10</p>
                    </div>
                    <p>Gols: 0</p>
                    <p className='mb-2'>Assistências: 4</p>
                    <p>Grandes chances criadas: 3</p>
                    <p>Toques por jogo: 62.5</p>
                    <p>Dribles bem sucedidos: 0.6</p>
                    <p>Passes decisivos por jogo: 1.7</p>
                    <p>Bolas longas: 1.6(67%)</p>
                    <p>Disputa de bola vencidas: 6.8</p>
                    <p>Nota média: <span className='text-green-600'>7.19</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('gerson')}>
              <PlayerImage src={Gerson} alt="gerson" />
              {showBackground.gerson && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 8</p>
                    </div>
                    <p>Gols: 2</p>
                    <p className='mb-2'>Assistências: 6</p>
                    <p>Grandes chances criadas: 1</p>
                    <p>Toques por jogo: 72.9</p>
                    <p>Dribles bem sucedidos: 1.8</p>
                    <p>Passes decisivos por jogo: 2.4</p>
                    <p>Bolas longas: 2.6(78%)</p>
                    <p>Disputa de bola vencidas: 7.0</p>
                    <p>Nota média: <span className='text-green-600'>7.49</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('ganso')}>
              <PlayerImage src={Ganso} alt="ganso" />
              {showBackground.ganso && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 9</p>
                    </div>
                    <p>Gols: 3</p>
                    <p className='mb-2'>Assistências: 3</p>
                    <p>Grandes chances criadas: 2</p>
                    <p>Toques por jogo: 64.6</p>
                    <p>Dribles bem sucedidos: 0.7</p>
                    <p>Passes decisivos por jogo: 1.3</p>
                    <p>Bolas longas: 1.6(72%)</p>
                    <p>Disputa de bola vencidas: 3.4</p>
                    <p>Nota média: <span className='text-green-600'>7.24</span></p>
                  </div>
                  <Image src={Fundo} alt='Fundo' />
                </>
              )}
            </div>

            <div className={containerClasses} onClick={() => handleClick('dudu')}>
              <PlayerImage src={Dudu} alt="dudu" />
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

            <div className={containerClasses} onClick={() => handleClick('hulk')}>
              <PlayerImage src={Hulk} alt="hulk" />
              {showBackground.hulk && (
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

            <div className={containerClasses} onClick={() => handleClick('tiquinho')}>
              <PlayerImage src={Tiquinho} alt="tiquinho" />
              {showBackground.tiquinho && (
                <>
                  <div className="absolute flex flex-col justify-center items-center text-white">
                    <div className='flex'>
                      <p className='mr-4'>Jogados: 11</p>
                      <p>Iniciou: 10</p>
                    </div>
                    <p>Gols: 10</p>
                    <p className='mb-2'>Assistências: 3</p>
                    <p>Gols por jogo: 0.9</p>
                    <p>Finalizações por jogo: 3.4</p>
                    <p>Chutes certos por jogo: 1.3</p>
                    <p>Passes decisivos por jogo: 1.3</p>
                    <p>Impedimentos por jogo: 0.2</p>
                    <p>Grandes chances perdidas: 1</p>
                    <p>Nota média: <span className='text-green-600'>7.53</span></p>
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
