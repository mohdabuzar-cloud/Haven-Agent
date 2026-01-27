import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, Check, X, ArrowRight } from 'lucide-react';
import { OnboardingLayout } from '@/components/layout/OnboardingLayout';
import { OnboardingCard } from '@/components/layout/OnboardingCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useOnboarding } from '@/context/OnboardingContext';
import { cn } from '@/lib/utils';

export const Screen8Activation = () => {
  const navigate = useNavigate();
  const { setAccountActivated } = useOnboarding();
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [touched, setTouched] = useState({
    password: false,
    confirmPassword: false,
  });

  // Password strength rules
  const passwordRules = useMemo(() => [
    { label: 'At least 8 characters', test: (p) => p.length >= 8 },
    { label: 'One uppercase letter', test: (p) => /[A-Z]/.test(p) },
    { label: 'One lowercase letter', test: (p) => /[a-z]/.test(p) },
    { label: 'One number', test: (p) => /[0-9]/.test(p) },
  ], []);

  const passwordStrength = useMemo(() => {
    return passwordRules.map(rule => ({
      ...rule,
      passed: rule.test(password),
    }));
  }, [password, passwordRules]);

  const isPasswordStrong = passwordStrength.every(rule => rule.passed);
  const doPasswordsMatch = password === confirmPassword && confirmPassword.length > 0;
  const isValid = isPasswordStrong && doPasswordsMatch;

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleActivate = () => {
    setTouched({ password: true, confirmPassword: true });
    
    if (isValid) {
      setAccountActivated(true);
      navigate('/onboarding/success');
    }
  };

  return (
    <OnboardingLayout>
      <OnboardingCard
        icon={Lock}
        title="Secure your account"
        subtitle="Create a strong password to protect your Haven account."
      >
        {/* Password Field */}
        <div className="space-y-5 stagger-children">
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-heading">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => handleBlur('password')}
                className="h-12 px-4 pr-12 text-base"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-helper hover:text-body transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Password Strength Indicators */}
          {touched.password && password.length > 0 && (
            <div className="p-3 bg-secondary/50 rounded-lg space-y-2 animate-fade-in">
              <p className="text-xs font-medium text-helper uppercase tracking-wide">
                Password requirements
              </p>
              <div className="grid grid-cols-2 gap-2">
                {passwordStrength.map((rule, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center gap-2 text-xs transition-colors",
                      rule.passed ? "text-primary" : "text-helper"
                    )}
                  >
                    {rule.passed ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <X className="w-3.5 h-3.5" />
                    )}
                    <span>{rule.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-sm font-medium text-heading">
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirm ? 'text' : 'password'}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={() => handleBlur('confirmPassword')}
                className={cn(
                  "h-12 px-4 pr-12 text-base",
                  touched.confirmPassword && !doPasswordsMatch && confirmPassword.length > 0
                    ? "border-destructive focus-visible:ring-destructive/30"
                    : ""
                )}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-helper hover:text-body transition-colors"
              >
                {showConfirm ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {touched.confirmPassword && !doPasswordsMatch && confirmPassword.length > 0 && (
              <p className="text-sm text-destructive animate-fade-in">
                Passwords do not match
              </p>
            )}
            {doPasswordsMatch && confirmPassword.length > 0 && (
              <p className="text-sm text-primary animate-fade-in flex items-center gap-1">
                <Check className="w-4 h-4" />
                Passwords match
              </p>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <Button
          variant="haven"
          size="xl"
          className="w-full mt-4"
          onClick={handleActivate}
          disabled={!isValid}
        >
          Activate & Continue
          <ArrowRight className="w-5 h-5 ml-1" />
        </Button>
      </OnboardingCard>
    </OnboardingLayout>
  );
};

export default Screen8Activation;
