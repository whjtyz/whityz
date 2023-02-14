<template>
	<div class="homePage">
		<div class="smallWindow">
			<sakura v-if="state.buttonUse"></sakura>
		</div>
		<div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'


const state = reactive({
	buttonUse: false
})
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
