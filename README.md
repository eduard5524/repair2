# repair2.ai

AI-powered car repair assistance platform for Spain and Europe.

## Features

### For Drivers
- **AI Diagnosis** - Describe your car problem and get instant AI-powered analysis
- **Workshop Matching** - Get assigned to the nearest certified workshop based on location and speciality
- **Insurance Claims** - Seamless claim filing with automatic pre-authorization from major insurers
- **Multilingual** - Available across Spain, France, Germany, Italy, Portugal, and more

### For Workshops
- **Customer Flow** - Receive a steady stream of pre-qualified customers
- **Smart Scheduling** - AI-managed booking to maximize utilization
- **Guaranteed Payments** - Insurance-backed payments within 48 hours
- **Business Dashboard** - Analytics on revenue, ratings, and performance

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── assistance/           # User assistance flow
│   ├── workshops/            # Workshop directory
│   ├── insurance/            # Insurance claims
│   ├── workshop-portal/      # Workshop registration & dashboard
│   └── api/
│       ├── assistance/       # AI diagnosis & matching API
│       └── workshops/        # Workshop search API
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
└── globals.css
```

## API Endpoints

- `POST /api/assistance` - Submit car issue for AI diagnosis and workshop matching
- `GET /api/workshops` - Search workshops by city, country, or speciality

## Coverage

Active in 12 European countries with 2,500+ certified workshops:
Spain, France, Germany, Italy, Portugal, Netherlands, Belgium, Austria, Switzerland, Poland, Czech Republic, Ireland
