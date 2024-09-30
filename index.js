const form = document.querySelector('#user-form');
const card = document.querySelector('.flip-card-inner');
const tryAgainBtn = document.querySelector("#tryAgain");
const userImage = document.querySelector('#classImage');
const userHistory = document.querySelector('#userText');

const maleKnightStories = [
    "Treinado desde jovem, ele empunha a espada como herança de seu pai, jurando proteger o reino.",
    "Sobreviveu a uma emboscada na floresta, prometendo vingança contra os bandidos que devastaram sua aldeia.",
    "Um guerreiro solitário, exilado por um erro de julgamento, agora busca redenção nas batalhas.",
    "Seu escudo carrega as cicatrizes de batalhas antigas, cada uma representando uma vitória sofrida.",
    "Foi nomeado cavaleiro após salvar o rei de uma conspiração, mas o peso do dever o assombra.",
    "Desertou do exército para proteger sua família, mas foi forçado a retornar quando a guerra chegou à sua porta.",
    "Seu juramento ao reino nunca vacilou, mesmo quando seu coração foi destruído por uma traição inesperada.",
    "Após uma batalha sangrenta, decidiu abandonar a guerra, mas o chamado à luta sempre o encontra."
];

const femaleKnightStories = [
    "Treinada pelos melhores cavaleiros, ela carrega a responsabilidade de defender o trono com honra.",
    "Cresceu ouvindo histórias de heroínas antigas, agora forja seu próprio caminho no campo de batalha.",
    "Após vencer um torneio, tornou-se líder dos exércitos reais, mas carrega segredos que podem abalar o reino.",
    "Durante um cerco mortal, manteve sua promessa de proteger os civis, ganhando o respeito do reino.",
    "Sua armadura reluzente esconde as cicatrizes de batalhas passadas e o peso de escolhas difíceis.",
    "Deixou sua vila para escapar de um destino simples, agora é conhecida como a mais corajosa entre os cavaleiros.",
    "Foi desafiada por seus pares por ser mulher, mas provou ser mais forte e determinada que qualquer um.",
    "Em uma missão de paz, foi traída por aliados, e agora busca justiça, não vingança."
];

const maleArcherStories = [
    "Criado nas florestas, suas flechas nunca erram o alvo, caçando tanto animais quanto inimigos.",
    "Perdeu um olho em uma batalha, mas seu instinto aprimorado o tornou ainda mais letal.",
    "Após ver sua vila queimada, jurou usar suas habilidades para proteger os indefesos.",
    "Envolvido em um confronto de facções, suas habilidades com o arco o tornaram um mercenário procurado.",
    "Vive isolado nas montanhas, apenas sua lealdade ao rei o traz de volta à civilização para batalhas.",
    "Acompanha os cavaleiros do reino, eliminando ameaças à distância antes de qualquer confronto corpo a corpo.",
    "Seus sentidos aguçados captam os mínimos movimentos, fazendo dele o arqueiro mais perigoso do reino.",
    "Guiado por seu código de honra, nunca atira em um inimigo desarmado, mesmo sob pressão."
];

const femaleArcherStories = [
    "Uma caçadora solitária, protegendo as florestas e vilarejos de ameaças com suas flechas precisas.",
    "Treinada desde jovem para ser a melhor, agora é procurada pelos maiores reinos como mestre arqueira.",
    "Após escapar de uma emboscada, usa suas habilidades para garantir que ninguém sofra o mesmo destino.",
    "Sua precisão é lendária, e suas flechas são tão rápidas quanto o vento que a guia.",
    "Na guerra, suas flechas são a primeira e última coisa que os inimigos veem antes da derrota.",
    "Guiada por uma antiga profecia, suas habilidades com o arco estão ligadas a um destino maior.",
    "Defende o reino das sombras, sempre atacando de longe antes que qualquer ameaça chegue perto.",
    "Após perder a família em uma invasão, se dedicou a ser a melhor arqueira que o reino já viu."
];

const maleRogueStories = [
    "Um ladrão habilidoso, conhecido por sua habilidade de desaparecer nas sombras, jamais visto por seus inimigos.",
    "Cresceu nas ruas, onde aprendeu que furtividade e astúcia são as melhores armas contra os poderosos.",
    "Caçado por traição, usa sua habilidade com lâminas e furtividade para se manter um passo à frente.",
    "Contratado como espião, sabe que a informação é a arma mais poderosa em tempos de guerra.",
    "Depois de anos no submundo, agora usa suas habilidades para roubar dos ricos e redistribuir aos pobres.",
    "Um mestre em disfarces, é capaz de se infiltrar em qualquer lugar sem deixar rastro.",
    "Sua lâmina é rápida e precisa, nunca falhando em sua missão de eliminar alvos silenciosamente.",
    "Vive nas sombras, nunca se apegando a ninguém, mas sempre cumprindo suas promessas."
];

const femaleRogueStories = [
    "Cresceu como uma órfã nas ruas, onde suas habilidades furtivas a mantiveram viva.",
    "Sua fama como a melhor ladra do reino se espalhou, mas ninguém conhece seu verdadeiro rosto.",
    "Foi traída por seus parceiros no crime e agora busca vingança, uma faca de cada vez.",
    "Suas habilidades furtivas são incomparáveis, permitindo que ela entre e saia de qualquer lugar sem ser vista.",
    "Sempre em busca do próximo grande roubo, sua vida é movida por adrenalina e risco.",
    "Após anos fugindo de seus inimigos, se tornou uma assassina contratada, letal e sem misericórdia.",
    "Conhecida por suas lâminas envenenadas, sempre trabalha sozinha e nunca deixa rastros.",
    "Movida pela necessidade de justiça, rouba dos corruptos para entregar o que é certo aos necessitados."
];

