# Docker Containers - Introdução

### Instalação.

- Atualizando pacotes antes da instalação.
```
sudo apt-get upgrade
```

- Habilitando HTTPS para o apt
```
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

- Adcicionando chave de acesso ao repositório remoto.
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

- Adicionando o repositório.
```
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

- Instalando Docker Engine.
```
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

- Adicionando um usuário ao grupo de usuários docker

1. Para evitar o uso de sudo em todos os comandos:
```
sudo groupadd docker
```

2. Para adicionar usuário ao grupo novo:
```
sudo usermod -aG docker $USER
```

3. Para fazer logout e login:
```
newgrp docker
```

- Iniciando Daemon do Docker

1. Para consultar status:
```
sudo systemctl status docker
```
* Caso o parâmetro 'Active' estiver como stop/waiting:
```
sudo systemctl start docker
```

2. Habilitando o deamon do Docker para que seja iniciando durante o boot:
```
sudo systemctl enable docker
```

- Validando a instalação

```
docker run hello-world
```
