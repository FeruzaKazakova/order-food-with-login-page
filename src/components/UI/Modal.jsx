import styled from 'styled-components'
import { Modal as MuiModal} from '@mui/material'
import { Box } from '@mui/material'

const ModalContent = ({children}) => {
    return <StyledModalContent>{children}</StyledModalContent>
}

const StyledModalContent = styled.div`
  position: fixed;
  top: 20vh;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  width: 40rem;
  left: calc(50% -  20rem);

  @keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`

const Modal = ({children, onClose, open}) => {
  return (
    <>
    <MuiModal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
          <Box><ModalContent>{children}</ModalContent></Box>
      </MuiModal>
    </>
  )
}

export default Modal;