const maleMageStories = [
    "Estudioso desde jovem, seus poderes mágicos são vastos, mas sua curiosidade é ainda maior.",
    "Após um ritual fracassado, seu corpo foi parcialmente corrompido pela magia, mas seus poderes só cresceram.",
    "A magia o isolou de tudo e todos, mas ele acredita que o conhecimento é mais importante que qualquer laço.",
    "Um prodígio da magia, tornou-se conselheiro real aos 20 anos, mas guarda segredos antigos e perigosos.",
    "Descobriu uma antiga magia proibida que lhe concedeu poderes imensos, mas também uma maldição implacável.",
    "Perdeu um amigo para a magia negra, agora luta para destruir qualquer vestígio desse poder maligno.",
    "Exilado por praticar artes proibidas, agora busca vingança contra o reino que o baniu.",
    "O poder que ele controla é vasto, mas ele sabe que um pequeno erro pode significar sua destruição."
];

const femaleMageStories = [
    "Treinada nos segredos da magia antiga, seu domínio sobre os elementos é incomparável.",
    "Após um ritual poderoso, descobriu que seu verdadeiro potencial mágico estava adormecido por gerações.",
    "Seu mestre foi assassinado por praticantes de magia negra, agora busca vingar sua morte.",
    "Estuda os antigos grimórios, em busca de poder e conhecimento esquecidos por gerações.",
    "Após ser rejeitada pela ordem dos magos, decidiu trilhar seu próprio caminho na magia.",
    "Seu poder mágico cresce a cada dia, mas ela teme perder o controle sobre as forças que invoca.",
    "Descobriu uma conexão profunda com as forças naturais, controlando os elementos com uma precisão mortal.",
    "Após um feitiço descontrolado destruir sua vila, ela busca redenção e controle total sobre sua magia."
];

window.addEventListener('load', function() {
    document.body.classList.add('loaded'); // Adiciona a classe 'loaded' para aplicar a animação
    form.reset();
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    organizarPersonagem();
    girarCarta();
});

tryAgainBtn.addEventListener('click', function(event) {
    location.reload();
});

const user = {};

function girarCarta() {
    if (!card.classList.contains("reveal-card")) {
        console.log("não tem reveal card");
        card.classList.add('reveal-card'); // Adiciona a classe "reveal-card"
    } else {
        return; // Se a classe já estiver presente, sai da função
    }
}

function organizarPersonagem() {
    console.log(userImage);
    console.log(userHistory);

    const formData = new FormData(form);

    formData.forEach((value, key) => {
        if (key === "name" || key === "class" || key === "gender") {
            user[key] = value;
        }
    });

    console.log(`Nome: ${user.name}, Class: ${user.class}, Gender: ${user.gender}`);
    const name = user.name;
    const classs = user.class;
    const gender = user.gender;
    console.log(`Nome: ${name}, Class: ${classs}, Gender: ${gender}`);

    if (classs == 'knight' && gender == 'masc') {
        const randomInt = Math.floor(Math.random() * maleKnightStories.length);
        userHistory.innerHTML = `História: ${maleKnightStories[randomInt]}`;
        userImage.src = "./resources/classes/male classes/cavaleiro 2.jpg"; // Atualiza a imagem
    } else if (classs == 'knight' && gender == 'Femi') {
        const randomInt = Math.floor(Math.random() * femaleKnightStories.length);
        userHistory.innerHTML = `História: ${femaleKnightStories[randomInt]}`;
        userImage.src = "./resources/classes/female classes/cavaleira 2.jpg"; // Atualiza a imagem
    } else if (classs == 'archer' && gender == 'masc') {
        const randomInt = Math.floor(Math.random() * maleArcherStories.length);
        userHistory.innerHTML = `História: ${maleArcherStories[randomInt]}`;
        userImage.src = "./resources/classes/male classes/arqueiro 4.jpg"; // Atualiza a imagem
    } else if (classs == 'archer' && gender == 'Femi') {
        const randomInt = Math.floor(Math.random() * femaleArcherStories.length);
        userHistory.innerHTML = `História: ${femaleArcherStories[randomInt]}`;
        userImage.src = "./resources/classes/female classes/arqueira 4.jpg"; // Atualiza a imagem
    } else if (classs == 'rogue' && gender == 'masc') {
        const randomInt = Math.floor(Math.random() * maleRogueStories.length);
        userHistory.innerHTML = `História: ${maleRogueStories[randomInt]}`;
        userImage.src = "./resources/classes/male classes/rogue 3.jpg"; // Atualiza a imagem
    } else if (classs == 'rogue' && gender == 'Femi') {
        const randomInt = Math.floor(Math.random() * femaleRogueStories.length);
        userHistory.innerHTML = `História: ${femaleRogueStories[randomInt]}`;
        userImage.src = "./resources/classes/female classes/roga.jpg"; // Atualiza a imagem
    } else if (classs == 'mage' && gender == 'masc') {
        const randomInt = Math.floor(Math.random() * maleMageStories.length);
        userHistory.innerHTML = `História: ${maleMageStories[randomInt]}`;
        userImage.src = "./resources/classes/male classes/mage 2.jpg"; // Atualiza a imagem
    } else if (classs == 'mage' && gender == 'Femi') {
        const randomInt = Math.floor(Math.random() * femaleMageStories.length);
        userHistory.innerHTML = `História: ${femaleMageStories[randomInt]}`;
        userImage.src = "./resources/classes/female classes/maga.jpg"; // Atualiza a imagem
    }
}
