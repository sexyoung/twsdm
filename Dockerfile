# 使用與 devcontainer 相同的基礎鏡像
FROM node:22-alpine AS builder

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json (如果存在)
COPY package*.json ./

# 安裝所有依賴（包括 devDependencies）
RUN npm ci

# 複製所有源代碼
COPY . .

# 構建應用
RUN npm run build

# 創建精簡的生產鏡像
FROM node:22-alpine

ENV PORT="8080"

WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 只安裝生產依賴
RUN npm ci --only=production

# 從構建階段複製編譯後的代碼
COPY --from=builder /app/dist/ ./

COPY --from=builder /app/server.js ./server.js

COPY --from=builder /app/start.sh ./start.sh

RUN npm install express@^4.19.2

RUN chmod +x ./start.sh

# 使用 npm start 作為啟動命令
ENTRYPOINT [ "./start.sh" ]

# 暴露應用可能使用的端口（根據您的應用需求調整）
EXPOSE 3000
