<template>
   <svg xmlns="http://www.w3.org/2000/svg"
     :width="size"
     :height="size"
     viewBox="0 0 24 24"
     :aria-labelledby="iconName"
     role="presentation"
   >
     <title :id="iconName" lang="en">{{ iconName }} icon</title>
     <g :fill="fillColor" :stroke="strokeColor" :stroke-width="strokeWidth">
      
      <template v-if="iconName == 'iconMedal'">
         <path d="M17 8V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v2m4.146 4.023c.38-.682.57-1.023.854-1.023c.284 0 .474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532c.088.283-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354c-.032.104-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136c-.104 0-.202.046-.399.136l-.178.082c-.691.319-1.037.477-1.267.303c-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438c-.032-.103-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354l.098-.176Z"/>
         <circle cx="12" cy="14" r="8"/>
      </template>

      <template v-if="iconName == 'iconDollar'">
         <path stroke-linecap="round" d="M12 17v1m0-12v1m3 2.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5s3 1.12 3 2.5s-1.343 2.5-3 2.5s-3-1.12-3-2.5"/>
         <circle cx="12" cy="12" r="10"/>
      </template>

      <template v-if="iconName == 'iconSmile'">
         <circle cx="12" cy="12" r="10" stroke="currentColor"/>
         <path stroke="currentColor" stroke-linecap="round" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"/>
         <ellipse cx="15" cy="10.5" stroke="none" :fill="strokeColor" rx="1" :ry="strokeWidth"/>
         <ellipse cx="9" cy="10.5" stroke="none" :fill="strokeColor" rx="1" :ry="strokeWidth"/>
      </template>

      <template v-if="iconName == 'iconPlay'">
         <g transform="matrix(0.3998347,0,0,0.3869,83.8,-209.4)" :stroke-width="strokeWidth * 2.2">
            <path d="m -207.09954,570.04357 c 0,-8.0218 0,-12.0356 2.41559,-14.5261 2.4128,-2.4934 6.3014,-2.4934 14.073,-2.4934 h 21.9847 c 7.7716,0 11.6601,0 14.073,2.4934 2.4155,2.4905 2.4155,6.5043 2.4155,14.5261 v 2.8366 c 0,8.0219 0,12.0356 -2.4155,14.5262 -2.4129,2.4933 -6.3014,2.4933 -14.073,2.4933 h -21.9847 c -7.7716,0 -11.6602,0 -14.073,-2.4933 -2.41559,-2.4906 -2.41559,-6.5043 -2.41559,-14.5262 z" />

            <path d="m -175.18538,598.13293 c 0,2.1364 -10.48431,8.18952 -12.33448,7.12132 -1.85018,-1.0682 -1.85018,-13.17443 0,-14.24263 1.85017,-1.0682 12.33448,4.98492 12.33448,7.12131 z" transform="translate(2.4277937,-26.671065)" />
         </g>
      </template>

     </g>
   </svg>
 </template>

<script setup lang="ts">
withDefaults(defineProps<{
   iconName: 'iconMedal' | 'iconDollar' | 'iconSmile' | 'iconPlay',
   fillColor: string,
   strokeColor: string,
   strokeWidth: number,
   size: string | number,
   iconColor: string
}>(), {
   fillColor: 'none',
   strokeColor: 'black',
   strokeWidth: 1.1,
   size: '24px',
   iconName: 'iconMedal', 
   iconColor: 'black'
});
</script>