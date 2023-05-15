<script setup>
import { onMounted } from 'vue';
import Header from './Header.vue';

// window.onscroll = () => {
   // console.log(document.querySelector('#app').style.height);
   // console.log(window.outerHeight);
   // document.querySelector('#scroll-thumb').style.transform = `translateY(${window.innerHeight * (window.scrollY)}px)`;
// }

let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;

let bgTopCover;
let rocketTopCover;

let discplacementX;
let discplacementY;


onMounted(() => {
   const observer = new IntersectionObserver((entries) => {
      entries.forEach((target, isIntersecting) => {
         if (isIntersecting) {
            console.log(target);
            target.classList.remove('hidden');
            target.classList.add('visible');
         }
      })
   }, { threshold: 0.75 });

   document.querySelectorAll('.hidden').forEach(el => {
      observer.observe(el);
   });

   bgTopCover = document.querySelector('#bg-top-cover');
   rocketTopCover = document.querySelector('#rocket-top-cover');
})

window.onmousemove = (e) => {
   discplacementX = e.clientX - screenWidth;
   discplacementY = e.clientY - screenHeight;

   bgTopCover.style.transform = `translate(${discplacementX * -0.01}px,${discplacementY * -0.01}px)`

   rocketTopCover.style.transform = `translate(${discplacementX * -0.02}px,${discplacementY * -0.02}px)`
}
</script>

<template>   
   <div>
      <!-- <div id="scroll-thumb"></div> -->
      <img id="rocket-top-cover" src="/illustra-home-1.png"/>
      <section id="homepage-top">
         <Header />
         <img id="bg-top-cover" src="/back-top-home.png"/>
   
         <div class="hidden" id="cover-heading">
            <h2>Investir em</h2>
            <h2>seu <span>Futuro</span></h2>
         </div>
   
         <p id="cover-text">A Kebook tem os cursos online que você precisa para ser o profissional que o mercado de hoje procura.</p>
   
         <div id="cover-btns">
            <button class="curso"><span class="highlight"></span>Adquirir um curso</button>
            <button class="ensinar">Comece a ensinar agora mesmo</button>
         </div>
   
         <span id="cover-footer">
            <p>Tem cadastro na Kebook?</p>
            <a>Acesse seu perfil</a>
         </span>
      </section>
   </div>
</template>

<style scoped lang="scss">
   @import '../styles/utils';

   // #scroll-thumb {
   //    position: absolute;
   //    width: 10px;
   //    height: 30px;
   //    background: red;
   // }

   .hidden {
      // opacity: 0;
      animation: none;
   }
   
   .visible {
      animation: FadeIn 1200ms ease;
      opacity: 1;
   }

   #app {
      #rocket-top-cover {
         height: 350px;
         position: absolute;
         top: 7%;
         left: 50%;
         // transform: translate(-50%, -50%);
      }
   }

   section#homepage-top {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: flex-start;
      overflow: hidden;
      height: 463px;
      position: relative;

      #bg-top-cover {
         width: 125%;
         position: absolute;
         top: -12.5%;
         left: -12.5%;
         z-index: -1;
      }

   
      #cover-heading {
         width: 100%;
         padding-left: 8%;
         
         h2 {
            margin: 0;
            padding: 0;
            font-family: 'Nunito';
            line-height: 80px;
            font-size: 64px;
            font-weight: 500;
            color: $colorWhite;

            span {
               font-weight: 700;
            }
         }
      }

      #cover-text {
         font-family: 'Nunito';
         font-weight: 500;
         color: $colorWhite;
         font-size: 20px;
         padding-left: 8%;
         width: 650px;
      }

      #cover-btns {
         width: 100%;
         margin-left: 8%;

         button {
            border: 0;
            outline: none;
            margin: 0;
            padding: 0 50px;
            height: 50px;
            border-radius: 25px;
            font-family: 'Nunito';
            font-size: 20px;
            font-weight: 600;
            overflow: hidden;
            box-sizing: border-box;
            cursor: pointer;
            transition: all ease 500ms;
            
            &.curso {
               background: $colorRed;
               color: $colorWhite;
               margin-right: 15px;

               &:hover {
                  background-color: $colorRedDark;
                  transform: translateY(-5px);
               }
               
               &:active {
                  transition: all ease 150ms;
                  color: $colorWhite;
                  background: $colorRedDarker;
                  transform: translateY(-3px);
               }
            }
            
            &.ensinar {
               background: none;
               color: $colorWhite;
               border: 2px solid $colorWhite;
               margin-right: 15px;
               
               &:hover {
                  color: $colorBlueDark;
                  border-color: $colorGrayLightest;
                  background-color: $colorGrayLightest;
                  transform: translateY(-5px);
               }
               
               &:active {
                  transition: all ease 150ms;
                  color: $colorBlueDark;
                  border-color: $colorGrayLight;
                  background: $colorGrayLight;
                  transform: translateY(-3px);
               }
            }
         }
         
      }

      #cover-footer {
         width: 100%;
         display: inline-flex;
         align-items: center;
         height: 30px;
         margin: 10px 0;
         margin-left: 8%;

         p {
            @include NunitoBlank(15px, 500);
            color: $colorWhite;
         }

         a {
            @include NunitoBlank(15px, 700);
            color: $colorWhite;
            position: relative;
            margin-left: 6px;

            &:hover {
               color: $colorGrayLighter;
               cursor: pointer;
            }
            
            &:active {
               transition: all ease 100ms;
               color: $colorGray;
            }

            &::before {   
               content: '';
               width: 100%;
               height: 2px;
               background: $colorWhite;
               position: absolute;
               bottom: -3px;
               left: 50%;
               transform: translate(-50%, 0px);
            }

            &:hover::before { 
               filter: blur(2px);
            }
         }
      }
   }
</style>
