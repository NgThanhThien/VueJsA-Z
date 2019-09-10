<template>
  <div class="container">
    <div class="row">
      <div class="col-8 offset-2 text-center">
        <h1> Default/ Directives </h1>
        <p>Text by t</p>
      </div>
    </div>
    <div class="row">
      <div class="col-8 offset-2 text-center">
        <h1> Custom Directives </h1>
        <p v-hightlight>Text by t</p>
        <p v-bg-color="'green'">Text by T</p>
        <p v-custom:background.delayed.blink="'#f0f0f0'">Hello T</p>
        <p v-local-custom:delayed.blink="{mainColor:'#f0f0f0', secondColor:'blue',delayed:500}">Hello T</p>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        directives: {
            "local-custom": {
                bind(el, binding, vnode) {
                    let delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = 3000
                    }
                    if (binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = binding.value;
                        let delayed = binding.value.delayed;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                if (binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor;
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, delayed)
                        }, delay)

                    } else {
                        setTimeout(() => {
                            if (binding.arg == 'background') {
                                el.style.backgroundColor = binding.value;
                            } else {
                                el.style.color = binding.value;
                            }
                        }, delay);
                    }
                }
            }
        }
    }

</script>

<style>

</style>
