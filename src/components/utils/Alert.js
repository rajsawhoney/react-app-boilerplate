import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
const Alert = (message, duration, color) => {
  return Toastify({
    text: message,
    duration: duration,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    background: color,
    stopOnFocus: true, // Prevents dismissing of toast on hover
    onClick: function () {}, // Callback after click
  }).showToast();
};

export default Alert;