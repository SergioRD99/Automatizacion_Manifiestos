export type residuosT = {
  GP01: number;
  GP02: number;
  GP03: number;
  GP04: number;
  GP05: number;
  GP06: number;
  GP07: number;
}

export type DestintoDialogProps = {
  open: boolean;
  onClose: (residuos : residuosT) => void
  residuos:residuosT;
}