$(document).ready(function(){
    var contador = 0;

    $(document).on('click', '.concluir', function(){
        var tarefa = $(this).closest('ul');
        var nomeTarefa = tarefa.find('.nome-tarefa-salva');


        if (nomeTarefa.css('text-decoration') === 'line-through'){
            Swal.fire('Tarefa já foi concluída!');
        }else{
            Swal.fire({
                titleText: 'Deseja marcar como concluída?',
                showCancelButton: true,
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não'
            }).then((result) => {
                if (result.value) {
                    nomeTarefa.css('text-decoration', 'line-through');
                    $(this).attr({
                        'src' : './incluir.png',
                        'class': 'concluido',
                        'title' : 'Tarefa concluída',
                        'alt' : 'Tarefa concluída'
                    });
                    Swal.fire('Tarefa concluída!');
                }else{
                    Swal.fire('Tarefa não concluída.');
                };
            });
        };
    });

    $(document).on('click', '.excluir', function(){
        var tarefa = $(this).closest('ul');
        Swal.fire({
            titleText: 'Deseja excluir a tarefa?',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.value) {
                tarefa.remove();
                contador -= 1;
                if (contador === 1){
                    $('#qtdTarefas').html(`Você tem <b>${contador}</b> tarefa.`);
                }else{
                    $('#qtdTarefas').html(`Você tem <b>${contador}</b> tarefas.`);
                };
                Swal.fire('Tarefa excluída com sucesso!');
            } else {
                Swal.fire('Ação cancelada.');
            }
        });        
        

    });

    $('#btn-salvar').click(function(){

        const nomeTarefa = $('#nome-tarefa').val();

        const tarefasSalvas = $('#lista-tarefas');

        if (nomeTarefa === ''){
            Swal.fire('Nome da tarefa é obrigatório.');
        
        }else{
            const novaTarefa = $(`
                <ul id="tarefa">
                    <li id="tarefa-titulo">
                        <label for="nome-tarefa">Tarefa:</label>
                        <textarea class="nome-tarefa-salva" disabled>${nomeTarefa}</textarea>
                        <img src="./incluir.png" class="concluir" title="Concluir tarefa" alt="Concluir tarefa">
                        <img src="./excluir.png" class="excluir" title="Excluir tarefa" alt="Excluir tarefa">                       
                    </li>              
                </ul>
            `); 

            $(novaTarefa).appendTo(tarefasSalvas);

            $('#nome-tarefa').val('');        

            contador++;
       
        }
    });
});