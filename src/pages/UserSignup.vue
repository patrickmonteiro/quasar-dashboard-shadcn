<template>
  <q-page class="shadcn-signup bg-slate-50 p-6">
    <div class="max-w-3xl mx-auto">
      <div class="shadcn-card no-shadow">
        <div class="q-pa-lg">
          <!-- Cabeçalho da página -->
          <div class="q-mb-lg">
            <h1 class="text-h4 text-slate-900 text-weight-medium q-mb-xs">Create Account</h1>
            <p class="text-slate-500">Sign up for a new account and start using our services.</p>
          </div>
          
          <q-separator class="bg-slate-200 q-my-md" />
          
          <!-- Formulário de cadastro de usuário -->
          <div class="row q-col-gutter-md">
            <!-- Primeira coluna -->
            <div class="col-xs-12 col-sm-6">
              <div class="q-mb-md">
                <div class="text-subtitle1 text-slate-900 q-mb-sm">First Name</div>
                <q-input 
                  outlined 
                  v-model="user.firstName" 
                  class="shadcn-input" 
                  placeholder="Enter your first name"
                  dense
                  :rules="[val => !!val || 'First name is required']"
                />
              </div>
              
              <div class="q-mb-md">
                <div class="text-subtitle1 text-slate-900 q-mb-sm">Email</div>
                <q-input 
                  outlined 
                  v-model="user.email" 
                  class="shadcn-input" 
                  placeholder="Enter your email"
                  dense
                  type="email"
                  :rules="[
                    val => !!val || 'Email is required',
                    val => val.includes('@') || 'Please enter a valid email'
                  ]"
                />
              </div>
              
              <div class="q-mb-md">
                <div class="text-subtitle1 text-slate-900 q-mb-sm">Password</div>
                <q-input 
                  outlined 
                  v-model="user.password" 
                  class="shadcn-input" 
                  placeholder="Create a password"
                  dense
                  type="password"
                  :rules="[
                    val => !!val || 'Password is required',
                    val => val.length >= 8 || 'Password must be at least 8 characters'
                  ]"
                />
                <div class="text-caption text-slate-500 q-mt-xs">
                  Must be at least 8 characters long.
                </div>
              </div>
              
              <div class="q-mb-md">
                <div class="text-subtitle1 text-slate-900 q-mb-sm">Role</div>
                <q-select 
                  outlined 
                  v-model="user.role" 
                  :options="roleOptions"
                  class="shadcn-select" 
                  dense
                  emit-value
                  map-options
                />
              </div>
            </div>
            
            <!-- Segunda coluna -->
            <div class="col-xs-12 col-sm-6">
              <div class="q-mb-md">
                <div class="text-subtitle1 text-slate-900 q-mb-sm">Last Name</div>
                <q-input 
                  outlined 
                  v-model="user.lastName" 
                  class="shadcn-input" 
                  placeholder="Enter your last name"
                  dense
                  :rules="[val => !!val || 'Last name is required']"
                />
              </div>
              
              <div class="q-mb-md">
                <div class="text-subtitle1 text-slate-900 q-mb-sm">Username</div>
                <q-input 
                  outlined 
                  v-model="user.username" 
                  class="shadcn-input" 
                  placeholder="Choose a username"
                  dense
                  :rules="[
                    val => !!val || 'Username is required',
                    val => val.length >= 3 || 'Username must be at least 3 characters'
                  ]"
                />
                <div class="text-caption text-slate-500 q-mt-xs">
                  This will be your display name visible to others.
                </div>
              </div>
              
              <div class="q-mb-md">
                <div class="text-subtitle1 text-slate-900 q-mb-sm">Confirm Password</div>
                <q-input 
                  outlined 
                  v-model="user.confirmPassword" 
                  class="shadcn-input" 
                  placeholder="Confirm your password"
                  dense
                  type="password"
                  :rules="[
                    val => !!val || 'Please confirm your password',
                    val => val === user.password || 'Passwords do not match'
                  ]"
                />
              </div>
              
              <div class="q-mb-md">
                <div class="text-subtitle1 text-slate-900 q-mb-sm">Department</div>
                <q-select 
                  outlined 
                  v-model="user.department" 
                  :options="departmentOptions"
                  class="shadcn-select" 
                  dense
                  emit-value
                  map-options
                />
              </div>
            </div>
          </div>
          
          <!-- Seção adicional -->
          <div class="q-mt-md">
            <div class="text-subtitle1 text-slate-900 q-mb-sm">Bio</div>
            <q-input 
              outlined 
              v-model="user.bio" 
              type="textarea" 
              class="shadcn-textarea" 
              placeholder="Tell us about yourself"
              rows="3"
            />
            <div class="text-caption text-slate-500 q-mt-xs">
              Brief description for your profile (optional).
            </div>
          </div>
          
          <!-- Opções de notificação -->
          <div class="q-mt-lg">
            <div class="text-subtitle1 text-slate-900 q-mb-sm">Notification Preferences</div>
            
            <q-item tag="label" class="shadcn-checkbox q-pa-none q-mb-sm">
              <q-item-section avatar>
                <q-checkbox v-model="user.notifications.email" color="primary" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-slate-900">Email Notifications</q-item-label>
                <q-item-label caption class="text-slate-500">
                  Receive notifications about account activity via email
                </q-item-label>
              </q-item-section>
            </q-item>
            
            <q-item tag="label" class="shadcn-checkbox q-pa-none q-mb-sm">
              <q-item-section avatar>
                <q-checkbox v-model="user.notifications.marketing" color="primary" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-slate-900">Marketing Emails</q-item-label>
                <q-item-label caption class="text-slate-500">
                  Receive emails about new features, products and offers
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          
          <!-- Termos e condições -->
          <div class="q-mt-lg">
            <q-item tag="label" class="shadcn-checkbox q-pa-none q-mb-md">
              <q-item-section avatar>
                <q-checkbox v-model="user.termsAccepted" color="primary" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-slate-900">Terms and Conditions</q-item-label>
                <q-item-label caption class="text-slate-500">
                  I agree to the <a href="#" class="text-primary text-weight-medium">Terms of Service</a> and 
                  <a href="#" class="text-primary text-weight-medium">Privacy Policy</a>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
          
          <!-- Botões de ação -->
          <div class="row justify-between items-center q-mt-lg">
            <q-btn flat color="primary" label="Already have an account?" class="shadcn-btn" no-caps />
            
            <q-btn 
              unelevated 
              color="primary"
              label="Create Account" 
              class="shadcn-btn"
              no-caps
              :disable="!formValid"
              @click="submitForm"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

