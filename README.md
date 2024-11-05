# Tweet App

Este é um projeto de **aplicativo de feed social** construído com **React**, **Vite** e **Tailwind CSS**. O Tweet App simula um feed de tweets, onde cada post inclui avatares e imagens aleatórias, criando uma experiência dinâmica e interativa para o usuário.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criar interfaces de usuário.
- **Vite**: Ferramenta de build rápida, ideal para desenvolvimento frontend.
- **Tailwind CSS**: Framework CSS para estilização ágil com classes utilitárias.
- **CryptoJS**: Biblioteca para geração de hashes MD5, usada na criação de avatares únicos.
- **Font Awesome**: Biblioteca de ícones para enriquecer as interações visuais do aplicativo.

## Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** instalados para seguir com a instalação.

## Instalação:
 **Clone o repositório:**
   ```bash
   git clone https://github.com/usuario/tweet-app.git
   cd tweet-app
```
## Funções Utilitárias
O projeto utiliza funções utilitárias para gerar avatares e imagens aleatórias, além de ícones que facilitam a interação visual.

## Geração de Avatares
A função getAvatar gera avatares baseados no hash MD5 do email do usuário. Dessa forma, cada usuário possui um avatar exclusivo

```bash
import CryptoJS from "crypto-js";

export const getAvatar = (email) => {
    const hash = CryptoJS.MD5(email.trim().toLowerCase());
    return `https://www.gravatar.com/avatar/${hash}?s=40&d=identicon`;
};
```

## Imagens Aleatórias
A função getRandomImage cria links para imagens aleatórias do serviço Picsum Photos, ideal para simular imagens de posts:

```bash
export const getRandomImage = () => {
    return `https://picsum.photos/600/400?random=${Math.random()}`;
};
```

## Ícones
Para melhorar a interação com o usuário, o projeto inclui ícones do Font Awesome para ilustrar ações de postagem, localização, mídia e reações:

```bash
import { faCalendarAlt, faChartBar, faFilm, faImage, faMapMarkedAlt, faSmile } from "@fortawesome/free-solid-svg-icons";
```

## Estilização e Customização
O Tailwind CSS facilita a criação de layouts responsivos e de rápida estilização. As configurações no `tailwind.config.js` permitem ajustes personalizados nas classes de utilitários, garantindo uma experiência visual fluida e moderna.