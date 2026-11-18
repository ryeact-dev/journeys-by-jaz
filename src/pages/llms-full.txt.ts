import { SITE, NAME, EMAIL, PHONE_DISPLAY, PLAN_URL, DESCRIPTION, LAST_MOD, kinds, steps, covers, who, faqs } from '../data/site';

export function GET() {
  const body = `# ${NAME}: full site content

> ${DESCRIPTION}

Source: ${SITE}/ · Last updated: ${LAST_MOD} · Contact: ${PHONE_DISPLAY}, ${EMAIL} · Start planning: ${PLAN_URL}

## Overview
Journeys by Jaz is a vacation planner and travel agent for Disney, Universal Orlando, all-inclusive resort, cruise and group trips. For a $35 planning fee, Jaz researches and sends 2–3 custom options in 3 days, with what is included clearly listed. Jaz works online with Houston-area travelers and is affiliated with Enchanted Escapes Travel in Cypress, Texas.

Headline: Vacations planned around your budget. Planned for you.
Tagline: Tell me your dates and your budget, and in 3 days you’ll get 2–3 custom options with everything included spelled out. $35 planning fee · Options in 3 days · No pressure.

## Planning a vacation shouldn’t feel like a second job
Between park tickets, resort rooms, cabins and payment dates, one trip can mean twenty open tabs. Jaz compares the options, keeps the total in view and handles the booking, so you can spend your time looking forward to the trip. Whether it’s a theme-park week, a cruise, an all-inclusive escape, a couples getaway or a trip with friends or family, you get a plan built around your budget.

## Vacations Jaz plans for every kind of traveler
${kinds.map(([t, d]) => `### ${t}\n${d}`).join('\n\n')}

## How to plan a Disney vacation on a budget in 3 steps
${steps.map(([n, t, d]) => `${Number(n)}. **${t}**: ${d}`).join('\n')}

## What the $35 vacation planning fee covers
${covers.map(([a, b]) => `- ${a}${b ? `: ${b}` : ''}`).join('\n')}

### Why a small planning fee
Good planning takes real time: comparing resorts, sailings, cabin categories and dates to find what actually fits your budget. The $35 planning fee covers that research and lets Jaz focus fully on your trip. It’s separate from your travel costs, and it’s a small price next to the hours you’d spend searching on your own. The planning fee is non-refundable. It covers the time spent on research, consultation and itinerary building. It is separate from your travel costs (park tickets, resorts, cruises and so on).

## Meet Jaz, your vacation planner
I love cruises because you get to see a lot in a short amount of time without constantly packing up and moving from place to place. I also love that everything you need is right there: food, entertainment, activities and relaxation, so it feels easy while still giving you a full vacation experience.

I’m an independent travel advisor affiliated with Enchanted Escapes Travel (Enchanted Escapes, LLC), an Authorized Disney Vacation Planner agency in Cypress, Texas. I work online with Houston-area families and travelers across the United States.

## What that means for you
${who.map(([a, b]) => `- **${a}** ${b}`).join('\n')}

## Frequently asked questions
${faqs.map(([q, a]) => `### ${q}\n${a}`).join('\n\n')}

## Contact and legal
- Phone: ${PHONE_DISPLAY}
- Email: ${EMAIL}
- Start planning: ${PLAN_URL}
- Journeys by Jaz is an independent travel advisor affiliated with Enchanted Escapes Travel (Enchanted Escapes, LLC), Cypress, TX. Florida Seller of Travel #ST40359.
- Prices and availability are subject to change without notice. As to Disney artwork and logos: © Disney. Disney Cruise Line ships’ registry: The Bahamas. Journeys by Jaz is not owned or operated by The Walt Disney Company.
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
