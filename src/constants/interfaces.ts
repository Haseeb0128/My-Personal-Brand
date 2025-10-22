export interface MobileNavSheetProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  handleShopMobileLinkClick: () => void;
  handleMobileLinkClick: () => void;
  pathname: string;
}
