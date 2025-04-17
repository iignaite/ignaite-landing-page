# Ignaite Labs Landing Page

This is the official landing page for Ignaite Labs, showcasing our services, team, and projects.

## Production Deployment Guide

### Prerequisites

- Node.js 18+ and npm
- Git

### Setup for Production

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd ignaite-landing-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the production version:
   ```bash
   npm run build
   ```

4. Start the production server:
   ```bash
   ./start-production.sh
   ```
   Or use the npm command directly:
   ```bash
   npm run start
   ```

### Deployment Options

#### Option 1: Vercel (Recommended)

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com).

1. Push your code to a Git repository (GitHub, GitLab, BitBucket)
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings

#### Option 2: Self-hosted

For self-hosting on a Linux server:

1. Set up a reverse proxy (Nginx or Apache) to point to the Next.js server
2. Use PM2 to manage the Node.js process:

   ```bash
   npm install -g pm2
   pm2 start npm --name "ignaite-landing" -- start
   pm2 save
   pm2 startup
   ```

3. Configure your domain with SSL using Let's Encrypt

## Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Required Assets

Before deploying to production, make sure to add:

1. Team member photos in `/public/team/`
2. Logo file in `/public/logo/logo.png`
3. About page image in `/public/about/team.jpg`

## Contact

For questions about deploying this website, contact us at ignaite7@gmail.com.
