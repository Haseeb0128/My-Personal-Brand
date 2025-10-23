import { useEffect } from "react";

/**
 * Custom hook to manage body scroll lock when modals/sheets are open
 * @param isOpen - Boolean indicating if the modal/sheet is open
 */
export const useBodyScrollLock = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("sheet-open");
    } else {
      document.body.classList.remove("sheet-open");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("sheet-open");
    };
  }, [isOpen]);
};
