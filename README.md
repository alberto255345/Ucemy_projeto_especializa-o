## Uecemy: Plataforma de Cursos Online Baseada em Microsserviços 🎬

**Este repositório contém o código fonte e documentação do projeto da disciplina de Arquitetura Orientada a Microsserviços da Especialização em Engenharia de Software com DevOps da Universidade Estadual do Ceará (UECE).**

## Descrição do Projeto 📖

Uecemy é uma plataforma de cursos online fictícia, inspirada na Udemy, que demonstra a aplicação prática de arquitetura de microsserviços. O projeto simula o funcionamento de um sistema real, permitindo o cadastro de usuários, busca e compra de cursos, e acesso ao conteúdo das aulas.

## Arquitetura 🏗️

A aplicação é composta por quatro microsserviços principais e outros componentes auxiliares, como ilustrado no diagrama abaixo:

```
 +-----------------------+    +-----------------------+
 |    Microsserviço      |    |    Microsserviço      |
 |     de Usuários       |    |      de Cursos       |
 +-----------------------+    +-----------------------+
             |                           |
             |                           |
             |                           |
 +-----------------------+    +-----------------------+
 |    Microsserviço      |    |    Microsserviço      |
 |    de Pagamento       |    |     de Streaming     |
 +-----------------------+    +-----------------------+
             |                           |
             |                           |
             |                           |
 +-----------------------+    +-----------------------+
 |    Message Broker     |    |      API Gateway      |
 +-----------------------+    +-----------------------+
             |                           |
             |                           |
             |                           |
 +-----------------------+
 |     Config Server     |
 +-----------------------+
```

**Microsserviços de Negócio:**

* **Usuários:** Gerencia o cadastro de usuários, login e a lista de cursos adquiridos.
* **Cursos:** Gerencia o catálogo de cursos, incluindo informações como título, descrição, preço e lista de aulas.
* **Streaming:** Gerencia os recursos de mídia das aulas (vídeos, textos, etc.).
* **Pagamentos:** Processa as compras de cursos.

**Microsserviços de Suporte:**

* **Service Discovery:** Permite que os microsserviços se encontrem na rede.
* **API Gateway:** Rotea as requisições para o microsserviço correto e oferece uma interface única para o frontend.
* **Config Server:** Centraliza as configurações comuns aos microsserviços.

**Outros Componentes:**

* **Message Broker (RabbitMQ):** Permite a comunicação assíncrona entre os microsserviços, especialmente para notificações de compra de cursos.

## Tecnologias Utilizadas 💻

* **Linguagem de Programação:** [Linguagem utilizada - Ex: Java]
* **Framework:** [Framework utilizado - Ex: Spring Boot]
* **Banco de Dados:** [Banco de dados utilizado - Ex: PostgreSQL, MySQL]
* **Mensageria:** RabbitMQ
* **Service Discovery:** [Ferramenta utilizada - Ex: Eureka, Consul]
* **API Gateway:** [Ferramenta utilizada - Ex: Spring Cloud Gateway]
* **Config Server:** Spring Cloud Config Server
* **Logging e Tracing:** OpenTelemetry, Jaeger
* **Observabilidade:** Prometheus, Grafana
* **Frontend (opcional):** [Tecnologia utilizada - Ex: Angular, React, Vue.js]

## Funcionalidades Implementadas 🚀

* Cadastro de usuários
* Busca de cursos por título e/ou descrição
* Visualização de detalhes do curso (descrição, autor, aulas)
* Compra de cursos (simulação)
* Acesso ao conteúdo das aulas (vídeos, textos, etc.)
* Mensageria para notificação de compra de cursos
* Logging e Tracing para rastreamento de requisições
* Métricas de negócio para monitoramento da aplicação

## Como Executar o Projeto ▶️

1. **Requisitos:**
    * Java [versão]
    * Maven/Gradle
    * Docker (opcional, para facilitar a execução do RabbitMQ)
2. **Clonar o Repositório:**
    ```bash
    git clone [URL do repositório]
    ```
3. **Iniciar o RabbitMQ:**
    * Utilize o Docker ou siga as instruções de instalação no site oficial do RabbitMQ.
4. **Configurar o Banco de Dados:**
    * Crie os schemas para cada microsserviço.
    * Configure as credenciais de acesso no arquivo de propriedades de cada microsserviço.
5. **Iniciar os Microsserviços:**
    * Navegue até a pasta de cada microsserviço e execute o comando `mvn spring-boot:run` ou `gradlew bootRun`.
6. **Acessar a Aplicação:**
    * A aplicação estará disponível em `http://localhost:[porta do API Gateway]`.
    * Consulte a documentação dos endpoints REST para interagir com a API.

## Documentação Adicional 📚

* **Documentação das APIs REST:** [Link para a documentação - Ex: Swagger UI]
* **Mapeamento de Exchanges, Queues e Routing Keys:** [Link para o arquivo de mapeamento]

## Considerações 🤔

* Este projeto foi desenvolvido para fins educacionais e não se destina ao uso em produção.
* A implementação do frontend é opcional, sendo possível interagir com a aplicação através de ferramentas como Postman ou Insomnia.
* A segurança da aplicação foi simplificada para o escopo do projeto. Em um ambiente real, medidas de segurança robustas devem ser implementadas.

## Contato 📧

* **Equipe:** [Número da equipe]
* **Email:** anderson.severo@uece.br 
