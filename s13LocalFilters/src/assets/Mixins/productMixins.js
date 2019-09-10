export const productMixins = {
  name: 'app',
  data() {
    return {
      products: ['Samsung', 'Apple', 'Xiaomi', 'V-smart', 'HTC', 'Bphone', 'Google'],
      filterProduct: ''
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter((el) => {
        return el.match(this.filterProduct);
      })
    }
  }
}
