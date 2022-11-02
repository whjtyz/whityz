<template>
	<div v-for="item of 500" :key="item" class="snowflake"></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.snowflake {
	--size: 1vw;
	width: var(--size);
	height: var(--size);
	background: url(@/assets/weather/snow/snow.svg) no-repeat; //雪花图片 也可以画圆
	background-size: 100% 100%;
	position: fixed; //定位元素，脱离文档流
	top: -3vh; //出事高度在屏幕外 效果更真实
	z-index: -1; //背景图层不遮挡上面元素
}

@keyframes snowfall {
	100% {
		transform: translate3d(var(--end), 100vh, 0);
	}
}

@for $i from 0 through 500 {
	.snowflake:nth-child(#{$i}) {
		//每个雪花的大小
		--size: #{random(6) * 0.08}vw;
		//雪花移动目标点 -70后是负数 这样雪花会向左下方飘落
		--end: #{random(20) - 70}vw;
		//雪花初始位置
		left: #{random(150)}vw;
		//雪花从顶到底移动的动画 动画时间可以调整雪花速度
		animation: snowfall #{10 + random(8)}s linear infinite;
		animation-delay: -#{random(10)}s;
	}
}
</style>
