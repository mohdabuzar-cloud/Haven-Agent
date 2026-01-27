import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, ArrowRight } from 'lucide-react';
import { OnboardingLayout } from '@/components/layout/OnboardingLayout';
import { OnboardingCard } from '@/components/layout/OnboardingCard';
import { Button } from '@/components/ui/button';

export const Screen1Welcome = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/onboarding/eligibility');
  };

  return (
    <OnboardingLayout>
      <OnboardingCard
        title="Ready to get started!"
        subtitle="Join Haven's trusted network of real estate professionals. Complete your verification in just a few minutes."
      >
        {/* Trust Indicators */}
        <div className="flex items-start gap-3 p-4 bg-accent/50 rounded-xl">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-heading">
              Secure & Compliant
            </p>
            <p className="text-sm text-helper leading-relaxed">
              Your information is encrypted and handled according to regulatory standards.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          variant="haven" 
          size="xl" 
          className="w-full mt-4"
          onClick={handleStart}
        >
          Start Verification
          <ArrowRight className="w-5 h-5 ml-1" />
        </Button>
      </OnboardingCard>
    </OnboardingLayout>
  );
};

export default Screen1Welcome;
