import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const LongText = () => {
    return (
        <div className="LongText">
            <div className="mt-4">
                <h4>Possivel gerir um negocio de sucesso sem website?</h4>
                <p>
                    Talvez... Talvez não. É óbvio que você pode executar um negócio sem um site. Algumas empresas
                    ainda fazem isso. Mas
                    investir em um site bem desenhado e bem pensado pode definitivamente ajudar a tornar seu negócio
                    mais bem sucedido.
                    
                    Mesmo que você tenha uma empresa muito pequena e seus produtos ou serviços não sejam vendidos
                    online, provavelmente
                    seria benéfico para a sua empresa ter um site. Isso não significa que você precisa colocar todos
                    os seus produtos ou
                    serviços online. Significa que algum tipo de presença na web é bom para os negócios.
                </p>
            </div>
            <div>
                <p>
                    Ter uma presença web de aparência profissional na Internet é bom para seus clientes existentes,
                    potenciais clientes,
                    funcionários e parceiros. Um site com aparência inteligente permitirá que todos os visitantes
                    saibam mais sobre seu
                    negócio e mais sobre seus produtos ou serviços. Os elementos básicos de um site profissional
                    incluem:
                    <ul>
                        <li>Nome do negócio e um logótipo para que os visitantes saibam que chegaram à sua empresa</li>
                        <li>Visual atraente que representa o seu negócio e é atraente para seus clientes</li>
                        <li>Navegação lógica para que os visitantes possam encontrar o que estão procurando</li>
                        <li>Bom conteúdo que é informativo e fácil de ler</li>
                        <li>Informações de contacto, incluindo telefone, endereço e e-mail</li>
                    </ul>
                </p>
            </div>
            <div>
                <p>
                    Adicionar o horário da loja e um mapa básico ajudará o visitante que deseja trabalhar com você
                    pessoalmente ou com o
                    visitante que está na vizinhança, mas não consegue encontrar o pedaço de papel com seu endereço
                    nele. Além disso, outra razão para
                    Bem sucedido a empresa precisa de um site e capacidade móvel. Se o seu site estiver configurado
                    para ser amigável para dispositivos
                    móveis (ou mesmo se não for) você terá uma chance melhor de capturar a atenção dos clientes
                    móveis.
                    
                    Então, se um site de qualidade ajuda você a fazer uma boa primeira impressão com um novo
                    visitante ou torna mais fácil
                    para visitantes existentes para fazer negócios com você, é provavelmente óbvio que ter uma
                    presença web eficaz só pode
                    fazer o seu negócio MAIS bem sucedido.
                    
                    Se você não tem um site ou qualquer tipo de Presença Online <Link to="services/contact">nós
                    podemos ajudar.</Link>
                </p>
            </div>
        </div>
    )
}


export default LongText;