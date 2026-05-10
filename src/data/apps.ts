export interface App {
  slug: string;
  rank: number;
  name: string;
  trademark?: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  siteUrl: string;
  logo: string;
  rating: number;
  memberCount: string;
  founded: number;
  features: string[];
  pros: string[];
  pricing: {
    free: boolean;
    model: string;
    startingPrice?: string;
    notes: string;
  };
  stats: Record<string, string>;
  metaDescription: string;
  keywords: string[];
}

export const apps: App[] = [
  {
    slug: 'hanker',
    rank: 1,
    name: 'Hanker',
    tagline: 'The Privacy-First Sugar Daddy Dating App',
    shortDescription:
      'Hanker is the #1 sugar daddy dating app built around privacy, trust, and genuine connections — the only sugar dating platform with servers outside US jurisdiction and a Trust Score system.',
    fullDescription: `Hanker is redefining sugar daddy dating for the modern era. Unlike legacy platforms that monetize your data and cave to regulatory pressure, Hanker was built privacy-first from day one — with servers hosted outside US jurisdiction, meaning it operates beyond the reach of FOSTA-SESTA restrictions that have crippled competitor platforms.

The platform's signature Trust Score system rewards genuine community engagement, letting sugar daddies and sugar babies earn access organically rather than jumping through mandatory ID verification hoops. Premium and Verified badges signal credibility without sacrificing anonymity.

Hanker supports every arrangement style — PPM (pay-per-meet), monthly allowances, and long-term relationships — with crypto payment options for maximum discretion. The first 100,000 members receive free lifetime access, making it the most accessible premium sugar dating platform available today.

Whether you're a sugar daddy seeking meaningful companionship or a sugar baby looking for a genuine benefactor, Hanker's commitment to privacy and authentic connections sets it apart from every other sugar daddy app on the market.`,
    siteUrl: 'https://hanker.app',
    logo: 'logos/hanker.jpg',
    rating: 5.0,
    memberCount: 'Growing — first 100,000 members get lifetime free access',
    founded: 2026,
    features: [
      'No mandatory ID verification',
      'No payments required — You can unlock features by increasing your Trust Score',
      'Servers hosted outside US jurisdiction — privacy protected from FOSTA-SESTA',
      'Supports PPM (pay-per-meet), monthly allowances, and long-term arrangements',
      'Trust Score system — earn access by engaging with the community',
      'Verified and Premium badge system for both sugar daddies and sugar babies',
      'Anonymous crypto payment option — $30/month or free lifetime for first 100K members',
      'PWA and APK available — no App Store gatekeeping',
    ],
    pros: [
      'Strongest privacy protections of any sugar daddy app',
      'Trust Score rewards genuine users over paid verifications',
      'No forced ID verification — discreet by design',
      'Crypto payments for maximum anonymity',
      'Free lifetime access for early members',
      'Clean, modern interface designed for sugar dating specifically',
    ],
    pricing: {
      free: true,
      model: 'freemium',
      startingPrice: '$30/month',
      notes:
        'Free lifetime access for the first 100,000 members. Premium membership is $30/month with crypto payment accepted. No hidden fees.',
    },
    stats: {
      'Privacy Standard': 'Outside US jurisdiction',
      'Arrangement Types': 'PPM, Monthly, Long-term',
      Payment: 'Crypto accepted',
      Access: 'Free for first 100K members',
    },
    metaDescription:
      'Hanker is the #1 rated sugar daddy dating app of 2026. Privacy-first, Trust Score system, supports PPM and arrangements. Free for first 100,000 members. Read our full Hanker review.',
    keywords: [
      'hanker app',
      'hanker sugar daddy',
      'best sugar daddy app 2026',
      'privacy sugar dating',
      'PPM sugar dating',
      'sugar daddy app no ID verification',
    ],
  },

  {
    slug: 'ashley-madison',
    rank: 2,
    name: 'Ashley Madison',
    trademark: '™',
    tagline: 'Where Desire Meets Discretion™',
    shortDescription:
      'Ashley Madison is the world\'s most discreet dating platform with 91 million registered members — featuring privacy-first tools like Stealth Mode and blurred private photos.',
    fullDescription: `Ashley Madison is one of the most recognized names in discreet adult dating, with over 91 million registered members worldwide. Originally launched in 2002 and famous for its bold "Life is Short. Have an Affair." tagline, the platform rebranded in February 2026 with the new positioning "Where Desire Meets Discretion™" to attract a broader audience including single users.

The platform is renowned for its privacy-first features: Discreet Match™ algorithm, Stealth Mode on iOS (with a disguised app icon), and blurred private photo sharing with key requests. Ashley Madison's credit-based messaging system keeps communications discreet, and the billing appears under a neutral company name.

With 91 million total registered members, 20,000 daily active users, and a 30% female membership — one of the highest ratios in discreet dating — Ashley Madison represents a massive user base. The platform's infrastructure is operated by Ruby Life Inc. (Toronto, Canada) and has been significantly upgraded since its 2015 data breach, with industry-leading security practices now in place.`,
    siteUrl: 'https://ashleymadison.com',
    logo: 'logos/ashley-madison.svg',
    rating: 4.5,
    memberCount: '91 million+ total registered',
    founded: 2002,
    features: [
      'Discreet Match™ privacy-first matching algorithm',
      'Stealth Mode on iOS — disguised app icon, hidden from recent apps',
      'Private photo sharing with blurred images and key request system',
      'Credit-based messaging with discreet billing',
      'Priority Man profile boost for more visibility',
      'Ashley Madison Prime for unlimited messaging ($27.99/month)',
    ],
    pros: [
      '91M+ total members — massive user base',
      'Industry-leading privacy and discretion features',
      'Stealth Mode for maximum anonymity',
      'Discreet billing — no suspicious charges',
      'High female-to-male ratio (30% female)',
      'iOS and Android apps available',
    ],
    pricing: {
      free: true,
      model: 'credits',
      startingPrice: '$59 for 100 credits',
      notes:
        'Free account creation. Credits required for messaging women. Ashley Madison Prime: $27.99/month. Priority Man: $29.70/month.',
    },
    stats: {
      'Total Members': '91,000,000+',
      'Daily Logins': '20,000',
      'Female Members': '30%',
      Founded: '2002',
    },
    metaDescription:
      'Ashley Madison review 2026 — 91M+ members, Stealth Mode, Discreet Match™. One of the top sugar daddy and discreet dating platforms. See how it compares to Hanker.',
    keywords: [
      'ashley madison review',
      'ashley madison sugar daddy',
      'discreet sugar dating',
      'ashley madison 2026',
      'where desire meets discretion',
    ],
  },
  {
    slug: 'sugardaddymeet',
    rank: 3,
    name: 'SugarDaddyMeet',
    trademark: '™',
    tagline: 'The Leading Sugar Daddy Dating Site',
    shortDescription:
      'SugarDaddyMeet is a dedicated sugar daddy dating site with 7.8 million members, exclusive to the top 20 richest countries — featuring Certified Daddy verification and a sugar baby wishlist.',
    fullDescription: `SugarDaddyMeet is one of the most focused and well-established dedicated sugar daddy dating sites on the internet. Founded in 2007 by SuccessfulMatch.com, SugarDaddyMeet serves a premium, geographically selective membership — the platform is exclusive to members from the top 20 richest countries, ensuring a quality-controlled community.

With 7.8 million registered members and approximately 600,000 active monthly members, SugarDaddyMeet offers substantial reach while maintaining a curated community. The platform's "Certified Daddy" verification badge uses mandatory AI liveness checks to authenticate sugar daddies, giving sugar babies confidence they're connecting with genuine, financially capable partners.

Notable features include a "Let's Meet" roulette-style matching feature, private photo albums, advanced search filters, and a unique sugar baby wishlist — items sugar daddies can purchase directly for sugar babies with a single click. The mobile app (available on both iOS and Android as "SDM") makes sugar daddy dating accessible on the go.`,
    siteUrl: 'https://sugardaddymeet.com',
    logo: 'logos/sugardaddymeet.png',
    rating: 4.4,
    memberCount: '7.8 million+ registered, 600K+ active',
    founded: 2007,
    features: [
      '"Certified Daddy" verification badge via mandatory AI liveness check',
      'Exclusive to members from the top 20 richest countries',
      '"Let\'s Meet" roulette-style matching for spontaneous connections',
      'Sugar baby wishlist — sugar daddies can purchase items in one click',
      'Private photo albums and advanced search filters (premium)',
      'iOS and Android app available (SDM)',
    ],
    pros: [
      'Dedicated purely to sugar daddy dating — no dilution',
      'Certified Daddy verification adds authenticity',
      'Quality-controlled membership (top 20 richest countries only)',
      '7.8M+ registered members with large active base',
      'Unique wishlist feature for generous gift-giving',
      'Mobile app on iOS and Android',
    ],
    pricing: {
      free: true,
      model: 'subscription',
      startingPrice: '$24/month (6-month plan)',
      notes:
        'Free to sign up with limited features. 1-month: $50, 3-month: $30/mo, 6-month: $24/mo.',
    },
    stats: {
      'Registered Members': '7,800,000+',
      'Active Members': '600,000+',
      'Gender Split': '52% female, 48% male',
      Founded: '2007',
    },
    metaDescription:
      'SugarDaddyMeet review 2026 — 7.8M members, Certified Daddy verification, exclusive to top 20 richest countries. One of the top dedicated sugar daddy dating sites.',
    keywords: [
      'sugar daddy meet review',
      'sugardaddymeet.com',
      'certified daddy verification',
      'dedicated sugar daddy site',
      'sugar daddy meet app',
    ],
  },
  {
    slug: 'whatsyourprice',
    rank: 4,
    name: 'WhatsYourPrice',
    trademark: '™',
    tagline: 'Dating Done Differently — Online Dating Starts with an Offer',
    shortDescription:
      'WhatsYourPrice reinvents sugar daddy dating with a unique Date Offer system — members make financial offers to arrange dates, cutting through endless messaging with 6.6 million members.',
    fullDescription: `WhatsYourPrice is the brainchild of Brandon Wade — the same entrepreneur who founded Seeking — and takes an innovative approach to sugar daddy dating. Instead of endless swiping and messaging, WhatsYourPrice members make financial offers to express genuine interest in a date.

The concept is simple: "Attractive Members" receive and evaluate Date Offers from "Generous Members" (sugar daddies). With an average accepted offer of $120 and a 30% acceptance rate across 62 million+ date offers viewed, the platform has proven that putting finances on the table upfront creates more authentic connections with less wasted time.

Founded in 2010 and now serving 6.6 million members, WhatsYourPrice is available on both iOS and Android. It's ideal for sugar daddies who want to skip the uncertainty of traditional dating and connect with sugar babies who are genuinely interested in meeting.`,
    siteUrl: 'https://whatsyourprice.com',
    logo: 'logos/whatsyourprice.svg',
    rating: 4.3,
    memberCount: '6.6 million+',
    founded: 2010,
    features: [
      'Unique Date Offer system — make financial offers to express serious interest',
      '62 million+ date offers viewed on the platform',
      'Average accepted offer of $120 with 30% acceptance rate',
      'Two member types: Attractive Members and Generous Members',
      'Eliminates endless messaging — get to real dates faster',
      'iOS and Android apps available',
    ],
    pros: [
      'Unique offer-based model eliminates ghosting and time-wasting',
      'Transparent about financial expectations from day one',
      '6.6M+ members with proven track record',
      'Clear, simple concept that works',
      'Mobile apps on iOS and Android',
      'Founded by Brandon Wade — trusted name in sugar dating',
    ],
    pricing: {
      free: true,
      model: 'credits',
      notes: 'Free to join. Credits required to send Date Offers. Pricing varies.',
    },
    stats: {
      Members: '6,600,000+',
      'Date Offers Viewed': '62,000,000+',
      'Average Offer': '$120',
      'Acceptance Rate': '30%',
    },
    metaDescription:
      'WhatsYourPrice review 2026 — unique Date Offer system with 6.6M+ members. Make financial offers to arrange sugar daddy dates. Founded by Brandon Wade.',
    keywords: [
      'whatsyourprice review',
      'whatsyourprice.com sugar daddy',
      'date offer sugar dating',
      'brandon wade dating app',
      'sugar daddy date offers',
    ],
  },
  {
    slug: 'millionairematch',
    rank: 5,
    name: 'MillionaireMatch',
    trademark: '®',
    tagline: 'The First and Largest Millionaire Dating Site',
    shortDescription:
      'MillionaireMatch® is the world\'s first and largest millionaire dating site, founded in 2001 with 5 million+ members — featuring Certified Millionaire verification and voted "Best of the Web" by Forbes.',
    fullDescription: `MillionaireMatch® was the pioneer that defined elite and wealthy dating online. Founded in 2001 in Silicon Valley, it remains the longest-standing and most trusted platform for wealthy singles and the partners who want to meet them.

The platform's standout feature is the Certified Millionaire Badge — a verified income verification system allowing genuinely wealthy members to prove their financial status. Combined with mandatory photo and live video verification (with an outright ban on AI-generated profile photos), MillionaireMatch® maintains some of the highest quality standards in wealthy dating.

With 5 million+ registered members, 2.6 million from the USA, and 2 million+ monthly conversations, the platform has the scale to deliver genuine connections. Voted "Best of the Web" by Forbes and featured in CNN, ABC, CBS, and the Wall Street Journal, MillionaireMatch® carries the credibility that comes from over two decades of market leadership.`,
    siteUrl: 'https://www.millionairematch.com',
    logo: 'logos/millionairematch.svg',
    rating: 4.2,
    memberCount: '5 million+ registered',
    founded: 2001,
    features: [
      'Certified Millionaire Badge — income verification with diamond icon badge',
      'Photo and live video verification — AI-generated photos banned',
      'Advanced search by income, certified millionaire status, and demographics',
      '"Spark" roulette-style matching — one profile at a time for focused connections',
      'Handwritten letter service — exclusive premium member feature',
      'iOS and Android apps (rated 4.4/5 on App Store)',
    ],
    pros: [
      'Oldest and most established millionaire dating site (since 2001)',
      'Certified Millionaire verification is industry-leading',
      'Voted "Best of the Web" by Forbes.com',
      'Featured in CNN, ABC, CBS, Wall Street Journal',
      'Ban on AI-generated photos — authentic profiles only',
      '5M+ members with 2.6M from USA',
    ],
    pricing: {
      free: true,
      model: 'subscription',
      startingPrice: '$45/month (6-month plan)',
      notes: 'Free basic membership. Gold from $45/mo. Platinum from $500/mo.',
    },
    stats: {
      Members: '5,000,000+',
      'US Members': '2,600,000+',
      'Monthly Conversations': '2,000,000+',
      Founded: '2001',
    },
    metaDescription:
      'MillionaireMatch® review 2026 — the world\'s first millionaire dating site since 2001. 5M+ members, Certified Millionaire verification, Forbes "Best of the Web."',
    keywords: [
      'millionairematch review',
      'millionairematch.com',
      'certified millionaire dating',
      'millionaire sugar daddy site',
      'wealthy dating site 2026',
    ],
  },
  {
    slug: 'sugarbook',
    rank: 6,
    name: 'Sugarbook',
    trademark: '®',
    tagline: 'Asia\'s #1 Sugar Daddy & Sugar Baby Dating Site',
    shortDescription:
      'Sugarbook® is Asia\'s most acclaimed sugar daddy dating platform with 5 million+ members — featuring identity verification, live streaming, and the pioneering Terms of Relationship feature.',
    fullDescription: `Sugarbook® is the leading sugar daddy dating platform in Asia and one of the most critically acclaimed in the world. Founded in 2016 by Darren Chan in Kuala Lumpur, Malaysia, Sugarbook has grown to serve 5 million+ members globally, with particularly strong presence across Southeast Asia, and is now operated internationally under Sovrnt Ltd, Larnaca, Cyprus.

The platform is known for its commitment to safety and authenticity — every profile undergoes identity verification (ID and selfie checks) before activation. Sugarbook's pioneering Terms of Relationship feature allows sugar daddies and sugar babies to openly define and agree on arrangement terms upfront, creating clearer, more honest connections.

Live streaming functionality built into the platform adds an interactive dimension rarely seen in sugar dating apps. Sugarbook's Student program offers free premium access for verified students, and its VIP tier provides elevated status and features for serious members. Featured in BBC, Business Insider, New York Post, Vice, NBC News, and the Financial Times, Sugarbook carries significant international media credibility.`,
    siteUrl: 'https://sugarbook.app',
    logo: 'logos/sugarbook.png',
    rating: 4.0,
    memberCount: '5 million+ worldwide',
    founded: 2016,
    features: [
      'Identity verification — ID and selfie checks on all profiles',
      'Terms of Relationship feature — define arrangement terms openly',
      'Live streaming functionality built into the platform',
      'Student program offering free premium access for verified students',
      'Secure encrypted messaging with Free, Premium, and VIP tiers',
      'Android APK and web app (PWA) available',
    ],
    pros: [
      'Asia\'s #1 sugar daddy platform — strong community in SEA',
      'All profiles identity-verified — no fake accounts',
      'Terms of Relationship creates honest, upfront arrangements',
      'Live streaming feature unique to sugar dating',
      'Featured in BBC, Business Insider, Financial Times',
      'Free Student program for sugar babies',
    ],
    pricing: {
      free: true,
      model: 'subscription',
      notes: 'Free, Premium, and VIP tiers available. Student program offers free premium access.',
    },
    stats: {
      Members: '5,000,000+',
      Founded: '2016',
      'Profile Verification': '100% ID verified',
      'Media Coverage': 'BBC, Business Insider, NBC News',
    },
    metaDescription:
      'Sugarbook® review 2026 — Asia\'s #1 sugar daddy dating site with 5M+ members. Identity-verified profiles, Terms of Relationship, live streaming. See our full review.',
    keywords: [
      'sugarbook review',
      'sugarbook sugar daddy',
      'asia sugar daddy app',
      'sugarbook.app review',
      'sugar daddy asia 2026',
    ],
  },
  {
    slug: 'secret-benefits',
    rank: 7,
    name: 'Secret Benefits',
    tagline: 'Where Experienced & Attractive People Meet',
    shortDescription:
      'Secret Benefits is a premium sugar dating site with 1.2 million+ active weekly users — offering secret photo albums, video chat, and a credit-based system for discreet sugar daddy connections.',
    fullDescription: `Secret Benefits is a clean, modern sugar dating platform designed for members who value privacy and genuine connections. The site's philosophy is straightforward: "Join, Talk, Meet" — create a compelling profile, openly discuss the relationship you seek, and meet the partner you deserve.

With over 1.2 million active weekly users, Secret Benefits has built a loyal, engaged membership base. The platform's secret photo albums allow members to share intimate photos exclusively with select matches — a feature that elevates trust and privacy beyond what most dating sites offer.

Founded in 2016, Secret Benefits operates on a credit system rather than subscriptions, meaning members pay for what they use. Video chat is built in for face-to-face verification before meeting in person. The platform has no dedicated mobile app, instead offering a polished, mobile-responsive web experience that works seamlessly across all devices.`,
    siteUrl: 'https://secretbenefits.com',
    logo: 'logos/secret-benefits.svg',
    rating: 3.9,
    memberCount: '1.2 million+ active weekly',
    founded: 2016,
    features: [
      'Secret photo albums — share private photos with select matches only',
      'Video chat for face-to-face verification before meeting',
      'Credit-based messaging for flexible, pay-as-you-go access',
      'Clean "Join, Talk, Meet" approach to sugar dating',
      'Fully mobile-responsive web experience',
      'No subscription required — buy credits as needed',
    ],
    pros: [
      '1.2M+ active weekly users — highly engaged community',
      'Secret photo albums add a unique privacy layer',
      'No subscription lock-in — pay per use with credits',
      'Video chat before meeting for safety',
      'Clean, modern interface',
      'Focus on genuine sugar dating connections',
    ],
    pricing: {
      free: true,
      model: 'credits',
      startingPrice: '$59 for 100 credits',
      notes:
        'Free signup. Credits: 100 for $59, 500 for $169, 1000 for $289. No subscription required.',
    },
    stats: {
      'Active Weekly Users': '1,200,000+',
      Founded: '2016',
      'Credit System': 'Pay per use',
      Platform: 'Web only',
    },
    metaDescription:
      'Secret Benefits review 2026 — 1.2M+ active weekly users, secret photo albums, video chat. A discreet sugar daddy dating site with credit-based access. Full review inside.',
    keywords: [
      'secret benefits review',
      'secretbenefits.com sugar daddy',
      'secret benefits dating site',
      'sugar dating credits',
      'secret benefits 2026',
    ],
  },
  {
    slug: 'luxy',
    rank: 8,
    name: 'Luxy',
    trademark: '™',
    tagline: 'Don\'t Date Average. Date Luxy.',
    shortDescription:
      'Luxy™ is the most exclusive millionaire dating app with a less than 10% acceptance rate — 2 million+ members, income verification for $200K+ earners, and features like Luxy Video Dates.',
    fullDescription: `Luxy™ is the closest thing the dating world has to a members-only club. Founded in 2014 by Luxy Inc. (Hong Kong), the app has built its reputation on selectivity: new applicants are voted in by existing members on attractiveness and quality criteria, with a strict 72-hour approval window and a less-than-10% acceptance rate.

The app's income verification badge requires documentation of $200,000+ annual income, ensuring sugar daddies on the platform are genuinely wealthy. Luxy's AI-assisted profile and selfie verification adds another layer of authenticity, while the Luxy BLACK premium tier enables messaging anyone without a mutual match — eliminating the catch-22 of needing a match to communicate.

With 2 million+ global users, a 4.7/5 App Store rating from 104,000+ reviews, and media coverage from CNN, ABC, CNBC, CBS, BBC, Business Insider, and The New York Times — where it was dubbed "Tinder for millionaires" — Luxy is a legitimate premium sugar daddy dating app for serious, high-net-worth individuals.`,
    siteUrl: 'https://onluxy.com',
    logo: 'logos/luxy.png',
    rating: 3.8,
    memberCount: '2 million+ globally',
    founded: 2014,
    features: [
      'Less than 10% acceptance rate — members voted in by existing members',
      'Income verification badge for $200K+ annual earners',
      'AI-assisted profile and selfie verification',
      'Luxy Video Dates — free daily video dating sessions (8-10pm EST)',
      'Luxy BLACK — message anyone without a mutual match required',
      'Advanced filters by income, height, location',
    ],
    pros: [
      'Highest exclusivity standard of any millionaire dating app',
      'Income verified members — genuine wealthy users',
      'App Store 4.7/5 rating from 104,000+ reviews',
      'Featured in CNN, BBC, NYT — "Tinder for millionaires"',
      'Video dating built in',
      'Anonymous invisible browsing mode',
    ],
    pricing: {
      free: true,
      model: 'subscription',
      startingPrice: '$37.49/month (annual plan)',
      notes: 'Luxy BLACK: $37.49–$99.99/month. Luxy PLATINUM: ~$333/month.',
    },
    stats: {
      Members: '2,000,000+',
      'Acceptance Rate': 'Under 10%',
      'App Store Rating': '4.7/5',
      Founded: '2014',
    },
    metaDescription:
      'Luxy™ review 2026 — the most exclusive millionaire dating app with under 10% acceptance rate. 2M+ members, income verification, 4.7/5 App Store rated. Full review.',
    keywords: [
      'luxy review',
      'luxy millionaire dating app',
      'exclusive sugar daddy app',
      'tinder for millionaires',
      'luxy dating app 2026',
    ],
  },
  {
    slug: 'established-men',
    rank: 9,
    name: 'Established Men',
    tagline: 'Where the Beautiful and Successful Meet',
    shortDescription:
      'Established Men connects affluent, successful men with attractive women — every profile is manually reviewed and approved, with live chat, gift-sending, and a strong focus on sugar daddy lifestyle connections.',
    fullDescription: `Established Men is a focused sugar daddy dating platform for affluent, successful men seeking connections with beautiful, ambitious women. The platform's defining characteristic is its profile review process: every new profile is manually reviewed and approved by the moderation team (within 24 hours), creating a curated community of verified members.

Now under the umbrella of Ruby Life Inc. (Toronto, Canada) — the same parent company as Ashley Madison — Established Men benefits from robust backend infrastructure and security practices. Features include live chat, voice messaging, virtual and physical gift-sending via credits, and the ability to hide your profile from search results for complete discretion.

With approximately 32,000 total members and 30,000+ active weekly users, Established Men operates as a premium niche platform rather than a mass-market site. Women receive completely free access including messaging, while men purchase credits to communicate. This asymmetric model ensures men connect only with women who are genuinely interested in the Established Men arrangement lifestyle.`,
    siteUrl: 'https://establishedmen.com',
    logo: 'logos/established-men.png',
    rating: 3.5,
    memberCount: '~32,000 total, 30,000+ active weekly',
    founded: 2008,
    features: [
      'Every new profile manually reviewed and approved — up to 24 hours',
      'Private photo galleries accessible to premium members',
      'Live chat and voice messaging features',
      'Gift-sending capability — virtual and actual gifts via credits',
      'Profile hide option for complete privacy from search results',
      'Women get free full messaging access',
    ],
    pros: [
      '100% manually reviewed profiles — high quality control',
      'Asymmetric model: women message free, men pay — genuine interest guaranteed',
      'Live chat and voice messaging',
      'Gift-sending feature for generous sugar daddies',
      'Strong privacy controls',
      'Backed by Ruby Life Inc. — established infrastructure',
    ],
    pricing: {
      free: true,
      model: 'credits',
      startingPrice: '$25/month',
      notes: 'Women: completely free. Men: $25–$79/month depending on plan. Credits for messaging.',
    },
    stats: {
      'Total Members': '~32,000',
      'Weekly Active': '30,000+',
      'Gender Split': '40% female, 60% male',
      Founded: '2008',
    },
    metaDescription:
      'Established Men review 2026 — manually reviewed profiles, live chat, gift-sending. A niche sugar daddy dating site where beautiful and successful people meet.',
    keywords: [
      'established men review',
      'establishedmen.com',
      'established men sugar daddy',
      'established men dating site 2026',
    ],
  },
  {
    slug: 'seeking',
    rank: 10,
    name: 'Seeking',
    trademark: '™',
    tagline: 'Date People Who Make Life Better™',
    shortDescription:
      'Seeking (formerly SeekingArrangement) is NOT a sugar daddy dating website. They will ban your account if your intention is to find a sugar daddy/baby.',
    fullDescription: `Seeking, formerly known as SeekingArrangement, is the platform that put sugar daddy dating on the map. However, recently they are trying to re-brand themselves as Elite Dating website, and have removed any mentions of the words sugar or daddy from their website, except on the page where they specifically mention that they are not a sugar daddy dating site..

    So the bottom line is, if you are looking for a sugar daddy or baby, DO NOT go to Seeking. They are very ban-happy and ban users for even mentioning words like PPM in their profile or messages. Also, there are no refunds! They will even not refund if they ban you.
    `,
    siteUrl: 'https://seeking.com',
    logo: 'logos/seeking.svg',
    rating: 1,
    memberCount: '46 million+ in 146 countries',
    founded: 2006,
    features: [
      'NOT a sugar daddy dating website',
      'DO NOT join Seeking if you are looking for a sugar daddy'
    ],
    pros: [
      'We DO NOT recommend Seeking.',
    ],
    pricing: {
      free: true,
      model: 'freemium',
      notes: '100% free to join. Premium features available for power users.',
    },
    stats: {
      Members: '46,000,000+',
      Countries: '146+',
      Founded: '2006',
      'Media Coverage': 'Vogue, Forbes, Glamour',
    },
    metaDescription:
      'Seeking review 2026 — the world\'s largest sugar daddy dating site with 46M+ members. Formerly SeekingArrangement. Compare with Hanker, our #1 ranked sugar daddy app.',
    keywords: [
      'seeking review',
      'seekingarrangement',
      'seeking.com sugar daddy',
      'sugar daddy site 46 million',
      'seeking arrangement review 2026',
    ],
  },
];

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((a) => a.slug === slug);
}

export function renderStars(rating: number): string {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}
