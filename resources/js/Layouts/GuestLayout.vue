<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="auth-bg">
        <div class="dev-flex-middle h-60">
            <Link href="/" class="dev-flex-middle text-base-100 drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)]">
                <ApplicationLogo class="h-40 w-auto" />
                <h1 class="text-4xl font-mono font-bold text-center">Fly-live</h1>
            </Link>
        </div>

        <slot></slot>
    </div>
</template>

<style scoped>
.dev-flex-middle {
    @apply flex flex-col items-center justify-center;
}
.auth-bg{
    background-image: url('/backgrounds/0.jpg');
    background-size: cover;
    min-height: 100vh;
}
</style>
