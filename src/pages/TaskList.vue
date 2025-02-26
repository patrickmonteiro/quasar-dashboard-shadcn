<template>
  <q-page class="shadcn-task-list bg-slate-50 p-6">
    <div class="max-w-7xl mx-auto">
      <div class="shadcn-card no-shadow">
        <div class="q-pa-lg">
          <!-- Cabeçalho da página -->
          <div class="row justify-between items-center q-mb-lg">
            <div>
              <h1 class="text-h4 text-slate-900 text-weight-medium q-mb-xs">Welcome back!</h1>
              <p class="text-slate-500">Here's a list of your tasks for this month!</p>
            </div>
            <q-avatar size="40px">
              <img src="https://cdn.quasar.dev/img/avatar5.jpg">
            </q-avatar>
          </div>
          
          <!-- Filtros e controles -->
          <div class="row q-col-gutter-md items-center q-mb-md">
            <div class="col-xs-12 col-sm-6 col-md-4">
              <q-input 
                outlined 
                dense 
                placeholder="Filter tasks..." 
                v-model="filter"
                class="shadcn-input"
              >
                <template v-slot:prepend>
                  <q-icon name="search" color="slate-400" />
                </template>
              </q-input>
            </div>
            
            <div class="col-auto">
              <q-btn 
                outline 
                color="primary" 
                class="shadcn-filter-btn" 
                no-caps
              >
                <q-icon name="add" size="xs" class="q-mr-xs" />
                Status
              </q-btn>
            </div>
            
            <div class="col-auto">
              <q-btn 
                outline 
                color="primary" 
                class="shadcn-filter-btn" 
                no-caps
              >
                <q-icon name="add" size="xs" class="q-mr-xs" />
                Priority
              </q-btn>
            </div>
            
            <div class="col-auto q-ml-auto">
              <q-btn 
                outline 
                color="primary" 
                class="shadcn-filter-btn" 
                no-caps
              >
                <q-icon name="tune" size="xs" class="q-mr-xs" />
                View
              </q-btn>
            </div>
          </div>
          
          <!-- Tabela de tarefas -->
          <div class="task-table-container">
            <q-table
              :rows="filteredTasks"
              :columns="columns"
              row-key="id"
              :pagination="{ rowsPerPage: 0 }"
              :filter="filter"
              flat
              bordered
              class="shadcn-task-table"
              :rows-per-page-options="[0]"
            >
              <template v-slot:header="props">
                <q-tr :props="props">
                  <q-th auto-width></q-th>
                  <q-th
                    v-for="col in props.cols"
                    :key="col.name"
                    :props="props"
                    class="text-slate-700"
                  >
                    {{ col.label }}
                    <q-icon 
                      name="unfold_more" 
                      size="xs" 
                      class="q-ml-xs" 
                      v-if="col.name !== 'actions'"
                    />
                  </q-th>
                </q-tr>
              </template>
              
              <template v-slot:body="props">
                <q-tr :props="props" class="shadcn-task-row">
                  <q-td auto-width>
                    <q-checkbox color="primary" dense v-model="props.row.completed" />
                  </q-td>
                  
                  <q-td key="id" :props="props" class="text-slate-600">
                    {{ props.row.id }}
                  </q-td>
                  
                  <q-td key="type" :props="props">
                    <q-badge 
                      :color="getTypeBadgeColor(props.row.type)" 
                      text-color="white"
                      class="shadcn-badge"
                    >
                      {{ props.row.type }}
                    </q-badge>
                  </q-td>
                  
                  <q-td key="title" :props="props" class="text-slate-900">
                    {{ props.row.title }}
                  </q-td>
                  
                  <q-td key="status" :props="props">
                    <div class="row items-center">
                      <q-icon 
                        :name="getStatusIcon(props.row.status)" 
                        size="sm" 
                        :color="getStatusColor(props.row.status)" 
                        class="q-mr-xs"
                      />
                      {{ props.row.status }}
                    </div>
                  </q-td>
                  
                  <q-td key="priority" :props="props">
                    <div class="row items-center">
                      <q-icon 
                        :name="getPriorityIcon(props.row.priority)" 
                        size="sm" 
                        :color="getPriorityColor(props.row.priority)"
                        class="q-mr-xs"
                      />
                      {{ props.row.priority }}
                    </div>
                  </q-td>
                  
                  <q-td key="actions" :props="props" class="text-center">
                    <q-btn flat round dense icon="more_horiz" color="slate-600" />
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';

// Filtro de texto
const filter = ref('');

// Definição das colunas
const columns = [
  { name: 'id', align: 'left', label: 'Task', field: 'id', sortable: true },
  { name: 'type', align: 'left', label: 'Title', field: 'type', sortable: true },
  { name: 'title', align: 'left', label: '', field: 'title', sortable: true },
  { name: 'status', align: 'left', label: 'Status', field: 'status', sortable: true },
  { name: 'priority', align: 'left', label: 'Priority', field: 'priority', sortable: true },
  { name: 'actions', align: 'center', label: '', field: 'actions', sortable: false }
];

