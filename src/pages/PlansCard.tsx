import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const plans = [
  {
    title: 'FREE',
    price: '$0',
    description:
      'Unlimited Projects, Tasks, Storage, and Users. Free, forever with all essential features included.',
    buttonText: 'Select This Plan',
  },
  {
    title: 'PRO',
    price: '$1.49',
    description: 'Per user / month billed annually. $2.49 billed monthly.',
    buttonText: 'Try Free 14 Days',
  },
  {
    title: 'BUSINESS',
    price: '$7.49',
    description: 'Per user / month billed annually. $8.99 billed monthly.',
    buttonText: 'Try Free 14 Days',
    popular: true,
  },
  {
    title: 'ENTERPRISE',
    price: '$16.99',
    description: 'Per user / month billed annually. $19.99 billed monthly.',
    buttonText: 'Try Free 14 Days',
  },
];

export default function PricingCards() {
  return (
    <div className="bg-blue-100 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Simple & Honest Pricing
        </h2>
        <p className="text-gray-600 mt-2">
          All plans include{' '}
          <span className="font-semibold">
            Unlimited Tasks, Projects and Storage.
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {plans.map((plan) => (
          <Card
            key={plan.title}
            className={cn(
              'rounded-lg shadow-lg border transition duration-300 hover:scale-105',
              plan.popular
                ? 'border-green-500 shadow-green-300 bg-white'
                : 'border-gray-200'
            )}
          >
            {plan.popular && (
              <div className="bg-green-500 text-white text-center py-1 rounded-t-lg">
                MOST POPULAR
              </div>
            )}
            <CardHeader>
              <CardTitle
                className={cn(
                  'text-lg font-bold',
                  plan.popular ? 'text-green-600' : 'text-gray-800'
                )}
              >
                {plan.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center text-center">
              <div className="text-4xl font-semibold">{plan.price}</div>
              <p className="text-gray-600 text-sm mt-2">{plan.description}</p>
              <Button
                className={cn(
                  'mt-6 w-full',
                  plan.popular
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                )}
              >
                {plan.buttonText}
              </Button>
              {plan.title === 'ENTERPRISE' && (
                <a href="#" className="mt-3 text-blue-500 text-sm">
                  Contact Sales for volume discounts
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
