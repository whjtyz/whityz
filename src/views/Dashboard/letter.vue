<template>
    <div>
        <h1>信 件</h1>
        <div class="cards">
            <div class="card spring" @click="routeto(1)">
                <img src="@/assets/spring.gif" alt="">
                <div class="card-info">
                    <h2>春天</h2>
                    <p>spring</p>
                </div>
            </div>
            <div class="card summer" @click="routeto(2)">
                <img src="@/assets/summer.gif" alt="">
                <div class="card-info">
                    <h2>夏天</h2>
                    <p>summer</p>
                </div>
            </div>
            <div class="card autumn" @click="routeto(3)">
                <img src="@/assets/autumn.gif" alt="">
                <div class="card-info">
                    <h2>秋天</h2>
                    <p>autumn</p>
                </div>
            </div>
            <div class="card winter" @click="routeto(4)">
                <img src="@/assets/winter.gif" alt="">
                <div class="card-info">
                    <h2>冬天</h2>
                    <p>winter</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';


const routeto = (a:number) => {
    switch (a) {
        case 1:
            router.push('/spring');
            break;
        case 2:
            router.push('/summer');
            break;
        case 3:
            router.push('/autumn');
            break;
        case 4:
            router.push('/winter');
            break;
        default:
            break;
    }
}
</script>

<style scoped lang="scss">
h1 {
    color: #426696;
    font-weight: 600;
    font-size: 30px;
    opacity: 0.8;
}

h2,
p {
    font-family: "Poppins", sans-serif;
    color: #658ec6;
    font-weight: 500;
    opacity: 0.8;
}

.cards {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 20px;
    margin-right: 65px;

    .card {
        display: flex;
        margin-top: 40px;
        padding: 20px;
        border-radius: 10px;
        cursor: pointer;

        img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 20px;
        }

        .card-info {
            margin-left: 30px;
        }
    }

    .card.spring {
        background: linear-gradient(to right bottom, #f083bf, #f8bde0);
    }

    .card.summer {
        background: linear-gradient(to right bottom, #83c7ff, #bdd9f8);
    }

    .card.autumn {
        background: linear-gradient(to right bottom, #ebc548, #fcefb7);
    }

    .card.winter {
        background: linear-gradient(to right bottom, #cfcece, #ffffff);
    }

    .card:hover {
        opacity: 0.7;

    }
}
</style>
