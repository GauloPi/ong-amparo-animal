/* --- 4.1. Meus Templates de Página --- */

// Pego o conteúdo da 'main' do 'index.html'
const templateHome = `
    <a href="#meu-modal" class="botao-modal">Quero Doar!</a>

        <div id="meu-modal" class="modal-overlay">

            <div class="modal-box">
                <a href="#" class="modal-fechar">&times;</a>

                <h2>Ajude Nossa Causa!</h2>
                <p>Sua contribuição é vital para continuarmos nosso trabalho. Cada doação ajuda um animal a
                    recomeçar.</p>
                <p style="margin-top: 16px;"><strong>Chave PIX (CNPJ):</strong></p>
                <p style="font-size: 1.2rem; font-weight: bold;">12.345.678/0001-95</p>

                <a href="#toast-obrigado" class="botao-modal" style="margin-top: 24px;">Fechar</a>
            </div>

        </div>

        <div id="toast-obrigado" class="toast toast-sucesso">
            <strong>Obrigado!</strong> Toda ajuda é bem-vinda.
        </div>

        <h1 class="titulos1">Bem-vindo à <strong>ONG Amparo Animal</strong></h1>

        <div class="alert alert-aviso">
            <strong>Aviso:</strong> Nossas feiras de adoção não ocorrerão neste fim de semana.
        </div>

        <h2>Sobre Nós</h2>
        <h3>Missão</h3>
        <p>Promover o bem-estar e a dignidade dos animais em situação de rua, oferecendo resgate, cuidados veterinários,
            abrigo temporário e encaminhamento para adoção responsável.</p>
        <h3>Visão</h3>
        <p>Ser referência na proteção animal, construindo uma sociedade mais consciente, empática e comprometida com a
            vida de todos os seres.</p>
        <h3>Valores</h3>
        <ul>
            <li><strong>Respeito à vida</strong>: Cada animal merece cuidado, carinho e proteção.</li>
            <li><strong>Compromisso</strong>: Atuamos com responsabilidade e dedicação em cada resgate.</li>
            <li><strong>Transparência</strong>: Nossas ações são guiadas pela ética e pela confiança.</li>
            <li><strong>Educação</strong>: Acreditamos que a conscientização transforma realidades</li>
            <li><strong>Colaboração</strong>: Juntos somos mais fortes — voluntários, parceiros e comunidade.</li>
        </ul>
`;

// Pego o conteúdo da 'main' do 'projetos.html'
const templateProjetos = `
   <h1>Apoie Nossa Causa</h1>
        <section id="projetos">
            <h2>Nossos Projetos</h2>
            <article>
                <h3>Castração Solidária</h3>
                <picture>
                    <source srcset="img/vet.webp" type="image/webp">
                    <source srcset="img/vet.jpg" type="image/jpeg">
                    <img src="img/vet.jpg" alt="Gato sendo cuidado por veterinário." width="200">
                </picture>
                <p>Nosso projeto de castração solidária tem como objetivo reduzir o abandono e o sofrimento, promovendo
                    saúde e bem-estar para cães e gatos sem lar. Com o apoio da comunidade, oferecemos castrações
                    gratuitas ou a baixo custo, ajudando a construir um futuro mais digno para nossos peludos.
                </p>
                <div class="tag-container">
                    <span class="tag tag-primaria">Saúde</span>
                    <span class="tag tag-secundaria">Cães</span>
                    <span class="tag tag-secundaria">Gatos</span>
                </div>
            </article>
            <article>
                <h3>Feira de Adoção</h3>
                <picture>
                    <source srcset="img/feira.webp" type="image/webp">
                    <source srcset="img/feira.jpg" type="image/jpeg">
                    <img src="img/feira.jpg" alt="Gato sendo cuidado por veterinário." width="200">
                </picture>
                <p>Nossa ONG realiza feiras de adoção com muito carinho e responsabilidade, conectando animais
                    resgatados a famílias que buscam amor verdadeiro. Cada pet disponível passou por cuidados especiais
                    e está pronto para começar uma nova vida cheia de afeto.</p>
                <div class="tag-container">
                    <span class="tag tag-destaque">Adoção</span>
                    <span class="tag tag-secundaria">Cães</span>
                    <span class="tag tag-secundaria">Gatos</span>
                </div>
            </article>
        </section>

        <section id="voluntariado">
            <h2>Seja um Voluntário!</h2>
            <p>Dedicar algumas horas do seu tempo pode transformar a vida de um animal em situação de rua.
                Venha ser voluntário na Amparo Animal e faça parte dessa rede de amor, cuidado e esperança.
                Juntos, salvamos vidas.
            </p>
            <a href="cadastro.html">Clique aqui para se cadastrar!</a>
        </section>

        <section id="doacao">
            <h2>Como Doar?</h2>
            <p>Cada contribuição ajuda um animal a recomeçar.</p>
            <p>Chave PIX: 12.345.678/0001-95</p>
        </section>
`;

