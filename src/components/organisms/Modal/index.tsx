import React, { PropsWithChildren, useState } from "react";
import Dialog from "@mui/material/Dialog";

export interface IModal extends PropsWithChildren {
  open?: boolean;
  onClose?: () => void;
}

export interface IModalHandles {
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

const Modal: React.ForwardRefRenderFunction<IModalHandles, IModal> = (
  props,
  forwardedRef
) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  React.useImperativeHandle(forwardedRef, () => {
    return {
      handleOpenModal,
      handleCloseModal,
    };
  });

  return (
    <Dialog
      open={!!props.open ? !!props.open : open}
      keepMounted
      onClose={!!props.onClose ? props.onClose : handleCloseModal}
    >
      {props.children}
    </Dialog>
  );
};

export default React.forwardRef(Modal);
