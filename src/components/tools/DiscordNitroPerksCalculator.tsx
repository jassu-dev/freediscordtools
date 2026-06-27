'use client';

import { useState } from 'react';

interface NitroPlan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  perks: string[];
}

const nitroPlans: NitroPlan[] = [
  {
    name: 'Nitro Basic',
    monthlyPrice: 2.99,
    annualPrice: 29.99,
    perks: [
      'Upload up to 50MB files',
      'Custom emoji anywhere',
      'Custom profile theme',
      'HD video (720p)',
      'Nitro badge',
    ],
  },
  {
    name: 'Nitro',
    monthlyPrice: 9.99,
    annualPrice: 99.99,
    perks: [
      'Upload up to 500MB files',
      'Custom emoji & stickers anywhere',
      'Custom profile theme & banner',
      'HD video (1080p)',
      'Server boosting (2x)',
      'Nitro badge',
      'Nitro Games',
      'Server profile',
      'Animated avatar & banner',
    ],
  },
];

export default function DiscordNitroPerksCalculator() {
  const [plan, setPlan] = useState<NitroPlan>(nitroPlans[1]);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const monthlyCost = plan.monthlyPrice;
  const annualCostMonthlyBilling = monthlyCost * 12;
  const annualCostAnnualBilling = plan.annualPrice;
  const annualSavings = annualCostMonthlyBilling - annualCostAnnualBilling;
  const savingsPercentage = Math.round((annualSavings / annualCostMonthlyBilling) * 100);

  return (
    <div className="bg-white border-2 border-[#5865F2] rounded-2xl p-6 shadow-lg">
      <div className="flex flex-col gap-6">
        {/* Plan Selector */}
        <div className="flex flex-wrap gap-3 justify-center">
          {nitroPlans.map((p) => (
            <button
              key={p.name}
              onClick={() => setPlan(p)}
              className={`px-6 py-3 rounded-xl font-bold transition ${
                plan.name === p.name
                  ? 'bg-[#5865F2] text-white'
                  : 'bg-[#F8F9FF] text-[#1a1d2e] hover:bg-[#E3E6F0]'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Billing Cycle Selector */}
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              billingCycle === 'monthly'
                ? 'bg-[#1a1d2e] text-white'
                : 'bg-[#F8F9FF] text-[#1a1d2e] hover:bg-[#E3E6F0]'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              billingCycle === 'annual'
                ? 'bg-[#1a1d2e] text-white'
                : 'bg-[#F8F9FF] text-[#1a1d2e] hover:bg-[#E3E6F0]'
            }`}
          >
            Annually (Save {savingsPercentage}%)
          </button>
        </div>

        {/* Price Display */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-[#1a1d2e]">
            ${billingCycle === 'monthly' ? plan.monthlyPrice : (plan.annualPrice / 12).toFixed(2)}
            <span className="text-lg text-[#5b6282]">/month</span>
          </h2>
          {billingCycle === 'annual' && (
            <p className="text-[#5865F2] font-bold mt-2">
              Save ${annualSavings.toFixed(2)} per year!
            </p>
          )}
        </div>

        {/* Price Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#F8F9FF] rounded-xl border border-[#E3E6F0]">
            <h3 className="font-bold text-[#1a1d2e] mb-2">Monthly Billing</h3>
            <p className="text-2xl font-bold text-[#5865F2]">${monthlyCost}/mo</p>
            <p className="text-[#5b6282] text-sm mt-1">${annualCostMonthlyBilling}/year</p>
          </div>
          <div className="p-4 bg-[#F8F9FF] rounded-xl border border-[#E3E6F0]">
            <h3 className="font-bold text-[#1a1d2e] mb-2">Annual Billing</h3>
            <p className="text-2xl font-bold text-[#5865F2]">${plan.annualPrice}/year</p>
            <p className="text-[#5b6282] text-sm mt-1">${(plan.annualPrice / 12).toFixed(2)}/mo</p>
          </div>
        </div>

        {/* Perks List */}
        <div>
          <h3 className="text-xl font-bold text-[#1a1d2e] mb-4">What You Get</h3>
          <ul className="space-y-2">
            {plan.perks.map((perk, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#5865F2] font-bold mt-1">✓</span>
                <span className="text-[#5b6282]">{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
