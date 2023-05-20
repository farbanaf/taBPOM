<template>
  <div style="margin: 0; background: #ffffff">
    <input type="hidden" id="anPageName" name="page" value="format-daftar-produk"/>
    <div class="container-center-horizontal">
      <div class="format-daftar-produk screen">
        <div class="overlap-group4">
          <div class="bg">
            <img class="union" src="~/assets/images/union-6@2x.png"/>
            <img class="union-1" src="~/assets/images/union-7@2x.png"/>
          </div>
          <div class="daftar-produk-bpom valign-text-middle inter-semi-bold-mirage-32px">Daftar Produk BPOM</div>
          <p class="klik-untuk-masuk-ke-halaman-website valign-text-middle heading-6">
            Klik untuk masuk ke halaman website
          </p>
        </div>
        <div class="container">
          <div class="row">
            <!-- <div class="card-layanan-publik">
              <div class="frame-165">
                <div class="based-icons"><img class="pie-chart" src="~/assets/images/pie-chart@2x.png"/></div>
                <div class="registrasi-obat valign-text-middle opensans-normal-mirage-16px">
                  Statistik Produk Ijin Edar
                </div>
              </div>
            </div> -->
            <div class="card-layanan-publik">
              <nuxt-link to="/produk/cek" class="frame-165">
                <div class="based-icons"><img class="globe-1" src="~/assets/images/globe-4@2x.png"/></div>
                <div class="registrasi-obat valign-text-middle opensans-normal-bright-gray-16px">Cek Produk BPOM</div>
              </nuxt-link>
            </div>
            <div class="card-layanan-publik">
              <nuxt-link to="/produk/recall" class="frame-165">
                <div class="based-icons"><img class="link-2" src="~/assets/images/link-2@2x.png"/></div>
                <p class="registrasi-obat valign-text-middle opensans-normal-bright-gray-16px">
                  Daftar Produk Ditarik / Recal
                </p>
              </nuxt-link>
            </div>
            
            <!-- <div class="card-layanan-publik">
              <div class="frame-165">
                <div class="based-icons"><img class="info" src="~/assets/images/info@2x.png"/></div>
                <div class="registrasi-obat valign-text-middle opensans-normal-bright-gray-16px">Produk Dibatalkan</div>
              </div>
            </div> -->
          </div>
          <div class="row">
            <!-- <div class="card-layanan-publik">
              <div class="frame-165">
                <div class="based-icons"><img class="alert-triangle" src="~/assets/images/alert-triangle@2x.png"/></div>
                <div class="registrasi-obat valign-text-middle opensans-normal-bright-gray-16px">
                  Produk Publik Warning
                </div>
              </div>
            </div> -->
            <!-- <div class="card-layanan-publik">
              <div class="frame-165">
                <div class="based-icons"><img class="minus-circle" src="~/assets/images/minus-circle@2x.png"/></div>
                <div class="registrasi-obat valign-text-middle opensans-normal-bright-gray-16px">Produk Ditarik</div>
              </div>
            </div>
            <div class="card-layanan-publik">
              <div class="frame-165">
                <div class="based-icons"><img class="link-2" src="~/assets/images/link-2@2x.png"/></div>
                <p class="registrasi-obat valign-text-middle opensans-normal-bright-gray-16px">
                  Daftar Produk Ditarik / Recal
                </p>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'fade'
}
</script>
