'use client';

import CoreFeatures from '@/pages/CoreFeatures';
import EnterpriseBenefits from '@/pages/EnterpriseBenefits';
import Footer from '@/pages/Footer';
import PricingCards from '@/pages/PlansCard';
import PremiumFeatures from '@/pages/PremiumFeatures';

export default function PricingPage() {
  return (
    <div>
      <PricingCards />
      <CoreFeatures />
      <PremiumFeatures />
      <EnterpriseBenefits />
      <Footer />
    </div>
  );
}
