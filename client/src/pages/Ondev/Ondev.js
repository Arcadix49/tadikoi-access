import {FaSquareFull} from 'react-icons/fa'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react'
import axios from 'axios'
import './Ondev.css'

export const Ondev = () => {
    const[email, setEmail] = useState('');
    const[prenom, setPrenom] = useState('');
    const[nom, setNom] = useState('');
    const[nomEtablissement, setNomEtablissement] = useState('');
    const[telephone, setTelephone] = useState('');
    const[message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:9576/contact', {
            prenom,
            nom,
            nomEtablissement,
            email,
            telephone,
            message
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (

    <>

        <div className="green-bar"></div>
        <div className="desktop-wrapper">
        <div className="container-devel-pgs">
            <div className="logo-bloc">
                    <p className="once">site en cours de développement</p>
                </div>
            <div className="responsivelogo">
                <p className="text-intro-bis">Solution innovante de communication immédiate
                    entre les personnes entendantes et sourdes ou malentendantes afin de permettre un vrai dialogue en toute confidentialité dans les établissements recevant du public.</p>
                <img  className="resp-lg" src="/bglogo.png"/>

            </div>

        </div>
            <hr></hr>
            <section>
                <article className='intro'>
                <div className="text-intro">
                    <p> Solution innovante de communication immédiate
                        entre les personnes entendantes et sourdes ou malentendantes afin de permettre un vrai dialogue en toute confidentialité dans les établissements recevant du public.
                    </p>
                </div>
                </article>
            </section>
        <div className="wrapperresp wrapper">
            <section className='illust-content'>
                <article className='mic2'>
                    <img className='microim' src='/micro.jpg'/>
                    <ul>
                        <li><FontAwesomeIcon icon={faSquare} size="2xs"  size="2xs" style={{color: "#c83353",}} /><span>Une tablette avec le logiciel de traduction de conversation.</span></li>
                        <li><FontAwesomeIcon icon={faSquare} size="2xs"  size="2xs" style={{color: "#c83353",}} /><span>Deux microphones.</span></li>
                        <li><FontAwesomeIcon icon={faSquare} size="2xs"  size="2xs" style={{color: "#c83353",}} /><span>Un clavier intégré virtuel plus un clavier physique connectable par Bluetooth pour ceux qui ne peuvent pas s’exprimer oralement.</span></li>
                    </ul>
                </article>

                <article className='mic'>
                    <img className="medicim"src='/medic.jpg'/>
                    <ul>
                        <li><FontAwesomeIcon icon={faSquare} size="2xs"  size="2xs" style={{color: "#c83353",}} /><span>TADIKOI est une solution créée principalement pour les établissements recevant du public (hôpitaux, administrations, commerces...) et pour l'employeur dans le cadre de l'aménagement du poste de travail des salariés dans les entreprises ou administrations. L'employeur devient naturellement un véritable acteur d'intégration pour l'accessibilité.</span></li>
                        
                    </ul>
                 
                </article>
            </section>
        </div>
            <section className="form-area">
                <div className="write">
                    <p className="write-us"><span className="firstw">Écrivez-nous</span><br></br>et nous vous contacterons <br></br>dans les meilleurs délai</p>
                </div>
                <div className="triangle"></div>
                <div className="wrapper">
                <div className="cont-form">
                    <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-items">
                            <input onChange={(e) => setPrenom(e.target.value)} placeholder="Prénom"  type="text" name="prenom" required/>
                            <input onChange={(e) => setNom(e.target.value)}placeholder="Nom" type="text" name="nom"/>
                        </div>
                        <input onChange={(e) => setNomEtablissement(e.target.value)} className="full-sz red-asterisk" placeholder="Nom de l'établissement" type="text" name="nomEtablissement"/>
                        <input onChange={(e) => setEmail(e.target.value)} className="full-sz" placeholder="E-mail" type="text" name="email"/>
                        <input onChange={(e) => setTelephone(e.target.value)} className="full-sz" placeholder="Téléphone" type="number" name="telephone"/>
                        <textarea onChange={(e) => setMessage(e.target.value)} className="full-sz" placeholder="Votre message :" type="message" name="message"/>
                        <button className="submit-btn" type="submit">ENVOYER</button>
                    </form>
                    </div>
                </div>
                    </div>
            </section>

            <footer className="footer">
                <h2>tadikoiaccessibilite@gmail.com</h2>
                <FaSquareFull style={{color: "#c83353",}}/>
                <h2>Téléphone: 06 73 07 13 56</h2>
                <img className='logos' src="/facebook.png"/>
                <img className='logos' src="/insta.png"/>
            </footer>
        </div>
     </>
    )
}