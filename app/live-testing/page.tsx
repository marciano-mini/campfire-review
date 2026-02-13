import EditablePage from '../components/EditablePage';

const defaultContent = `# Campfire.gg Live UX Audit Report

**Date:** February 13, 2026
**Grade:** 6/10

---

## Executive Summary

Campfire.gg is functional but has several usability issues around onboarding, party discovery, and feature discoverability.

**Key Strengths:**
- Simple, clean UI with modern dark theme
- Easy account creation (3 fields)
- Social login options (Discord, Bluesky)
- Chat functionality works reliably
- Video playback via YouTube embed is smooth

**Critical Issues:**
- No email verification required (security concern)
- Very low engagement - most parties empty (0 users)
- No clear way to create a new party
- Limited party content (mostly 24h parties with long queues)
- Points/gamification system is unclear in value
- Profile bug: Shows "Still Stingray" instead of username

---

## First Impressions

### What Worked Well
- Clean, modern design with good contrast
- Clear value proposition on homepage
- Simple navigation
- Visual hierarchy works well

### What Was Confusing
- "Campfire V2 is coming back February!" - creates uncertainty
- "Upgrade to Pro" upsell before experiencing core value
- "Daily Parties" vs "Live Parties" sections unclear
- No party count visible

### Overall Grade
- **Design quality:** 7/10
- **Visual polish:** 8/10
- **Brand personality:** 6/10

---

## User Flow Analysis

### 1. Sign-Up Flow
**Time:** ~30 seconds
**Issues:**
- No email verification (security risk)
- No password strength indicator
- No onboarding after signup
- "Level 0, 0 points" shown without explanation

### 2. Party Discovery
**Issues:**
- Most parties empty (0 users)
- No search functionality
- No filtering options
- Party URLs not human-readable

### 3. Joining a Party
**What Works:**
- Fast, no friction
- Video playback smooth
- Chat works reliably

**What Doesn't:**
- User count shows "0" even when joined
- No indication of being "in" a party
- Empty parties (no one to hang with)

### 4. Chat Functionality
**Works:**
- Message sending
- Timestamps
- Join/leave events

**Missing:**
- No message formatting
- No emoji picker (despite icon)
- No @mentions or replies
- No message reactions
- Can't edit/delete messages

### 5. Profile Issues
**Critical Bug:** Profile shows "Still Stingray" instead of actual username

---

## Top Recommendations

### High Priority
1. **Fix email verification** - Major security issue
2. **Fix profile name bug** - Confusing for users
3. **Add "Create Party" button** - Currently hidden or missing
4. **Populate some parties** - Empty parties kill engagement
5. **Add onboarding flow** - Guide new users

### Medium Priority
6. **Improve party discovery** - Add search, filters, tags
7. **Explain points system** - Currently meaningless
8. **Add notifications** - Alert when friends join
9. **Improve chat** - Add reactions, formatting, emoji
10. **Mobile optimization** - Test and fix mobile UX

### Quick Wins
- Show user count accurately
- Add "back" navigation
- Improve room URLs
- Add share buttons
- Show "you're here" indicator

---

## Conclusion

Campfire has solid fundamentals but needs polish. The core co-watching experience works, but empty rooms and missing social features kill engagement. Fix the critical issues (email verification, profile bug, create button) and populate some default parties to give new users something to experience.

**Grade: 6/10** - Works but needs improvement before scaling.`;

export default function LiveTestingPage() {
  return (
    <EditablePage
      title="🔍 Live Testing Report"
      storageKey="campfire-live-testing"
      defaultContent={defaultContent}
    />
  );
}
