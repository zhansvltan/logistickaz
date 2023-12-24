import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import CancelIcon from '@mui/icons-material/Cancel'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4,
  overflow: 'scroll',
  height: '80%',
}
const Popup = ({ description, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-90">
      <div className="bg-white rounded-lg p-6">
        <p>{description}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Закрыть
        </button>
      </div>
    </div>
  )
}

const Card = ({ imageSrc, name, buttontext, description }) => {
  const [isPopupVisible, setPopupVisible] = useState(false)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const openPopup = () => {
    setPopupVisible(true)
  }

  const closePopup = () => {
    setPopupVisible(false)
  }

  return (
    <div
      className="overflow-hidden relative flex-col p-4
      mobile:max-w-[100%] mobile:mx-auto mobile:px-4
      tablet:max-w-[40%] tablet:mx-auto tablet:mb-8 tablet:px-4
      laptop:max-w-[300px] laptop:mx-0 laptop:mb-0 laptop:px-2"
    >
      {/* Popup */}
      {isPopupVisible && (
        <Popup description={description} onClose={closePopup} />
      )}
      <button
        className="bg-white rounded-3xl text-[#030303] leading-[18px] font-[600]
        absolute mobile:right-[24px] laptop:right-[12px] top-[24px]
        mobile:h-[30px] mobile:w-[90px] mobile:text-[10px]
        laptop:h-[40px] laptop:w-[120px] laptop:text-[16px]"
        onClick={handleOpen}
      >
        {buttontext}
      </button>
      <img
        src={imageSrc}
        alt={name}
        className="justify-center mb-4 rounded-3xl w-[300px] max-h-[152px] object-cover"
      />
      <h2
        className="text-[#030303] font-[600] pl-2
        mobile:text-justify mobile:text-[14px] mobile:leading-[22px]
        laptop:text-justify laptop:text-[16px] laptop:leading-[32px]"
      >
        {name}
      </h2>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            Text in a modal{' '}
            <CancelIcon
              sx={{
                position: 'absolute',
                right: '10px',
              }}
              onClick={handleClose}
            />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Card
