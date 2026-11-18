// Single source of truth for page content, structured data, llms.txt and sitemap.
export const SITE = 'https://journeysbyjaz.com';
export const NAME = 'Journeys by Jaz';
export const EMAIL = 'journeysbyjaz@gmail.com';
export const PHONE_E164 = '+17138870363';
export const PHONE_DISPLAY = '(713) 887-0363';
export const PLAN_URL = 'https://go.journeysbyjaz.com/join-the-travel-list';
export const TAGLINE = 'Vacations planned around your budget. Planned for you.';
export const DESCRIPTION = 'Houston-area travel agent and vacation planner for Disney, Universal Orlando, all-inclusive resorts, cruises and group trips. 2–3 custom options in 3 days.';
export const TITLE = 'Houston Vacation Planner & Travel Agent | Journeys by Jaz';
export const LAST_MOD = new Date().toISOString().slice(0, 10);
// Add profile URLs here (Facebook, Instagram, TikTok, Google Business Profile...) and they flow into the Organization schema.
export const SAME_AS: string[] = [];

export const kinds: [string, string, string, string][] = [
  ['Theme-park vacations', 'Walt Disney World, Disneyland or Universal Orlando? I compare resorts, tickets and dining to fit your budget, so you get the magic without overspending or overplanning.', './img/theme-park.webp', 'A lively cruise ship pool deck with a lifeguard and families swimming'],
  ['Cruises, including from Galveston', 'Disney Cruise Line or another cruise line, your first sailing or your fifth. I help you choose the ship, cabin and itinerary, and for Houston-area travelers, a port you can drive to.', './img/cruises.webp', 'Two large cruise ships docked side by side at a sunny port'],
  ['All-inclusive resorts', 'One price, fewer surprises. Couples, families or friends: I compare all-inclusive resorts by what’s included and the total cost, so you can relax from the moment you arrive.', './img/all-inclusive.webp', 'Resort towers beside a calm lagoon and sandy beach under blue sky'],
  ['Group trips and reunions', 'Traveling with friends, cousins, grandparents or a whole crowd? I compare options for the whole group and keep the details in one plan.', './img/group-trips.webp', 'Groups gathered around hot tubs and the pool on a cruise ship deck'],
];

export const steps: [string, string, string, string][] = [
  ['01', 'Tell me your plan', 'Share your dates, budget, who’s going (including kids’ ages) and the kind of trip you want. It takes about 2 minutes.', ''],
  ['02', 'I do the research', 'Once you sign the simple service agreement and pay the $35 planning fee, I compare resorts, tickets, sailings and prices. Your 2–3 options arrive within 3 days.', 'dark'],
  ['03', 'Choose and book', 'Pick the option you love, then complete one secure Enchanted Escapes Travel booking form. I’ll handle the booking and stay in touch before, during and after your trip.', 'or'],
];

export const covers: [string, string][] = [
  ['2–3 custom Disney, cruise or vacation options', 'built around your budget and preferences'],
  ['Your options in 3 days', ''],
  ['Honest advice', 'on resorts, tickets, cabins, hotels and packages'],
  ['Fees upfront', 'The planning fee is $35, separate from your travel costs.'],
  ['A personal contact', 'before, during and after your trip'],
  ['Booking handled for you', 'Payments go directly to the travel supplier.'],
  ['A travel insurance quote', 'so you can decide whether to protect your trip'],
];

export const who: [string, string][] = [
  ['One real person.', 'You talk to me before, during and after your trip.'],
  ['An established agency behind me.', 'Your booking goes through Enchanted Escapes Travel.'],
  ['Your card is charged by the supplier.', 'Payments go directly to Disney, the cruise line or the resort. Enchanted Escapes Travel does not charge your card.'],
  ['Fees upfront.', 'The planning fee is $35, separate from your travel costs.'],
];

export const faqs: [string, string][] = [
  ['What does a travel agent do, and is it worth it?', "A travel agent researches your options, matches them to your budget, books the trip and stays reachable if plans change. It's worth it when you're comparing resorts, tickets, cruises or cabins across many tabs. For a simple one-stop trip, booking direct may be enough. I send you 2–3 custom options so you can compare real totals."],
  ['How much does Journeys by Jaz charge, and why a fee?', 'A flat, non-refundable $35 planning fee covers your 2–3 custom options. Good planning takes real time: comparing resorts, sailings, cabins and dates to find what fits your budget. The fee is separate from your travel costs, which you pay directly to the resort, cruise line or other supplier. Please read the service agreement before you pay.'],
  ['Is it cheaper to book through a travel agent?', 'Not automatically. Resorts, parks and cruise lines set their own prices, so no agent can promise a lower rate. What I can do is find the option that fits your budget and show what’s included before you book, so there are no surprises at checkout.'],
  ['How much does a vacation cost?', 'It depends on your dates, group size, destination and how you travel. Most trips add up from tickets or activities, lodging, food, transportation and extras. Cruises add gratuities, excursions and travel to the port. I build 2–3 options around your budget and show what’s included and what costs extra, so you can compare real totals.'],
  ['Can you plan Disney and Universal Orlando vacations?', 'Yes. I plan Walt Disney World, Disneyland and Universal Orlando vacations, comparing resorts, tickets and dining to fit your budget. Tell me your dates, who’s traveling and what you want to spend, and you’ll get 2–3 options that show what’s included and what costs extra.'],
  ['Can you plan an all-inclusive resort vacation?', 'Yes. I compare all-inclusive resorts for couples, families and groups, such as options in Mexico and the Caribbean, by what’s included, room types, extras and total price. You’ll see what’s covered and what costs extra before you book, so there are no surprises on arrival.'],
  ['Do you plan cruises from Galveston for Houston-area travelers?', 'Yes. Several cruise lines sail from the Port of Galveston, about an hour from Houston, so you can drive instead of fly. Disney Magic has run 4-, 5- and 7-night trips there. Dates change, so I check the current schedule, then compare sailings, cabins, parking and a pre-cruise hotel night. I work online with Houston-area travelers and clients across the U.S.'],
  ['Can you plan group trips and reunions?', 'Yes. I plan trips for friend groups, extended families and reunions on cruises, at resorts and at theme parks. I compare options for the whole group, keep the details in one plan, and tell you up front what each choice costs, so everyone knows what to expect.'],
  ['What do I get, and how do I book?', "You get 2–3 custom options within 3 days, once I have your signed service agreement, the $35 fee and your trip details. Pick your favorite, then complete the secure Enchanted Escapes Travel booking form. It doesn't charge your card. The supplier does, and it can take up to 48 hours. You can pay a deposit or deposit plus remaining payments, and request a travel insurance quote."],
  ['Is Journeys by Jaz a legitimate travel agency?', 'Journeys by Jaz is an independent travel advisor affiliated with Enchanted Escapes Travel (Enchanted Escapes, LLC) in Cypress, Texas, Florida Seller of Travel #ST40359. The agency states that Disney Destinations designated it an Authorized Disney Vacation Planner. I book through Enchanted Escapes Travel, and you pay the supplier directly.'],
];

