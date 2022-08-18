import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CarouselButton = styled(Button)({
  boxShadow: "none",
  lineHeight: 1.5,
  letterSpacing: 1.5,
  fontSize: 16,
  textTransform: "none",
  padding: "1rem",
  border: "1px solid #000",
  borderRadius: "unset",
  backgroundColor: "unset",
  color: "#000",
  "&:hover": {
    backgroundColor: "#000",
    borderColor: "#000",
    boxShadow: "none",
    color: "#fff",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#000",
    borderColor: "#000",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const BannerButton = styled(Button)({
  boxShadow: "none",
  lineHeight: 1.5,
  letterSpacing: 1.5,
  fontSize: 16,
  textTransform: "none",
  padding: "1rem",
  backgroundColor: "#fff",
  borderRadius: "unset",
  color: "#000",
  "&:hover": {
    backgroundColor: "#000",
    borderColor: "#000",
    boxShadow: "none",
    color: "#fff",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#000",
    borderColor: "#000",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const ModalButton = styled(Button)({
  boxShadow: "none",
  lineHeight: 1.5,
  letterSpacing: 1.5,
  fontSize: 16,
  textTransform: "none",
  padding: "1rem",
  borderRadius: "unset",
  backgroundColor: "#000",
  border: "1px solid #000",
  color: "#fff",
  "&:hover": {
    backgroundColor: "unset",
    border: "1px solid #000",
    boxShadow: "none",
    color: "#000",
  },
  "&:active": {
    backgroundColor: "unset",
    border: "1px solid #000",
    color: "#000",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export { CarouselButton, BannerButton, ModalButton };
