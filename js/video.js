$(document).ready(function() {
    $("#btn").click(function(e) {
        e.preventDefault();

        Swal.fire({
            title: 'Responda com sinceridade',
            text: "Você gosta de gatinhos?",
            icon: 'question',
            confirmButtonText: 'Amoo!',
            cancelButtonText: 'Odeioo!',
            showCancelButton: true,
            confirmButtonColor: 'rgba(171, 82, 230, 0.863)',
            cancelButtonColor: 'black',
            heightAuto: false,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Parabens!',
                    'Você é uma pessoal adoravél!',
                    'success'
                )
            }
        });
    });
});





