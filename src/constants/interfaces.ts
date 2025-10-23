// Navigation Interfaces
export interface MobileNavSheetProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  handleShopMobileLinkClick: () => void;
  handleMobileLinkClick: () => void;
  pathname: string;
}

// Form Component Interfaces
export interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  error?: string;
  name?: string;
  ref?: React.Ref<HTMLInputElement>;
}

export interface CustomTextAreaProps {
  label: string;
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  className?: string;
  error?: string;
  rows?: number;
  textareaClassName?: string;
  name?: string;
  ref?: React.Ref<HTMLTextAreaElement>;
}

// Social Links Interface
export interface SocialLinksProps {
  name: string;
  path: string;
  icon: React.ReactNode;
}

// Navigation Link Interfaces
export interface NavLink {
  name: string;
  path: string;
  subPaths?: SubPath[];
}

export interface SubPath {
  name: string;
  path: string;
}

export interface PolicyLink {
  name: string;
  path: string;
}

export interface FooterLink {
  heading: string;
  subLinks: SubPath[];
}

export interface SocialLink {
  name: string;
  path: string;
  icon: string;
}
