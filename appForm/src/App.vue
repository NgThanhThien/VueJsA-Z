<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <input
              type="text"
              id="email"
              class="form-control"
              :value="user.email"
            @input="user.email = $event.target.value">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model="user.password">
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-control"
              v-model="user.age">
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <label for="message">Message</label><br>
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea
            id="message"
            rows="5"
            class="form-control"
            v-model="message"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <div class="form-group">
            <label for="sendmail">
              <input
                type="checkbox"
                id="sendmail"
                value="SendMail"
                v-model="sendEmail"
              > Send Mail
            </label>
            <label for="sendInfomail">
              <input
                type="checkbox"
                id="sendInfomail"
                value="SendInfoMail"
                v-model="sendEmail"
              > Send Infomail
            </label><label for="cutEmail">
            <input
              type="checkbox"
              id="cutEmail"
              value="CutEmail"
              v-model="sendEmail"
            > cut email
          </label>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <label for="male">
            <input
              type="radio"
              id="male"
              value="Male"
              v-model="gender"
            > Male</label>
          <label for="female">
            <input
              type="radio"
              id="female"
              value="Female"
              v-model="gender"
            > Female</label>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <label for="priority">Priority</label>
          <select
            id="priority"
            class="form-control" v-model="selectPriority">
            <option v-for="item in priority" v-model="x = item" >{{ item }}</option>
          </select>
          <label for="switched">Switch:</label>
          <app-custom
            v-model="dataSwitch"
          ></app-custom>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <button
            class="btn btn-primary"
            @click.prevent="submited"
          >Submit!
          </button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="submit">
      <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header">
            <h4>Your Data</h4>
          </div>
          <div class="card-body">
            <p>Mail:{{user.email}}</p>
            <p>Password:{{user.password}}</p>
            <p>Age:{{user.age}}</p>
            <p style="white-space: pre">Message: {{message}}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="item in sendEmail">{{item}}</li>
            </ul>
            <p>Gender:{{gender}}</p>
            <p>Priority:{{ selectPriority }} </p>
            <p>Switched:{{ dataSwitch }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import customControl from "./assets/components/customControl";
    export default {
        data: function () {
            return {
                user: {
                    email: '',
                    password: '',
                    age: 0
                },
                message: '',
                sendEmail: [],
                gender: 'Male',
                priority:['High', 'Medium', 'Low'],
                dataSwitch: true,
                submit:'',
                selectPriority:'Low'
            }
        },
        components:{
            appCustom: customControl
        },
        methods:{
          submited(){
              this.submit = true
          }
        }
    }
</script>

<style>

</style>
