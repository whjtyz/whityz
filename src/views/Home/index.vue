<template>
	<div class="homePage">
		<div class="smallWindow">
			<sakura></sakura>
		</div>
	</div>
</template>

<script setup lang="ts">
import sakura from '@/components/Weather/sakura/sakura.vue'
</script>

<style scoped lang="scss">
.homePage {
	width: 100%;
	height: 100%;
	.smallWindow {
		width: 100px;
		height: 100px;
	}
}
</style>
