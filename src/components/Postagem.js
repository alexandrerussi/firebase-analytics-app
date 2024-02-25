import React, { useEffect } from 'react';
import { analytics, logEvent } from '../firebase'; // Certifique-se de que analytics e logEvent são importados corretamente

const Postagem = ({ titulo, conteudo }) => {
    useEffect(() => {
        // Registra uma visualização de postagem no Firebase Analytics
        if (analytics) {
          logEvent(analytics, 'visualizacao_postagem', {
              nome: titulo
          });
        }
    }, [titulo]);

    // Função para simular o compartilhamento e registrar no Firebase Analytics
    const handleCompartilhar = () => {
        // Simula uma ação de compartilhamento
        console.log("Postagem compartilhada!");

        // Registra o evento de clique no botão de compartilhar no Firebase Analytics
        if (analytics) {
          logEvent(analytics, 'compartilhamento_postagem', {
              nome: titulo
          });
        }
    };

    return (
        <div>
            <h2>{titulo}</h2>
            <p>{conteudo}</p>
            {/* Botão de compartilhamento */}
            <button onClick={handleCompartilhar}>Compartilhar</button>
        </div>
    );
};

export default Postagem;
