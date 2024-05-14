FROM node:20-alpine3.18 as build
RUN npm i pnpm -g

WORKDIR /app
COPY . .
RUN pnpm i
RUN pnpm build

FROM node:20-alpine3.18
RUN npm i pnpm -g
WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/vite.config.ts ./vite.config.ts
COPY --from=build /app/package.json ./package.json

EXPOSE $PORT
CMD ["pnpm","preview"]
