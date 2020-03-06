# movieql
Learn GraphQL by making movie API

## 깃허브 연동
GitHub에 레포지토리 만들기  
vscode에서 git init .  
git remote add origin (URL)  
git pull origin master  

## graphQL yoga
npm add graphql-yoga 로 설치한다  

## babel-node
최신 문법을 쓰기 위해서 쓴다  
npm add babel-cli
.babelrc 파일 만들고 npm add babel-preset-env babel-preset-stage-3 --dev 한다.  
.babelrc 파일 안에 내용 채우기  

## GraphQL 간단 설명
Query(어떤 데이터 받을지 문제 제기)와 Resolver(Query를 어떻게 다룰지)로 구성된다  

## schema.graphql 파일에 대한 설명
type Query 에는 우리가 받을 데이터 형식에 대한 설명이 들어감. 이는 index.js의 server에서 typeDefs로 받아짐  