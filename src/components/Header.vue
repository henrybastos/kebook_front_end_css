<script>
import { Icon } from '@iconify/vue';
</script>

<template>
   <header>
      <img id="kebook-logo" src="kebook-logo.svg" alt="Logo da Kebook na cor branca."/>
      <!-- <Icon icon="solar:hamburger-menu-linear" height="32" color="black"/> -->
      <span id="categorias">
         <button>Categorias</button>
         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="none" stroke="white" stroke-linecap="round" stroke-width="1.5" d="M20 7H4m16 5H4m16 5H4"/>
         </svg>
      </span>

      <a class="header-link">Home</a>
      <a class="header-link">Sobre</a>
      <a class="header-link">Instrutor</a>
      <a class="header-link">Afiliado</a>
      <a class="header-link">Suporte</a>
      <a class="header-link">Carreiras</a>

      <Icon icon="solar:hamburger-menu-linear" :inline="true" color="#F8F8F8" width="24"/>

      <div id="login-or-signin">
         <a>Login</a>
         <span>|</span>
         <a>Cadastre-se</a>
      </div>
   </header>
</template>

<style scoped lang="scss">
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
      
      #kebook-logo {
         height: 26px;
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
         display: inline-flex;
         justify-content: center;
         transition: all ease 250ms;
         border: 2px solid transparent;
         padding: 8px 6px;
         border-radius: 6px;
         position: relative;
         overflow: hidden;
         
         button {
            @include NunitoBlank(15px, 700);
            background: none;
            border: none;
            outline: none;
            text-decoration: none;
            color: white;
            font-family: 'Nunito';
            font-weight: 600;
            font-size: 15px;
         }

         &::before {
            content: '';
            @include PseudoBlurredBG;
         }
         
         &:hover::before {
            opacity: 1;
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

      #login-or-signin {
         height: 42px;
         width: 190px;
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
   }
</style>