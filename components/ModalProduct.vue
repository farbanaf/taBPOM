<template>
    <div class="modal-product-preview_backdrop" v-if="this.data">
      <div class="modal-product-preview">
        <div class="modal-product-preview_dialog">
          <div class="modal-product-preview_content">
            <div class="modal-product-preview_header">
              <h4 class="modal-product-preview_title">Detail Produk {{ this.data.recall? "Recall" : "" }}</h4>
              <button type="button"
                class="modal-product-preview_btn_close" @click="closeModal">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg>
                </button>
            </div>
            <div class="modal-product-preview_body">
                <div class="row-modal-product">
                    <table class="table-product">
                        <tr>
                            <th width="150px">Nomor Registrasi</th>
                            <td><span class="badge-primary">{{ this.data.no_reg }}</span></td>
                        </tr>
                        <tr v-if="!this.data.recall">
                            <th width="150px">Masa Berlaku s/d</th>
                            <td><span class="badge-primary">{{ this.data.expired }}</span></td>
                        </tr>
                        <tr>
                            <th width="150px">Diterbitkan Oleh</th>
                            <td>
                                <span class="badge-primary" style="margin-bottom: .5rem;" v-for="item in this.data.publisher" :key="item.id">{{ item.name }}</span>
                            </td>
                        </tr>
                        <tr>
                            <th width="150px">Produk</th>
                            <td><span class="badge-primary">{{ this.data.category }}</span></td>
                        </tr>
                    </table>
                    <table class="table-product">
                        <tr>
                            <th width="150px">Nama Produk</th>
                            <td><span class="badge-primary">{{ this.data.name }}</span></td>
                        </tr>
                        <tr v-if="this.data.recall">
                            <th width="150px">Bentuk Sediaan</th>
                            <td><span class="badge-primary">{{ this.data.dosage_form }}</span></td>
                        </tr>
                        <tr>
                            <th width="150px">Merk</th>
                            <td><span class="badge-primary">{{ this.data.merk }}</span></td>
                        </tr>
                        <tr>
                            <th width="150px">Kemasan</th>
                            <td>
                                <span class="badge-primary">{{ this.data.packaging }}</span>
                            </td>
                        </tr>
                        <tr>
                            <th width="150px">Pendaftar</th>
                            <td><span class="badge-primary" style="display: flex; align-items: center; justify-content: space-between;"><span>{{ this.data.merchant.name }}</span><span>{{ this.data.merchant.address }}</span></span></td>
                        </tr>
                        <tr v-if="!this.data.recall">
                            <th width="150px">Diproduksi Oleh</th>
                            <td><span class="badge-primary" style="display: flex; align-items: center; justify-content: space-between;"><span>{{ this.data.produced_by.name }}</span><span>{{ this.data.produced_by.address }}</span></span></td>
                        </tr>
                    </table>
                </div>
                <div class="row-modal-product" v-if="this.data.recall">
                    <table class="table-product">
                        <tr>
                            <th width="150px">Surat Keterangan</th>
                            <td><span class="badge-primary">{{ this.data.recall.no }}</span></td>
                        </tr>
                        <tr>
                            <th width="150px">Tanggal</th>
                            <td><span class="badge-primary">{{ this.data.recall.date }}</span></td>
                        </tr>
                        <tr>
                            <th width="150px">Level</th>
                            <td>
                                <span class="badge-primary">{{ this.data.recall.level }}</span>
                            </td>
                        </tr>
                        <tr>
                            <th width="150px">Kelas</th>
                            <td><span class="badge-primary">{{ this.data.recall.class }}</span></td>
                        </tr>
                    </table>
                    <table class="table-product">
                        <tr>
                            <th width="150px">Nomor Bets</th>
                            <td><span class="badge-primary">{{ this.data.recall.bets }}</span></td>
                        </tr>
                        <tr>
                            <th width="150px">Alasan Penarikan</th>
                            <td><span class="badge-primary">{{ this.data.recall.reason }}</span></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="modal-product-preview_footer">
              <button type="button" class="btn" @click="closeModal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="scss">
.modal-product-preview {

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    // display: none;
    z-index: 1060;
    max-height: 100vh;
    overflow: auto;
    transition: all .2s linear;


    // &.show {
    //     display: block;

    //     .modal-product-preview_dialog {
    //         display: block;
    //         animation: zoomIn;
    //         animation-duration: .3s;
    //     }
    // }

    &.hiding {
        .modal-product-preview_dialog {
            animation: zoomOut;
            animation-duration: .3s;
        }
    }

    .modal-product-preview_dialog {
        position: relative;
        border-radius: 8px;
        background-color: #fff;
        width: 100%;
        margin: auto;
        display: block;
        animation: zoomIn;
        animation-duration: .3s;
        box-shadow: 0 0 10px rgb(154 154 154 / 21%);
        max-width: 800px;

        .modal-product-preview_content {

            .modal-product-preview_header {
                position: relative;
                width: 100%;
                padding: 1rem;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .modal-product-preview_title {
                    font-size: 1.6rem;
                    margin: 0;
                    color: #054586;
                }

                .modal-product-preview_btn_close {
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    background-color: #054586;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 0;
                    outline: none;
                    cursor: pointer;

                    svg {
                        width: 15px;
                        height: 15px;
                        fill: #fff;
                    }

                }

            }

            .modal-product-preview_body {
                width: 100%;
                position: relative;
                padding: .5rem 1rem;
                min-height: 100px;
            }

            .modal-product-preview_footer {
                width: 100%;
                padding: 1rem .8rem;
                display: flex;
                justify-content: space-between;

                .btn {
                    display: inline-block;
                    background-color: #054586;
                    color: #fff;
                    border: 0;
                    border-radius: 10px;
                    padding: .6rem 1rem;
                    margin: 0 auto;
                    cursor: pointer;
                    outline: none;
                }

            }

        }

    }

    .row-modal-product {
        display: grid;
        grid-template-columns: repeat(1,minmax(0,1fr));
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 1rem;
        padding: .5rem 0;

        &:nth-child(2) {
            border-top: 2px dotted #aaa;
        }
        
        @media screen and (min-width: 768px) {
            & {
                grid-template-columns: repeat(2,minmax(0,1fr));
            }
        }

        .table-product {
            width: 100%;
            max-width: 380px;
            text-align: left;
            border-collapse: collapse;

            th,td {
                font-size: 14px;
                padding: 10px;
                font-weight: bold;
                padding: 10px;
            }

            .badge-primary {
                padding: .3rem .4rem;
                border-radius: 5px;
                background: #054586;
                color: #fff;
                font-size: 12px;
                display: inline-block;
            }

        }

    }

}

.modal-product-preview_backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .15);
    z-index: 1060;
    // display: none;
}


@-webkit-keyframes zoomIn {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }

    50% {
        opacity: 1
    }
}

@keyframes zoomIn {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }

    50% {
        opacity: 1
    }
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}


@-webkit-keyframes zoomOut {
    0% {
        opacity: 1
    }

    50% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }

    to {
        opacity: 0
    }
}

@keyframes zoomOut {
    0% {
        opacity: 1
    }

    50% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3)
    }

    to {
        opacity: 0
    }
}
</style>
<script>
export default {
    name: 'modal-product',
    props: ['data','onclose'],
    methods: {
      closeModal() {
        this.onclose()
      },
    }
}
</script>