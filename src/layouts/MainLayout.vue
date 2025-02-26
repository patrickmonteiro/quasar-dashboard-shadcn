<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Header -->
    <q-header class="shadcn-header bg-white text-slate-900">
      <q-toolbar class="shadcn-toolbar q-px-lg">
        <q-btn
          dense
          flat
          round
          icon="menu"
          class="shadcn-menu-btn"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="shadcn-title">
          <span class="text-weight-medium">Aplicação</span>
        </q-toolbar-title>

        <div class="shadcn-header-actions">
          <!-- Botão de pesquisa -->
          <q-btn flat round dense icon="search" class="shadcn-icon-btn" />
          
          <!-- Notificações -->
          <q-btn flat round dense icon="notifications" class="shadcn-icon-btn">
            <q-badge color="negative" floating rounded text-color="white">4</q-badge>
          </q-btn>

          <!-- Menu do usuário -->
          <q-btn flat round dense class="shadcn-avatar-btn q-ml-sm">
            <q-avatar size="32px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>

            <q-menu class="shadcn-menu">
              <q-list style="min-width: 200px">
                <q-item class="shadcn-menu-header q-px-md q-py-sm">
                  <q-item-section>
                    <q-item-label class="text-weight-medium">João Silva</q-item-label>
                    <q-item-label caption>joao.silva@email.com</q-item-label>
                  </q-item-section>
                </q-item>
                
                <q-separator class="bg-slate-200" />
                
                <q-item v-ripple clickable class="shadcn-menu-item">
                  <q-item-section avatar>
                    <q-icon name="person" size="xs" />
                  </q-item-section>
                  <q-item-section>Perfil</q-item-section>
                </q-item>
                
                <q-item v-ripple clickable class="shadcn-menu-item">
                  <q-item-section avatar>
                    <q-icon name="settings" size="xs" />
                  </q-item-section>
                  <q-item-section>Configurações</q-item-section>
                </q-item>
                
                <q-separator class="bg-slate-200" />
                
                <q-item v-ripple clickable class="shadcn-menu-item text-red-600">
                  <q-item-section avatar>
                    <q-icon name="logout" size="xs" class="text-red-600" />
                  </q-item-section>
                  <q-item-section>Sair</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Drawer esquerdo (menu lateral) -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="shadcn-drawer bg-white"
      :width="260"
    >
      <div class="shadcn-drawer-header q-pa-md">
        <div class="flex items-center">
          <q-avatar size="32px" class="bg-primary text-white">A</q-avatar>
          <div class="q-ml-sm text-lg text-weight-medium text-slate-900">AppName</div>
        </div>
      </div>

      <q-separator class="bg-slate-200" />

      <q-list class="shadcn-nav">
        <q-item-label header class="text-slate-500 text-xs q-py-sm q-px-md">MENU PRINCIPAL</q-item-label>
        
        <q-item
          clickable
          v-ripple
          exact
          to="/"
          active-class="shadcn-item-active"
          class="shadcn-nav-item"
        >
          <q-item-section avatar>
            <q-icon name="dashboard" size="sm" />
          </q-item-section>
          <q-item-section>Dashboard</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          exact
          to="/dashboard-analytic"
          active-class="shadcn-item-active"
          class="shadcn-nav-item"
        >
          <q-item-section avatar>
            <q-icon name="dashboard" size="sm" />
          </q-item-section>
          <q-item-section>Dashboard Analytic</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          exact
          to="/user-signup"
          active-class="shadcn-item-active"
          class="shadcn-nav-item"
        >
          <q-item-section avatar>
            <q-icon name="people" size="sm" />
          </q-item-section>
          <q-item-section>Usuários</q-item-section>
        </q-item>
        
        <q-item
          clickable
          v-ripple
          exact
          to="/settings-page"
          active-class="shadcn-item-active"
          class="shadcn-nav-item"
        >
          <q-item-section avatar>
            <q-icon name="shopping_bag" size="sm" />
          </q-item-section>
          <q-item-section>Configurações</q-item-section>
        </q-item>
        
        <q-item
          clickable
          v-ripple
          exact
          to="/task-list"
          active-class="shadcn-item-active"
          class="shadcn-nav-item"
        >
          <q-item-section avatar>
            <q-icon name="shopping_cart" size="sm" />
          </q-item-section>
          <q-item-section>Task List</q-item-section>
        </q-item>
        
        <q-separator class="bg-slate-200 q-my-sm" />
        
        <q-item-label header class="text-slate-500 text-xs q-py-sm q-px-md">CONFIGURAÇÕES</q-item-label>
        
        <q-item
          clickable
          v-ripple
          exact
          to="/music-page"
          active-class="shadcn-item-active"
          class="shadcn-nav-item"
        >
          <q-item-section avatar>
            <q-icon name="settings" size="sm" />
          </q-item-section>
          <q-item-section>Music</q-item-section>
        </q-item>
        
        <q-item
          clickable
          v-ripple
          exact
          to="/login"
          active-class="shadcn-item-active"
          class="shadcn-nav-item"
        >
          <q-item-section avatar>
            <q-icon name="person" size="sm" />
          </q-item-section>
          <q-item-section>Login</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          exact
          to="/signup-page"
          active-class="shadcn-item-active"
          class="shadcn-nav-item"
        >
          <q-item-section avatar>
            <q-icon name="person" size="sm" />
          </q-item-section>
          <q-item-section>Cadastro</q-item-section>
        </q-item>
        
        <q-item
          clickable
          v-ripple
          class="shadcn-nav-item text-red-600"
        >
          <q-item-section avatar>
            <q-icon name="logout" size="sm" class="text-red-600" />
          </q-item-section>
          <q-item-section>Sair</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Conteúdo principal -->
    <q-page-container class="shadcn-page-container bg-slate-50">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<style lang="scss">
