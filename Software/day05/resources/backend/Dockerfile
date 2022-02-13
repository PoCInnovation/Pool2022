###
# Builder image
###
FROM node:17 AS builder

WORKDIR /app

# Install dependecies
COPY package.json .
COPY package-lock.json .

RUN npm install --only=production

# Copy source (see .dockerignore)
COPY . .

# Build source
RUN npm run build

###
# Production image
###
FROM node:17 as app

WORKDIR /app

# Copy package manager
COPY --from=builder /app/package.json .

# Copy dependencies
COPY --from=builder /app/node_modules node_modules

# Copy code
COPY --from=builder /app/dist dist
COPY --from=builder /app/prisma prisma

EXPOSE 8080

# Prefix commands
ENTRYPOINT ["npm", "run"]

# Start production (migrate database, generate prisma client and run app)
CMD ["start:prod"]
