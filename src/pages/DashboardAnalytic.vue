<template>
  <q-page class="shadcn-dashboard bg-slate-50 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Primeira linha - Estatísticas em 3 cards -->
      <div class="row q-col-gutter-md q-mb-6">
        <!-- Card de Receita Total -->
        <div class="col-xs-12 col-sm-6 col-lg-4">
          <q-card class="shadcn-card no-shadow h-full">
            <q-card-section class="q-pa-md">
              <div class="text-subtitle1 text-slate-500">Total Revenue</div>
              <div class="text-h3 text-slate-900 text-weight-medium q-mt-sm">
                $15,231.89
                <span class="text-positive text-body1 q-ml-sm">+20.1%</span>
              </div>
              <div class="text-caption text-slate-500 q-mb-md">from last month</div>
              
              <!-- Gráfico de linha -->
              <apexchart
                type="line"
                height="80"
                :options="revenueChartOptions"
                :series="revenueChartSeries"
              ></apexchart>
            </q-card-section>
          </q-card>
        </div>
        
        <!-- Card de Assinaturas -->
        <div class="col-xs-12 col-sm-6 col-lg-4">
          <q-card class="shadcn-card no-shadow h-full">
            <q-card-section class="q-pa-md">
              <div class="text-subtitle1 text-slate-500">Subscriptions</div>
              <div class="text-h3 text-slate-900 text-weight-medium q-mt-sm">
                +2350
                <span class="text-positive text-body1 q-ml-sm">+54.8%</span>
              </div>
              <div class="text-caption text-slate-500 q-mb-md">from last month</div>
              
              <!-- Gráfico de barras -->
              <apexchart
                type="bar"
                height="80"
                :options="subscriptionChartOptions"
                :series="subscriptionChartSeries"
              ></apexchart>
            </q-card-section>
          </q-card>
        </div>
        
        <!-- Card de Calendário -->
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-mb-md">
          <q-card class="shadcn-card no-shadow h-full">
            <q-card-section class="q-pa-md">
              <div class="flex justify-between items-center q-mb-sm">
                <q-btn flat dense round icon="chevron_left" color="slate-700" />
                <div class="text-subtitle1 text-weight-medium text-slate-900">February 2025</div>
                <q-btn flat dense round icon="chevron_right" color="slate-700" />
              </div>
              
              <!-- Mini calendário -->
              <div class="calendar-grid">
                <div class="calendar-header">
                  <div v-for="day in ['S', 'M', 'T', 'W', 'T', 'F', 'S']" :key="day" class="calendar-cell text-slate-500">
                    {{ day }}
                  </div>
                </div>
                
                <div class="calendar-body">
                  <div v-for="date in calendarDates" :key="date.day" 
                       class="calendar-cell" 
                       :class="[
                         date.isCurrentMonth ? 'text-slate-900' : 'text-slate-400',
                         date.isToday ? 'calendar-cell-today' : '',
                         date.isSelected ? 'calendar-cell-selected' : ''
                       ]">
                    {{ date.day }}
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- Card de membros da equipe -->
        <div class="col-xs-12 col-sm-6 col-md-8 col-lg-4">
          <q-card class="shadcn-card no-shadow">
            <q-card-section class="">
              <div class="text-h6 text-slate-900">Team Members</div>
              <div class="text-caption text-slate-500 q-mb-md">Invite your team members to collaborate.</div>
              
              <q-list class="q-pa-none">
                <q-item v-for="(member, index) in teamMembers" :key="index" class="q-pa-none q-py-sm">
                  <q-item-section avatar>
                    <q-avatar>
                      <img :src="member.avatar" />
                    </q-avatar>
                  </q-item-section>
                  
                  <q-item-section>
                    <q-item-label class="text-slate-900">{{ member.name }}</q-item-label>
                    <q-item-label caption class="text-slate-500">{{ member.email }}</q-item-label>
                  </q-item-section>
                  
                  <q-item-section side>
                    <q-btn flat round dense :icon="member.menuOpen ? 'expand_less' : 'expand_more'" 
                           color="slate-600" @click="member.menuOpen = !member.menuOpen" />
                    
                    <q-menu v-model="member.menuOpen" class="shadcn-menu">
                      <q-list dense>
                        <q-item clickable class="shadcn-menu-item">
                          <q-item-section>View Profile</q-item-section>
                        </q-item>
                        <q-item clickable class="shadcn-menu-item">
                          <q-item-section>Edit Permissions</q-item-section>
                        </q-item>
                        <q-separator class="bg-slate-200" />
                        <q-item clickable class="shadcn-menu-item text-negative">
                          <q-item-section>Remove</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
        
      </div>
      
      <!-- Segunda linha - Membros da equipe e chat -->
      <div class="row q-col-gutter-md">
        <!-- Card de membros da equipe -->
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <q-card class="shadcn-card no-shadow">
            <q-card-section class="">
              <div class="text-h6 text-slate-900">Team Members</div>
              <div class="text-caption text-slate-500 q-mb-md">Invite your team members to collaborate.</div>
              
              <q-list class="q-pa-none">
                <q-item v-for="(member, index) in teamMembers" :key="index" class="q-pa-none q-py-sm">
                  <q-item-section avatar>
                    <q-avatar>
                      <img :src="member.avatar" />
                    </q-avatar>
                  </q-item-section>
                  
                  <q-item-section>
                    <q-item-label class="text-slate-900">{{ member.name }}</q-item-label>
                    <q-item-label caption class="text-slate-500">{{ member.email }}</q-item-label>
                  </q-item-section>
                  
                  <q-item-section side>
                    <q-btn flat round dense :icon="member.menuOpen ? 'expand_less' : 'expand_more'" 
                           color="slate-600" @click="member.menuOpen = !member.menuOpen" />
                    
                    <q-menu v-model="member.menuOpen" class="shadcn-menu">
                      <q-list dense>
                        <q-item clickable class="shadcn-menu-item">
                          <q-item-section>View Profile</q-item-section>
                        </q-item>
                        <q-item clickable class="shadcn-menu-item">
                          <q-item-section>Edit Permissions</q-item-section>
                        </q-item>
                        <q-separator class="bg-slate-200" />
                        <q-item clickable class="shadcn-menu-item text-negative">
                          <q-item-section>Remove</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
        
        <!-- Card de chat/mensagens -->
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <q-card class="shadcn-card no-shadow">
            <q-card-section class="q-pa-md">
              <div class="row items-center q-mb-md">
                <q-avatar size="40px" class="q-mr-sm">
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
                <div>
                  <div class="text-subtitle1 text-slate-900">Sofia Davis</div>
                  <div class="text-caption text-slate-500">m@example.com</div>
                </div>
                <q-space />
                <q-btn flat round dense icon="add" color="primary" />
              </div>
              
              <div class="chat-container q-py-md">
                <div class="chat-message-row">
                  <div class="chat-bubble chat-incoming">
                    Hi, how can I help you today?
                  </div>
                </div>
                
                <div class="chat-message-row chat-message-row-outgoing">
                  <div class="chat-bubble chat-outgoing">
                    Hey, I'm having trouble with my account.
                  </div>
                </div>
                
                <div class="chat-message-row">
                  <div class="chat-bubble chat-incoming">
                    What seems to be the problem?
                  </div>
                </div>
                
                <div class="chat-message-row chat-message-row-outgoing">
                  <div class="chat-bubble chat-outgoing">
                    I can't log in.
                  </div>
                </div>
              </div>
              
              <div class="chat-input-container">
                <q-input
                  outlined
                  dense
                  placeholder="Type a message..."
                  class="shadcn-input"
                  bg-color="white"
                  v-model="chatMessage"
                >
                  <template v-slot:after>
                    <q-btn round dense flat icon="send" color="primary" />
                  </template>
                </q-input>
              </div>
            </q-card-section>
          </q-card>
        </div>
        
        <!-- Card de metas de movimento -->
        <div class="col-xs-12 col-sm-12 col-lg-4 q-mb-md">
          <q-card class="shadcn-card no-shadow">
            <q-card-section class="q-pa-md">
              <div class="text-h6 text-slate-900">Move Goal</div>
              <div class="text-caption text-slate-500 q-mb-lg">Set your daily activity goal.</div>
              
              <div class="text-center q-mb-lg">
                <div class="row justify-center items-center q-mb-sm">
                  <q-btn round flat dense icon="remove" color="primary" @click="decreaseGoal" />
                  <div class="text-h1 q-mx-lg text-weight-medium text-slate-900">{{ moveGoal }}</div>
                  <q-btn round flat dense icon="add" color="primary" @click="increaseGoal" />
                </div>
                <div class="text-caption text-uppercase text-slate-500">CALORIES/DAY</div>
              </div>
              
              <!-- Gráfico de barras para histórico de atividades -->
              <apexchart
                type="bar"
                height="100"
                :options="activityChartOptions"
                :series="activityChartSeries"
              ></apexchart>
              
              <div class="q-mt-lg">
                <q-btn 
                  class="full-width shadcn-btn bg-black text-white" 
                  no-caps 
                  unelevated
                  label="Set Goal" 
                />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      
      <!-- Terceira linha - Minutos de exercício (gráfico de linha) -->
      <div class="row q-col-gutter-md">
        <div class="col-12">
          <q-card class="shadcn-card no-shadow">
            <q-card-section class="q-pa-md">
              <div class="text-h6 text-slate-900">Exercise Minutes</div>
              <div class="text-caption text-slate-500 q-mb-md">Your exercise minutes are ahead of where you normally are.</div>
              
              <!-- Gráfico de linha para minutos de exercício -->
              <apexchart
                type="line"
                height="300"
                :options="exerciseChartOptions"
                :series="exerciseChartSeries"
              ></apexchart>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Dados para o chat
