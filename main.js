function addTarefa(){
    var tarefa = document.getElementById("tarefa");
    var valor = tarefa.value;
    
    if(valor == '' || valor == null){
        document.getElementById('resposta').innerHTML = 'Selecione o';
    }else{
        var tare = document.getElementById('tarefas');
        var op = document.createElement('option');
        op.text = valor;
        tare.add(op, tare[0]);

        tarefa.value = '';
        tarefa.focus();
    }
}
tarefa.addEventListener("keydown", function(e){
    if (e.key === "Enter"){
      addTarefa();
    }
  });



function remove(){
    var tare = document.getElementById('tarefas');
    if(tare.selectedIndex == -1){
        document.getElementById('resposta').innerHTML = 'Selecione uma tarefa para excluir';
    }else{
        var i = tarefas.options[tarefas.selectedIndex].index;
        var n = tarefas.options[tarefas.selectedIndex].text;
        var resp = confirm('Deseja excluir essa tarefa: '+ n + '?')
        if(resp == true){
            tarefas.removeChild(tarefas[i]);
            document.getElementById('resposta').innerHTML = 'A tarefa ' + n + ' foi excluida';
        }else{
            document.getElementById('resposta').innerHTML = 'Voce desistiu de excluir: '+ n;
           
        }
    }
}


function feito(){
    var tare = document.getElementById('tarefas');
    if(tare.selectedIndex == -1){
        document.getElementById('resposta').innerHTML = 'Selecione uma tarefa concluida';
    }else{
        var i = tarefas.options[tarefas.selectedIndex].index;
        tarefas[i].style.color = 'green',
        
    }
}


function desfeito(){
    var tare = document.getElementById('tarefas');
    if(tare.selectedIndex == -1){
        document.getElementById('resposta').innerHTML = 'Selecione uma tarefa não concluida';
    }else{
        var i = tarefas.options[tarefas.selectedIndex].index;
        tarefas[i].style.color = 'black';
        
    }
}
