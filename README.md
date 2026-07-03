# Repair2.ai

Intelligent car repair assistant for Spain and Europe.

## Features

- **AI Repair Assistant** — Describe symptoms, get diagnosis and repair steps
- **Repair Shop Finder** — Locate certified shops across Spain and Europe
- **Cost Estimator** — AI-powered repair cost estimates by vehicle and issue
- **Repair History** — Track past repairs per vehicle
- **Multi-language** — Spanish, English, French, German, Italian, Portuguese

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS**
- **PostgreSQL + Prisma**
- **OpenAI API** (GPT-4o-mini)
- **NextAuth.js**
- **next-intl** (i18n)

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env with your values

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Docker

```bash
docker build -t repair2 .
docker run -p 3000:3000 --env-file .env repair2
```

## Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXTAUTH_URL` | App URL (e.g. http://localhost:3000) |
| `NEXTAUTH_SECRET` | Random secret for NextAuth |
| `OPENAI_API_KEY` | OpenAI API key |
| `NEXT_PUBLIC_GOOGLE_MAPS_KEY` | Google Maps API key (optional) |
