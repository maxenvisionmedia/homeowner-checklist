"use client";

import { useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const EXTERIOR = [
  "Park vehicles on street",
  "Put garbage cans away",
  "Sweep walkways and porches",
  "Pull weeds and clean up flowerbeds",
  "Mow lawn, trim shrubs, & clear leaves",
  "Hide garden hose/reel",
  "Clean and arrange patio furniture",
  "Put kids toys/pet toys away",
];

const INTERIOR = [
  "Sweep/mop floors, clean windows, & dust (very hard to photoshop)",
  "Put clutter away in drawers, closets or garage",
  "Remove towels and small rugs",
  "Declutter all surfaces (countertops, vanities, dressers, nightstands, etc.)",
  "Make all beds and straighten all curtains",
  "Hide all personal hygiene items in bathroom",
  "Hide all trash cans (kitchen & bathrooms)",
  "Pick up & put away kids toys/pet toys",
  "Crate/hide pets (move to garage or basement)",
  "Replace burnt-out bulbs",
  "Hide visible cords (cable, power cords, etc.)",
];

const WILL_DO = [
  "Adjust blinds & lighting for best possible exposure",
  "Close all toilet seats in bathrooms",
  "Move any objects that you might have forgotten",
];

const WONT_DO = [
  "Move or handle pets and pet items",
  "Touch personal hygiene items (shampoo, toothbrushes, brushes, etc.)",
];

const WHY_ITEMS = [
  {
    icon: "✨",
    title: "First impressions are everything!",
    body: "There is a visible difference between a clean, decluttered home and one that isn't — and buyers notice immediately. A well-prepared home sells faster and for more money. It's that simple.\n\nYour home is your biggest asset. We know life is busy and there's a lot going on — but you only get one chance to make that first impression. The time you put into preparing your space is one of the most valuable investments you can make in this process. We want to help you make the most of it!",
  },
  {
    icon: "⏱️",
    title: "We're working on a set timeline!",
    body: "Every shoot has a hard stop time, and if we can't get through the whole home in time, it holds up your entire listing. We want to get you the best results as efficiently as possible — and having everything ready when we arrive makes that so much easier!",
  },
  {
    icon: "🏃",
    title: "The more ready you are, the faster we fly!",
    body: "A prepped home means we can move through every room smoothly and focus on capturing it at its best. It's genuinely the single biggest thing you can do to help us deliver amazing results quickly!",
  },
];

const FAQS = [
  {
    q: "Can you move things from room to room during the shoot?",
    a: "We totally get why that seems like an easy fix — but unfortunately it's not something we're able to do! Most of our packages include multiple services in every room: photos, video, floor plans, and a 3D tour, which means we're coming back through each room several times. Moving items around mid-shoot gets really complicated, really fast. The easiest solution? Tuck anything you need to hide into a closet, the garage, or a room we won't be shooting. Out of sight, out of mind!",
  },
  {
    q: "How long will the shoot take?",
    a: "It really depends on the services you booked — and how ready the home is! Shoots can range from 45 minutes to a few hours. The more prepared everything is when we walk in, the faster and smoother it goes for everyone.",
  },
  {
    q: "Do I need to be home during the shoot?",
    a: "You're welcome to be home, but honestly? We recommend taking a little break! When we have the space to move freely, we can work much faster and focus completely on making your home look its best. And if anything small is still out, no worries — we're happy to tuck it out of frame. Grab a coffee, take a walk, we've got it!",
  },
  {
    q: "What do I do with my pets?",
    a: "We love animals, but we're not able to handle or move pets during the shoot! Please crate them or move them to the garage, backyard, or a room we won't be photographing. It keeps them comfortable and helps us keep things moving!",
  },
  {
    q: "Should all the lights be on when you arrive?",
    a: "Yes, please! Flip on every light in the house before we get there — overhead lights, lamps, under-cabinet lights, all of it. We'll adjust from there, but starting with everything on saves a ton of time and helps us get the best possible shots!",
  },
];

const TIPS = [
  {
    icon: "💡",
    title: "Lighting",
    body: "Open all blinds and turn on every light before we arrive.",
  },
  {
    icon: "🛏️",
    title: "Beds & Linens",
    body: "Freshly made beds with fluffy pillows photograph beautifully.",
  },
  {
    icon: "✨",
    title: "Less Is More",
    body: "If you're debating whether to put something away — put it away. When in doubt, less is always more on camera.",
  },
  {
    icon: "🚗",
    title: "Driveway",
    body: "Move all cars off the driveway for cleaner exterior shots.",
  },
];

const TOTAL = EXTERIOR.length + INTERIOR.length;

// ── Components ────────────────────────────────────────────────────────────────

function CheckItem({ id, label, checked, onToggle }) {
  return (
    <li className="checklist-item flex items-start gap-4 py-3 border-b border-white/5 last:border-0">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => onToggle(id)}
      />
      <label htmlFor={id} className="text-sm leading-snug text-white/80 select-none pt-0.5">
        {label}
      </label>
    </li>
  );
}