// Variáveis inspiradas no Shadcn
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
$blue-600: #2563eb;
$red-600: #dc2626;
$border-radius: 6px;

// Estilos do cabeçalho
.shadcn-header {
  border-bottom: 1px solid $slate-200;
  height: 64px;
}

.shadcn-toolbar {
  min-height: 64px;
}

.shadcn-title {
  font-size: 1rem;
}

.shadcn-menu-btn {
  color: $slate-700;
}

.shadcn-header-actions {
  display: flex;
  align-items: center;
}

.shadcn-icon-btn {
  color: $slate-700;
  margin: 0 4px;
  
  &:hover {
    background-color: $slate-100;
  }
}

.shadcn-avatar-btn {
  padding: 4px;
  border-radius: $border-radius;
  
  &:hover {
    background-color: $slate-100;
  }
}

// Estilos do menu do usuário
.shadcn-menu {
  border-radius: $border-radius;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  border: 1px solid $slate-200;
  
  .shadcn-menu-header {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  
  .shadcn-menu-item {
    min-height: 40px;
    font-size: 0.875rem;
    
    &:hover {
      background-color: $slate-100;
    }
  }
}

// Estilos do drawer (menu lateral)
.shadcn-drawer {
  border-right: 1px solid $slate-200;
}

.shadcn-drawer-header {
  height: 64px;
  display: flex;
  align-items: center;
}

.shadcn-nav {
  .shadcn-nav-item {
    border-radius: $border-radius;
    margin: 4px 8px;
    min-height: 40px;
    font-size: 0.875rem;
    color: $slate-700;
    
    .q-icon {
      color: $slate-500;
    }
    
    &:hover {
      background-color: $slate-100;
    }
    
    &.shadcn-item-active {
      background-color: $slate-100;
      color: $blue-600;
      font-weight: 500;
      
      .q-icon {
        color: $blue-600;
      }
    }
  }
  
  .q-item__section--avatar {
    min-width: 36px;
  }
  
  .q-item-label--header {
    letter-spacing: 0.05em;
    font-weight: 600;
    padding-bottom: 4px;
  }
}

// Estilos da área de conteúdo
.shadcn-page-container {
  min-height: 100vh;
}

// Estilo global para overrides
.q-badge {
  font-size: 0.65rem;
  padding: 0 4px;
  min-height: 16px;
  min-width: 16px;
}

.q-layout {
  background-color: $slate-50;
}
</style>