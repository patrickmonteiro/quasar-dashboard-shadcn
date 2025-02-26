<template>
  <div class="login-container">
    <!-- Layout de duas colunas -->
    <div class="row no-wrap full-height">
      <!-- Coluna esquerda (preta) -->
      <div class="col-12 col-md-6 bg-black flex flex-center q-pa-xl">
        <div class="logo-container">
          <div class="logo-icon">
            <q-icon name="code" size="24px" color="white" />
          </div>
          <div class="logo-text text-white text-weight-medium q-ml-sm">Acme Inc</div>
        </div>
      </div>
      
      <!-- Coluna direita (branca) - Formulário de Login -->
      <div class="col-12 col-md-6 bg-white flex flex-center q-pa-xl">
        <div class="login-form-container">
          <!-- Link de Login no canto superior direito -->
          <div class="absolute-top-right q-pa-md">
            <q-btn flat no-caps color="slate-900" label="Login" class="text-weight-medium" />
          </div>
          
          <!-- Formulário de Login/Criar Conta -->
          <div class="login-form q-mt-xl">
            <h1 class="text-h4 text-slate-900 text-weight-medium q-mb-md">Create an account</h1>
            <p class="text-slate-500 q-mb-lg">Enter your email below to create your account</p>
            
            <!-- Campo de Email -->
            <q-input 
              outlined 
              v-model="email" 
              type="email" 
              label="Email" 
              class="shadcn-input q-mb-md"
              placeholder="name@example.com"
              :rules="[val => !!val || 'Email is required', val => validateEmail(val) || 'Please enter a valid email']"
            />
            
            <!-- Campo de Senha -->
            <q-input 
              outlined 
              v-model="password" 
              type="password" 
              label="Password" 
              class="shadcn-input q-mb-lg"
              placeholder="Your password"
              :rules="[val => !!val || 'Password is required', val => val.length >= 8 || 'Password must be at least 8 characters']"
            >
              <template v-slot:append>
                <q-icon 
                  :name="passwordVisible ? 'visibility_off' : 'visibility'" 
                  class="cursor-pointer" 
                  @click="passwordVisible = !passwordVisible" 
                />
              </template>
            </q-input>
            
            <!-- Botão de Login/Criar Conta -->
            <q-btn 
              unelevated 
              color="black" 
              label="Sign Up" 
              class="full-width shadcn-btn q-mb-md" 
              :disable="!email || !password"
              no-caps
            />
            
            <!-- Link de Esqueci minha senha -->
            <div class="text-center q-mt-sm">
              <q-btn flat no-caps color="primary" label="Forgot your password?" class="text-weight-medium" />
            </div>
            
            <!-- Texto de Termos de Serviço -->
            <p class="text-center text-slate-500 q-mt-lg">
              By clicking continue, you agree to our 
              <a href="#" class="text-slate-900 text-weight-medium">Terms of Service</a> 
              and 
              <a href="#" class="text-slate-900 text-weight-medium">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Variáveis de formulário
const email = ref('');
const password = ref('');
const passwordVisible = ref(false);

// Validador de email simples
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

.login-container {
  height: 100vh;
  width: 100%;
}

.full-height {
  height: 100%;
}

.logo-container {
  display: flex;
  align-items: center;
  position: absolute;
  top: 2rem;
  left: 2rem;
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: $border-radius;
}

.login-form-container {
  width: 100%;
  max-width: 400px;
}

.login-form {
  width: 100%;
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
  
  .q-field__native, 
  .q-field__input {
    padding: 8px 10px;
    color: $slate-900;
  }
  
  .q-field__label {
    color: $slate-600;
  }
}

// Estilização do botão
.shadcn-btn {
  border-radius: $border-radius;
  font-weight: 500;
  height: 40px;
}

// Estilização dos links
a {
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
}

// Responsividade para dispositivos móveis
@media (max-width: 767px) {
  .logo-container {
    position: relative;
    top: 0;
    left: 0;
    justify-content: center;
    margin-bottom: 2rem;
  }
  
  .logo-text {
    font-size: 1.5rem;
  }
  
  .login-form-container {
    padding: 2rem;
  }
}
</style>