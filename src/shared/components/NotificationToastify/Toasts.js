import { toast } from "react-toastify";

export const notifyRegisterError = (error) => toast.error(`${error.message}`);

export const notifyLoginSuccess = () => toast.success(`You have successfully logged in`);

export const notifyBookingSuccess = () => toast.success(`The lesson has been successfully reserved`);

export const notifyFavoriteSuccess = () => toast.success("Added to favorites successfully!");

export const notifyError = (error) => toast.error(`${error.message}`);

export const notifyFavoriteReject = () => toast.info("Please login to continue");


