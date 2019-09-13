<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-center">Vue Resource</h1>
        <hr>
        <input class="form-control"
               type="text"
               v-model="user.userName"
               placeholder="User Name">
        <input type="password"
               class="form-control mt-md-3"
               v-model="user.userPassword"
               placeholder="Password">
        <button class="btn btn-block btn-success mt-md-3" @click="submit">Submit</button>
<!--        <hr>-->
<!--        <button class="btn btn-block btn-outline-info mt-md-3" @click="getData">-->
<!--          Get Data-->
<!--        </button>-->
        <hr>
        <input type="text"
               v-model="node"
               class="form-control mt-md-3">
        <button class="btn btn-block btn-outline-danger mt-md-3" @click="getUserData">
          Get Data
        </button>
        <div class="card mt-md-3">
          <div class="card-header text-center">Data</div>
          <ul class="list-group">
            <li class="list-group-item" v-for="user in userData">
              {{ user.userName }} - {{ user.userPassword }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    userName: '',
                    userPassword: ''
                },
                userData: [],
                resource: {},
                node: 'user'
            }
        },
        methods: {
            submit() {
                // this.$http.post('', this.user)
                //     .then(response => {
                //         console.log(response);
                //     }, error => {
                //         console.log(error);
                //     })
                this.resource.createItem(this.user);
            },
            // getData() {
            //     this.$http.get('')
            //         .then(response => {
            //             return response.json();
            //         })
            //         .then(data => {
            //             for (let key in data) {
            //                 this.userData.push(data[key])
            //             }
            //         })
            // },
            getUserData() {
                this.resource.getNodeData({node: this.node})
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        for (let key in data) {
                            this.userData.push(data[key])
                        }
                    })
            }
        },
        created() {
            const customActions = {
                createItem: {method: 'POST', url: 'user.json'},
                getNodeData: {method: 'GET'}
            }
            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style scoped>
  .box-user {
    display: flex;
    width: 100%;
    margin: 10px;
  }

  span.box-input {
    width: 100%;
  }

  .label-box {
    width: 30%;
  }
</style>
