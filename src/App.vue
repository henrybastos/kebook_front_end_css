<script setup>
import TopCover from './components/TopCover.vue';
import Icon from './components/icons/Icon.vue';
import { setBreakpoint } from './assets/Breakpoints.mjs'
import { onMounted, provide, ref } from 'vue';

const BOTTOM_COVER_ARTICLES = [
   {
      icon: 'iconMedal',
      title: 'Aprenda com especialistas',
      details: 'Selecione cursos dos melhores instrutores do mercado.'
   },
   {
      icon: 'iconDollar',
      title: 'Maior empregabilidade',
      details: 'Invista no desenvolvimento da sua carreira e vida pessoal'
   },
   {
      icon: 'iconSmile',
      title: 'Siga no seu próprio ritmo',
      details: 'Defina seu ritmo de estudo conforme à sua disponibilidade'
   },
   {
      icon: 'iconPlay',
      title: 'Torne-se um instrutor',
      details: 'Possua as ferramentas ideais para ensinar o que você ama'
   },
];

const screenSubscribers = ref([]);
const currentBreakpoint = ref('sm');
const screenWidth = ref(0);

provide('screenSubscribers', screenSubscribers);
provide('currentBreakpoint', currentBreakpoint);
provide('screenWidth', screenWidth);

onMounted(() => {
   screenWidth.value = window.innerWidth;
   currentBreakpoint.value = setBreakpoint(screenWidth.value);
});


window.onresize = () => {
   screenWidth.value = window.innerWidth;
   currentBreakpoint.value = setBreakpoint(screenWidth.value);
   screenSubscribers.value.forEach(sub => { sub() });
}
</script>

<template>   
   <!-- <div id="scroll-thumb"></div> -->
   <TopCover />

   <div id="articles-container" :class="currentBreakpoint">
      <article 
         v-for="article of BOTTOM_COVER_ARTICLES"
         :key="article.icon"
      >
         <div class="icon">
            <Icon size="70px" strokeColor="#1D1E35" :iconName="article.icon" />
         </div>
         <h3 class="title">{{ article.title }}</h3>
         <p class="details">{{ article.details }}</p>
      </article>
   </div>

</template>

<style scoped lang="scss">
   @import './styles/utils';

   #articles-container {
      display: grid;
      width: calc(100% - 40px);
      
      &.lg {
         // flex-flow: row nowrap;
         // justify-content: space-evenly;
         // align-items: center;
         grid-template-rows: auto;
         grid-template-columns: repeat(4, 1fr);
         column-gap: 20px;
         margin: 20px;
      }
      
      &.sm {
         grid-template-rows: repeat(2, 1fr);
         grid-template-columns: repeat(2, 1fr);
         column-gap: 20px;
         row-gap: 20px;
         margin: 20px;
      }

      &.xs {
         grid-template-rows: repeat(4, 1fr);
         grid-template-columns: 1fr;
         row-gap: 20px;
         margin: 20px;
      }

      
      article {
         font-family: 'Nunito';
         color: $colorBlueDark;
         // background: red;
         width: fit-content;
         box-sizing: border-box;
         padding: 20px;
         width: 100%;
         animation: FadeTopIn ease 1000ms;
         // margin: 20px;

         &:nth-child(1) .icon::before { background-color: #FBA293; }
         &:nth-child(2) .icon::before { background-color: #72BEFC; }
         &:nth-child(3) .icon::before { background-color: #88FCA0; }
         &:nth-child(4) .icon::before { background-color: #FFB4ED; }

         h3 {
            font-size: 24px;
            font-weight: 800;
            width: 90%;
            line-height: 110%;
            margin: 0;
            margin-top: 15px;
         }

         p {
            margin: 0;
            margin-top: 10px;
            font-weight: 600;
            font-size: 17px;
         }
   
         .icon {
            display: flex;
            align-items: center;
            position: relative;
            height: 80px;
            margin-left: 20px;
            transition: all ease 200ms;
            
            &:hover {
               margin-left: 25px;
            }

            &:hover::before {
               left: -32px;
            }
            
            &::before {
               content: '';
               position: absolute;
               transition: all ease 200ms;
               top: 0;
               left: -27px;
               height: 80px; width: 80px;
               display: block;
               border-radius: 50%;
               z-index: -1;
            }
         }
   
         .block-header {
            color: $colorBlueDark;
         }
      }
   }

</style>
