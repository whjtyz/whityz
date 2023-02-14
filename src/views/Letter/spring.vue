<template>
   <div class="spring">
      <div class="sakura">
         <section class="xinjian">
            <h1>春 季</h1>
            <p>黄婧小姐，这原本是圣诞节那天我准备送给你的礼物，但是当时直到12点结束我也没能完成。但庆幸的是，我在今天完成了它。</p>
            <p>其实我也不能确定，这究竟是否能够称得上是件礼物，毕竟这个网站除了我的信件，其他内容我也没有能够来得及实现。但我总想在这样一个特殊的日子送些什么，请你姑且将它当做一件有些特殊的礼物吧。</p>
            <p>我一开始想了很多，送些别的是否才会更好。这个时候，我总会想，如果我有更多的技能就好了，如果我会画画的话，一定可以画出你的画像，如果我会写作的话，那我一定可以写出更为动人的话语来表达自己的感情。</p>
            <p>马上就要三月了呢，到了樱花盛开的季节，我也不知道能否有幸与你一同漫步在樱花树下，观看樱花缓慢的落下的风景。所以我写了四个季节的页面，哪怕是在我这个不完善的网站上，我也想与你一同分享不同季节带来的感受。</p>
            <p>以上其实就是我做这个网站的初衷和想要表达的情感。</p>
            <p>春季马上就要到来了呢，春季往往代表着新生，作为四季的开端，总是让人期待着未来。我以前总是对未知的未来抱有一定的恐惧，但在遇见了你之后，我开始期待着未来的每一天，我开始有了更多的勇气可以慢慢的离你更近一些。我觉得我是幸运的，可以遇见你，可以默默的喜欢上你。</p>
         </section>
      </div>
   </div>

   <sakura></sakura>
</template>

<script setup lang="ts">
import sakura from '@/components/Weather/sakura/sakura.vue'
</script>

<style scoped lang="scss">
.spring {
   background: linear-gradient(to right top, #fde7f718, #ffabed42);
   min-height: 100vh;

   .sakura {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      .xinjian {
         width: 50%;
         min-height: 80vh;
         padding: 40px;
         background: linear-gradient(to right bottom,#ffffff,#f778cd93);
         border-radius: 30px;
         z-index: 2;

         p {
            margin-top: 20px;
            padding: 20px;
            color: #0000009c;
         }
      }
   }
}
</style>
