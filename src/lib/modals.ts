export type ModalKey =
  | 'dashboard'
  | 'github'
  | 'environment'
  | 'experience'
  | 'commission'
  | 'tos';

export const MODAL_TITLES: Record<ModalKey, string> = {
  dashboard: 'Persona Dashboard',
  github: 'Software & Backend Engineering',
  environment: 'Environmental Science & Technology',
  experience: 'Community & Server Experience',
  commission: 'Commission Board',
  tos: 'Terms of Service',
};
