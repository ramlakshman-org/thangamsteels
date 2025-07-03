'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  id: number;
  name: string;
  description: string;
}

interface CheckoutStepsProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (stepNumber: number) => void;
}

export function CheckoutSteps({ steps, currentStep, onStepClick }: CheckoutStepsProps) {
  return (
    <nav aria-label="Progress">
      <ol className="flex items-center justify-center space-x-4 md:space-x-8">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className="flex items-center">
            <button
              onClick={() => onStepClick(step.id)}
              disabled={step.id > currentStep}
              className={cn(
                "group flex items-center focus:outline-none",
                step.id <= currentStep ? "cursor-pointer" : "cursor-not-allowed"
              )}
            >
              <span className="flex items-center px-6 py-4 text-sm font-medium">
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-200",
                    step.id < currentStep
                      ? "bg-safety-yellow border-safety-yellow text-charcoal"
                      : step.id === currentStep
                      ? "border-safety-yellow text-safety-yellow bg-safety-yellow/10"
                      : "border-gray-300 text-gray-500"
                  )}
                >
                  {step.id < currentStep ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <span>{step.id}</span>
                  )}
                </span>
                <span className="ml-4 text-left">
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors duration-200",
                      step.id <= currentStep ? "text-charcoal" : "text-gray-500"
                    )}
                  >
                    {step.name}
                  </span>
                  <span
                    className={cn(
                      "block text-xs transition-colors duration-200",
                      step.id <= currentStep ? "text-steel-gray" : "text-gray-400"
                    )}
                  >
                    {step.description}
                  </span>
                </span>
              </span>
            </button>

            {stepIdx < steps.length - 1 && (
              <div
                className={cn(
                  "hidden md:block w-16 h-0.5 transition-colors duration-200",
                  step.id < currentStep ? "bg-safety-yellow" : "bg-gray-300"
                )}
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}