import Swal from "sweetalert2";

export function message(msg){
    return Swal.fire({
        title: msg,
        confirmButtonColor: "#3085d6",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}