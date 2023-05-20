<template>
  <div class="container">
    <div class="card-list-product">
      <div class="card-header">
        <h6 style="margin-bottom: 1rem;">Cari Produk</h6>
        <div class="row-filter">
          <div class="col-filter">
            <select name="" id="" class="input-filter">
              <option value="">Nomor Registrasi</option>
            </select>
          </div>
          <div class="col-filter">
            <input type="text" class="input-filter" v-model="keyword">
          </div>
          <div class="col-filter">
            <button class="btn-filter" @click="submit">Cari</button>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="product-scrolling">
            <table class="product-list-table">
                <tr v-for="item in data" :key="item.no_reg" @click="detail(item)">
                    <td>
                        <span class="badge-po">{{ item.type }}</span>
                    </td>
                    <td>
                        <span class="product-number">{{ item.no_reg }}</span>
                    </td>
                    <td>
                        <div class="product-detail">
                            <h6>{{ item.name }}</h6>
                            <span class="sub-detail">
                                Merk: {{ item.merk }} <br />
                                Kemasan: {{ item.packaging }}
                            </span>
                        </div>
                    </td>
                    <td>
                        <h6 class="product-merchant">
                            {{ item.merchant.name }} <br />
                            <small>{{ item.merchant.address }}</small>
                        </h6>
                    </td>
                </tr>
            </table>
          
        </div>
      </div>
    </div>

    <ModalProduct v-if="selectedData" :data="selectedData" :onclose="clearSelectedData"/>
    
</div>
</template>
<style lang="scss">
  .card-list-product {
    width: 100%;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 0 3px rgba(211, 211, 211, .6);
    margin-top: 2rem;

    .card-header {
      padding: 1.5rem;
      border-bottom: 1px solid #f1f1f1;

      .row-filter {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
      }
    }

    .card-body {
      width: 100%;
    }

    .input-filter {
      outline: none;
      display: block;
      min-width: 300px;
      width: 100%;
      height: calc(1.5em + 1.3rem + 2px);
      padding: 0.65rem 1rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #e2e5ec;
      border-radius: 4px;
    }

    .btn-filter {
      display: inline-block;
      font-weight: 400;
      color: #212529;
      text-align: center;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: 0.65rem 1rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      background-color: #054586;
      border-color: #054586;
      color: #fff;
      cursor: pointer;
    }

    .product-scrolling {
      width: 100%;
      overflow-x: auto;
    }

    // .product-item {
    //   display: flex;
    //   padding: 1.5rem;
    //   gap: 1rem;
    //   border-bottom: 1px solid #f1f1f1;
    //   transition: all .2s linear;
    //   background-color: #fff;
    //   cursor: pointer;
    //   min-width: 900px;

    //   &:hover {
    //     background-color: #f9f9f9;
    //   }

    //   .product-info {
    //     width: 50px;

    //     .product-info-bagde {
    //       display: inline-block;
    //       padding: .5rem;
    //       border-radius: 6px;
    //       background-color: rgba(5, 69, 134, .2);
    //       color: rgba(5, 69, 134, 1);
    //       font-size: 14px;
    //       font-weight: 600;
    //     }
    //   }

    //   .product-number {
    //     font-weight: bold;
    //     font-size: 16px;
    //     width: 280px;
    //   }

    //   .product-detail {
    //     width: 450px;

    //     h6 {
    //       font-weight: 600;
    //       margin-bottom: .5rem;
    //     }

    //     span.sub-detail {
    //       font-weight: 400;
    //       color: #a2a5b9;
    //       font-size: 14px;
    //     }
    //   }

    //   .product-merchant {
    //     font-weight: 600;
    //     line-height: 1.2rem;
    //   }
    // }

    .product-list-table {
        width: 100%;
        border-collapse: collapse;
        color: #333;
        background-color: #fff;

        .badge-po {
            display: inline-block;
            padding: .6rem .5rem;
            border-radius: 6px;
            background-color: rgba(5, 69, 134, .2);
            color: rgba(5, 69, 134, 1);
            font-size: 14px;
            font-weight: 600;
        }
        .product-number {
            font-weight: bold;
            font-size: 16px;
        }
        .product-detail {

            h6 {
                font-weight: 600;
                margin-bottom: .5rem;
            }

            span.sub-detail {
                font-weight: 400;
                color: #a2a5b9;
                font-size: 14px;
            }
        }
        .product-merchant {
            line-height: 1.2rem;
            font-weight: 600;

            small {
                font-size: 12px;
                color: #a2a5b9;
                font-weight: 500;
            }
        }

        td {
            padding: 1rem .8rem;
        }

        tr {
            cursor: pointer;
            border-bottom: 1px solid #eee;
            transition: all .2s linear;

            &:last-child {
                border-bottom: 0;
            }

            &:hover {
                background-color: #f9f9f9;
            }
        }
    }


  }

  

</style>

<script>
  import produk from '@/static/data/produk.json'
    import ModalProduct from '../../components/ModalProduct.vue'

  export default {
    data() {
      return {
        keyword: '',
        data: [],
        selectedData: null
      }
    },
    methods: {
      submit() {
        if (this.keyword) {
            const searchTerm = this.keyword.toLowerCase().trim();
            if (!searchTerm) {
                this.data = produk;
            }else{
                this.data = produk.filter(item => item.no_reg.toLowerCase().includes(searchTerm));
            }
        } else {
          this.data = produk;
        }
      },
      detail(data) {
        this.selectedData = data
      },
      clearSelectedData(){
        this.selectedData = null
      }
    }
  }

</script>
