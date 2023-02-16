<template>
    <div class="tableForm2">
    <table class="tabletForm"> 
        <label for="title">
            <input type="text" v-model="userData.title" class="inputTitle" id="title" placeholder="Başık">
        </label>
        <label for="des">
            <input type="text" v-model="userData.description" class="description" id="des" placeholder="Açıklama">
        </label>
        
        <label for="url">
            <input type="text" id="url" class="inputTitle" v-model="userData.url" placeholder="Bağlantı Linki">
        </label>

        <div class="buttonForm">
            <button class="iptal" @click="$router.push({name : 'HomePage'})">İptal</button>
            <button class="gönder" @click="saveOn">Kaydet</button>
        </div>
    </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData: {
                title: null,
                description: null,
                url: null
            }
        }
    },

    methods: {
        saveOn() {
            console.log(this.userData)
            this.$appAxios.post("/bookmarks", this.userData).then(save_response => {
                console.log("save_reponse", save_response);
                this.resetData();
                this.$route.push("/");
            });
        },
        resetData() {
            Object.keys(this.userData).forEach(key => (this.userData[key] = null))
        },
    }
}
</script>