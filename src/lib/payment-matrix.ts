interface PricePackage {
  name: string;
  amount: number;
  currency: string;
  interval: string;
  features: string[];
  paymentLink?: string;
  trial: boolean;
  trialDuration: string;
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
        trial: true,
        trialDuration: '1 week',
        features: ['Access to all learning materials', 'Group sessions', 'Community access'],
        paymentLink: 'https://buy.stripe.com/14kg2zflWf4U2VGcMV',
      },
      enhanced: {
        name: 'Enhanced',
        amount: 2500, // 25.00 in cents
        currency: 'eur',
        interval: 'month',
        trial: true,
        trialDuration: '1 week',
        features: [
          'All Basic features',
          'Priority code reviews',
          'Monthly 1-on-1 mentoring session',
        ],
        paymentLink: 'https://buy.stripe.com/28ocQnddO3mcdAkdR0',
      },
      premium: {
        name: 'Premium',
        amount: 10000, // 100.00 in cents
        currency: 'eur',
        interval: 'month',
        trial: true,
        trialDuration: '1 week',
        features: [
          'All Enhanced features',
          'Weekly 1-on-1 mentoring',
          'Career guidance',
          'Job referrals',
        ],
        paymentLink: 'https://buy.stripe.com/9AQ2bJc9K7Cs3ZK9AL',
      }
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
        trial: true,
        trialDuration: '1 week',
        features: ['Access to all learning materials', 'Group sessions', 'Community access'],
        paymentLink: 'https://buy.stripe.com/8wM5nV5LmbSI7bWdQT',
      },
      enhanced: {
        name: 'Enhanced',
        amount: 2500,
        currency: 'eur',
        interval: 'month',
        trial: true,
        trialDuration: '1 week',
        features: [
          'All Basic features',
          'Priority design reviews',
          'Monthly 1-on-1 mentoring session',
        ],
        paymentLink: 'https://buy.stripe.com/28o9Eb2zabSIgMwbIM',
      },
      premium: {
        name: 'Premium',
        amount: 10000,
        currency: 'eur',
        interval: 'month',
        trial: true,
        trialDuration: '1 week',
        features: [
          'All Enhanced features',
          'Weekly 1-on-1 mentoring',
          'Portfolio reviews',
          'Job referrals',
        ],
        paymentLink: 'https://buy.stripe.com/fZe9Ebc9K9KA0NybIN',
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
        trial: true,
        trialDuration: '1 week',
        features: ['Access to all learning materials', 'Group sessions', 'Community access'],
        paymentLink: 'https://buy.stripe.com/bIY2bJflWbSI53O28e',
      },
      enhanced: {
        name: 'Enhanced',
        amount: 2500,
        currency: 'eur',
        interval: 'month',
        trial: true,
        trialDuration: '1 week',
        features: [
          'All Basic features',
          'Priority code reviews',
          'Monthly 1-on-1 mentoring session',
        ],
        paymentLink: 'https://buy.stripe.com/28o03BddO7Cs7bW8wD',
      },
      premium: {
        name: 'Premium',
        amount: 10000,
        currency: 'eur',
        interval: 'month',
        trial: true,
        trialDuration: '1 week',
        features: [
          'All Enhanced features',
          'Weekly 1-on-1 mentoring',
          'Architecture reviews',
          'Job referrals',
        ],
        paymentLink: 'https://buy.stripe.com/5kA2bJb5G4qgeEofZ6',
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
        trial: true,
        trialDuration: '1 week',
        features: ['Access to all learning materials', 'Group sessions', 'Community access'],
        paymentLink: 'https://buy.stripe.com/aEU9Eb1v63mcbsc5kw',
      },
      enhanced: {
        name: 'Enhanced',
        amount: 2500,
        currency: 'eur',
        interval: 'month',
        trial: true,
        trialDuration: '1 week',
        features: [
          'All Basic features',
          'Priority content reviews',
          'Monthly 1-on-1 mentoring session',
        ],
        paymentLink: 'https://buy.stripe.com/4gw6rZc9KaOE2VGfZb',
      },
      premium: {
        name: 'Premium',
        amount: 10000,
        currency: 'eur',
        interval: 'month',
        trial: true,
        trialDuration: '1 week',
        features: [
          'All Enhanced features',
          'Weekly 1-on-1 mentoring',
          'Portfolio development',
          'Job referrals',
        ],
        paymentLink: 'https://buy.stripe.com/dR6eYv7Tu0a00NybIW',
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