const chatMessage = ref('');

// Dados para o objetivo de movimento
const moveGoal = ref(350);
const increaseGoal = () => {
  moveGoal.value += 50;
};
const decreaseGoal = () => {
  if (moveGoal.value > 50) {
    moveGoal.value -= 50;
  }
};

// Dados para o calendário
const calendarDates = ref([]);

// Preencher dados do calendário
const generateCalendarDates = () => {
  const year = 2025;
  const month = 1; // Fevereiro (0-indexed)
  
  const firstDay = new Date(year, month, 1).getDay(); // Dia da semana do primeiro dia (0-6)
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Número de dias no mês
  const daysInPrevMonth = new Date(year, month, 0).getDate(); // Número de dias no mês anterior
  
  // Dias do mês anterior
  for (let i = 0; i < firstDay; i++) {
    calendarDates.value.push({
      day: daysInPrevMonth - firstDay + i + 1,
      isCurrentMonth: false,
      isToday: false,
      isSelected: false
    });
  }
  
  // Dias do mês atual
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDates.value.push({
      day: i,
      isCurrentMonth: true,
      isToday: i === 15, // Apenas para demonstração
      isSelected: i === 26 // Dia selecionado para demonstração
    });
  }
  
  // Dias do próximo mês para completar a grade (se necessário)
  const totalDays = calendarDates.value.length;
  const remainingCells = 42 - totalDays; // 6 semanas x 7 dias
  
  for (let i = 1; i <= remainingCells; i++) {
    calendarDates.value.push({
      day: i,
      isCurrentMonth: false,
      isToday: false,
      isSelected: false
    });
  }
};

