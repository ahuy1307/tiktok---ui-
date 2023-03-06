import { useState } from 'react';
import { createPortal } from 'react-dom';

function useModal(ModalComponent) {
   const [isShow, setIsShow] = useState(false);

   const toggle = () => {
      document.body.classList.toggle('hidden');
      setIsShow(!isShow);
   };

   return {
      isShow,
      toggle,
   };
}

export default useModal;
