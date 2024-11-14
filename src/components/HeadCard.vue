<script lang="ts" setup>
import { ref } from 'vue';
import ButtonHelp from './ButtonHelp.vue'
import Step from './Step.vue'
const showHelp = ref(false);
</script>

<template>
    <div class="container">
        <div class="row w-100">

            <div class="col mt-3 mt-lg-4 pt-2 mb-3 text-start w-100">
                <h1 class="mb-0 mt-0">Punch Automation, Reminders & Paid Breaks
                </h1>
                <p class="lead mb-0">This page allows you to set up a fixed punch schedule for each day of your week.
                </p>
            </div>

            <ButtonHelp v-model="showHelp" />

        </div>

        <div v-if="showHelp" class="text-left bg-white rounded shadow-sm">
            <h4 class="card-header primary-gradient-bg text-white">Help</h4>
            <div class="card-body p-3 p-xl-4">
                <div class="row">
                    <div class="col-12 col-lg-auto d-flex">
                        <div class="mb-1 mr-3">
                            <Step :stepNumber="1" />
                            <!-- <span
                                class="step step-one primary-gradient-bg badge-pill position-relative d-inline-block text-center text-white font-w-500 lead">1</span> -->
                        </div>
                        <ul class="m-0 pl-3">
                            <li>
                                Give your schedule a name
                            </li>
                            <li>
                                Set the amount of breaks (Up to 3)
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg d-flex mt-3 mt-lg-0">
                        <div class="mb-1 mr-3">
                            <Step :stepNumber="2" />
                            <!-- <span
                                class="step step-two primary-gradient-bg badge-pill position-relative d-inline-block text-center text-white font-w-500 lead">2</span> -->
                        </div>
                        <ul class="m-0 pl-3">
                            <li>Use <strong>Manual</strong> If your employees manually punch out/in for breaks</li>
                            <li>Use <strong>"Auto"</strong> and the employee will be automatically punched out/in for
                                break
                                – no punching is required</li>
                            <li>Paid Breaks - Select <strong>"Yes"</strong>, <strong>"No"</strong> or
                                <strong>"Some"</strong>
                                to make the break/lunch paid on the time card
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg d-flex mt-3 mt-lg-0">
                        <div class="mb-1 mr-3">
                            <Step :stepNumber="3" />
                            <!-- <span
                                class="step step-two primary-gradient-bg badge-pill position-relative d-inline-block text-center text-white font-w-500 lead">3</span> -->
                        </div>
                        <ul class="m-0 pl-3">
                            <li>Check <strong>"Send reminders to all employees"</strong> to have a text message sent to
                                the
                                employee 10 minutes before the break/end of day punch</li>
                            <li>Check <strong>"Apply"</strong> and <strong>"Punch Reminder"</strong> to have a text
                                message
                                sent to the selected employee 10 minutes before the break/end of a day punch</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Card Help that shows/hides with showHelp -->
</template>

<style scoped>
.rotate-up {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
}

.rotate-down {
    transform: rotate(0deg);
    transition: transform 0.3s ease;
}
</style>
