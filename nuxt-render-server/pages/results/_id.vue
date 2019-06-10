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
        <h1>Results: {{$route.params.id}}</h1>
        <div v-if="albumData">
            <div v-for="(album, index) in albumData">
            <div>
                <div>
                    <div class="headline">{{album.title}}</div>
                    <div>{{album.artistName}}</div>
                </div>
                <div>
                    <el-image
                    style="width: 100px; height: 100px"
                    :src="album.image"
                    :fit="fit"></el-image>
                </div>
            </div>
            </div>
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
import axios from 'axios';

export default {
    components: {
        webHeader,
        webNav,
        webFooter
    },
    asyncData({params}){
        return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
        .then((response) => {
            console.log(response.data.results);
            return {albumData: response.data.results};
        })
    }
    ,
    data() {
        return {
            search: ''
        }
    },
    methods: {
        onSubmit(){
            // alert('test');
            this.$router.push(`results/${this.search}`);
        }
    }
}
</script>
