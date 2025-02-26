<template>
  <q-page class="shadcn-dashboard bg-slate-50 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Título do Dashboard -->
      <div class="mb-8">
        <h1 class="text-3xl font-semibold text-slate-900">Dashboard</h1>
        <p class="text-slate-500 mt-1">Bem-vindo ao seu painel de controle</p>
      </div>
      
      <!-- Primeira linha: 4 cards responsivos -->
      <div class="row q-col-gutter-md">
        <!-- Card 1 -->
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-card class="shadcn-card no-shadow">
            <q-card-section class="q-pa-md">
              <div class="row items-center no-wrap">
                <div class="col-auto">
                  <q-icon name="trending_up" size="24px" class="text-primary" />
                </div>
                <div class="col q-ml-sm">
                  <div class="text-h6 text-slate-900 text-weight-medium">R$ 24.500</div>
                  <div class="text-caption text-slate-500">Receita Mensal</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        
        <!-- Card 2 -->
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-card class="shadcn-card no-shadow">
            <q-card-section class="q-pa-md">
              <div class="row items-center no-wrap">
                <div class="col-auto">
                  <q-icon name="people" size="24px" class="text-indigo-500" />
                </div>
                <div class="col q-ml-sm">
                  <div class="text-h6 text-slate-900 text-weight-medium">258</div>
                  <div class="text-caption text-slate-500">Novos Usuários</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        
        <!-- Card 3 -->
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-card class="shadcn-card no-shadow">
            <q-card-section class="q-pa-md">
              <div class="row items-center no-wrap">
                <div class="col-auto">
                  <q-icon name="shopping_cart" size="24px" class="text-emerald-500" />
                </div>
                <div class="col q-ml-sm">
                  <div class="text-h6 text-slate-900 text-weight-medium">75</div>
                  <div class="text-caption text-slate-500">Pedidos Pendentes</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        
        <!-- Card 4 -->
        <div class="col-xs-12 col-sm-6 col-md-3">
          <q-card class="shadcn-card no-shadow">
            <q-card-section class="q-pa-md">
              <div class="row items-center no-wrap">
                <div class="col-auto">
                  <q-icon name="insert_chart" size="24px" class="text-amber-500" />
                </div>
                <div class="col q-ml-sm">
                  <div class="text-h6 text-slate-900 text-weight-medium">12%</div>
                  <div class="text-caption text-slate-500">Taxa de Conversão</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      
      <!-- Segunda linha: 2 cards (lista e galeria) -->
      <div class="row q-mt-md q-col-gutter-md">
        <!-- Card com Lista -->
        <div class="col-xs-12 col-md-6">
          <q-card class="shadcn-card no-shadow">
            <q-card-section class="q-py-md q-px-lg">
              <div class="text-h6 text-slate-900 text-weight-medium">Atividades Recentes</div>
              <div class="text-caption text-slate-500">Últimas operações do sistema</div>
            </q-card-section>
            
            <q-separator class="bg-slate-200" />
            
            <q-card-section class="q-pa-none">
              <q-list class="shadcn-list">
                <q-item v-for="(activity, index) in activities" :key="index" class="shadcn-item q-my-sm">
                  <q-item-section avatar>
                    <div class="shadcn-avatar" :class="`bg-${activity.color}-100`">
                      <q-icon :name="activity.icon" :class="`text-${activity.color}-600`" size="20px" />
                    </div>
                  </q-item-section>
                  
                  <q-item-section>
                    <q-item-label class="text-slate-900 text-weight-medium">{{ activity.title }}</q-item-label>
                    <q-item-label caption class="text-slate-500">{{ activity.description }}</q-item-label>
                  </q-item-section>
                  
                  <q-item-section side>
                    <q-item-label caption class="text-slate-500">{{ activity.time }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
            
            <q-separator class="bg-slate-200" />
            
            <q-card-section class="q-pa-md q-px-lg">
              <q-btn
                class="shadcn-btn full-width"
                flat
                no-caps
                label="Ver todas as atividades"
                color="primary"
              />
            </q-card-section>
          </q-card>
        </div>
        
        <!-- Card com Galeria -->
        <div class="col-xs-12 col-md-6">
          <q-card class="shadcn-card no-shadow">
            <q-card-section class="q-py-md q-px-lg">
              <div class="text-h6 text-slate-900 text-weight-medium">Projetos Recentes</div>
              <div class="text-caption text-slate-500">Galeria de projetos ativos</div>
            </q-card-section>
            
            <q-separator class="bg-slate-200" />
            
            <q-card-section class="q-pa-md q-px-lg">
              <div class="row q-col-gutter-sm">
                <div class="col-4" v-for="(image, index) in images" :key="index">
                  <q-img
                    :src="image.src"
                    :ratio="1"
                    class="shadcn-img"
                    @click="openGallery(index)"
                  >
                    <div class="absolute-bottom shadcn-img-caption">
                      {{ image.title }}
                    </div>
                  </q-img>
                </div>
              </div>
            </q-card-section>
            
            <q-separator class="bg-slate-200" />
            
            <q-card-section class="q-pa-md q-px-lg">
              <q-btn
                class="shadcn-btn full-width"
                flat
                no-caps
                label="Visualizar todos os projetos"
                color="primary"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    
    <!-- Dialog para exibir imagem ampliada -->
    <q-dialog v-model="galleryDialog" class="shadcn-dialog">
      <q-card class="shadcn-dialog-card">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-slate-900 text-weight-medium">{{ images[currentImage]?.title }}</div>
          <q-space />
          <q-btn icon="close" flat round dense class="shadcn-btn" v-close-popup />
        </q-card-section>
        
        <q-card-section>
          <q-img
            :src="images[currentImage]?.src"
            style="max-height: 70vh;"
            class="rounded-borders"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

// Dados para a lista de atividades
const activities = ref([
  {
    title: 'Novo cliente cadastrado',
    description: 'Carlos Silva acabou de criar uma conta',
    icon: 'person_add',
    color: 'emerald',
    time: 'Agora'
  },
  {
    title: 'Pagamento aprovado',
    description: 'Pedido #12345 confirmado',
    icon: 'payments',
    color: 'green',
    time: '10 min'
  },
  {
    title: 'Produto enviado',
    description: 'Pedido #12340 saiu para entrega',
    icon: 'local_shipping',
    color: 'blue',
    time: '1 hora'
  },
  {
    title: 'Nova avaliação recebida',
    description: '5 estrelas - Produto: Smartphone XYZ',
    icon: 'star',
    color: 'amber',
    time: '3 horas'
  },
  {
    title: 'Suporte técnico solicitado',
    description: 'Ticket #5678 - Problema de instalação',
    icon: 'help',
    color: 'red',
    time: '1 dia'
  }
]);

// Dados para a galeria de imagens
const images = ref([
  { 
    src: 'https://cdn.quasar.dev/img/parallax1.jpg', 
    title: 'Design de UI' 
  },
  { 
    src: 'https://cdn.quasar.dev/img/parallax2.jpg', 
    title: 'Dashboard' 
  },
  { 
    src: 'https://cdn.quasar.dev/img/mountains.jpg', 
    title: 'App Mobile' 
  },
  { 
    src: 'https://cdn.quasar.dev/img/quasar.jpg', 
    title: 'Website' 
  },
  { 
    src: 'https://cdn.quasar.dev/img/cat.jpg', 
    title: 'E-commerce' 
  },
  { 
    src: 'https://cdn.quasar.dev/img/linux-avatar.png', 
    title: 'Blog' 
  }
]);

// Controle do dialog da galeria
const galleryDialog = ref(false);
const currentImage = ref(0);

// Função para abrir o dialog da galeria
const openGallery = (index) => {
  currentImage.value = index;
  galleryDialog.value = true;
};
</script>

<style lang="scss" scoped>
// Variáveis inspiradas no Shadcn
$primary: #64748b;
$border-radius: 6px;
$card-border: 1px solid #e2e8f0;

.shadcn-dashboard {
  min-height: 100vh;
}

.shadcn-card {
  border-radius: $border-radius;
  border: $card-border;
  background-color: white;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  }
  
  .text-h6 {
    font-size: 1.125rem;
    margin-bottom: 0.125rem;
  }
}

.shadcn-btn {
  font-weight: 500;
  font-size: 0.875rem;
  height: 40px;
  border-radius: $border-radius;
  
  &:hover {
    background-color: rgba($primary, 0.05);
  }
}

.shadcn-list {
  padding: 0.5rem 1.25rem;
}

.shadcn-item {
  border-radius: $border-radius;
  margin: 0.5rem 0;
  padding: 0.75rem;
  
  &:hover {
    background-color: #f8fafc;
  }
}

.shadcn-avatar {
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shadcn-img {
  border-radius: $border-radius;
  border: $card-border;
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
}

.shadcn-img-caption {
  background: rgba(15, 23, 42, 0.7);
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
  padding: 0.375rem 0.5rem;
  text-align: center;
}

.shadcn-dialog-card {
  border-radius: $border-radius;
  max-width: 90vw;
}
</style>