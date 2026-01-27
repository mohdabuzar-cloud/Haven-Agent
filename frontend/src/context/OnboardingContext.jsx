import React, { createContext, useContext, useState, useCallback } from 'react';

const OnboardingContext = createContext(null);

const initialState = {
  // Screen 2 - Eligibility
  eligibility: {
    isLicensedAgent: false,
    worksUnderAgency: false,
    agreesToRules: false,
  },
  // Screen 3 - Basic Details
  basicDetails: {
    fullName: '',
    email: '',
    phone: '',
  },
  // Screen 4 - Documents
  documents: {
    emiratesId: false,
    workVisa: false,
    brokerLicense: false,
  },
  // Screen 5/6 - Verification status
  verificationStatus: null, // 'pending', 'approved', 'failed'
  failedDocuments: [], // Array of failed document keys
  // Screen 8 - Account activation
  accountActivated: false,
  // Overall progress
  currentScreen: 1,
  completedScreens: [],
};

export const OnboardingProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  // Update eligibility checkboxes
  const updateEligibility = useCallback((field, value) => {
    setState(prev => ({
      ...prev,
      eligibility: {
        ...prev.eligibility,
        [field]: value,
      },
    }));
  }, []);

  // Update basic details
  const updateBasicDetails = useCallback((field, value) => {
    setState(prev => ({
      ...prev,
      basicDetails: {
        ...prev.basicDetails,
        [field]: value,
      },
    }));
  }, []);

  // Update document status
  const updateDocument = useCallback((docKey, uploaded) => {
    setState(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [docKey]: uploaded,
      },
    }));
  }, []);

  // Set verification status
  const setVerificationStatus = useCallback((status, failedDocs = []) => {
    setState(prev => ({
      ...prev,
      verificationStatus: status,
      failedDocuments: failedDocs,
    }));
  }, []);

  // Reset failed documents
  const resetFailedDocuments = useCallback(() => {
    setState(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        ...prev.failedDocuments.reduce((acc, doc) => ({ ...acc, [doc]: false }), {}),
      },
      failedDocuments: [],
    }));
  }, []);

  // Set account activated
  const setAccountActivated = useCallback((activated) => {
    setState(prev => ({
      ...prev,
      accountActivated: activated,
    }));
  }, []);

  // Navigate to screen
  const navigateToScreen = useCallback((screenNumber) => {
    setState(prev => ({
      ...prev,
      currentScreen: screenNumber,
      completedScreens: screenNumber > prev.currentScreen 
        ? [...new Set([...prev.completedScreens, prev.currentScreen])]
        : prev.completedScreens,
    }));
  }, []);

  // Check if all eligibility items are checked
  const isEligibilityComplete = useCallback(() => {
    const { isLicensedAgent, worksUnderAgency, agreesToRules } = state.eligibility;
    return isLicensedAgent && worksUnderAgency && agreesToRules;
  }, [state.eligibility]);

  // Check if basic details are valid
  const isBasicDetailsValid = useCallback(() => {
    const { fullName, email, phone } = state.basicDetails;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{8,}$/;
    
    return (
      fullName.trim().length >= 2 &&
      emailRegex.test(email) &&
      phoneRegex.test(phone)
    );
  }, [state.basicDetails]);

  // Check if all documents are uploaded
  const areAllDocumentsUploaded = useCallback(() => {
    const { emiratesId, workVisa, brokerLicense } = state.documents;
    return emiratesId && workVisa && brokerLicense;
  }, [state.documents]);

  // Check if failed documents are re-uploaded
  const areFailedDocumentsFixed = useCallback(() => {
    return state.failedDocuments.every(doc => state.documents[doc]);
  }, [state.failedDocuments, state.documents]);

  // Check if can access dashboard
  const canAccessDashboard = useCallback(() => {
    return state.verificationStatus === 'approved' && state.accountActivated;
  }, [state.verificationStatus, state.accountActivated]);

  // Get last incomplete screen
  const getLastIncompleteScreen = useCallback(() => {
    if (!isEligibilityComplete()) return 2;
    if (!isBasicDetailsValid()) return 3;
    if (!areAllDocumentsUploaded()) return 4;
    if (state.verificationStatus !== 'approved') return 5;
    if (!state.accountActivated) return 8;
    return 10;
  }, [
    isEligibilityComplete, 
    isBasicDetailsValid, 
    areAllDocumentsUploaded, 
    state.verificationStatus, 
    state.accountActivated
  ]);

  // Reset state
  const resetOnboarding = useCallback(() => {
    setState(initialState);
  }, []);

  const value = {
    state,
    updateEligibility,
    updateBasicDetails,
    updateDocument,
    setVerificationStatus,
    resetFailedDocuments,
    setAccountActivated,
    navigateToScreen,
    isEligibilityComplete,
    isBasicDetailsValid,
    areAllDocumentsUploaded,
    areFailedDocumentsFixed,
    canAccessDashboard,
    getLastIncompleteScreen,
    resetOnboarding,
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};

export default OnboardingContext;
