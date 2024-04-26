<template>
    <MainLayout>
        <div class="relative pb-24 bg-black  h-[100vh] hero">
            <nav class="flex justify-around items-center text-white">
                <ul class="flex gap-5">
                    <li><RouterLink to="/mission">Mission</RouterLink></li>
                    <li><RouterLink to="/mission">Careers</RouterLink></li>
                    <li><RouterLink to="/mission">Labs</RouterLink></li>
                </ul>
                <h1 class="font-extrabold text-4xl">Fackolith</h1>
                <RouterLink to="/impact">Impact</RouterLink>
            </nav>
            <div>
                <p class="absolute bottom-14 left-10 text-6xl font-bold text-white">
                    Dating app <br>designed to be deleted <sup>TM</sup>
                </p>
            </div>
        </div>
        <div class="pt-32 px-32 bg-white text-black grid grid-cols-2 grid-rows-2">
            <div class="col-span-1 row-span-1">
                <p class="text-[#763F6E] mb-10">Our approach</p>
                <h1 class="text-6xl font-extrabold  leading-snug mb-16">Go on your last <br>first date.</h1>
            </div>
            <div class="col-start-2 row-start-2 col-span-1">
                <p class="text-gray-600 my-16 tracking-widest">
                    Fackolith is built on the belief that anyone looking for love should be able to find it. It’s also
                    built on an acclaimed Nobel-Prize-winning algorithm, so we can succeed in getting you out on
                    promising dates, not keeping you on the app.
                </p>
                <button class="rounded-3xl px-6 py-3 text-white bg-black">How we do it</button>
            </div>

        </div>
        <div class="py-36 pr-16 bg-white text-black flex gap-16">
            <img src="../assets/images/couples.jpg" alt="couple in a date" class="rounded-lg -ml-4">
            <div class="flex flex-col justify-end">
                <div class="">
                    <p class="text-[#763F6E] mb-16">Fackolith labs</p>
                    <h1 class="font-sans text-4xl my-6">We're love Scientists</h1>
                    <p class="my-6 tracking-wide leading-8 text-gray-600">Our Fackolith Labs researchers, behavioral
                        analysts, and matchmakers study daters
                        and compatibility so we
                        can make Hinge better for you. We’ve gotten pretty good at it.</p>
                </div>
            </div>
        </div>
        <div class="text-white py-32 px-16">
            <p class="mb-16">What Our Users Say</p>
            <div>
                <h1 class="text-3xl w-1/2">
                    <sup>"</sup>Fackolith’s prompts really made the difference—I felt like I got a good sense of a guy’s
                    vibe from his
                    answers, and it was easy to jump right into a real conversation. <sup>"</sup>
                </h1>
            </div>
        </div>
        <div class="bg-white text-black py-36 px-10 grid grid-cols-4 gap-5">
            <div class="col-span-1">
                <p class="text-[#763F6E] my-3 font-bold">Work at Fackolith</p>
                <h1 class="my-6 font-extrabold text-6xl">
                    Let's work <br> together
                </h1>
                <p>
                    We are looking for people who want to make dating effective not addictive
                </p>
                <button class="bg-black  text-white  my-6 font-bold px-6 py-2 rounded-3xl">Join us</button>
            </div>
            <div class="flex gap-2 pl-2 overflow-x-visible">
                <img src="../assets/images/img1.jpg" alt="hero" class="rounded-lg">
                <img src="../assets/images/img2.jpg" alt="hero" class="rounded-lg">
                <img src="../assets/images/img3.jpg" alt="hero" class="rounded-lg">
            </div>
        </div>
        <div class=" text-white pt-36 pb-20 px-10">
            <h2 class="my-6">Press</h2>
            <p class="text-6xl font-bold my-6">Fackolith in the headlines</p>
            <p class="my-6">See our press releases, media coverage, and press kits.</p>
            <button class="bg-white text-black my-6 font-bold px-6 py-2 rounded-3xl">Visit our newsroom</button>
        </div>
        <hr class="text-gray-600 mx-16">
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/components/MainLayout.vue';
</script>

<style  scoped>
.hero{
    background-image: url('../assets/images/hero.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.9;

}
</style>