import React, { useMemo } from 'react';
import styles from './ButtonPhoto.module.css';

interface ButtonPhotoProps {
    urlImagem: string;
    onClick?: () => void;
}

export const ButtonPhoto: React.FC<ButtonPhotoProps> = ({ urlImagem, onClick  }) => {

    const audio = useMemo(() => new Audio("/assets/lightningbulb-spacebar-click-keyboard-199448.mp3"), []);
    
    const handleInteracao = () => {
    audio.currentTime = 0;
    audio.play().catch(() => {});
    
    if (onClick) onClick();
  }; 

    return(
        <div className={styles["btn-photo"]} onClick={handleInteracao}>
             <img className={styles["photo"]} src={urlImagem} />
        </div>
    );
};