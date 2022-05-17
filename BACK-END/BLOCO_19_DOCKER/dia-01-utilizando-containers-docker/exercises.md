1. Busque pela imagem da Distribuição Linux Debian. Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida.

`docker pull debian:stable-slim`

2. Após baixar a imagem, crie e execute um contêiner.

`docker container create -it debian:stable-slim`

3. Iniciando contêiner.

`docker container start ID`

4. Entrando no root do contêiner.

`docker container run -it debian:stable-slim`

4. Rode o comando `cat /etc/*-release`, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do contêiner.

`cat /etc/*-release`

```
PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"
```

5. Encerre o terminal.

`exit`

6. Verificando na lista de contêiners o contêiner criado.

`docker container ls -l`

7. Inicie o mesmo contêiner novamente, sem criar outro. Valide se ele está ativo na lista de contêiners.

`docker container start ID`

```
CONTAINER ID   IMAGE                COMMAND   CREATED          STATUS         PORTS     NAMES
9ba864812bac   debian:stable-slim   "bash"    11 minutes ago   Up 5 seconds             crazy_antonelli
```

8. Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do contêiner.
```
root@9ba864812bac:/# cat /etc/debian_version
11.3
```
9. Remova somente o contêiner criado para esse exercício.

`docker container rm ID
`
10. [BÔNUS] Crie e rode de modo interativo em modo 'Cleanup', a imagem andrius/ascii-patrol.

`docker run -it --rm andrius/ascii-patrol`

- Para apagar todos contêiners

`docker system prune -a --volumes`
