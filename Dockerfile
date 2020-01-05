# base image 를 지정합니다.
FROM node

# Dockerfile을 생성/관리하는 사람
MAINTAINER JuBin Rew <jbrew@naver.com>

# /app 디렉토리 생성
RUN mkdir -p /app

# 작업 경로로 지정
WORKDIR /app

# 현재 디렉토리 내용물을 app으로 이동
COPY . /app

# npm install 진행
RUN npm install && npm run build

# 포트 맵핑
EXPOSE 3000 3000

# 커맨드 라인 실행
CMD ["node" ,"server.js"]