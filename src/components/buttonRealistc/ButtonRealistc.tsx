import React, { useMemo } from 'react';
import styles from './ButtonRealistc.module.css';

// Importa o áudio local da pasta assets

interface ButtonRealistcProps {
  texto: string;
  onClick?: () => void;
}

export const ButtonRealistc: React.FC<ButtonRealistcProps> = ({ texto, onClick }) => {
  
  // O Vite transforma o 'somClique' importado na URL estática correta do build
  const audio = useMemo(() => new Audio("/assets/lightningbulb-spacebar-click-keyboard-199448.mp3"), []);

  const handleInteracao = () => {
    audio.currentTime = 0;
    audio.play().catch(() => {});
    
    if (onClick) onClick();
  };

  return (
    <button className={styles["btn-realistic"]} onClick={handleInteracao}>
      {texto}
    </button>
  );
};
