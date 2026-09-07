// 'use client';

// import { useEffect, useState } from 'react';
// import { Fraunces, Inter } from 'next/font/google';
// import Image from 'next/image';

// const fraunces = Fraunces({
//   subsets: ['latin'],
//   weight: ['500', '600'],
//   style: ['normal', 'italic'],
//   variable: '--font-display',
// });

// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400', '500', '600'],
//   variable: '--font-body',
// });

// // Next Monday, 2:30 PM Sri Lanka time (UTC+5:30).
// // Update the date portion (YYYY-MM-DD) whenever the target Monday changes.
// const LAUNCH_DATE = new Date('2026-09-07T14:30:00+05:30');

// function getTimeLeft() {
//   const diff = Math.max(0, LAUNCH_DATE.getTime() - Date.now());
//   const day = Math.floor(diff / (1000 * 60 * 60 * 24));
//   const hr = Math.floor((diff / (1000 * 60 * 60)) % 24);
//   const min = Math.floor((diff / (1000 * 60)) % 60);
//   const sec = Math.floor((diff / 1000) % 60);
//   return { day, hr, min, sec };
// }

// function Logo() {
//   return (
//     <div className="logo-mark">
//       <Image src="/images/Lencar-Dark-Logo.png" alt="Your company" width={150} height={150} />
//     </div>
//   );
// }

// export default function Home() {
//   const [time, setTime] = useState<{ day: number; hr: number; min: number; sec: number } | null>(null);

//   useEffect(() => {
//     setTime(getTimeLeft());
//     const id = setInterval(() => setTime(getTimeLeft()), 1000);
//     return () => clearInterval(id);
//   }, []);

//   const units: Array<[string, number | undefined]> = [
//     ['days', time?.day],
//     ['hours', time?.hr],
//     ['min', time?.min],
//     ['sec', time?.sec],
//   ];

//   return (
//     <div className={`${fraunces.variable} ${inter.variable} page`}>
//       <main className="content">
//         <Logo />

//         <span className="eyebrow">We&apos;ll be here soon</span>

//         <h1>Coming soon</h1>

//         <p className="sub">
//           We&apos;re putting the finishing touches on something new. Launching Monday at
//           2:30 PM, Sri Lanka time.
//         </p>

//         {time && (
//           <div className="countdown">
//             {units.map(([label, value]) => (
//               <div className="unit" key={label}>
//                 <span className="value">{String(value ?? 0).padStart(2, '0')}</span>
//                 <span className="label">{label}</span>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>

//       <style jsx>{`
//         .page {
//           --ink: #17181a;
//           --muted: #6b6d70;
//           --line: #e7e5e1;
//           --rust: #b5502f;
//           font-family: var(--font-body), sans-serif;
//           background: #ffffff;
//           color: var(--ink);
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 2rem 1.25rem;
//         }

//         .content {
//           width: 100%;
//           max-width: 520px;
//           text-align: center;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         :global(.logo-mark) {
//           margin-bottom: 1.5rem;
//         }

//         .eyebrow {
//           display: inline-block;
//           font-size: 0.85rem;
//           color: var(--rust);
//           margin-bottom: 1rem;
//         }

//         h1 {
//           font-family: var(--font-display), serif;
//           font-weight: 600;
//           font-size: clamp(2.6rem, 7vw, 3.75rem);
//           line-height: 1.05;
//           margin: 0 0 1.1rem;
//           color: var(--ink);
//         }

//         .sub {
//           font-size: 1.05rem;
//           line-height: 1.6;
//           color: var(--muted);
//           max-width: 40ch;
//           margin: 0 auto 2.5rem;
//         }

//         .countdown {
//           display: flex;
//           justify-content: center;
//           gap: 1.75rem;
//           padding-bottom: 2rem;
//         }

//         .unit {
//           display: flex;
//           flex-direction: column;
//           gap: 0.2rem;
//           min-width: 3.2rem;
//         }

//         .value {
//           font-family: var(--font-display), serif;
//           font-size: 2.1rem;
//           color: var(--ink);
//           font-variant-numeric: tabular-nums;
//         }

//         .label {
//           font-size: 0.75rem;
//           color: var(--muted);
//         }
//       `}</style>
//     </div>
//   );
// }

import AboutBSS from "@/components/ui/aboutbss";
import FeatureBar from "@/components/ui/FeatureBar";
import Footer from "@/components/common/footer";
import Hero from "@/components/ui/hero";
import WhyLencarSection from "@/components/ui/WhyLencarSection";
import ImpactStats from "@/components/ui/impactStats";
import HomeSwapping from "@/components/ui/homeSwapping";
import { seoMetadata } from "@/lib/seo";

export const metadata = seoMetadata({
  title: "Lencar | Future Electric Mobility.",
  description:
    "Lencar creates intelligent electric vehicles and sustainable mobility solutions for Sri Lanka. Explore our range of smart electric scooters with battery-swapping technology.",
  path: "/",
});

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FeatureBar />
      <WhyLencarSection />
      <AboutBSS />
      {/* <HomeSwapping /> */}
      <Footer />
    </main>
  );
}
