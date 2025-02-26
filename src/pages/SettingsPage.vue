<template>
  <q-page class="shadcn-settings bg-slate-50 p-6">
    <div class="max-w-5xl mx-auto">
      <div class="shadcn-card no-shadow">
        <div class="q-pa-lg">
          <!-- Cabeçalho da página -->
          <div class="q-mb-lg">
            <h1 class="text-h4 text-slate-900 text-weight-medium q-mb-xs">Settings</h1>
            <p class="text-slate-500">Manage your account settings and set e-mail preferences.</p>
          </div>
          
          <q-separator class="bg-slate-200 q-my-md" />
          
          <div class="row q-col-gutter-lg">
            <!-- Menu lateral de navegação -->
            <div class="col-xs-12 col-sm-3">
              <div class="settings-nav">
                <q-list class="q-pa-none">
                  <q-item 
                    clickable 
                    v-ripple 
                    :active="activeTab === 'profile'"
                    @click="activeTab = 'profile'"
                    class="shadcn-nav-item rounded-borders q-py-sm"
                    active-class="bg-slate-100 text-weight-medium text-primary"
                  >
                    <q-item-section>Profile</q-item-section>
                  </q-item>
                  
                  <q-item 
                    clickable 
                    v-ripple 
                    :active="activeTab === 'account'"
                    @click="activeTab = 'account'" 
                    class="shadcn-nav-item rounded-borders q-py-sm"
                    active-class="bg-slate-100 text-weight-medium text-primary"
                  >
                    <q-item-section>Account</q-item-section>
                  </q-item>
                  
                  <q-item 
                    clickable 
                    v-ripple 
                    :active="activeTab === 'appearance'"
                    @click="activeTab = 'appearance'" 
                    class="shadcn-nav-item rounded-borders q-py-sm"
                    active-class="bg-slate-100 text-weight-medium text-primary"
                  >
                    <q-item-section>Appearance</q-item-section>
                  </q-item>
                  
                  <q-item 
                    clickable 
                    v-ripple 
                    :active="activeTab === 'notifications'"
                    @click="activeTab = 'notifications'" 
                    class="shadcn-nav-item rounded-borders q-py-sm"
                    active-class="bg-slate-100 text-weight-medium text-primary"
                  >
                    <q-item-section>Notifications</q-item-section>
                  </q-item>
                  
                  <q-item 
                    clickable 
                    v-ripple 
                    :active="activeTab === 'display'"
                    @click="activeTab = 'display'" 
                    class="shadcn-nav-item rounded-borders q-py-sm"
                    active-class="bg-slate-100 text-weight-medium text-primary"
                  >
                    <q-item-section>Display</q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
            
            <!-- Conteúdo da aba selecionada -->
            <div class="col-xs-12 col-sm-9">
              <!-- Aba de Perfil -->
              <div v-if="activeTab === 'profile'">
                <h2 class="text-h5 text-slate-900 text-weight-medium q-mb-xs">Profile</h2>
                <p class="text-slate-500 q-mb-lg">This is how others will see you on the site.</p>
                
                <q-separator class="bg-slate-200 q-mb-lg" />
                
                <!-- Formulário de perfil -->
                <div class="q-mb-lg">
                  <div class="text-subtitle1 text-slate-900 q-mb-sm">Username</div>
                  <q-input 
                    outlined 
                    v-model="profile.username" 
                    class="shadcn-input" 
                    placeholder="Your username"
                    dense
                  />
                  <div class="text-caption text-slate-500 q-mt-xs">
                    This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.
                  </div>
                </div>
                
                <div class="q-mb-lg">
                  <div class="text-subtitle1 text-slate-900 q-mb-sm">Email</div>
                  <q-select 
                    outlined 
                    v-model="profile.email" 
                    :options="emailOptions"
                    class="shadcn-select" 
                    dense
                  />
                  <div class="text-caption text-slate-500 q-mt-xs">
                    You can manage verified email addresses in your email settings.
                  </div>
                </div>
                
                <div class="q-mb-lg">
                  <div class="text-subtitle1 text-slate-900 q-mb-sm">Bio</div>
                  <q-input 
                    outlined 
                    v-model="profile.bio" 
                    type="textarea" 
                    class="shadcn-textarea" 
                    rows="4"
                  />
                  <div class="text-caption text-slate-500 q-mt-xs">
                    You can @mention other users and organizations to link to them.
                  </div>
                </div>
                
                <div class="row justify-end q-mt-lg">
                  <q-btn 
                    unelevated 
                    color="primary"
                    label="Save changes" 
                    class="shadcn-btn"
                    no-caps
                  />
                </div>
              </div>
              
              <!-- Outras abas (placeholders) -->
              <div v-if="activeTab === 'account'">
                <h2 class="text-h5 text-slate-900 text-weight-medium">Account Settings</h2>
                <p class="text-slate-500 q-mb-lg">Manage your account information and password.</p>
                
                <q-separator class="bg-slate-200 q-mb-lg" />
                
                <!-- Conteúdo da aba Account aqui -->
              </div>
              
              <div v-if="activeTab === 'appearance'">
                <h2 class="text-h5 text-slate-900 text-weight-medium">Appearance</h2>
                <p class="text-slate-500 q-mb-lg">Customize the look and feel of the interface.</p>
                
                <q-separator class="bg-slate-200 q-mb-lg" />
                
                <!-- Conteúdo da aba Appearance aqui -->
              </div>
              
              <div v-if="activeTab === 'notifications'">
                <h2 class="text-h5 text-slate-900 text-weight-medium">Notifications</h2>
                <p class="text-slate-500 q-mb-lg">Configure how you receive notifications and alerts.</p>
                
                <q-separator class="bg-slate-200 q-mb-lg" />
                
                <!-- Conteúdo da aba Notifications aqui -->
              </div>
              
              <div v-if="activeTab === 'display'">
                <h2 class="text-h5 text-slate-900 text-weight-medium">Display Settings</h2>
                <p class="text-slate-500 q-mb-lg">Adjust how content is displayed on your screen.</p>
                
                <q-separator class="bg-slate-200 q-mb-lg" />
                
                <!-- Conteúdo da aba Display aqui -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

// Tab ativa
const activeTab = ref('profile');

// Dados do formulário de perfil
const profile = ref({
  username: 'shadcn',
  email: { label: 'john.doe@example.com', value: 'john.doe@example.com' },
  bio: 'I own a computer.'
});

// Opções para o seletor de email
const emailOptions = [
  { label: 'john.doe@example.com', value: 'john.doe@example.com' },
  { label: 'john.professional@company.com', value: 'john.professional@company.com' }
];
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

.shadcn-settings {
  min-height: 100vh;
}

.shadcn-card {
  border-radius: $border-radius;
  border: 1px solid $slate-200;
  background-color: white;
}

.shadcn-nav-item {
  border-radius: $border-radius;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: $slate-100;
  }
}

.shadcn-btn {
  border-radius: $border-radius;
  font-weight: 500;
  height: 40px;
}

// Estilização dos inputs
:deep(.shadcn-input),
:deep(.shadcn-select),
:deep(.shadcn-textarea) {
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
  
  .q-field__native, 
  .q-field__input {
    padding: 8px 10px;
    color: $slate-900;
  }
}

// Ajuste responsivo para mobile
@media (max-width: 599px) {
  .settings-nav {
    margin-bottom: 24px;
  }
}
</style>