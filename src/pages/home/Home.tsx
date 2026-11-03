import { useNavigate } from 'react-router-dom';
import { ButtonPhoto } from '../../components/buttonPhoto/ButtonPhoto';
import { ButtonRealistc } from "../../components/buttonRealistc/ButtonRealistc";
import styles from "./Home.module.css";

export default function Home(){
  const navigation = useNavigate();
    return(
        <>
        <div className={styles["page"]}>
            <div className={styles["header-container"]}>
                    <div className={styles["banner"]}>
                        <div className={styles["header-photos"]}>
                            <div className={styles["fundo"]}>
                                <ButtonPhoto urlImagem="/assets/perfgithub.jpg" onClick={() => console.log("ButtonPhoto clicked")} />
                            </div>
                            <div className={styles["meio"]}>
                                <ButtonPhoto urlImagem="/assets/gindotra.jpg" onClick={() => console.log("ButtonPhoto clicked")} />
                            </div>
                            <div className={styles["topo"]}>
                                <ButtonPhoto urlImagem="/assets/gindotra.jpg" onClick={() => console.log("ButtonPhoto clicked")} />
                            </div> 
                        </div>    
                    </div>
            </div>
            <div className={styles["header-buttons"]}>
                <ButtonRealistc texto="Web" onClick={() => console.log("Button2 clicked")}></ButtonRealistc>
                <ButtonRealistc texto="Web" onClick={() => navigation('/projects/web')}/>
                <ButtonRealistc texto="Mob" onClick={() => navigation('/projects/mob')}/>
            </div>

      
        </div>
        </>
    )
}