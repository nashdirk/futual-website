import{ useState } from 'react';
import propTypes from 'prop-types';
import ModalContext from './modalContext';

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const setModal = (content) => {
    setModalText(content);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, modalText, openModal, closeModal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default ModalProvider;
