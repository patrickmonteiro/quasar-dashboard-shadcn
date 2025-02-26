<template>
  <q-layout view="lHh Lpr lFf">

    <!-- Conteúdo principal -->
    <q-page-container class="shadcn-page-container bg-slate-50">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
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