import EditablePage from '../components/EditablePage';

const defaultContent = `# Campfire Re-engagement & User Research Campaign

**Goal:** Re-engage 1,800 Campfire users + conduct product discovery research

**Key Insight:** This is NOT just "please come back" marketing. This is **product discovery research disguised as re-engagement.**

---

## User Segmentation Strategy

| Segment | Definition | Est. Count | Priority |
|---------|-----------|------------|----------|
| **Active** | Used in last 30 days | ~50-100 | Low |
| **Recently Inactive** | Used 1-6 months ago | ~200-300 | High |
| **Dormant** | Used 6-12 months ago | ~300-400 | Medium |
| **Churned** | Haven't used in 1+ years | ~800-1000 | High |
| **Never Activated** | Signed up, never used | ~200-300 | Medium |

**Total:** 1,800 users

---

## Email Sequences by Segment

### Recently Inactive (1-6 months ago)
**Sequence:** 2 emails over 14 days

#### Email 1 (Day 0): "We miss you at Campfire 🔥"

Subject: We miss you at Campfire 🔥

Body:
Hey [FirstName],

It's been a few months since we've seen you at Campfire. We noticed you used to hang out here pretty regularly — and honestly, we miss having you around.

We're reaching out because we're trying to understand what makes Campfire work for people (and what doesn't). And since you've actually used it, your perspective would be incredibly valuable.

Quick question: What were you hoping Campfire would help you do when you first joined?

You can reply directly to this email, or if you have 2 minutes, fill out this short survey: [Link]

Either way, thanks for being part of Campfire's early days.

— Marciano (founder)

P.S. If you're interested in coming back, we've made some improvements since you last visited. Let me know if you'd like a quick tour.

#### Email 2 (Day 14): "One thing that would bring you back?"

Subject: One thing that would bring you back to Campfire?

Body:
Hey [FirstName],

Quick follow-up from last week. I know inboxes are busy, so I'll keep this short.

If you could change ONE thing about Campfire that would make you use it again, what would it be?

Seriously, anything. Better video quality? More ways to discover rooms? Different vibe? We're all ears.

Reply with your answer, and I'll personally share what we're working on.

Thanks for your time,
— Marciano

---

### Dormant (6-12 months ago)
**Sequence:** 3 emails over 21 days

#### Email 1 (Day 0): "Can we ask what made you join Campfire?"

Subject: Can we ask what made you join Campfire originally?

Body:
Hi [FirstName],

It's been almost a year since you last used Campfire, and we're trying to figure out what we got wrong.

But first, we're curious: **What made you sign up for Campfire in the first place?**

- Were you looking to watch videos with friends?
- Trying to find a study buddy?
- Just curious what it was about?

Your answer would genuinely help us build something better. Reply to this email or fill out this 2-minute survey: [Link]

Thanks,
— Marciano

P.S. No hard feelings if Campfire wasn't for you — but we'd love to know why.

#### Email 2 (Day 10): "What killed the vibe?"

Subject: What killed the vibe?

Body:
Hey [FirstName],

Following up on my last email. We're trying to understand why people stopped using Campfire.

Was it:
❌ Nobody in the rooms when you joined?
❌ Video quality issues?
❌ Couldn't find interesting content?
❌ Something else?

Knowing what went wrong would help us fix it for others. Reply with your answer (even if it's harsh — we can take it).

— Marciano

#### Email 3 (Day 21): "Final ask: Would this bring you back?"

Subject: Final ask: Would this bring you back?

Body:
Hey [FirstName],

Last email, promise. We've been working on some major improvements to Campfire:

✅ Better room discovery (find interesting parties easily)
✅ More active rooms (guaranteed someone to hang with)
✅ Improved video sync (no more lag)
✅ Mobile-friendly (hang out from your phone)

Would any of these changes bring you back? Or is there something else we're missing?

Reply and let me know.

Thanks for reading,
— Marciano

P.S. If you want to try the new version when it launches, reply "notify me" and I'll send you early access.

---

### Churned (1+ years)
**Sequence:** 2 emails over 14 days

#### Email 1 (Day 0): "Whatever happened to Campfire?"

Subject: Whatever happened to Campfire?

Body:
Hey [FirstName],

You signed up for Campfire over a year ago, and I'm curious if you even remember what it was.

We're rebuilding Campfire from the ground up, and before we do, I wanted to ask:

**What would make a co-watching/hangout platform actually useful to you?**

Not what Campfire was — but what you'd actually use. Video quality? Better discovery? Different vibe?

Your answer would shape what we build next. Reply to this email or fill out this survey: [Link]

Thanks,
— Marciano (Campfire founder)

#### Email 2 (Day 14): "Campfire is coming back"

Subject: Campfire is coming back. Want to see it first?

Body:
Hey [FirstName],

We're relaunching Campfire in [Month] with major improvements based on user feedback.

If you're interested in early access, reply "yes" and I'll add you to the beta list.

No pressure if not — just wanted to give you first dibs since you were an early supporter.

— Marciano

---

### Never Activated (Signed up, never used)
**Sequence:** 2 emails over 7 days

#### Email 1 (Day 0): "Did we lose you?"

Subject: Did we lose you before you even started?

Body:
Hey [FirstName],

I noticed you signed up for Campfire but never actually joined a room. That's on us — we probably didn't explain what it was clearly enough.

Can I ask: **What stopped you from trying it?**

- Was the homepage confusing?
- Did you forget about it?
- Wasn't what you expected?

Your answer would help us fix the onboarding for others. Reply to this email or click here: [Survey Link]

Thanks,
— Marciano

#### Email 2 (Day 7): "Want a personal tour?"

Subject: Want a personal tour of Campfire?

Body:
Hey [FirstName],

Quick follow-up. If you're still curious about Campfire but weren't sure how to get started, I'd be happy to give you a quick personal tour (5 min, no pressure).

Just reply "yes" and I'll send you a time link.

Otherwise, no worries — thanks for signing up originally.

— Marciano

---

## Survey Questions

### Core Questions (All Segments)
1. What made you sign up for Campfire originally?
2. What were you hoping Campfire would help you do?
3. Why did you stop using it?
4. What would bring you back?
5. If you could change ONE thing about Campfire, what would it be?

### Feature-Specific Questions
6. Did you find interesting rooms/parties to join?
7. Were the rooms active (people in them)?
8. How was the video quality?
9. Did chat work well for you?
10. Did you try creating your own room?

### Future Features
11. Would you use Campfire for: [co-working] [study groups] [music discovery] [hanging with friends] [other]
12. Would you pay for premium features? If so, which features would be worth paying for?
13. Would you recommend Campfire to friends?

---

## Email Sending Strategy

### Technical Setup
- **Email Provider:** Brevo (French company, GDPR-compliant)
- **Sender:** marciano@campfire.gg (or founder@campfire.gg)
- **Reply-to:** Same address (personal replies encouraged)

### Sending Schedule
- **Week 1:** Recently Inactive (Email 1), Dormant (Email 1), Churned (Email 1)
- **Week 2:** Never Activated (Email 1 + 2), Recently Inactive (Email 2)
- **Week 3:** Dormant (Email 2)
- **Week 4:** Dormant (Email 3), Churned (Email 2)

### Success Metrics
- **Open rate:** Aim for 25-35%
- **Reply rate:** Aim for 5-10%
- **Survey completion:** Aim for 10-15%
- **Re-activation:** Aim for 2-5% (return to platform)

---

## Key Learnings from Responses

### What to Look For
- **Why they signed up** - Validates (or invalidates) your positioning
- **Why they left** - Reveals product gaps
- **What they wanted** - Shows feature priorities
- **Would they come back** - Tests market fit

### Potential Insights
- If most people say "no one in rooms" → prioritize populating default parties
- If most people say "couldn't find content" → prioritize discovery/curation
- If most people say "forgot about it" → prioritize notifications/reminders
- If most people say "didn't know what to do" → prioritize onboarding

---

## Action Plan

1. **Export user list from MongoDB** - Segment by last activity
2. **Create Brevo account** - Set up email templates
3. **Write personalized emails** - Use above templates as starting point
4. **Set up survey** - Google Forms or Typeform
5. **Send first batch** - Start with Recently Inactive
6. **Monitor replies** - Respond personally to every reply
7. **Analyze results** - Update product roadmap based on feedback
8. **Follow up with interested users** - Invite to beta/early access

---

## Budget

- **Brevo Free Plan:** 300 emails/day, up to 9,000/month (sufficient for 1,800 users across 4 weeks)
- **Survey Tool:** Google Forms (free) or Typeform (free tier)
- **Total Cost:** €0 (can scale to paid plan if needed)

---

## Timeline

- **Week 1:** Export users, set up Brevo, write emails
- **Week 2-5:** Send email sequences
- **Week 6:** Analyze results, compile insights
- **Week 7:** Share findings, update roadmap

**Total Duration:** 7 weeks

---

## Conclusion

This campaign is designed to extract maximum insights while re-engaging users authentically. The key is **listening more than selling**. Every reply is a data point that should inform the product roadmap.

If done right, this campaign will:
- ✅ Validate (or invalidate) product assumptions
- ✅ Surface feature priorities
- ✅ Re-activate 50-100 users organically
- ✅ Build goodwill (founder cares enough to ask)

Start small, iterate, and listen. 🔥`;

export default function ReengagementPage() {
  return (
    <EditablePage
      title="📧 Re-engagement Campaign"
      storageKey="campfire-reengagement"
      defaultContent={defaultContent}
    />
  );
}
