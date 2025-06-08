document.addEventListener('DOMContentLoaded', () => {
    let tarefas = [];

    // Função para carregar as tarefas do LocalStorage
    const loadTasks = () => {
        const storedTasks = localStorage.getItem('tarefas');
        if (storedTasks) {
            tarefas = JSON.parse(storedTasks);
            console.log('Tarefas carregadas do LocalStorage:', tarefas); // Log para depuração
        }
    };

    console.log("Teste de integração com ClickUp");


    // Função para salvar as tarefas no LocalStorage
    const saveTasks = () => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        console.log('Tarefas salvas no LocalStorage:', tarefas); // Log para depuração
    };

    const showForm = (columnId) => {
        document.getElementById('taskFormContainer').style.display = 'block';
        document.getElementById('taskForm').dataset.columnId = columnId;
        document.getElementById('taskForm').dataset.tarefaId = '';
    };

    const closeForm = () => {
        document.getElementById('taskFormContainer').style.display = 'none';
        document.getElementById('taskForm').reset();
    };

    const addTask = () => {
        const columnId = document.getElementById('taskForm').dataset.columnId;
        const tarefaId = document.getElementById('taskForm').dataset.tarefaId;
        const title = document.getElementById('title').value.trim();
        const description = document.getElementById('description').value.trim();
        const priority = document.getElementById('priority').value;
        const dueDate = document.getElementById('dueDate').value;
        const responsible = document.getElementById('responsible').value.trim();

        if (!title || !description || !priority || !dueDate || !responsible) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const tarefa = {
            id: tarefaId ? tarefaId : Date.now().toString(),
            title,
            description,
            priority,
            dueDate,
            responsible,
            columnId
        };

        if (tarefaId) {
            tarefas = tarefas.map(t => t.id === tarefaId ? tarefa : t);
        } else {
            tarefas.push(tarefa);
        }

        saveTasks();
        renderTasks();
        closeForm();
    };

    const editTask = (id) => {
        const tarefa = tarefas.find(t => t.id === id);
        if (tarefa) {
            document.getElementById('title').value = tarefa.title;
            document.getElementById('description').value = tarefa.description;
            document.getElementById('priority').value = tarefa.priority;
            document.getElementById('dueDate').value = tarefa.dueDate;
            document.getElementById('responsible').value = tarefa.responsible;
            document.getElementById('taskForm').dataset.columnId = tarefa.columnId;
            document.getElementById('taskForm').dataset.tarefaId = tarefa.id;
            showForm(tarefa.columnId);
        }
    };

    const moveTask = (id, newColumnId) => {
        tarefas = tarefas.map(t => t.id === id ? { ...t, columnId: newColumnId } : t);
        saveTasks();
        renderTasks();
    };

    const moveTaskBack = (id, prevColumnId) => {
        tarefas = tarefas.map(t => t.id === id ? { ...t, columnId: prevColumnId } : t);
        saveTasks();
        renderTasks();
    };

    const deleteTask = (id) => {
        if (confirm('Você tem certeza que deseja excluir esta tarefa?')) {
            tarefas = tarefas.filter(t => t.id !== id);
            saveTasks();
            renderTasks();
        }
    };

    const concludeTrip = (id) => {
        tarefas = tarefas.filter(t => t.id !== id);
        saveTasks();
        renderTasks();
        alert("Viagem concluída!");
    };

    const renderTasks = () => {
        document.querySelectorAll('.tasks').forEach(column => column.innerHTML = '');

        const today = new Date().toISOString().split('T')[0]; // Obter a data de hoje no formato 'yyyy-mm-dd'

        tarefas.forEach(tarefa => {
            const task = document.createElement('div');
            task.className = 'task';
            task.draggable = true;
            task.id = tarefa.id;

            // Adicionar classe se a data de vencimento for hoje
            if (tarefa.dueDate === today) {
                task.classList.add('task-last-day');
            }

            task.innerHTML = `
                <h3>${tarefa.title}</h3>
                <p>${tarefa.description}</p>
                <p>Prioridade: ${tarefa.priority}</p>
                <p>Data de Vencimento: ${tarefa.dueDate}</p>
                <p>Responsável: ${tarefa.responsible}</p>
                ${tarefa.columnId === 'preparativos' ? '<button onclick="editTask(\'' + tarefa.id + '\')">Editar</button>' : ''}
                <button onclick="deleteTask('${tarefa.id}')">Excluir</button>
                ${tarefa.columnId === 'preparativos' ? '<button onclick="moveTask(\'' + tarefa.id + '\', \'durante\')">Mover para Durante a Viagem</button>' : ''}
                ${tarefa.columnId === 'durante' ? `
                    <button onclick="moveTaskBack('${tarefa.id}', 'preparativos')">Voltar para Preparativos</button>
                    <button onclick="moveTask('${tarefa.id}', 'finalizacao')">Mover para Finalização</button>
                ` : ''}
                ${tarefa.columnId === 'finalizacao' ? `
                    <button onclick="moveTaskBack('${tarefa.id}', 'durante')">Voltar para Durante a Viagem</button>
                    <button onclick="concludeTrip('${tarefa.id}')">Concluir Viagem</button>
                ` : ''}
                <input type="hidden" value="${tarefa.columnId}">
            `;

            task.addEventListener('dragstart', handleDragStart);
            task.addEventListener('dragend', handleDragEnd);

            document.getElementById(`${tarefa.columnId}-tasks`).appendChild(task);
        });
    };

    const handleDragStart = (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
        event.dataTransfer.dropEffect = 'move';
    };

    const handleDragEnd = (event) => {
        event.dataTransfer.clearData();
    };

    const columns = document.querySelectorAll('.tasks');
    columns.forEach((column) => {
        column.addEventListener('dragover', (event) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
        });

        column.addEventListener('drop', (event) => {
            event.preventDefault();
            const taskId = event.dataTransfer.getData('text');
            const task = document.getElementById(taskId);
            const newColumnId = column.parentElement.id;

            if (newColumnId !== task.querySelector('input[type="hidden"]').value) {
                tarefas = tarefas.map(t => t.id === taskId ? { ...t, columnId: newColumnId } : t);
                saveTasks();
                renderTasks();
            }
        });
    });

    // Adicionar funções ao objeto `window` para torná-las acessíveis globalmente
    window.showForm = showForm;
    window.closeForm = closeForm;
    window.addTask = addTask;
    window.editTask = editTask;
    window.deleteTask = deleteTask;
    window.moveTask = moveTask;
    window.moveTaskBack = moveTaskBack;
    window.concludeTrip = concludeTrip;

    // Carregar tarefas ao carregar a página
    loadTasks();
    renderTasks();
});

