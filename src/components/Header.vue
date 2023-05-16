<script setup>
import { onMounted, inject } from 'vue';
import Icon from './icons/Icon.vue';
import { BREAKPOINTS } from '../assets/Breakpoints.mjs';

const screenSubscribers = inject('screenSubscribers');
const currentBreakpoint = inject('currentBreakpoint');
const screenWidth = inject('screenWidth');

let menuModal;
let categoriesModal;

const toggleModal = (dialogElement) => {
   dialogElement.hasAttribute('open') ? dialogElement.close() : dialogElement.showModal();
}

const toggleDialog = (dialogElement) => {
   dialogElement.hasAttribute('open') ? dialogElement.close() : dialogElement.show();
}

onMounted(() => {
   menuModal = document.querySelector('#menu-modal');
   categoriesModal = document.querySelector('#categorias-modal');
});

const closeModalSmall = () => {
   if (screenWidth.value > BREAKPOINTS.sm) {
      menuModal.close();
   }
}

screenSubscribers.value.push(closeModalSmall);

</script>

<template>
   <header :class="currentBreakpoint">
      <img id="kebook-logo" src="kebook-logo.svg" alt="Logo da Kebook na cor branca."/>

      <span id="categorias" @click="toggleDialog(categoriesModal)">
         <dialog id="categorias-modal">
            <a href="/#">Tecnologia</a>
            <a href="/#">Arquitetura</a>
            <a href="/#">Produtos digitais</a>
         </dialog>
         <button>
            Categorias
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
               <path fill="none" stroke="white" stroke-linecap="round" stroke-width="1.5" d="M20 7H4m16 5H4m16 5H4"/>
            </svg>
         </button>
      </span>
      
      <div id="header-buttons" v-if="screenWidth > 900">
         <a class="header-link">Home</a>
         <a class="header-link">Sobre</a>
         <a class="header-link">Instrutor</a>
         <a class="header-link">Afiliado</a>
         <a class="header-link">Suporte</a>
         <a class="header-link">Carreiras</a>
      </div>
      
      <div v-if="screenWidth > BREAKPOINTS.sm" id="login-or-signin">
         <a>Login</a>
         <span>|</span>
         <a>Cadastre-se</a>
      </div>

      <button id="menu-modal-btn" v-if="screenWidth < BREAKPOINTS.sm" @click="toggleModal(menuModal)">
         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="none" stroke="white" stroke-linecap="round" stroke-width="1.5" d="M20 7H4m16 5H4m16 5H4"/>
         </svg>
      </button>

      <dialog id="menu-modal">
         <Icon @click="toggleModal(menuModal)" iconName="iconX" size="32" iconColor="#1D1E35" iconAlt="Fechar diálogo"/>
         <div class="buttons">
            <a class="header-link">Home</a>
            <a class="header-link">Sobre</a>
            <a class="header-link">Instrutor</a>
            <a class="header-link">Afiliado</a>
            <a class="header-link">Suporte</a>
            <a class="header-link">Carreiras</a>
         </div>
      </dialog>
   </header>
</template>

<style lang="scss">
   @import '../styles/utils';  

   header {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100px;
      padding: 35px;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      animation: FadeIn ease 1000ms;

      &.xs {
         #menu-modal {
            height: calc(100% - 40px);

            .buttons {
               display: flex;
               flex-flow: column nowrap;
               width: 100%; 
               height: 70%;
               align-items: center;
            }
         }
      }
      
      #kebook-logo {
         height: 26px;
      }

      #header-buttons {
         min-width: 400px;
         width: 600px;
         display: inline-flex;
         justify-content: space-between;
         box-sizing: border-box;
         padding: 0 20px;
      }

      .header-link {
         @include NunitoBlank(15px, 600);
         color: $colorWhite;
         position: relative;

         &:hover {
            transform: translateY(-3px);
            cursor: pointer;
         }

         &:active {
            color: $colorGrayLighter;
         }

         &::before {
            transition: all ease 250ms;
            content: '';
            width: 0;
         }

         &:hover::before {
            content: '';
            width: 100%;
            height: 2px;
            background: $colorWhite;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 3px);
         }

         &:active::before {
            height: 4px;
         }
      }

      #categorias {
         position: relative;

         #categorias-modal {
            // width: calc(100% + 0px);
            width: fit-content;
            position: absolute;
            top: 50px;
            left: 0;
            border-radius: 6px;
            backdrop-filter: blur(4.5px);
            -webkit-backdrop-filter: blur(4.5px);
            background-color: rgba(255, 255, 255, 0.5);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.05);

            &[open] {
               display: flex;
               flex-flow: column nowrap;
            }

            a {
               @include NunitoBlank(14px, 600);   
               text-decoration: none;
               color: $colorBlueDark;
               padding: 6px;
               white-space: nowrap;

               &:hover {
                  margin-left: 5px;
               }
            }
         }
         
         button {
            @include NunitoBlank(15px, 700);

            display: inline-flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            padding: 8px 6px;
            min-width: 130px;
            transition: all ease 150ms;

            outline: none;
            text-decoration: none;
            color: white;
            font-family: 'Nunito';
            font-weight: 600;
            font-size: 15px;

            backdrop-filter: blur(4.5px);
            -webkit-backdrop-filter: blur(4.5px);
            background-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);
            border-radius: 6px;
            border: 2px solid rgba(255, 255, 255, 0.05);
            
            &:hover {
               background-color: rgba(255, 255, 255, 0.3);
               box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.1);
               cursor: pointer;
            }
   
            &:active {
               transition: all ease 150ms;
               opacity: 1;
               box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.15);
            }
   
            svg {
               height: 24px;
            }
         }
         
      }

      #login-or-signin {
         height: 42px;
         min-width: 190px;
         border-radius: 21px;
         border: 2px solid rgba(248, 248, 248, 0.75);
         display: inline-flex;
         font-family: 'Nunito';
         font-weight: 400;
         color: $colorWhite;
         align-items: center;
         justify-content: center;
         font-weight: 700;

         a {
            @include NunitoBlank(15px, 700);
            color: $colorWhite;

            &:hover {
               color: $colorRed;
               cursor: pointer;
               padding: 0 6px;
            }

            &:active {
               transition: all ease 150ms;
               margin-top: 5px;
               color: $colorRedDark;
            }
         }

         span {
            padding: 0 8px;
         }
      }

      #menu-modal-btn {
         display: block;
         background: none;
         outline: none;
         border: none;
         transition: all ease 250ms;

         &:hover {
            transform: scale(1.1);
            cursor: pointer;
         }
      }

      #menu-modal {
         /* From https://css.glass */
         background: rgba(255, 255, 255, 0.3);
         border-radius: 16px;
         box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
         border: 2px solid rgba(255, 255, 255, 0.05);
         
         border-radius: 25px;
         padding: 50px;
         box-sizing: border-box;
         width: calc(100% - 200px);
         font-family: 'Poppins', sans-serif;
         
         &::backdrop {
            background-color: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(4.5px);
            -webkit-backdrop-filter: blur(4.5px);
         }

         #iconX {
            path {
               transition: all ease 200ms;
               stroke: $colorGrayLightest;
            }

            &:hover {
               path {
                  stroke: $colorBlueDark;
               }
   
               cursor: pointer;
            }
         }

         .buttons {
            margin-top: 15px;
            width: 100%;
            display: inline-flex;
            justify-content: space-between;
         }
      }
   }
</style>