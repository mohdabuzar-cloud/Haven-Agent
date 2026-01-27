import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { OnboardingLayout } from '@/components/layout/OnboardingLayout';
import { OnboardingCard } from '@/components/layout/OnboardingCard';
import { Button } from '@/components/ui/button';
import { useOnboarding } from '@/context/OnboardingContext';

export const Screen5Verification = () => {
  const navigate = useNavigate();
  const { setVerificationStatus } = useOnboarding();

  const handleApproved = () => {
    setVerificationStatus('approved');
    navigate('/onboarding/approved');
  };

  const handleFailed = () => {
    // Simulate some documents failing
    setVerificationStatus('failed', ['workVisa', 'brokerLicense']);
    navigate('/onboarding/failed');
  };

  return (
    <OnboardingLayout>
      <OnboardingCard
        icon={Clock}
        title="Verification in progress"
        subtitle="Our team is reviewing your submitted documents. This usually takes 1-2 business days."
      >
        {/* Status Card */}
        <div className="p-6 bg-secondary/50 rounded-xl border border-border/30 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <Clock className="w-8 h-8 text-primary animate-pulse-soft" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-heading">
              Documents Under Review
            </h3>
            <p className="text-sm text-helper max-w-xs mx-auto">
              You'll receive an email notification once the verification is complete.
            </p>
          </div>
        </div>

        {/* Demo Options */}
        <div className="space-y-3 pt-4">
          <p className="text-xs text-center text-helper font-medium uppercase tracking-wide">
            Demo Options
          </p>
          
          <div className="grid gap-3">
            <Button
              variant="haven"
              size="lg"
              className="w-full"
              onClick={handleApproved}
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Simulate Approved
            </Button>
            
            <Button
              variant="haven-outline"
              size="lg"
              className="w-full"
              onClick={handleFailed}
            >
              <XCircle className="w-5 h-5 mr-2" />
              Simulate Failed
            </Button>
          </div>
          
          <p className="text-xs text-helper text-center italic">
            Choose an outcome to continue the demo flow
          </p>
        </div>
      </OnboardingCard>
    </OnboardingLayout>
  );
};

export default Screen5Verification;
