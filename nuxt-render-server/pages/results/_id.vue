<template>
<el-container>
  <el-header>
       <webHeader>
        
        </webHeader>
  </el-header>
  <el-container>
    <el-aside width="200px">
        <webNav/>
    </el-aside>
    <el-container>
      <el-main>
        <webToolBar/>
        <h1>Results: {{$route.params.id}}</h1>
        <div v-if="albums">
            <el-row>
                <el-col :span="8" v-for="(album, index) in albums" :key="index">
                    <el-card :body-style="{ padding: '0px' }">
                    <a :href="album.artistViewUrl" target="_blank">
                    <el-image
                    style="width: 100px; height: 100px"
                    :src="album.artworkUrl60"></el-image>
                    </a>
                    <span>{{album.title}}</span>
                    <span>{{album.collectionCensoredName}}</span>
                    <div class="bottom clearfix">
                    <time class="time">{{album.artistName}}</time>
                    </div>
                    </el-card>
                </el-col>
            </el-row>   
        </div>
    </el-main>
      <el-footer>

          <webFooter/>
      </el-footer>
    </el-container>
  </el-container>
</el-container>

</template>
<script>
import webHeader from '~/components/header.vue';
import webNav from '~/components/navigate.vue';
import webFooter from '~/components/footer.vue';
import webToolBar from '~/components/Toolbar';
import axios from 'axios';

export default {
    components: {
        webHeader,
        webNav,
        webFooter,
        webToolBar
    },
    
    async fetch({store, params}){
        console.log('2');
        console.log(params.id);
        await store.dispatch("albums/getAlbums", params.id);
        // return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
        // .then((response) => {
        //     console.log(response.data.results);
        //     return {albumData: response.data.results}
        // });
    },
    computed: {
        albums(){
            return this.$store.state.albums.albums;
        }
    }
}
</script>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>