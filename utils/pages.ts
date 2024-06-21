
import Swal, { SweetAlertOptions } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const MySwal = withReactContent(Swal);

export const avisoGenerico = (
    params: SweetAlertOptions,
    callBack?: () => void,
    confirmedCallBack?: () => void,
  ) => {
    MySwal.fire({
      title: "Ação realizada com sucesso",
      text: "Parabéns! Seu arquivo foi enviado com sucesso!",
      icon: `warning`,
      confirmButtonText: "Continuar",
      showCloseButton: true,
      reverseButtons: true,
      showCancelButton: true,
      cancelButtonText: "Fechar",
      cancelButtonAriaLabel: "Fechar",
      confirmButtonColor: "#5eadfd",
      allowEnterKey: true,
      allowOutsideClick: false,
      allowEscapeKey: true,
      ...params,
    })
      .then((value) => {
        if (value.isConfirmed) {
          confirmedCallBack?.();
        }
        callBack?.();
      })
      .catch((err) => {
        callBack?.();
      });
  };
  