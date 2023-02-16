<template>
    <button class="buttonEkle" @click="$router.push({name : 'NewBookmark'})">+ Yeni Ekle</button>
    <table class="table">
        <thead>
            <tr class="thead">
                <th class="th">
                <th>#</th>
                <p class="th-">Başlık</p>
                </th>
                <th class="url">Açıklama</th>
                <th class="delete">Bağlantı</th>
            </tr>
        </thead>

        <tbody>
            <tr class="tr" v-for="(bookmark, index) in bookmarksList" :key="bookmark.id">
                <td class="th">
                <td>{{ index + 1 }}</td>
                <p class="th-">{{bookmark.title}}</p>
                </td>
                <td>{{bookmark.description}}</td>
                <td><button class="button"><a class="link" :href="bookmark.url" target="_blank">Bağlantı</a></button></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    data(){
        return {
            bookmarksList : [],
        }
    },
    created() {
        this.$appAxios.get("/bookmarks").then(bookmarks_list_response => {
            this.bookmarksList = bookmarks_list_response.data;
        });
    },
    deleteItem(bookmark) {
        this.$appAxios.delete(`/bookmarks/${bookmark.id}`).then(delete_response => {
            console.log(delete_response)
            if(delete_response.status == 200) {
                this.bookmarksList = this.bookmarksList.filter(i => i.id !== bookmarksList.id)
            }
        })
    }
};
</script>