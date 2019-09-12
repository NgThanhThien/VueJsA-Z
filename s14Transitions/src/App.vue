<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h1>Transitions</h1>
        <hr>
        <button class="btn btn-block btn-success"
                @click="show = !show">
          Show notification
        </button>
        <hr>
        <select v-model="typeAnimation" class="form-control mb-md-3">
          <option disabled value="">Please select one</option>
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <transition :name="typeAnimation">
          <div class="alert alert-success" v-if="show">
            2 notifications
          </div>
        </transition>
        <hr>
        <button class="btn btn-success btn-block" @click="status = !status">Add or Remove</button>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
        >
          <div class="box-square mt-md-3" v-if="status"></div>
        </transition>
        <hr>
        <button class="btn btn-info btn-block mb-md-3"
                @click="alertNotifi =='appSuccessAlert'?
                alertNotifi = 'appWarningAlert':
                alertNotifi = 'appSuccessAlert'"
        >Submit (toogle 2 notifications)
        </button>
        <transition name="fade">
          <component :is="alertNotifi"></component>
        </transition>
        <hr>
        <button class="btn btn-block btn-outline-dark" v-on:click="addItem"> Add Item</button>
        <ul class="list-group mt-md-3">
          <transition-group name="slide">
            <li class="list-group-item text-center box-item"
                v-for="(item,index) in numberTest"
                @click="removeItem(index)"
                :key="item"
            >{{ item }}
            </li>
          </transition-group>
        </ul>
        <!--        <transition name="slide">-->
        <!--          <div class="alert alert-info" v-show="show">-->
        <!--            2 notifications-->
        <!--          </div>-->
        <!--        </transition>-->
        <!--        <transition appear-->
        <!--                    enter-active-class="animated bounceOutLeft"-->
        <!--                    leave-active-class="animated bounceOutRight">-->
        <!--          <div class="alert alert-info" v-show="show">-->
        <!--            2 notifications-->
        <!--          </div>-->
        <!--        </transition>-->
      </div>

    </div>
  </div>
</template>

<script>
    import SuccessAlert from './assets/components/SuccessAlert'
    import WarningAlert from './assets/components/WarningAlert'

    export default {
        data() {
            return {
                show: true,
                status: false,
                elementWidth: 0,
                alertNotifi: 'appSuccessAlert',
                typeAnimation: 'fade',
                numberTest: [1, 2, 3, 4, 5, 6]
            }
        },
        components: {
            appSuccessAlert: SuccessAlert,
            appWarningAlert: WarningAlert
        },
        methods: {
            beforeEnter(el) {
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                let point = 1;
                const interval = setInterval(() => {
                    point++;
                    el.style.width = (this.elementWidth + point * 10) + 'px';
                    if (point > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20)
            },
            afterEnter(el) {

            },
            enterCancelled() {
            },
            beforeLeave(el) {
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                let point = 1;
                const interval = setInterval(() => {
                    point++;
                    el.style.width = (this.elementWidth - point * 10) + 'px';
                    if (point > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20)
            },
            afterLeave(el) {
            },
            leaveCancelled(el) {
            },
            addItem: function () {
                const pos = Math.floor(Math.random() * this.numberTest.length);
                this.numberTest.splice(pos, 0, this.numberTest.length + 1);
            },
            removeItem: function (i) {
                this.numberTest.splice(i, 1);
            }
        },
        computed: {}
    }
</script>

<style scoped>
  /*box*/
  .box-item {
    cursor: pointer;
    padding: 10px;
  }

  .box-list {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid darkslategrey;
  }

  .box-item:hover {
    background-color: lightblue;
  }

  .box-square {
    width: 300px;
    height: 100px;
    border: 1px solid rebeccapurple;
    background-color: lightcyan;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  /*  Slide transition */
  /* Enter*/
  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    transition: opacity 1s;
    animation: slide-in 1s ease-in forwards;
  }

  /* Leave*/
  .slide-leave {

  }

  .slide-leave-active {
    transition: opacity 1s;
    opacity: 0;
    animation: slide-out 1s ease-in forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(30px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(30px);
    }
  }
</style>
