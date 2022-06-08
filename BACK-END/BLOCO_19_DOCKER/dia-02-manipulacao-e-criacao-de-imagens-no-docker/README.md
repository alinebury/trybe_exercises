# Manipulação e Criação de Imagens no Docker.

### COMANDOS BÁSICOS.

- Listar todas as imagens.

  `docker images`

- Listar todos os containers.

  `docker ps -a`

- Remover imagem.

  `docker rmi -f <IMAGE ID>`

- Download da imagem.

  `docker pull <IMAGE>`

### MAPEAMENTO DE PORTAS.

- `-P` é utilizando para que o docker faça um mapeamento de portas automático para acesso ao container.

  `docker run -d -P <IMAGE>`

- `-p` é utilizando para específicar a porta.

  `docker run -d -p <PORTA_LOCAL><PORTA_DO_CONTÊINER>`

### DOCKERFILE COMANDOS.

- Para criar uma nova imagem.

  `FROM <IMAGE>`

- Definir um 'diretório de trabalho' que será utilizado como base para execução dos comandos.

  `WORKDIR /diretório/que/será/utilizado`

- Copiar diretórios e/ou arquivos para dentro da imagem.

  `COPY ["arquivo_1, arquivo_2", "diretório_destino"]`

- Executar lista de comando durante a criação da imagem.

  `RUN npm install`

- Porta que será utilizada pela aplicação dentro do container.

  `EXPOSE <PORTA_DO_APP_NO_CONTAINER>`

- Especifica um comando que sempre será executado quando o contêiner for iniciado

  `ENTRYPOINT ["/bin/echo", "Hello World!"]`

  Obs:Ao definir um entrypoint, alteramos o comportamento do CMD que, ao ser utilizado, irá rodar como base para o comando definido pelo entrypoint apenas como "parâmetros adicionais" à ele

- Executar quando o contêiner é iniciado.

  `CMD ["Hello World"]` ou `CMD npm start`

- Build e executar o contêiner.

  `docker build [OPTIONS] PATH | URL`
