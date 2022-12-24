### notifications-service

[![](https://img.shields.io/github/repo-size/wladimirgrf/notifications-service?color=%23FFB000&labelColor=000000)]()
[![](https://img.shields.io/github/last-commit/wladimirgrf/notifications-service?color=%23FFB000&labelColor=000000)](https://github.com/wladimirgrf/notifications-service/commits/master)
[![](https://img.shields.io/github/issues/wladimirgrf/notifications-service?color=%23FFB000&labelColor=000000)](https://github.com/wladimirgrf/notifications-service/issues)
[![](https://img.shields.io/github/license/wladimirgrf/notifications-service?color=%23FFB000&labelColor=000000)]()

Project developed during the Node.js Ignite Lab. This is a microservice for managing notifications across an event-driven infrastructure. Using a message broker to handle multiple events.

## 🌍 Ecosystem

Below the technologies, used to build this Microservice:

|                      Name                                   |                         Status                          |
|:-----------------------------------------------------------:|:-------------------------------------------------------:|
|<img height="58" src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg"> | <img alt="node version" src="https://img.shields.io/badge/nodejs-v16.15-blue?color=%23FFB000&labelColor=000000"> |
|<img height="64" src="https://cdn.worldvectorlogo.com/logos/nestjs.svg"> | <img alt="nestjs version" src="https://img.shields.io/badge/nestjs-v8.0-blue?color=%23FFB000&labelColor=000000">|
|<img height="68" src="https://cdn.worldvectorlogo.com/logos/kafka.svg"> | <img alt="nestjs version" src="https://img.shields.io/badge/kafka-v2.2-blue?color=%23FFB000&labelColor=000000">|
|<img height="55" src="https://cdn.worldvectorlogo.com/logos/typescript.svg"> | <img alt="typescript version" src="https://img.shields.io/badge/typescript-v4.3-blue?color=%23FFB000&labelColor=000000"> |
|<img height="64" src="https://cdn.worldvectorlogo.com/logos/prisma-4.svg"> | <img alt="prisma version" src="https://img.shields.io/badge/prisma-v4.7-blue?color=%23FFB000&labelColor=000000"> |
|<img height="55" src="https://cdn.worldvectorlogo.com/logos/eslint-1.svg"> | <img alt="eslint version" src="https://img.shields.io/badge/eslint-v8.0-blue?color=%23FFB000&labelColor=000000"> |
|<img height="55" src="https://cdn.worldvectorlogo.com/logos/prettier-2.svg"> | <img alt="prettier version" src="https://img.shields.io/badge/prettier-v2.3-blue?color=%23FFB000&labelColor=000000"> |

## ▶️ Getting started

**Clone the project**
```bash
$ git clone https://github.com/wladimirgrf/notifications-service.git && cd notifications-service
```

**Install the Project dependencies**
```bash
$ npm install
```

**Environment configuration**
```bash
# Make a copy of '.env.sample'
# Fill it with your environment variables
$ cp .env.sample .env
```

**Migrations**
```bash
$ npx prisma migrate dev
```

**Launch the Application**
```bash
$ npm start
```

>The API will be launch at `localhost` on the chosen port or on the default `3000`<br>


## 🤝 Contributing

**Fork the repository and clone your fork**

```bash
$ git clone fork-url && cd notifications-service
```

**Create a branch for your edits**
```bash
$ git checkout -b new-feature
```

**Make the commit with your changes**
```bash
$ git commit -m 'feat: New feature'
```

**Send the code to your remote branch**
```bash
$ git push origin new-feature
```

Create a pull request with your version. <br>
After your pull request is merged, you can delete your branch.


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

