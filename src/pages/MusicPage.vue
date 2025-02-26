<template>
  <q-layout view="hHh lpR fFf" class="music-app">
    <!-- Header - Menu Superior -->
    <!-- <q-header class="bg-white text-slate-900 shadcn-header">
      <q-toolbar>
        <div class="row full-width q-px-sm">
          <div class="col-auto q-mr-md text-weight-medium">Music</div>
          <div class="col-auto q-mr-md">File</div>
          <div class="col-auto q-mr-md">Edit</div>
          <div class="col-auto q-mr-md">View</div>
          <div class="col-auto">Account</div>
        </div>
      </q-toolbar>
    </q-header> -->

    <!-- Sidebar - Menu Lateral Esquerdo -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-white"
      :width="250"
      class="shadcn-sidebar"
    >
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <!-- Discover Section -->
          <q-item-label header class="text-weight-bold text-slate-900 q-py-md">Discover</q-item-label>

          <q-item clickable v-ripple class="menu-item" active-class="menu-item-active" :active="currentView === 'listen-now'">
            <q-item-section avatar>
              <q-icon name="play_circle_outline" />
            </q-item-section>
            <q-item-section>Listen Now</q-item-section>
          </q-item>

          <q-item clickable v-ripple class="menu-item" active-class="menu-item-active">
            <q-item-section avatar>
              <q-icon name="grid_view" />
            </q-item-section>
            <q-item-section>Browse</q-item-section>
          </q-item>

          <q-item clickable v-ripple class="menu-item" active-class="menu-item-active">
            <q-item-section avatar>
              <q-icon name="radio" />
            </q-item-section>
            <q-item-section>Radio</q-item-section>
          </q-item>

          <!-- Library Section -->
          <q-item-label header class="text-weight-bold text-slate-900 q-py-md q-mt-md">Library</q-item-label>

          <q-item clickable v-ripple class="menu-item" active-class="menu-item-active">
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>
            <q-item-section>Playlists</q-item-section>
          </q-item>

          <q-item clickable v-ripple class="menu-item" active-class="menu-item-active">
            <q-item-section avatar>
              <q-icon name="music_note" />
            </q-item-section>
            <q-item-section>Songs</q-item-section>
          </q-item>

          <q-item clickable v-ripple class="menu-item" active-class="menu-item-active" :active="currentView === 'made-for-you'">
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>
            <q-item-section>Made for You</q-item-section>
          </q-item>

          <q-item clickable v-ripple class="menu-item" active-class="menu-item-active">
            <q-item-section avatar>
              <q-icon name="group" />
            </q-item-section>
            <q-item-section>Artists</q-item-section>
          </q-item>

          <q-item clickable v-ripple class="menu-item" active-class="menu-item-active">
            <q-item-section avatar>
              <q-icon name="album" />
            </q-item-section>
            <q-item-section>Albums</q-item-section>
          </q-item>

          <!-- Playlists Section -->
          <q-item-label header class="text-weight-bold text-slate-900 q-py-md q-mt-md">Playlists</q-item-label>

          <q-item clickable v-ripple class="menu-item" active-class="menu-item-active">
            <q-item-section avatar>
              <q-icon name="playlist_add" />
            </q-item-section>
            <q-item-section>Recently Added</q-item-section>
          </q-item>

          <q-item clickable v-ripple class="menu-item" active-class="menu-item-active">
            <q-item-section avatar>
              <q-icon name="history" />
            </q-item-section>
            <q-item-section>Recently Played</q-item-section>
          </q-item>

          <q-item clickable v-ripple class="menu-item" active-class="menu-item-active">
            <q-item-section avatar>
              <q-icon name="trending_up" />
            </q-item-section>
            <q-item-section>Top Songs</q-item-section>
          </q-item>

          <q-item clickable v-ripple class="menu-item" active-class="menu-item-active">
            <q-item-section avatar>
              <q-icon name="album" />
            </q-item-section>
            <q-item-section>Top Albums</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- Content - Área Principal -->
    <q-page-container class="bg-slate-50">
      <q-page class="q-pa-md">

        <!-- Cabeçalho da Página -->
        <div class="row items-center justify-between q-mb-lg">
          <!-- Tabs de navegação -->
          <div class="shadcn-tabs-container">
            <q-tabs
              v-model="tab"
              class="shadcn-tabs"
              active-color="primary"
              indicator-color="primary"
              narrow-indicator
            >
              <q-tab name="music" label="Music" class="text-weight-medium" />
              <q-tab name="podcasts" label="Podcasts" class="text-weight-medium" />
              <q-tab name="live" label="Live" class="text-weight-medium" />
            </q-tabs>
          </div>

          <!-- Botão de adicionar -->
          <q-btn 
            unelevated 
            rounded 
            color="black" 
            class="q-px-md" 
            icon="add" 
            label="Add music" 
            no-caps
          />
        </div>

        <!-- Conteúdo da Tab Selecionada -->
        <q-tab-panels v-model="tab" animated class="bg-transparent">
          <q-tab-panel name="music" class="q-pa-none">
            
            <!-- Listen Now Section -->
            <div v-if="currentView === 'listen-now'">
              <div class="section-header q-mb-md">
                <h2 class="text-h4 text-weight-medium q-mb-xs">Listen Now</h2>
                <p class="text-slate-500">Top picks for you. Updated daily.</p>
              </div>

              <q-separator class="q-mb-lg" />

              <!-- Cards para Listen Now - Grid de 4 colunas -->
              <div class="row q-col-gutter-md q-mb-xl">
                <div v-for="album in topPicks" :key="album.id" class="col-xs-12 col-sm-6 col-md-3">
                  <div class="album-card">
                    <q-img 
                      :src="album.cover" 
                      :ratio="1"
                      class="rounded-borders"
                    />
                    <div class="q-mt-sm">
                      <div class="text-subtitle1 text-weight-medium text-slate-900">{{ album.title }}</div>
                      <div class="text-caption text-slate-500">{{ album.artist }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Made for You Section -->
            <div v-if="currentView === 'made-for-you' || currentView === 'listen-now'">
              <div class="section-header q-mb-md">
                <h2 class="text-h4 text-weight-medium q-mb-xs">Made for You</h2>
                <p class="text-slate-500">Your personal playlists. Updated daily.</p>
              </div>

              <q-separator class="q-mb-lg" />

              <!-- Cards para Made For You - Grid de 6 colunas -->
              <div class="row q-col-gutter-md">
                <div v-for="playlist in personalPlaylists" :key="playlist.id" class="col-xs-12 col-sm-4 col-md-2">
                  <div class="album-card">
                    <q-img 
                      :src="playlist.cover" 
                      :ratio="1"
                      class="rounded-borders"
                    />
                    <div class="q-mt-sm">
                      <div class="text-subtitle1 text-weight-medium text-slate-900">{{ playlist.title }}</div>
                      <div class="text-caption text-slate-500">{{ playlist.artist }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </q-tab-panel>

          <q-tab-panel name="podcasts" class="q-pa-none">
            <div class="text-h4 text-weight-medium q-mb-lg">Podcasts</div>
            <p class="text-slate-500">Podcasts content would go here.</p>
          </q-tab-panel>

          <q-tab-panel name="live" class="q-pa-none">
            <div class="text-h4 text-weight-medium q-mb-lg">Live</div>
            <p class="text-slate-500">Live content would go here.</p>
          </q-tab-panel>
        </q-tab-panels>
      </q-page>
    </q-page-container>

    <!-- Footer - Rodapé com créditos -->
    <q-footer class="bg-white text-slate-500 q-py-sm">
      <div class="q-px-md text-caption">
        Built by shadcn. Ported to Vue by unovue. The code source is available on GitHub.
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

const leftDrawerOpen = ref(true);
const tab = ref('music');
const currentView = ref('listen-now'); // 'listen-now' ou 'made-for-you'

// Dados para a seção "Listen Now"
const topPicks = ref([
  {
    id: 1,
    title: 'React Rendezvous',
    artist: 'Ethan Byte',
    cover: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 2,
    title: 'Async Awakenings',
    artist: 'Nina Netcode',
    cover: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 3,
    title: 'The Art of Reusability',
    artist: 'Lena Logic',
    cover: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 4,
    title: 'Stateful Symphony',
    artist: 'Beth Binary',
    cover: 'https://images.unsplash.com/photo-1543949806-2c9935e6aa41?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3'
  }
]);

// Dados para a seção "Made for You"
const personalPlaylists = ref([
  {
    id: 1,
    title: 'Thinking Components',
    artist: 'Lena Logic',
    cover: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 2,
    title: 'Functional Fury',
    artist: 'Beth Binary',
    cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 3,
    title: 'React Rendezvous',
    artist: 'Ethan Byte',
    cover: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 4,
    title: 'Stateful Symphony',
    artist: 'Beth Binary',
    cover: 'https://images.unsplash.com/photo-1543949806-2c9935e6aa41?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 5,
    title: 'Async Awakenings',
    artist: 'Nina Netcode',
    cover: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    id: 6,
    title: 'The Art of Reusability',
    artist: 'Lena Logic',
    cover: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3'
  }
]);
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

// Estilos globais
.music-app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

// Estilos do cabeçalho
.shadcn-header {
  border-bottom: 1px solid $slate-200;
  
  .q-toolbar {
    min-height: 50px;
  }
}

// Estilos da sidebar
.shadcn-sidebar {
  .menu-list {
    .q-item-label {
      font-size: 1rem;
    }
  }
  
  .menu-item {
    border-radius: $border-radius;
    color: $slate-700;
    margin: 2px 0;
    
    .q-icon {
      color: $slate-600;
    }
    
    &:hover {
      background-color: $slate-100;
    }
  }
  
  .menu-item-active {
    background-color: $slate-100;
    color: $primary;
    font-weight: 500;
    
    .q-icon {
      color: $primary;
    }
  }
}

// Estilos das tabs
.shadcn-tabs-container {
  background-color: white;
  border-radius: 9999px;
  padding: 4px;
  display: inline-block;
  border: 1px solid $slate-200;
}

.shadcn-tabs {
  .q-tab {
    border-radius: 9999px;
    min-height: 40px;
    padding: 0 16px;
    
    &.q-tab--active {
      background-color: $slate-900;
      color: white;
    }
  }
  
  .q-tab__indicator {
    display: none;
  }
}

// Estilos de cartões de álbuns
.album-card {
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .q-img {
    border-radius: $border-radius;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
}

// Estilos da seção
.section-header {
  h2 {
    font-weight: 600;
  }
}
</style>