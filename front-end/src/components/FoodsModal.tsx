import { Modal } from "@mui/material";
import { ModalFood } from "./ModalFood";
import { FoodType } from "./Foods";

type FoodsModalProps = {
  food: FoodType | null;
  open: boolean;
  handleClose: () => void;
};

export function FoodsModal({ open, handleClose, food }: FoodsModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ display: "grid", placeContent: "center" }}
      // onClick={handleClose}
    >
      <>{food && <ModalFood onClick={handleClose} {...food} />}</>
    </Modal>
  );
}