// Dados para membros da equipe
const teamMembers = ref([
  {
    name: 'Sofia Davis',
    email: 'm@example.com',
    avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
    role: 'Owner',
    menuOpen: false
  },
  {
    name: 'Jackson Lee',
    email: 'p@example.com',
    avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
    role: 'Member',
    menuOpen: false
  },
  {
    name: 'Isabella Nguyen',
    email: 'i@example.com',
    avatar: 'https://cdn.quasar.dev/img/avatar5.jpg',
    role: 'Member',
    menuOpen: false
  }
]);

// Configurações do gráfico de receita
const revenueChartOptions = {
  chart: {
    type: 'line',
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  colors: ['#10B981'],
  stroke: {
    curve: 'smooth',
    width: 2
  },
  tooltip: {
    enabled: true
  },
  grid: {
    show: false
  },
  xaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false
  },
  markers: {
    size: 4,
    colors: ['#10B981'],
    strokeColors: '#fff',
    strokeWidth: 2
  }
};

const revenueChartSeries = [
  {
    name: 'Revenue',
    data: [30, 40, 25, 22, 20, 18, 25, 35, 55]
  }
];

// Configurações do gráfico de assinaturas
const subscriptionChartOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  colors: ['#111827'],
  plotOptions: {
    bar: {
      borderRadius: 2,
      columnWidth: '80%'
    }
  },
  grid: {
    show: false
  },
  xaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false
  },
  tooltip: {
    enabled: true
  }
};

