---
layout: default-br
title: "Everything: Pesquise Arquivos no Windows Instantaneamente (Alternativa Gratuita)"
description: "Cansado da lentidão do Windows Search? Conheça o Everything, a ferramenta gratuita que encontra qualquer arquivo no seu PC instantaneamente usando o MFT do NTFS."
permalink: /everything
date: 2025-09-14
author: Gabriel Hagui dos Santos
image: /assets/images/projects/everything.png
lang: pt-BR
tags: [Windows, Software, Produtividade, Ferramentas, Otimização, PC]
categories: [Software, Tutoriais]
---
Sabe aquele momento em que você precisa encontrar um PDF, um documento do Word ou uma imagem... Mas simplesmente não lembra onde salvou?
Aí, como último recurso, você apela pro velho amigo Windows Search, aquela barrinha da pesquisa no Windows Explorer que nunca foi lá muito confiável.

Você está com pressa. Sabe que aquele arquivo está em algum lugar. Abre o Explorer, digita o nome na busca com esperança no coração…

E então começa o ritual:
A barra verde de progresso avança lentamente. Você torce. Ela chega nos 95%… E simplesmente para.
O tempo passa. Nada aparece.
Ou pior, demora tanto que você desiste, fecha tudo e volta a procurar manualmente, pasta por pasta.

É nesse momento que você percebe:
O Windows Search não está te ajudando. Está te traindo.
## Everything, magia verdadeira.
Com o Everything instalado no PC, parece mágica, você encontra qualquer arquivo instantaneamente.
Juro! É verdade. Confia em mim.
Sim, instantaneamente mesmo. Nada de esperar barra verde, indexação lerda ou promessas vazias do Windows Search.

### Como o Everything é mais rápido que o próprio Windows?
O Windows Search Indexer é notoriamente mal otimizado: Ele faz varreduras periódicas e limita a indexação a apenas algumas pastas (como Documentos, Imagens, etc), e ainda assim, de forma lenta e pesada.

Já o Everything funciona de outro jeito: Ele aproveita um recurso do sistema de arquivos NTFS, que mantém uma estrutura chamado MFT (Master File Table), uma espécie de "catálogo" de todos os arquivos e diretórios.

O Everything acessa diretamente essa MFT e monitora eventos do sistema de arquivos. Sempre que um novo arquivo é criado, movido ou deletado, o Everything recebe essa informação em tempo real e atualiza seu banco de dados imediatamente.

Resultado? Pesquisas praticamente instantâneas
### Pesquisa por conteúdo
A partir da versão 1.5a, o Everything não apenas indexa nomes de arquivos e diretórios, mas também o conteúdo interno dos arquivos, como textos dentro de PDFs, documentos Word, arquivos .txt e mais.

Isso significa que você pode digitar um trecho do que está escrito dentro do arquivo, e o Everything encontra ele instantaneamente, como se fosse mágica.

Uma função que antes só existia (mal e porcamente) no Windows Search agora está disponível de forma rápida, leve e confiável no Everything.
### E o desempenho? Vai derreter meu PC da Xuxa?
> [!help] Pode até pensar:
*Ah, mas um programa que indexa tudo em tempo real deve ser pesado, né? Vai moer a CPU, comer RAM, travar tudo…*

Nada disso! O Everything é surpreendentemente leve.

Na minha experiência:
- Uso de CPU: Praticamente 0% a maior parte do tempo, sim, zero por cento!
- Uso de RAM: Entre 30 MB e 50 MB, mesmo com milhares de arquivos indexados.

Isso acontece porque ele é extremamente otimizado e se integra de forma inteligente ao sistema de arquivos NTFS, recebendo eventos do sistema em vez de ficar escaneando tudo o tempo todo como o Windows Search.

> *É tão leve que parece até mentira. Mas não é. Testa aí e vê com seus próprios olhos.*

### Flow Launcher: Melhor aliado do Everything!
Além do traidor Windows Search, tem também o Menu Iniciar, aquele outro “companheiro” que vive te decepcionando.

Você só quer abrir um aplicativo simples. Algo que você tem certeza que está instalado. Digita o nome ali, cheio de esperança…

E o que acontece?

Ele não encontra o app!

Ou pior: Te manda pra pesquisa do Bing, achando que você queria saber “O que é VLC” na internet, em vez de abrir logo o programa local.

😤 Como assim, Microsoft?

Com o Flow Launcher, acabou esse estresse:

Ele encontra qualquer app instalado em tempo real, sem demora, sem travar, sem Bing.

Basta apertar `Alt + Espaço` (ou até configurar pra abrir só com a tecla do Windows), digitar o nome do app e pronto: Abre na hora.

Lembra muito o Spotlight do macOS, rápido, direto e funcional.

E o melhor: o Flow Launcher integra nativamente com o Everything, permitindo pesquisar arquivos indexados quase instantaneamente.

Vou detalhar mais sobre o Flow Launcher numa página separada, porque vale muito a pena!

### Pesquisa avançada: Comandos úteis
O Everything é poderoso porque vai muito além de apenas buscar nomes de arquivos. Ele permite filtros e operadores avançados para refinar suas buscas com velocidade absurda.

#### 📁 1. Procurar por tipo de arquivo:
```
*.pdf
```
🔎 Isso encontra todos os arquivos PDF no sistema.

```
*.jpg | *.png
```
🔎 Isso encontra imagens JPEG e PNG com operador OR

#### 📌 2. Filtrar por nome do arquivo:
```
relatorio 2023
```
🔎 Mostra todos os arquivos com "relatorio" e "2023" no nome (não precisa estar junto).

```
name:relatorio
```
🔎 Mostra arquivos que começam com "relatorio".

#### 📂 3. Buscar em pastas específicas:
```
C:\Projetos\ *.docx
```
🔎 Busca por arquivos Word apenas dentro da pasta "Projetos".

#### ⏰ 4. Filtro por data:
```
dm:last3days
```
🔎 Mostra arquivos modificados nos últimos 3 dias.

```
dc:thismonth
```
🔎 Arquivos criados este mês.

#### 📐 5. Filtro por tamanho:
```
size:>100mb
```
🔎 Arquivos maiores que 100 MB.

```
size:<1mb *.mp4
```
🔎 Vídeos MP4 com menos de 1 MB.

#### ⚙️ 6. Comandos extras úteis:

```
audio:
```
🔎 Todos os arquivos de áudio (MP3, WAV, etc.)

```
video:
```
🔎 Todos os arquivos de vídeo.

```
dupe:
```
🔎 Mostra arquivos duplicados (mesmo nome e tamanho).

```
content:contrato
```
🔎 (Na versão 1.5a+) Encontra arquivos que contêm a palavra "contrato" no conteúdo.

#### 🧪 Combine tudo!
```
C:\Trabalhos\ *.pdf dm:thismonth size:>500kb
```
🔎 PDFs criados este mês na pasta "Trabalhos" com mais de 500 KB.

Saiba mais sobre comandos: [Acesse a página Searching da VoolTools](https://www.voidtools.com/support/everything/searching/)
