import 'react-toastify/dist/ReactToastify.css';
import { ToastContainerStyled } from './NotificationToast.styled';

 const NotificationToast = () => {
    return (
        <ToastContainerStyled
        theme="dark"
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    );
}

export default NotificationToast;