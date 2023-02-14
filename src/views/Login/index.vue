<template>
	<div class="smallWindow">
		<section class="glass">
			<div class="dashboard">
				<div class="links" @click="state.dashboardState = 1">
					<div class="link" :class="{ pro: state.dashboardState === 1 }">
						<h2>信件</h2>
					</div>
				</div>
				<div class="links" @click="state.dashboardState = 2">
					<div class="link" :class="{ pro: state.dashboardState === 2 }">
						<h2>选项</h2>
					</div>
				</div>
				<div class="links" @click="state.dashboardState = 3">
					<div class="link" :class="{ pro: state.dashboardState === 3 }">
						<h2>关于</h2>
					</div>
				</div>
			</div>
			<div class="status">
				<letter v-if="state.dashboardState === 1"></letter>
				<options v-if="state.dashboardState === 2"></options>
				<regarding v-if="state.dashboardState === 3"></regarding>
			</div>
		</section>
	</div>
	<div class="circle1"></div>
	<div class="circle2"></div>
</template>

<script setup lang="ts">
import letter from '@/views/Dashboard/letter.vue'
import options from '@/views/Dashboard/options.vue'
import regarding from '../Dashboard/regarding.vue';
import { reactive } from 'vue';
let state = reactive({
	dashboardState: 1
})
</script>

<style scoped lang="scss">
.smallWindow {
	min-height: 100vh;
	background: linear-gradient(to right top,#65dfc9,#6cdbeb);
	display: flex;
	justify-content: center;
	align-items: center;
	.glass {
		min-height: 80vh;
		width: 60%;
		background: linear-gradient(to right bottom,rgba(255,255,255,0.7),rgba(255,255,255,0.3));
		border-radius: 20px;
		z-index: 3;
		backdrop-filter: blur(20px);
		overflow: hidden;
		display: flex;
		.dashboard {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background: linear-gradient(to right bottom,rgba(255,255,255,0.7),rgba(255,255,255,0.3));
			.links {
				margin: 2rem;
				cursor: pointer;
				.link {
					padding: 1rem 5rem;
					letter-spacing: 1rem;

					h2 {
						font-family: "Poppins", sans-serif;
						color: #658ec6;
						font-weight: 500;
						opacity: 0.8;
					}
				}
	
				.link.pro {
					background: linear-gradient(to right top,#74f0d9be,#73d6e6ad);
					border-radius: 2rem;

					h2 {
						color: white;
						font-weight: 550;
					}
				}
			}
		}
		.status {
			flex: 2;
			margin-bottom: 30px;
			margin-left: 30px;
			padding: 30px;
		}
	}

}
.circle1,.circle2 {
	background: linear-gradient(to right bottom,rgba(255,255,255,0.8),rgba(255,255,255,0.3));
	height: 14rem;
	width: 14rem;
	position: absolute;
	border-radius: 50%;
}
.circle1 {
	top: 5%;
	right: 15%;
}
.circle2 {
	bottom: 5%;
	left: 15%;
}
</style>