function ChecklistCard({ title, icon, items, prefix, checked, onToggle }) {
  const done = items.filter((_, i) => checked.has(`${prefix}-${i}`)).length;
  const pct = Math.round((done / items.length) * 100);

  return (
    <div className="print-card rounded-2xl overflow-hidden" style={{ background: "#222" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">{icon}</span>
          <h2 className="print-text text-sm font-bold uppercase tracking-widest text-white">
            {title} Checklist
          </h2>
        </div>
        <span className="text-xs font-bold text-[#DCA738] bg-[#DCA738]/10 px-2.5 py-1 rounded-full">
          {done}/{items.length}
        </span>
      </div>
      {/* Mini progress */}
      <div className="h-0.5 bg-white/5">
        <div
          className="h-0.5 progress-fill"
          style={{
            width: `${pct}%`,
            background: pct === 100 ? "#22c55e" : "#DCA738",
          }}
        />
      </div>
      {/* Items */}
      <ul className="px-5 py-1">
        {items.map((item, i) => (
          <CheckItem
            key={i}
            id={`${prefix}-${i}`}
            label={item}
            checked={checked.has(`${prefix}-${i}`)}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

function PolicyCard({ items, type }) {
  const isGood = type === "will";
  return (
    <div
      className="print-card rounded-2xl p-5"
      style={{
        background: isGood ? "rgba(34,197,94,0.08)" : "rgba(239,68,68,0.08)",
        border: isGood ? "1px solid rgba(34,197,94,0.15)" : "1px solid rgba(239,68,68,0.15)",
      }}
    >
      <h3
        className="text-xs font-bold uppercase tracking-widest mb-4"
        style={{ color: isGood ? "#4ade80" : "#f87171" }}
      >
        What We Will {!isGood && <span style={{ color: "#f87171" }}>NOT </span>}Do
      </h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="mt-0.5 font-bold text-base"
              style={{ color: isGood ? "#4ade80" : "#f87171" }}
            >
              {isGood ? "✓" : "✗"}
            </span>
            <span className="print-sub text-sm text-white/70 leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WhySection() {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "#222" }}>
      <div className="px-5 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#DCA738" }}>
          Here's why this makes a difference
        </p>
      </div>
      <ul className="divide-y" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        {WHY_ITEMS.map((item) => (
          <li key={item.title} className="flex items-start gap-4 px-5 py-4">
            <span className="text-xl mt-0.5">{item.icon}</span>
            <div>
              <p className="text-sm font-bold text-white">{item.title}</p>
              <div className="space-y-2 mt-1">
                {item.body.split("\n\n").map((para, i) => (
                  <p key={i} className="text-sm text-white/50 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FaqSection() {
  const [open, setOpen] = useState(null);
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">FAQ</p>
      <div className="rounded-2xl overflow-hidden" style={{ background: "#222" }}>
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className="border-b last:border-0"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-white leading-snug">{faq.q}</span>
              <span
                className="text-lg font-light shrink-0 mt-0.5 transition-transform duration-200"
                style={{
                  color: "#DCA738",
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>
            {open === i && (
              <p className="px-5 pb-4 text-sm text-white/50 leading-relaxed">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const [checked, setChecked] = useState(new Set());
  const allDone = checked.size === TOTAL;
  const progress = Math.round((checked.size / TOTAL) * 100);

  const toggle = (id) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen" style={{ background: "#1a1a1a" }}>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="no-print relative flex flex-col justify-end px-6 pt-24 pb-12"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          minHeight: "70vh",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/55 to-transparent" />
        {/* Brand tag */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
          <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase">
            Envision Media LA
          </span>
          <button
            onClick={() => window.print()}
            className="no-print flex items-center gap-1.5 text-[#1a1a1a] font-bold text-xs px-3 py-1.5 rounded-full"
            style={{ background: "#DCA738" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 15V3M12 15l-4-4M12 15l4-4" />
              <path d="M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" strokeLinecap="round" />
            </svg>
            Save PDF
          </button>
        </div>
        {/* Title */}
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          <div
            className="inline-block text-[#1a1a1a] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4"
            style={{ background: "#DCA738" }}
          >
            Homeowner's Checklist
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight">
            Getting Your<br />Home Ready<br />
            <span style={{ color: "#DCA738" }}>for Photo Day</span>
          </h1>
          <p className="mt-5 text-base md:text-lg font-medium text-white/70 max-w-xl mx-auto">
            We know this can feel like a lot — we're here to make it easy!
          </p>
        </div>
      </section>

      {/* ── Sticky progress ───────────────────────────────────────────── */}
      <div
        className="no-print sticky top-0 z-50 border-b"
        style={{ background: "#222", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center gap-3">
          <span className="text-xs font-semibold text-white/40 whitespace-nowrap">Progress</span>
          <div className="flex-1 rounded-full h-2 overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
            <div
              className="progress-fill h-2 rounded-full"
              style={{
                width: `${progress}%`,
                background: allDone ? "#22c55e" : "linear-gradient(90deg,#DCA738,#E8B94A)",
              }}
            />
          </div>
          <span
            className="text-sm font-bold tabular-nums"
            style={{ color: allDone ? "#22c55e" : "#DCA738" }}
          >
            {progress}%
          </span>
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-6 py-8 space-y-5">

        {/* All done */}
        {allDone && (
          <div
            className="no-print rounded-2xl p-5 flex items-center gap-4"
            style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}
          >
            <span className="text-3xl">🎉</span>
            <div>
              <p className="font-bold text-green-400 text-sm">Your home is ready — you crushed it!</p>
              <p className="text-xs text-green-400/70 mt-0.5">All items checked. We can't wait to capture it!</p>
            </div>
          </div>
        )}

        {/* Why it matters */}
        <WhySection />

        {/* Checklists */}
        <div className="grid md:grid-cols-2 gap-5">
          <ChecklistCard title="Exterior" icon="🏡" items={EXTERIOR} prefix="ext" checked={checked} onToggle={toggle} />
          <ChecklistCard title="Interior" icon="🛋️" items={INTERIOR} prefix="int" checked={checked} onToggle={toggle} />
        </div>

        {/* Policy */}
        <div className="grid md:grid-cols-2 gap-5">
          <PolicyCard items={WILL_DO} type="will" />
          <PolicyCard items={WONT_DO} type="wont" />
        </div>

        {/* Reminder */}
        <div
          className="print-card relative overflow-hidden rounded-2xl p-6 text-center"
          style={{ background: "#222", border: "1px solid rgba(220,167,56,0.2)" }}
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at top, #DCA738 0%, transparent 70%)" }}
          />
          <p className="print-text relative z-10 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#DCA738" }}>
            One last thing!
          </p>
          <p className="print-sub relative z-10 text-sm text-white/60 leading-relaxed">
            Please don't schedule any other services on the day of your appointment — just let us handle it!
            Take a little break, grab a coffee, enjoy a walk. Your home is in great hands, and we're going to
            capture it beautifully. ☕
          </p>
        </div>

        {/* FAQ */}
        <FaqSection />

        {/* Tips */}
        <section className="no-print">
          <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">Pro Tips</p>
          <div className="grid grid-cols-2 gap-3">
            {TIPS.map((tip) => (
              <div
                key={tip.title}
                className="rounded-2xl p-4"
                style={{ background: "#222" }}
              >
                <span className="text-xl">{tip.icon}</span>
                <p className="font-bold text-white text-sm mt-2">{tip.title}</p>
                <p className="text-white/40 text-xs mt-1 leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Download CTA */}
        <div className="no-print pb-4">
          <button
            onClick={() => window.print()}
            className="w-full flex items-center justify-center gap-2 font-bold py-4 rounded-2xl text-sm"
            style={{ background: "#DCA738", color: "#1a1a1a" }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 15V3M12 15l-4-4M12 15l4-4" />
              <path d="M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" strokeLinecap="round" />
            </svg>
            Download PDF Checklist
          </button>
        </div>

      </main>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="no-print text-center text-xs pb-10" style={{ color: "rgba(255,255,255,0.2)" }}>
        <p className="font-semibold" style={{ color: "rgba(255,255,255,0.35)" }}>Envision Media LA</p>
        <p className="mt-1">Questions? Reach out before your appointment.</p>
      </footer>
    </div>
  );
}
