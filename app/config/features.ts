// Feature flags configuration
export const FEATURES = {
  // Blog feature flag - set to false to hide blog section
  BLOG_ENABLED: false,
  
  // Newsletter signup feature flag
  NEWSLETTER_ENABLED: true,
  
  // Contact form feature flag
  CONTACT_FORM_ENABLED: true,
  
  // Social links feature flag
  SOCIAL_LINKS_ENABLED: true,
} as const;

// Type for feature flags
export type FeatureFlag = keyof typeof FEATURES;

// Helper function to check if a feature is enabled
export const isFeatureEnabled = (feature: FeatureFlag): boolean => {
  return FEATURES[feature];
}; 