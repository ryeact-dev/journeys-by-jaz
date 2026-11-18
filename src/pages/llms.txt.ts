import { SITE, NAME, EMAIL, PHONE_DISPLAY, PLAN_URL, DESCRIPTION, kinds } from '../data/site';

const anchors = ['theme-park', 'cruises', 'all-inclusive', 'group-travel'];

export function GET() {
  const body = `# ${NAME}

> ${DESCRIPTION} Journeys by Jaz is run by Jaz, an independent travel advisor affiliated with Enchanted Escapes Travel (Enchanted Escapes, LLC), an Authorized Disney Vacation Planner agency in Cypress, Texas. For a flat $35 planning fee, Jaz researches and sends 2–3 custom options within 3 days, with what is included clearly listed.

Key facts:
- Business type: vacation planner and travel agent (independent travel advisor). Works online with Houston-area travelers and clients across the United States.
- Planning fee: $35, flat, non-refundable, separate from travel costs. Travel costs are paid directly to the supplier (Disney, the cruise line, the resort); Enchanted Escapes Travel does not charge the customer's card.
- Turnaround: 2–3 custom options within 3 days of the signed service agreement, the $35 fee and trip details.
- Specialties: Walt Disney World, Disneyland, Universal Orlando, cruises (including from the Port of Galveston), all-inclusive resorts, group trips and reunions.
- Credentials: Florida Seller of Travel #ST40359; affiliated with Enchanted Escapes Travel (Cypress, TX).
- Contact: ${PHONE_DISPLAY}, ${EMAIL}

## Services
${kinds.map(([t, d], i) => `- [${t}](${SITE}/#${anchors[i]}): ${d}`).join('\n')}

## How it works and pricing
- [How to plan a Disney vacation on a budget in 3 steps](${SITE}/#how-it-works): Tell Jaz your dates, budget and travelers; she researches; you choose and book through a secure Enchanted Escapes Travel form.
- [What the $35 planning fee covers](${SITE}/#planning-fee): 2–3 custom options, delivery in 3 days, honest advice, a personal contact before, during and after the trip, booking handled for you, and a travel insurance quote.
- [Start planning (join the travel list)](${PLAN_URL}): The form to share dates and budget and begin.

## About
- [Meet Jaz](${SITE}/#about): Who Jaz is, why she loves cruises, and how booking through Enchanted Escapes Travel works.
- [Frequently asked questions](${SITE}/#faq): Fees, whether agents are cheaper, vacation costs, Disney and Universal planning, all-inclusive resorts, Galveston cruises, group trips, how booking works, legitimacy.

## Optional
- [Full site content in one file](${SITE}/llms-full.txt): Complete text of the site, including every FAQ answer.
- [Sitemap](${SITE}/sitemap.xml)
- [robots.txt](${SITE}/robots.txt)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
