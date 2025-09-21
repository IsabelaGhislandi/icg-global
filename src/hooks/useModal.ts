import { useState } from 'react';
import { Project, ModalState } from '../types';

export const useModal = (): {
  modalState: ModalState;
  openModal: (project: Project) => void;
  closeModal: () => void;
} => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    selectedProject: null
  });

  const openModal = (project: Project) => {
    setModalState({
      isOpen: true,
      selectedProject: project
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      selectedProject: null
    });
  };

  return {
    modalState,
    openModal,
    closeModal
  };
};
