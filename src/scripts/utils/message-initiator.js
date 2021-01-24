import Swal from 'sweetalert2';

const MessageInitiator = {
  show({ jenis, judul, isi }) {
    Swal.fire({
      title: judul,
      text: isi,
      icon: jenis,
      confirmButtonText: 'Oke',
      confirmButtonColor: "#1ABC9C"
    });
  },
};

export default MessageInitiator;