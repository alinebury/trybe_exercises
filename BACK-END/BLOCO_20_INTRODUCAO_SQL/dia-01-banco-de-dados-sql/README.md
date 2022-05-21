# Banco de dados - Introdução

### Instalando MySQL

```
sudo apt install mysql-server
```

### Verificando status da instalação

```
sudo systemctl status mysql
```
  - Caso o serviço esteja inativo:
    ```
    systemctl start mysq
    ```
  - Parar o serviço do MySQL:
    ```
    systemctl stop mysql
    ```

### Configurando a inicialização e senha do servidor MySQL

  - Desativar início automático para poupar memória RAM:
    ```
    sudo systemctl disable mysql
    ```
  - Definir senha:
    ```
     sudo mysql -u root -p
    ```
    ``` 
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sua_senha_aqui'; flush privileges;
    ```

### Instalando uma interface gráfica MySQL Workbench

  ```
  sudo apt install ./nome-do-arquivo
#ex no Ubuntu 20.04: sudo apt install ./mysql-workbench-community_8.0.21-1ubuntu20.04_amd64.deb
  ```
