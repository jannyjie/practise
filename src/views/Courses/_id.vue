// <script>
// import {onMounted, reactive, ref, onUnmounted } from "vue";
// import {useRoute, useRouter} from "vue-router";
// import axios from "axios";
// import router from '@/router';
// export default {
//   setup() {
//     const route = useRoute();
//     const router = useRouter();
//     const courses = reactive({data: {}});
//     const isError = ref(false);
//     let timer = null;
//     onMounted(() =>{
//       console.log(route.params.id);
//       axios.get(`https://vue-lessons-api.herokuapp.com/courses/${route.params.id}`)
//         .then((res) => {
//             courses.data = res.data.data[0];
//             console.log(res.data);
//         }).catch(error=>{
//           isError.value = true;
//           courses.data['error_message'] = error.response.data.error_message;
//           // 跳轉到上一頁
//           timer = setTimeout(()=> {
//             router.push({path: "/Courses"});
//             // router.go(-1); 此方式也可以到上一頁
//           }, 3000);
//           console.log(error.response.data);
//         });
//     });
    
//     onUnmounted(() => {
//       // 清除計時器 以免影響其他頁
//       clearTimeout(timer);
//     });
//     return {courses, isError};
//   },
// };
// </script>
// <template>
//   <div>
//     <div v-if="!isError">
//       <h1>{{courses.data.name}}</h1>
//       <h2>NTD: {{courses.data.money}}</h2>
//       <img :src="courses.data.photo" alt="" />
//       <div v-if="Object.keys(courses.data).length !== 0">
//         <img :src="courses.data.teacher?.img" alt="" />
//         <p>{{courses.data.teacher?.name}}</p>
//       </div>
//     </div>
//     <!-- error_message -->
//     <h1 v-if="isError">{{courses.data.error_message}}</h1>
//   </div>
// </template>

// <style></style>
