import React, { createContext,  useState } from 'react';

type ModalContextType = {
  showModal: boolean;
  toggleModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
    showModal: false,
    toggleModal: () => {},
  });

// export const useModal = () => {
//   const context = useContext(ModalContext);
//   if (!context) {
//     throw new Error('useModal must be used within a ModalProvider');
//   }
//   return context;
// };

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const value = {
    showModal,
    toggleModal,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};