const subscriptionChartSeries = [
  {
    name: 'Subscriptions',
    data: [40, 45, 35, 40, 32, 38, 42, 36]
  }
];

// Configurações do gráfico de atividade
const activityChartOptions = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  colors: ['#E5E7EB'],
  plotOptions: {
    bar: {
      borderRadius: 2,
      columnWidth: '80%'
    }
  },
  grid: {
    show: false
  },
  xaxis: {
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false
  },
  tooltip: {
    enabled: false
  }
};

const activityChartSeries = [
  {
    name: 'Activity',
    data: [350, 275, 350, 325, 350, 325, 300, 350, 300, 325, 300, 350, 375]
  }
];

// Configurações do gráfico de exercício
const exerciseChartOptions = {
  chart: {
    type: 'line',
    toolbar: {
      show: false
    },
    animations: {
      enabled: true
    }
  },
  colors: ['#111827', '#94A3B8'],
  stroke: {
    curve: 'smooth',
    width: [2, 2]
  },
  grid: {
    borderColor: '#E2E8F0',
    row: {
      colors: ['transparent']
    },
    column: {
      colors: ['transparent']
    }
  },
  markers: {
    size: 5,
    colors: ['#FFFFFF'],
    strokeColors: ['#111827', '#94A3B8'],
    strokeWidth: 2
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    labels: {
      style: {
        colors: '#64748B'
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#64748B'
      }
    }
  },
  legend: {
    show: false
  },
  tooltip: {
    enabled: true,
    theme: 'light',
    y: {
      formatter: (value) => {
        return `${value} minutes`;
      }
    }
  }
};

const exerciseChartSeries = [
  {
    name: 'This year',
    data: [30, 40, 75, 50, 60, 45, 55, 35, 40]
  },
  {
    name: 'Last year',
    data: [25, 30, 40, 35, 50, 40, 35, 30, 35]
  }
];

onMounted(() => {
  generateCalendarDates();
});
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
$slate-950: #020617;
$blue-500: #3b82f6;
$blue-600: #2563eb;
$green-500: #22c55e;
$red-500: #ef4444;
$border-radius: 6px;

.shadcn-card {
  border-radius: $border-radius;
  border: 1px solid $slate-200;
  background-color: white;
  overflow: hidden;
  
  .text-h3 {
    font-size: 2rem;
    line-height: 1.2;
    font-weight: 600;
  }
  
  .text-positive {
    color: $green-500;
  }
  
  .text-negative {
    color: $red-500;
  }
}

// Estilos do calendário
.calendar-grid {
  display: grid;
  grid-template-rows: auto auto;
  gap: 4px;
}

.calendar-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
}

.calendar-body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, auto);
  gap: 4px;
}

.calendar-cell {
  height: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  border-radius: 50%;
  
  &.calendar-cell-today {
    color: $blue-600;
    font-weight: 600;
  }
  
  &.calendar-cell-selected {
    background-color: $slate-900;
    color: white;
  }
}

// Estilos do chat
.chat-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 200px;
  overflow-y: auto;
}

.chat-message-row {
  display: flex;
  
  &.chat-message-row-outgoing {
    justify-content: flex-end;
  }
}

.chat-bubble {
  max-width: 80%;
  padding: 8px 12px;
  border-radius: 12px;
  font-size: 0.9rem;
  
  &.chat-incoming {
    background-color: $slate-100;
    color: $slate-800;
    border-bottom-left-radius: 4px;
  }
  
  &.chat-outgoing {
    background-color: $slate-900;
    color: white;
    border-bottom-right-radius: 4px;
  }
}

.chat-input-container {
  margin-top: 16px;
}

.shadcn-input {
  ::v-deep(.q-field__control) {
    border-radius: $border-radius;
  }
}

.shadcn-btn {
  border-radius: $border-radius;
  font-weight: 500;
  height: 40px;
}
</style>