// Dados do formulário de cadastro
const user = ref({
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  role: 'user',
  department: 'general',
  bio: '',
  notifications: {
    email: true,
    marketing: false
  },
  termsAccepted: false
});

// Opções para os selects
const roleOptions = [
  { label: 'User', value: 'user' },
  { label: 'Editor', value: 'editor' },
  { label: 'Administrator', value: 'admin' }
];

const departmentOptions = [
  { label: 'General', value: 'general' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Sales', value: 'sales' },
  { label: 'Engineering', value: 'engineering' },
  { label: 'Human Resources', value: 'hr' },
  { label: 'Customer Support', value: 'support' }
];

// Validação do formulário
const formValid = computed(() => {
  return user.value.firstName && 
         user.value.lastName && 
         user.value.email && 
         user.value.email.includes('@') && 
         user.value.username && 
         user.value.username.length >= 3 &&
         user.value.password && 
         user.value.password.length >= 8 &&
         user.value.password === user.value.confirmPassword &&
         user.value.termsAccepted;
});

// Enviar formulário
const submitForm = () => {
  if (!formValid.value) {
    $q.notify({
      message: 'Please fill all required fields correctly',
      color: 'negative',
      position: 'top',
      timeout: 2000
    });
    return;
  }
  
  // Aqui você faria a requisição para sua API
  console.log('Form submitted:', user.value);
  
  $q.notify({
    message: 'Account created successfully!',
    color: 'positive',
    position: 'top',
    timeout: 2000
  });
  
  // Redirecionamento ou limpeza do formulário
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

.shadcn-signup {
  min-height: 100vh;
}

.shadcn-card {
  border-radius: $border-radius;
  border: 1px solid $slate-200;
  background-color: white;
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

// Estilização dos checkboxes
.shadcn-checkbox {
  border-radius: $border-radius;
  
  .q-checkbox {
    font-size: 1rem;
  }
  
  a {
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>