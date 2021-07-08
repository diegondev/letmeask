import { useHistory } from 'react-router-dom';
import { Button } from '../components/Button';

import { auth, firebase } from '../services/firebase';

import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

export function Home() {
    const history = useHistory();

    function handleCreateRoom() {
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider)

        history.push('/rooms/new');
    }

    function signIn() {

    }

    return (
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Você pode criar salas de Q&amp;A ao-vivo</strong>
                <p>Tire suas dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}