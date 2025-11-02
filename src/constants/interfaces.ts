// Navigation Interfaces
export interface MobileNavSheetProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
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

export interface LogoProps {
  className?: string;
}

export interface ProductCardProps {
  name: string;
  oldPrice?: number;
  price: number;
  rating: number;
  imageUrl?: string;
  isOnSale?: boolean;
  isSoldOut?: boolean;
  productSlug: string;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectFieldProps {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  selectClassName?: string;
  className?: string;
}
