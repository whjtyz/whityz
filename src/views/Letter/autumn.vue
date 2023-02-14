<template>
   <div class="mapleleaf">
        <section class="xinjian">
            <h1>秋 季</h1>
            <p>说到秋季，给我的感受可能就是略微的萧瑟加悲凉吧。</p>
            <p>到了这个悲伤的季节，可能我最感到和这个季节相称的经历应该就是，这么久以来，我总是没有能够更多的了解你。我还记得我的第一封情书(姑且把它当作情书吧，虽然我觉得我写的完全不像)，我在里面写着我想要更近一步的了解你，慢慢的靠近你，但我现在发现我完全不知道该如何去做，我完全没有这方面的知识。</p>
            <p>话说秋季除了悲凉的氛围，我感觉好像铺满金黄的枫叶，被夕阳染红的枫叶林好像更为符合。我也好想可以与你见证这一幕，我们可以一起感受季节的更替，树叶的新生与逝去。</p>
            <p>写到这里，我又突然想到了之前你问我的我为什么会喜欢你，其实我当时的回答就好像没有回答一样，相隔的这些，我也有在一直想这个问题，我真的很想可以给出一个答案，但是我每次想出的都不像一个答案一样就像我现在的这个礼物其实也不像个礼物。但我现在可以确定的是，我真的超级超级喜欢你，请原谅我短缺的词汇量只能用超级来进行形容。我仅仅只是试想了一下我知道我和你分别被别人开一些略微过分的玩笑，我发现别人可以随便说我些什么，但是我好像接受不了别人说你的不好。抱歉这段也有点尬了吧，我也只能用这段不好的表述证明我的喜爱，其实我也不知道这边写这个会不会让你感到不开心，或许会让你感觉我是个脾气不好的人。完了，又写的自己尬住了。</p>
            <p>我不知道我最后可不可以追到你，我也不知道那次鼓起勇气接近你是对是错，或许我应该像之前我试想的那样，默默的喜欢着你，最后毕业时请求你与我合照。</p>
        </section>
   </div>
   <autumn></autumn>
</template>

<script setup lang="ts">
import autumn from '@/components/Weather/mapleleaf/mapleleaf.vue'
</script>

<style scoped lang="scss">
.mapleleaf {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(to right top,#faeecf,#f7d18a59);
    .xinjian {
        width: 50%;
        min-height: 80vh;
        padding: 40px;
        background: linear-gradient(to right bottom,#ffffff,#fac25bcb);
        border-radius: 30px;
        z-index: 2;
        p {
            margin-top: 20px;
            padding: 20px;
            color: #0000009c;
         }
    }
}
</style>
