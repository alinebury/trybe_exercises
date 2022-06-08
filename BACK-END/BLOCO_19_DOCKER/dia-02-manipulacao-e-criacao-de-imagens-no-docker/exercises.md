1. Usar imagem 'cowsay' disponível no DockerHub.

    `docker container run cowsay Muuuh`

2. Crie um Dockerfile utilizando a imagem 'chuanwen/cowsay'.

    `FROM chuanwen/cowsay:latest`

3. Defina um 'ENTRYPOINT' para a execução do comando.

    `ENTRYPOINT ["/usr/games/cowsay"]`

4. Utilize 'CMD' para definir mensagem padrão.

    `CMD [ "#VQV Trybe" ]`

5. Gere uma 'build'

    `docker image build ./ -t cowsay`

6. Execute um novo container para testar.
    - Para rodar com a mensagem padrão:

      `docker container run cowsay`

    - Passar um parâmetro após o comando:

      `docker container run cowsay Go Trybe!`

    - Comando para rodar a frase '#VQV TRYBE' com um leão:

      `docker container run cowsay -f moofasa "#VQV TRYBE"`

    - Lista com outros animais:

      `docker container run cowsay -l`