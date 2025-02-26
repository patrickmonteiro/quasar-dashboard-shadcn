<template>
  <div class="signup-container">
    <!-- Layout de duas colunas -->
    <div class="row no-wrap full-height">
      <!-- Coluna esquerda (preta) -->
      <div class="col-12 col-md-6 bg-black flex flex-center q-pa-xl side-content">
        <div class="logo-container">
          <div class="logo-icon">
            <q-icon name="code" size="24px" color="white" />
          </div>
          <div class="logo-text text-white text-weight-medium q-ml-sm">Acme Inc</div>
        </div>
        
        <!-- Conteúdo da área lateral escura (opcional) -->
        <div class="side-content-inner text-center">
          <img src="https://cdn.quasar.dev/img/parallax2.jpg" class="side-image rounded-borders q-mb-lg" />
          <div class="text-h4 text-white q-mb-md">Faça parte da nossa comunidade</div>
          <div class="text-subtitle1 text-grey-4">
            Junte-se a milhares de desenvolvedores e empresas que estão transformando o futuro da tecnologia.
          </div>
        </div>
      </div>
      
      <!-- Coluna direita (branca) - Formulário de Cadastro -->
      <div class="col-12 col-md-6 bg-white flex flex-center q-pa-xl">
        <div class="signup-form-container">
          <!-- Link de Login no canto superior direito -->
          <div class="absolute-top-right q-pa-md">
            <q-btn flat no-caps to="/login" color="slate-900" label="Login" class="text-weight-medium" />
          </div>
          
          <!-- Formulário de Cadastro -->
          <div class="signup-form q-mt-xl">
            <h1 class="text-h4 text-slate-900 text-weight-medium q-mb-md">Create an account</h1>
            <p class="text-slate-500 q-mb-lg">Enter your information below to create your account</p>
            
            <!-- Formulário com campos para cadastro -->
            <div class="row q-col-gutter-md">
              <!-- Nome e Sobrenome -->
              <div class="col-12 col-md-6">
                <q-input 
                  outlined 
                  v-model="firstName" 
                  label="First name" 
                  class="shadcn-input"
                  :rules="[val => !!val || 'First name is required']"
                />
              </div>
              <div class="col-12 col-md-6">
                <q-input 
                  outlined 
                  v-model="lastName" 
                  label="Last name" 
                  class="shadcn-input"
                  :rules="[val => !!val || 'Last name is required']"
                />
              </div>
              
              <!-- Email -->
              <div class="col-12">
                <q-input 
                  outlined 
                  v-model="email" 
                  type="email" 
                  label="Email" 
                  class="shadcn-input"
                  placeholder="name@example.com"
                  :rules="[val => !!val || 'Email is required', val => validateEmail(val) || 'Please enter a valid email']"
                />
              </div>
              
              <!-- Senha e Confirmação -->
              <div class="col-12 col-md-6">
                <q-input 
                  outlined 
                  v-model="password" 
                  :type="passwordVisible ? 'text' : 'password'" 
                  label="Password" 
                  class="shadcn-input"
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
              </div>
              
              <div class="col-12 col-md-6">
                <q-input 
                  outlined 
                  v-model="confirmPassword" 
                  :type="confirmPasswordVisible ? 'text' : 'password'" 
                  label="Confirm password" 
                  class="shadcn-input"
                  :rules="[
                    val => !!val || 'Please confirm your password',
                    val => val === password || 'Passwords do not match'
                  ]"
                >
                  <template v-slot:append>
                    <q-icon 
                      :name="confirmPasswordVisible ? 'visibility_off' : 'visibility'" 
                      class="cursor-pointer" 
                      @click="confirmPasswordVisible = !confirmPasswordVisible"
                    />
                  </template>
                </q-input>
              </div>
            </div>
            
            <!-- Termos e Condições -->
            <div class="q-mt-md q-mb-lg">
              <q-checkbox v-model="acceptTerms" color="primary" label="I accept the terms and conditions" />
            </div>
            
            <!-- Botão de Cadastro -->
            <q-btn 
              unelevated 
              color="black" 
              label="Create account" 
              class="full-width shadcn-btn q-mb-md" 
              :disable="!formValid"
              no-caps
            />
            
            <!-- Texto de Termos de Serviço -->
            <p class="text-center text-slate-500 q-mt-lg">
              By clicking continue, you agree to our 
              <a href="#" class="text-slate-900 text-weight-medium">Terms of Service</a> 
              and 
              <a href="#" class="text-slate-900 text-weight-medium">Privacy Policy</a>.
            </p>
            
            <!-- Já possui uma conta? -->
            <div class="text-center q-mt-md">
              <p class="text-slate-500">
                Already have an account?
                <q-btn flat no-caps to="/login" color="primary" label="Sign in" class="text-weight-medium" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Variáveis de formulário
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const acceptTerms = ref(false);
const passwordVisible = ref(false);
const confirmPasswordVisible = ref(false);

// Validador de email
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Verificar se o formulário é válido
const formValid = computed(() => {
  return firstName.value && 
         lastName.value && 
         email.value && 
         validateEmail(email.value) && 
         password.value && 
         password.value.length >= 8 && 
         confirmPassword.value === password.value &&
         acceptTerms.value;
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
$border-radius: 6px;

.signup-container {
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

.side-content {
  position: relative;
}

.side-content-inner {
  max-width: 400px;
}

.side-image {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.signup-form-container {
  width: 100%;
  max-width: 500px;
}

.signup-form {
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
  .side-content {
    display: none;
  }
  
  .signup-form-container {
    padding: 2rem;
  }
}
</style>