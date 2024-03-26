import { toast } from "react-toastify";

export const notifyRegisterError = (error) => toast.error(`${error.message}`);

export const notifyLoginSuccess = () =>
  toast.success(`You have successfully logged in`);

export const notifyAddSuccess = () => toast.success("Added successfully!");

export const notifyEditSuccess = () => toast.success("Edited successfully!");

export const notifyDeleteSuccess = () => toast.success("Deleted successfully!");

export const notifyError = (error) => toast.error(`${error.message}`);

export const notifyInfo = () => toast.info("Please _ to continue");
