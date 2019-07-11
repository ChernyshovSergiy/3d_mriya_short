<template>
    <div>
        <v-container fill-height class="mt-5">
            {{ token }}
        </v-container>
    </div>
</template>

<script>
export default {
    middleware: 'modeling',
    name: 'Id',
    data() {
        return {
            token: this.$route.params.id
        }
    }
}
</script>

<style scoped></style>
