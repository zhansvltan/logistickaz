import React from 'react'
import Box from '@mui/material/Box'
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
  boxShadow: 0,
  borderRadius: '24px',
  p: 5,
  overflow: 'scroll',
  height: '25rem',
}

const Card = ({ imageSrc, name, buttontext, description }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div
      className="overflow-hidden relative flex-col p-4
      mobile:max-w-[100%] mobile:mx-auto mobile:px-4 mobile:h-[22rem]
      tablet:max-w-[40%] tablet:mx-auto tablet:mb-8 tablet:px-4
      laptop:max-w-[300px] laptop:mx-0 laptop:mb-0 laptop:px-2 laptop:h-auto"
    >
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
        laptop:text-start laptop:text-[16px] laptop:leading-[32px]"
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
              marginBottom: '20px',
            }}
          >
            Информация подробнее <CancelIcon onClick={handleClose} />
            <CancelIcon
              sx={{
                position: 'absolute',
                right: '10px',
                cursor: 'pointer',
              }}
              onClick={handleClose}
            />
          </Typography>
          <img
            src={imageSrc}
            alt={name}
            className=" flex justify-center align-center mb-4 rounded-3xl w-[400px] max-h-[300px] object-cover"
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Card