// Dados das tarefas (mock)
const tasks = ref([
  { id: 'TASK-8782', type: 'Documentation', title: 'You can\'t compress the program without quantifying the open-source SSD ...', status: 'In Progress', priority: 'Medium', completed: false },
  { id: 'TASK-7878', type: 'Documentation', title: 'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!', status: 'Backlog', priority: 'Medium', completed: false },
  { id: 'TASK-7839', type: 'Bug', title: 'We need to bypass the neural TCP card!', status: 'Todo', priority: 'High', completed: false },
  { id: 'TASK-5562', type: 'Feature', title: 'The SAS interface is down, bypass the open-source pixel so we can back u...', status: 'Backlog', priority: 'Medium', completed: false },
  { id: 'TASK-8686', type: 'Feature', title: 'I\'ll parse the wireless SSL protocol, that should driver the API panel!', status: 'Canceled', priority: 'Medium', completed: false },
  { id: 'TASK-1280', type: 'Bug', title: 'Use the digital TLS panel, then you can transmit the haptic system!', status: 'Done', priority: 'High', completed: true },
  { id: 'TASK-7262', type: 'Feature', title: 'The UTF8 application is down, parse the neural bandwidth so we can back ...', status: 'Done', priority: 'High', completed: true },
  { id: 'TASK-1138', type: 'Feature', title: 'Generating the driver won\'t do anything, we need to quantify the 1080p SM...', status: 'In Progress', priority: 'Medium', completed: false },
  { id: 'TASK-7184', type: 'Feature', title: 'We need to program the back-end THX pixel!', status: 'Todo', priority: 'Low', completed: false },
  { id: 'TASK-5160', type: 'Documentation', title: 'Calculating the bus won\'t do anything, we need to navigate the back-end J...', status: 'In Progress', priority: 'High', completed: false }
]);

// Filtragem de tarefas
const filteredTasks = computed(() => {
  if (!filter.value) return tasks.value;
  
  const searchTerm = filter.value.toLowerCase();
  return tasks.value.filter(task => {
    return task.id.toLowerCase().includes(searchTerm) ||
           task.title.toLowerCase().includes(searchTerm) ||
           task.type.toLowerCase().includes(searchTerm) ||
           task.status.toLowerCase().includes(searchTerm) ||
           task.priority.toLowerCase().includes(searchTerm);
  });
});

// Funções auxiliares para estilização
const getTypeBadgeColor = (type) => {
  switch (type) {
    case 'Bug': return 'red-600';
    case 'Feature': return 'blue-600';
    case 'Documentation': return 'amber-600';
    default: return 'slate-600';
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case 'In Progress': return 'watch_later';
    case 'Backlog': return 'history';
    case 'Todo': return 'radio_button_unchecked';
    case 'Done': return 'check_circle';
    case 'Canceled': return 'cancel';
    default: return 'help';
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'In Progress': return 'blue-600';
    case 'Backlog': return 'slate-400';
    case 'Todo': return 'slate-600';
    case 'Done': return 'green-600';
    case 'Canceled': return 'red-600';
    default: return 'slate-600';
  }
};

const getPriorityIcon = (priority) => {
  switch (priority) {
    case 'High': return 'arrow_upward';
    case 'Medium': return 'arrow_right_alt';
    case 'Low': return 'arrow_downward';
    default: return 'remove';
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'High': return 'red-600';
    case 'Medium': return 'slate-600';
    case 'Low': return 'slate-400';
    default: return 'slate-600';
  }
};
</script>

<style lang="scss" scoped>
// Variáveis de estilo
$primary: #64748b;
$slate-50: #f8fafc;
$slate-100: #f1f5f9;
$slate-200: #e2e8f0;
$slate-300: #cbd5e1;
$slate-400: #94a3b8;
$slate-500: #64748b;
$slate-600: #475569;
$slate-700: #334155;
$slate-800: #1e293b;
$slate-900: #0f172a;
$border-radius: 6px;

.shadcn-task-list {
  min-height: 100vh;
}

.shadcn-card {
  border-radius: $border-radius;
  border: 1px solid $slate-200;
  background-color: white;
}

// Estilização dos inputs
:deep(.shadcn-input) {
  .q-field__control {
    border-radius: $border-radius;
    border-color: $slate-200;
    
    &:hover {
      border-color: $slate-300;
    }
  }
  
  &.q-field--focused {
    .q-field__control {
      border-color: $primary;
      box-shadow: 0 0 0 2px rgba($primary, 0.2);
    }
  }
}

// Estilização dos botões de filtro
.shadcn-filter-btn {
  border-radius: $border-radius;
  border-color: $slate-200;
  color: $slate-700;
  font-weight: 500;
  font-size: 0.875rem;
  height: 40px;
  
  &:hover {
    border-color: $slate-300;
    background-color: $slate-50;
  }
}

// Estilização da tabela
.task-table-container {
  border-radius: $border-radius;
  border: 1px solid $slate-200;
  overflow: hidden;
}

:deep(.shadcn-task-table) {
  .q-table__top,
  .q-table__bottom {
    display: none;
  }
  
  thead tr th {
    background-color: $slate-50;
    color: $slate-700;
    font-weight: 500;
    font-size: 0.875rem;
    padding: 12px 16px;
    border-bottom: 1px solid $slate-200;
  }
  
  tbody tr td {
    padding: 12px 16px;
    border-bottom: 1px solid $slate-200;
    font-size: 0.875rem;
  }
  
  tbody tr:hover {
    background-color: $slate-50;
  }
  
  .q-checkbox__inner {
    font-size: 1.75em;
  }
}

.shadcn-badge {
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 0.75rem;
  font-weight: 500;
}
</style>