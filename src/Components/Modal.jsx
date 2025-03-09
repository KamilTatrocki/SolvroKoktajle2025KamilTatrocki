import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, open, className = '' }) {
  const dialog = useRef();

  useEffect(() => {
    const currentDialog = dialog.current;

    const preventClose = (event) => {
      event.preventDefault();
    };

    if (currentDialog) {
      currentDialog.addEventListener('cancel', preventClose);
    }

    if (open) {
      currentDialog.showModal();
    } else {
      currentDialog.close();
    }

    return () => {
      if (currentDialog) {
        currentDialog.removeEventListener('cancel', preventClose);
      }
    };
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      className={`
        bg-[#274276] text-white rounded-md border-none shadow-[0_2px_8px_rgba(0,0,0,0.6)]
        p-4 w-[80%] max-w-[40rem] max-h-[80%]
        animate-[fade-slide-up_0.3s_ease-out_forwards]
        [&::backdrop]:bg-[rgba(0,0,0,0.8)]
       
        fixed
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        ${className}
      `}
    >
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