// Pego o conteúdo da 'main' do 'cadastro.html'
const templateCadastro = `
    <h1>Formulário de Cadastro de Voluntário</h1>
    <form action="#" method="post">
        <fieldset>
            <legend>Informações Pessoais</legend>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="CPF">CPF:</label>
            <input type="text" id="CPF" name="CPF" placeholder="123.456.789-00" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                maxlength="14" title="Digite um CPF no formato: 123.456.789-00" required>
            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" placeholder="(12)34567-8901"
                pattern="\\(\\d{2}\\)\\d{5}-\\d{4}" maxlength="14" title="Digite um telefone no formato: (12)34567-8901"
                required>
            <label for="dataNascimento">Data de nascimento:</label>
            <input type="date" id="dataNascimento" name="dataNascimento" required>
        </fieldset>
        <fieldset>
            <legend>Endereço</legend>
            <label for="logradouro">Logradouro:</label>
            <input type="text" id="logradouro" name="logradouro" required>
            <label for="numero">Numero:</label>
            <input type="number" id="numero" name="numero">
            <label for="complemento">Complemento:</label>
            <input type="text" id="complemento" name="complemento">
            <label for="bairro">Bairro:</label>
            <input type="text" id="bairro" name="bairro" required>
            <label for="cep">CEP:</label>
            <input type="text" id="cep" name="cep" placeholder="12345-678" pattern="\\d{5}-\\d{3}" maxlength="9"
                title="Digite o CEP no formato apontado 12345-678" required>
            <div class="grid-container-12">
                <div class="col-md-6">
                    <label for="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" required>
                </div>
                <div class="col-md-6">
                    <label for="estado">Estado:</label>
                    <input type="text" id="estado" name="estado" required>
                </div>
            </div>
        </fieldset>
        <button type="submit" disabled>Enviar</button>
    </form>
`;

/* --- 4.1. Meus Templates de Página --- */
// (Todo o código dos templates que fizemos acima)
// const templateHome = `...`;
// const templateProjetos = `...`;
// const templateCadastro = `...`;


/* --- 4.2. Minhas Funções de "Setup" --- */

// (Aqui eu coloco o código do Passo 2 dentro de uma função)
function setupMenuHamburguer() {
    /* --- 2. Menu Hambúrguer (Mobile) --- */
    const btnMenu = document.querySelector('.menu-hamburguer');
    const navMenu = document.querySelector('header nav');

    if (btnMenu && navMenu) {
        btnMenu.addEventListener('click', () => {
            navMenu.classList.toggle('is-active');
        });
    }
}

// (Aqui eu coloco o código do Passo 3 dentro de uma função)
function setupValidacaoFormulario() {
    /* --- 3. Validação do Formulário de Cadastro --- */
    const formCadastro = document.querySelector('form');

    if (formCadastro) {
        const submitButton = formCadastro.querySelector('button[type="submit"]');
        const requiredFields = formCadastro.querySelectorAll('[required]');

        function validarFormulario() {
            let formularioEstaValido = true;
            requiredFields.forEach(campo => {
                if (!campo.checkValidity()) {
                    formularioEstaValido = false;
                }
            });
            submitButton.disabled = !formularioEstaValido;
        }

        requiredFields.forEach(campo => {
            campo.addEventListener('input', validarFormulario);
            campo.addEventListener('change', validarFormulario);
        });

        validarFormulario(); // Rodo uma vez
    }
}

/* --- 4.3. Meu Roteador SPA Básico --- */

// Pego o "miolo" (a tag <main>) onde vou injetar o conteúdo
const miolo = document.querySelector('main');

// Pego TODOS os links da minha navegação principal
const linksNavegacao = document.querySelectorAll('header nav a');

// Crio a função que "carrega" o conteúdo
function carregarConteudo(href) {

    // Se o link for 'index.html'...
    if (href.includes('index.html')) {
        miolo.innerHTML = templateHome;

        // Se o link for 'projetos.html'...
    } else if (href.includes('projetos.html')) {
        miolo.innerHTML = templateProjetos;

        // Se o link for 'cadastro.html'...
    } else if (href.includes('cadastro.html')) {
        miolo.innerHTML = templateCadastro;

        // !!! IMPORTANTE !!!
        // Como eu acabei de carregar o formulário, 
        // eu preciso "rodar" a função de validação DE NOVO!
        setupValidacaoFormulario();
    }
}

// Adiciono o "ouvidor" de clique para CADA link
linksNavegacao.forEach(link => {

    // Ignoro os links do submenu (eles são âncoras)
    if (!link.closest('.submenu')) {

        link.addEventListener('click', (evento) => {
            // 1. IMPEDE o navegador de recarregar a página!
            evento.preventDefault();

            // 2. Pego o 'href' do link que eu cliquei (ex: "projetos.html")
            const href = link.getAttribute('href');

            // 3. Chamo minha função para carregar o conteúdo
            carregarConteudo(href);
        });
    }
});


/* --- 5. Inicialização --- */
// Rodo minhas funções uma vez quando a página (index.html) carrega
setupMenuHamburguer();
// (Não preciso rodar a validação aqui, pois a home não tem form)