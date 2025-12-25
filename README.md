# Hack Horizon 2.0 🚀

**Where Innovation Meets Reality**

A Next.js website for Hack Horizon 2.0 - a 24-hour hackathon organized by the School of Engineering & IT, ARKA JAIN University, in collaboration with GDG On Campus AJU.

## 📅 Event Details

- **Event:** Hack Horizon 2.0
- **Organizer:** School of Engineering & IT, ARKA JAIN University × GDG On Campus AJU
- **Date:** February 16 & 17, 2026
- **Duration:** 24 Hours

## 🎯 About Hack Horizon

Hack Horizon is designed to unleash creativity, foster collaboration, and drive technological innovation. Whether you're a beginner eager to learn or a seasoned coder ready to showcase your skills, this event is your launchpad to greatness.

At Hack Horizon, you don't just dream big—you turn ideas into reality. Collaborate with developers, designers, and tech enthusiasts, tackle real-world challenges, and build solutions that make an impact.

This hackathon is more than just coding—it's about transforming ideas into real-world applications. With exciting challenges, thrilling coding sprints, and a dynamic tech community, Hack Horizon offers an electrifying space to learn, innovate, and compete.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16.0.0](https://nextjs.org/) with App Router
- **Runtime:** React 19.2.0
- **Styling:** Tailwind CSS 4
- **Animation:** Motion (Framer Motion)
- **Smooth Scroll:** Lenis
- **Code Quality:** Biome (Linter & Formatter)
- **Optimization:** React Compiler (Babel Plugin)

## 📁 Project Structure

```
HackHorizon/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── register/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── registration/
│   │       └── page.tsx
│   ├── assets/
│   │   ├── gif/
│   │   ├── GlimpseImages/
│   │   ├── images/
│   │   ├── organisers/
│   │   ├── svg/
│   │   │   ├── Traks/
│   │   │   └── WTSU/
│   │   └── webp/
│   │       ├── tracks/
│   │       └── WTSU/
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   │       ├── ClockElements/
│   │       ├── CollaborationSection/
│   │       ├── GlimpseElement/
│   │       ├── HeroSectionElement/
│   │       ├── PrizepoolElements/
│   │       ├── SponsorsElements/
│   │       ├── TimeLineElements/
│   │       ├── TracksElements/
│   │       └── WantToSponsorsUsElement/
│   ├── sections/
│   │   ├── BarbarianAnimation.tsx
│   │   ├── ClockBannerSection.tsx
│   │   ├── ClockSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── Glimpse.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HeroSectionAnimation.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── OrganizersSection.tsx
│   │   ├── prizePoolSection.tsx
│   │   ├── SponsorsSection.tsx
│   │   ├── TimelineSection.tsx
│   │   ├── TrackSection.tsx
│   │   └── WantToSponsorsUsSection.tsx
│   └── utils/
│       ├── .gitkeep
│       ├── ButtonClickedSound.tsx
│       └── LenisProvider.tsx
├── public/
│   ├── ClanCharacters/
│   ├── loading/
│   ├── VillageBarbarian/
│   ├── arka_jain_logo.png
│   ├── audio.webm
│   ├── buttonSound.webm
│   ├── castle-frame.png
│   ├── Clash_Regular.otf
│   ├── file.svg
│   ├── finalRope.svg
│   ├── glimpse-heading.png
│   ├── globe.svg
│   ├── next.svg
│   ├── supercell-magic.ttf
│   ├── TrackBgImg.png
│   ├── TrackBgImg2.png
│   ├── UPI.webp
│   ├── window.svg
│   └── ...
├── biome.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## 🎨 Features

- Modern Next.js 16 App Router architecture
- Server-side rendering (SSR) and dynamic imports for performance
- Smooth scrolling with Lenis
- Beautiful animations with Motion
- Countdown timer to the event
- Responsive design with Tailwind CSS
- Code quality enforced with Biome

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🧪 Development

### Code Quality

This project uses [Biome](https://biomejs.dev/) for linting and formatting:

```bash
# Lint the codebase
npm run lint

# Format the codebase
npm run format
```

### Configuration Files

- [`biome.json`](biome.json) - Biome configuration
- [`next.config.ts`](next.config.ts) - Next.js configuration
- [`tsconfig.json`](tsconfig.json) - TypeScript compiler options
- [`postcss.config.mjs`](postcss.config.mjs) - PostCSS configuration

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is developed exclusively for Hack Horizon 2.0, hosted by ARKA JAIN University in collaboration with GDG On Campus AJU. All rights reserved.
