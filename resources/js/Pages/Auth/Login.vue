<script setup>
import { Icon } from '@iconify/vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Fly Live Log in" />

        <h1 class="text-2xl font-bold text-center text-base-100 drop-shadow">Welcome Back</h1>

        <div class="flex gap-4 p-5">

            <Link :href="route('google.login')" class="btn w-4/12 flex-auto bg-base-content shadow-lg shadow-success/30 border-success h-14">
                <img src="/auth/google-icon.png" width="36" alt="">
            </Link>

            <button type="button" class="btn px-1 w-4/12 flex-auto bg-base-content shadow-lg shadow-info/30 border-info h-14">
                <img src="/auth/facebook-icon.png" width="36" alt="">
            </button>

            <button type="button" class="btn flex-auto w-4/12 bg-base-content shadow-lg shadow-primary/30 border-primary h-14">
                <img src="/auth/instagram-icon.png" width="36" alt="">
            </button>

        </div>

        <div class="px-5 divider divider-primary text-primary drop-shadow-[0px_4px_6px_rgba(0,0,0,0.6)]">OR</div>

        <h1 class="text-2xl font-bold text-center text-base-100 drop-shadow mb-4">Login With Phone</h1>

        <button type="button" class="btn mx-auto flex items-center font-bold text-lg btn-primary">
            Phone
        </button>

    </GuestLayout>
</template>
