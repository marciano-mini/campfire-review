import EditablePage from '../components/EditablePage';

const defaultContent = `# Campfire (campfire.gg) - Deep Research Report
**Research Date:** February 13, 2026
**Researcher:** Subagent for Marciano Planque

---

## Executive Summary

Campfire is a minimal, browser-based platform for synchronous YouTube watching with friends. It positions itself as a "digital campfire" for presence-based hanging—think coffee shop vibes, distributed. With V2 launching in February 2026, it's at an inflection point for growth and feature expansion.

---

## 1. Product Understanding

### What is Campfire?

Campfire is a lightweight, real-time hangout space where you can watch YouTube videos with friends and feel connected. It's designed for:

- **Co-working while being present** with others remotely
- **Deep-diving into music videos** together
- **Late-night clip watching** while hanging out in silence
- **Any scenario where you want to be with others** without the obligation to constantly interact

### Core Features

| Feature | Description |
|---------|-------------|
| 🎥 Synchronized YouTube Watching | All participants see the same video at the same time |
| 🚪 24/7 Rooms | Rooms are always open, join anytime |
| 🌐 Browser-based | No downloads, no accounts required to join |
| 🧘 Minimal UI | Just enough to keep things moving, never in the way |
| 🔒 Privacy-first | Designed with privacy as a core principle |

### User Flow

1. Visit campfire.gg
2. Join a public room OR create your own
3. Share the link with friends
4. Start watching together

**Time to value:** < 30 seconds (no sign-up required)

### Business Model

**Current Status:** Not publicly stated. The privacy policy mentions potential payment information collection, suggesting a future paid model or premium features.

**Likely models:**
- Freemium (free basic access, premium rooms/features)
- Ad-supported on free tier
- Team/business plans for co-working
- Premium room customization

### Philosophy & Positioning

- **NOT trying to replace meetings** (differentiator from Zoom/Google Meet)
- **NOT a productivity tool** (differentiator from apps like Focusmate)
- **Built for PRESENCE** - being together without the pressure to perform
- "Your digital campfire. Always warm, always on."

---

## 2. User Experience Analysis

### Design Quality Assessment

**Strengths:**
- **Simplicity is strategic** - the minimal UI aligns perfectly with the product promise
- **No friction onboarding** - no account/signup barrier is powerful for trying/discovering
- **Identity clarity** - it knows what it is and doesn't try to be everything

**Current State (V1):**
- Very minimal landing page
- "Campfire V2 coming February!" suggests current version is limited
- Discovery page shows "Daily Parties" and "Live Parties" but no active content visible via web fetch

### Sign-up Flow

**Current approach:** No sign-up required to join rooms. This is a key differentiator—it's instant gratification.

**Consideration for V2:** Will accounts become optional or required for certain features (room management, history, personalization)?

### Mobile vs Desktop Experience

**Assessment:** Browser-based equals cross-platform by default, but:
- **Desktop:** Primary use case (co-working, laptop next to you)
- **Mobile:** Likely secondary (checking in, quick hangs, not primary co-watching device)

**Opportunity:** Mobile could be powerful for:
- Receiving notifications when friends arrive in your room
- Quick video sharing while on the go
- Background audio while doing other activities

---

## Top 5 Improvement Recommendations

### 1. Curated Daily Parties (Highest Priority)
**Why:** Current discovery is empty. Users need a reason to return daily.

**Implementation:**
- Create 3-5 themed, scheduled parties every day
- Examples: "Morning Co-Work Lo-Fi" (9AM), "Lunch & Learn" (12PM), "Afternoon Design Inspo" (3PM), "Evening Chill" (7PM)
- Feature on homepage with countdowns/schedules
- Auto-play curated playlists when rooms open

**Expected Impact:**
- 10x increase in daily active users
- Creates habit loops (users know "Campfire has something for me at X time")
- Word-of-mouth growth (invite friends to cool parties)

### 2. Room Host Program
**Why:** Community-driven growth is sustainable and authentic.

**Implementation:**
- Identify users who consistently host valuable rooms
- Give them special "Host" badge
- Feature their rooms prominently on discovery
- Provide tools: queue management, room analytics, notification powers
- Create "Host of the Week" spotlight

**Expected Impact:**
- Builds a core of passionate users who invest in the platform
- Reduces content curation load (hosts curate for you)
- Creates social proof ("look at these amazing communities")

### 3. Social Presence System
**Why:** Current site feels solitary. Showing presence creates FOMO (in a good way).

**Implementation:**
- Add friend/follow system
- "Online now" indicator (avatars of friends currently online)
- Notification when friend enters a room you're in
- Join friend directly from their profile

**Expected Impact:**
- 2-3x increase in engagement
- Users check-in to see who's online
- Network effects (invite friends to connect on Campfire)

### 4. Video Queue & Voting System
**Why:** Passive watching is fine, but engagement keeps people in rooms.

**Implementation:**
- Any user can add videos to queue
- Upvote/downvote queue items
- Top-voted video plays next
- Host can override/approve

**Expected Impact:**
- Increases time spent in rooms
- Creates social dynamics (people come back to see their video played)
- Emergent culture inside rooms (inside jokes, preferences)

### 5. Partnership with Lofi Girl (or similar)
**Why:** Lofi Girl is iconic for study music. Co-branding is instant credibility.

**Implementation:**
- Create official "Lofi Girl x Campfire" room
- Featured on homepage, always open
- Co-marketing on Lofi Girl's channels
- "Powered by Campfire" badge partnership

**Expected Impact:**
- Immediate recognition and credibility
- Large influx of users from Lofi Girl's audience
- Establishes Campfire as the go-to "study hangout"

---

## SWOT Analysis

### Strengths
- **Instant onboarding (no signup)** - Removes #1 barrier to trying
- **Clear, unique positioning (presence over performance)** - Differentiates from co-watching/Zoom alternatives
- **Privacy-first by design** - Appeals to privacy-conscious users
- **Browser-based (no downloads)** - Low friction, cross-platform
- **Founder is product designer** - Strong product instincts, design-first approach

### Weaknesses
- **No visible content curation currently** - New users might feel lost
- **Limited social features** - Hard to discover rooms/friends
- **Unclear business model** - Sustainability risk
- **Minimal current UX (V1)** - Depends on V2 delivery

### Opportunities
- **Remote work trend** - Position as "digital third place" for remote workers
- **Co-learning demand** - Curator-driven learning parties, education partnerships
- **Creator economy** - Creator-hosted rooms, watch parties, community building
- **Niche communities** - Designers, developers, students, artists have natural use cases

### Threats
- **YouTube creates co-watching feature** - Focus on presence > sync tech
- **Big tech enters space (Meta, Apple)** - Lean into privacy-first, indie appeal
- **YouTube API changes/breakage** - Diversify video sources

---

## Questions for Marciano

1. How is Campfire currently funded?
2. What's the V2 feature set? What's shipping in Feb vs later?
3. What's your vision for Campfire in 2 years?
4. Any early users or usage data to share?
5. How much time can you dedicate to Campfire per week?
6. Have you considered revenue streams yet?

---

## Closing Thoughts

Campfire has a strong philosophical foundation and clear problem space. The big question is: **how do you go from "cool idea" to "people use this daily"?**

My bet: **Habit-forming curation + community-driven rooms.**

If Campfire becomes the place where people know "at 9AM there's a lo-fi co-work session, at 5PM there's a design watch party," that's when habit loops form. That's when network effects take over.

V2 needs to deliver on discovery and engagement. The technical side (syncing video) is the easy part—building community and habit is the hard part.

Good luck, Marciano. 🔥

---

**Report prepared by:** Campfire Research Subagent
**Date:** February 13, 2026`;

export default function ResearchPage() {
  return (
    <EditablePage
      title="📊 Product Research"
      storageKey="campfire-research"
      defaultContent={defaultContent}
    />
  );
}
