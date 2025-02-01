interface PricePackage {
  name: string;
  amount: number;
  currency: string;
  interval: string;
  features: string[];
  paymentLink?: string;
}

interface Program {
  id: string;
  title: string;
  prices: Record<string, PricePackage>;
}

export const programs: Program[] = [
  {
    id: 'business',
    title: 'Business',
    prices: {
      basic: {
        name: 'Basic',
        amount: 1000, // 10.00 in cents
        currency: 'eur',
        interval: 'month',
        features: ['Access to all learning materials', 'Group sessions', 'Community access'],
        paymentLink: 'https://buy.stripe.com/14kg2zflWf4U2VGcMV', // Add your Stripe payment link here
      },
      enhanced: {
        name: 'Enhanced',
        amount: 2500, // 25.00 in cents
        currency: 'eur',
        interval: 'month',
        features: [
          'All Basic features',
          'Priority code reviews',
          'Monthly 1-on-1 mentoring session',
        ],
        paymentLink: 'https://buy.stripe.com/28ocQnddO3mcdAkdR0', // Add your Stripe payment link here
      },
      premium: {
        name: 'Premium',
        amount: 10000, // 100.00 in cents
        currency: 'eur',
        interval: 'month',
        features: [
          'All Enhanced features',
          'Weekly 1-on-1 mentoring',
          'Career guidance',
          'Job referrals',
        ],
        paymentLink: 'https://buy.stripe.com/9AQ2bJc9K7Cs3ZK9AL', // Add your Stripe payment link here
      },
    },
  },
  {
    id: 'design',
    title: 'Design',
    prices: {
      basic: {
        name: 'Basic',
        amount: 1000,
        currency: 'eur',
        interval: 'month',
        features: ['Access to all learning materials', 'Group sessions', 'Community access'],
        paymentLink: 'https://buy.stripe.com/8wM5nV5LmbSI7bWdQT',
      },
      enhanced: {
        name: 'Enhanced',
        amount: 2500,
        currency: 'eur',
        interval: 'month',
        features: [
          'All Basic features',
          'Priority design reviews',
          'Monthly 1-on-1 mentoring session',
        ],
        paymentLink: 'https://buy.stripe.com/28o9Eb2zabSIgMwbIM', // Add your Stripe payment link here
      },
      premium: {
        name: 'Premium',
        amount: 10000,
        currency: 'eur',
        interval: 'month',
        features: [
          'All Enhanced features',
          'Weekly 1-on-1 mentoring',
          'Portfolio reviews',
          'Job referrals',
        ],
        paymentLink: 'https://buy.stripe.com/fZe9Ebc9K9KA0NybIN', // Add your Stripe payment link here
      },
    },
  },
  {
    id: 'programming',
    title: 'Programming',
    prices: {
      basic: {
        name: 'Basic',
        amount: 1000,
        currency: 'eur',
        interval: 'month',
        features: ['Access to all learning materials', 'Group sessions', 'Community access'],
        paymentLink: 'https://buy.stripe.com/bIY2bJflWbSI53O28e', // Add your Stripe payment link here
      },
      enhanced: {
        name: 'Enhanced',
        amount: 2500,
        currency: 'eur',
        interval: 'month',
        features: [
          'All Basic features',
          'Priority code reviews',
          'Monthly 1-on-1 mentoring session',
        ],
        paymentLink: 'https://buy.stripe.com/28o03BddO7Cs7bW8wD', // Add your Stripe payment link here
      },
      premium: {
        name: 'Premium',
        amount: 10000,
        currency: 'eur',
        interval: 'month',
        features: [
          'All Enhanced features',
          'Weekly 1-on-1 mentoring',
          'Architecture reviews',
          'Job referrals',
        ],
        paymentLink: 'https://buy.stripe.com/5kA2bJb5G4qgeEofZ6', // Add your Stripe payment link here
      },
    },
  },
  {
    id: 'storytelling',
    title: 'Storytelling',
    prices: {
      basic: {
        name: 'Basic',
        amount: 1000,
        currency: 'eur',
        interval: 'month',
        features: ['Access to all learning materials', 'Group sessions', 'Community access'],
        paymentLink: 'https://buy.stripe.com/aEU9Eb1v63mcbsc5kw', // Add your Stripe payment link here
      },
      enhanced: {
        name: 'Enhanced',
        amount: 2500,
        currency: 'eur',
        interval: 'month',
        features: [
          'All Basic features',
          'Priority content reviews',
          'Monthly 1-on-1 mentoring session',
        ],
        paymentLink: 'https://buy.stripe.com/4gw6rZc9KaOE2VGfZb', // Add your Stripe payment link here
      },
      premium: {
        name: 'Premium',
        amount: 10000,
        currency: 'eur',
        interval: 'month',
        features: [
          'All Enhanced features',
          'Weekly 1-on-1 mentoring',
          'Portfolio development',
          'Job referrals',
        ],
        paymentLink: 'https://buy.stripe.com/dR6eYv7Tu0a00NybIW', // Add your Stripe payment link here
      },
    },
  },
];

export const getProgramById = (id: string): Program | undefined => {
  return programs.find(program => program.id === id);
};

export const getPricePackage = (programId: string, priceId: string): PricePackage | undefined => {
  const program = getProgramById(programId);
  return program?.prices[priceId];
};