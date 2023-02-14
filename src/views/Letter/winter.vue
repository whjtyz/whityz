<template>
    <div class="winterBody">
        <section class="xinjian">
            <h1>冬 季</h1>
            <p>到了我们现在的这个季节，我印象最深的可能是2023年的第一场雪了，那天是我最为后悔的一天，也是我最遗憾的一天。当时我这边下雪了，我急忙想要分享看到雪的兴奋。恰好当时我看小说突然看到一句“两处相思同淋雪，此生也算共白头”，我可能有些呆，我查看苏州的天气发现还没有下雪，我便想着等等吧，等着苏州也开始下，我们或许可以一起分享这份兴奋，当我等到的时候突然想到了这一句，我突然莫名其妙的开始不好意思起来，这样便错过了第一次初雪时可能与你分享心情的机会。</p>
            <p>说到遗憾，这个礼物其实也有遗憾，那就你打开的时候，我可能还是没有能够完善，我真的想要将他变成一件礼物，所以我想在里面的关于栏里加上一些很快就可以用起来的前端代码片段，这样可能会更像一件礼物。如果这个时候我们都在学校那就好了，我或许就可以亲手送上真正的礼物。我一开始有想过送巧克力，送花，但我稍微思考了一下就回绝了这个想法。</p>
            <p>被绿色笼罩的城市，被微风和蝉鸣环绕的房屋，被枫叶点缀的小院，被雪花染成白色的世界，我多希望可以和你一同体验这一切。</p>
            <p>我真很庆幸可以遇见你，粒子们从宇宙诞生之初便存在，是他们创造了我们，试想他们用了140亿年穿越了时间和空间创造了我们，好让我可以遇见你。我真很开心可以遇见你，喜欢上你。</p>
        </section>
    </div>
    <snow></snow>
</template>

<script setup lang="ts">
import snow from '@/components/Weather/snow/snow.vue'
</script>

<style scoped lang="scss">
.winterBody {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(to right top,#d1d1d1,#a1a1a1);
    .xinjian {
        width: 50%;
        min-height: 80vh;
        padding: 40px;
        background: linear-gradient(to right bottom,#ffffff,#686868cb);
        border-radius: 30px;
        z-index: 2;
        box-shadow: 0 7px 25px rgba(0,0,0,0.08);
        p {
            margin-top: 20px;
            padding: 20px;
            color: #0000009c;
         }
    }
}
</style>
