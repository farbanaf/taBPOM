<template>
  <div>
    <div class="layout-default" id="content-wrapper">
      <!-- Navbar -->
      <div class="nav" v-if="true">
        <div class="navlink">
          <img class="border" src="~/assets/images/line-3@1x.png"/>
          <div class="flex-row">
            <div class="menu">
              <nuxt-link to="/format-hubungi-kami"
              >
                <div class="hubungi-kami poppins-normal-white-14px">Hubungi Kami</div>
              </nuxt-link>
              <div class="faq poppins-normal-white-14px">FAQ</div>
            </div>
            <div class="bahasa">
            </div>
            <div class="bahasa sosmed">
              <img class="social-media" src="~/assets/images/social-media@2x.png"/>
              <div class="social-media-1"><img class="exclude" src="~/assets/images/exclude@2x.png"/></div>
              <img class="social-media" src="~/assets/images/social-media-1@2x.png"/>
              <div class="social-media-1"><img class="exclude-1" src="~/assets/images/exclude-1@2x.png"/></div>
            </div>
            
          </div>
        </div>
        <div class="navbar">
          <div class="logo">
            <div class="logo-1">
              <div class="overlap-group-2">
                <img class="vector" src="~/assets/images/vector@2x.png"/>
                <img class="vector-1" src="~/assets/images/vector-1@2x.png"/>
                <img class="vector-2" src="~/assets/images/vector-2@2x.png"/>
                <div class="container"></div>
              </div>
            </div>
            <div class="title valign-text-middle opensans-bold-congress-blue-32px">BADAN</div>
            <div class="title-1 valign-text-middle opensans-bold-green-haze-32px">POM</div>
          </div>
          <button class="btn-menu-navbar-toggle" @click="toggleNavMenu">Menu</button>
          <div class="overlap-group2" v-bind:class="{'show' : showNavMenu}">
            <div class="navlink-1">
              <div class="nav-header">
                <h2>Menu</h2>
                <button class="btn-close-nav" @click="toggleNavMenu">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </button>
              </div>
              <div class="overlap-group1">
                <div class="frame-193 nav-menus">
                  <nuxt-link to="/">
                    <div class="text-link-1">
                      <div class="label-2 heading-6">Home</div>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="/format-profile">
                    <div class="text-link-1">
                      <div class="label-2 heading-6">Profil</div>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="/format-berita">
                    <div class="text-link-1">
                      <div class="label-2 heading-6">Berita</div>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="/format-layanan-publik">
                    <div class="text-link-1">
                      <div class="label-2 heading-6">Layanan Publik</div>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="/format-daftar-produk">
                    <div class="text-link-1">
                      <div class="label-2 heading-6">Daftar Produk</div>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="/format-informasi-publik">
                    <div class="text-link-1">
                      <div class="label-2 heading-6">Informasi Publik</div>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="/balai">
                    <div class="text-link-1">
                      <div class="label-2 heading-6">Balai</div>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="/format-unit-kerja">
                    <div class="text-link-1">
                      <div class="label-2 heading-6">Unit Kerja BPOM</div>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="/format-laporan">
                    <div class="text-link-1">
                      <div class="label-2 heading-6">Laporan</div>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="/format-transform-perkembangan">
                    <div class="text-link-1">
                      <div class="label-2 heading-6">Transformasi Kelembagaan</div>
                    </div>
                  </nuxt-link>
                  <nuxt-link to="/format-sisfo-internal">
                    <div class="text-link-1">
                      <div class="label-2 heading-6">SISFO Internal</div>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <Nuxt></Nuxt>
      </div>

      <div class="footer">
        <div class="container">
          <div class="overlap-group3">
            <div class="polling">
              <div class="flex-row-3">
                <div class="flex-col-2">
                  <div class="heading-13">
                    <div class="overlap-group-7">
                      <img class="border-bottom-11" src="~/assets/images/border-bottom-8@1x.png"/>
                      <div class="heading">
                        <p class="heading-14 inter-semi-bold-congress-blue-16px">BERI KAMI SARAN DAN MASUKAN</p>
                        <img class="border-bottom-12" src="~/assets/images/border-bottom-9@2x.png"/>
                      </div>
                    </div>
                  </div>
                  <div class="form">
                    <div class="input">
                      <p class="masukan-anda-terhadap-website-bpom poppins-normal-manatee-14px">
                        Masukan Anda Terhadap Website Bpom
                      </p>
                    </div>
                    <div class="button-2">
                      <div class="kirim poppins-semi-bold-white-14px">Kirim</div>
                    </div>
                  </div>
                </div>
                <div class="flex-col-3">
                  <div class="heading-15">
                    <div class="overlap-group1-3">
                      <img class="border-bottom-13" src="~/assets/images/border-bottom-10@1x.png"/>
                      <div class="heading">
                        <p class="heading-16 inter-semi-bold-congress-blue-16px">PENDAPAT ANDA TENTANG WEBSITE BPOM</p>
                        <img class="border-bottom-14" src="~/assets/images/border-bottom-11@2x.png"/>
                      </div>
                    </div>
                  </div>
                  <div class="x1-bintang">
                    <div class="beri-kami-rating valign-text-middle poppins-medium-mirage-14px">Beri Kami Rating</div>
                    <div>
                      <img class="star" src="~/assets/images/star-26@2x.png"/>
                      <img class="star" src="~/assets/images/star-26@2x.png"/>
                      <img class="star" src="~/assets/images/star-26@2x.png"/>
                      <img class="star" src="~/assets/images/star-26@2x.png"/>
                      <img class="star" src="~/assets/images/star-26@2x.png"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-gorup-menu" id="footer-contact-information">
              <div class="alamat-4">
                <div class="footer-category">
                  <div class="overlap-group-1">
                    <img class="border-bottom-1" src="~/assets/images/border-bottom@2x.png"/>
                    <div class="heading-2">
                      <div class="alamat">
                        <div class="alamat-5 valign-text-middle poppins-semi-bold-manatee-16px">ALAMAT</div>
                        <img class="border-bottom-2" src="~/assets/images/border-bottom-1@2x.png"/>
                      </div>
                      <img class="map-pin" src="~/assets/images/map-pin@2x.png"/>
                    </div>
                  </div>
                </div>
                <p class="jalan-percetakan-neg poppins-normal-white-14px">
                  Jalan Percetakan Negara Nomor 23<br/>Jakarta - 10560 - Indonesia
                </p>
              </div>
              <div class="nomor-telpon">
                <div class="footer-category">
                  <div class="overlap-group-1">
                    <img class="border-bottom-1" src="~/assets/images/border-bottom@2x.png"/>
                    <div class="heading-2">
                      <div class="alamat">
                        <div class="alamat-1 valign-text-middle poppins-semi-bold-manatee-16px">NOMOR TELPON</div>
                        <img class="border-bottom-2" src="~/assets/images/border-bottom-1@2x.png"/>
                      </div>
                      <img class="phone" src="~/assets/images/phone@2x.png"/>
                    </div>
                  </div>
                </div>
                <div class="list-kontak poppins-normal-white-14px">
                  <p class="text-2">+6221 4244691 / 42883309 / 42883462</p>
                  <div class="list-kontak-item">+6221 4263333</div>
                  <p class="list-kontak-item">+6281 21 9999 533 (SMS)</p>
                  <div class="list-kontak-item">halobpom@pom.go.id</div>
                  <div class="pengaduanyanblikpomgoid">pengaduanyanblik@pom.go.id</div>
                </div>
              </div>
              <div class="email">
                <div class="footer-category">
                  <div class="overlap-group-1">
                    <img class="border-bottom-1" src="~/assets/images/border-bottom@2x.png"/>
                    <div class="heading-2">
                      <div class="alamat">
                        <div class="alamat-2 valign-text-middle poppins-semi-bold-manatee-16px">EMAIL</div>
                        <img class="border-bottom-2" src="~/assets/images/border-bottom-1@2x.png"/>
                      </div>
                      <div class="mail"><img class="union" src="~/assets/images/union@2x.png"/></div>
                    </div>
                  </div>
                </div>
                <div class="list-kontak-1 poppins-normal-white-14px">
                  <div class="halobpompomgoid">halobpom@pom.go.id</div>
                  <div class="pengaduanyanblikpomgoid">pengaduanyanblik@pom.go.id</div>
                </div>
              </div>
              <div class="hasil-poling">
                <div class="footer-category">
                  <div class="overlap-group-1">
                    <img class="border-bottom-1" src="~/assets/images/border-bottom@2x.png"/>
                    <div class="heading-2">
                      <div class="alamat">
                        <div class="alamat-3 valign-text-middle poppins-semi-bold-manatee-16px">HASIL POLLING</div>
                        <img class="border-bottom-2" src="~/assets/images/border-bottom-1@2x.png"/>
                      </div>
                      <img class="star-1" src="~/assets/images/star-25@2x.png"/>
                    </div>
                  </div>
                </div>
                <div class="frame-58">
                  <div class="x-bintang">
                    <img class="star-2" src="~/assets/images/star@2x.png"/>
                    <img class="star-3" src="~/assets/images/star@2x.png"/>
                    <img class="star-4" src="~/assets/images/star@2x.png"/>
                    <img class="star-5" src="~/assets/images/star@2x.png"/>
                    <img class="star-6" src="~/assets/images/star@2x.png"/>
                    <div class="percent valign-text-middle poppins-medium-white-14px">36.5%</div>
                  </div>
                  <div class="x-bintang">
                    <img class="star-7" src="~/assets/images/star@2x.png"/>
                    <img class="star-8" src="~/assets/images/star@2x.png"/>
                    <img class="star-9" src="~/assets/images/star@2x.png"/>
                    <img class="star-10" src="~/assets/images/star@2x.png"/>
                    <img class="star-11" src="~/assets/images/star-9@2x.png"/>
                    <div class="percent valign-text-middle poppins-medium-white-14px">31.49%</div>
                  </div>
                  <div class="x-bintang">
                    <img class="star-12" src="~/assets/images/star@2x.png"/>
                    <img class="star-13" src="~/assets/images/star@2x.png"/>
                    <img class="star-14" src="~/assets/images/star@2x.png"/>
                    <img class="star-15" src="~/assets/images/star-9@2x.png"/>
                    <img class="star-16" src="~/assets/images/star-9@2x.png"/>
                    <div class="percent valign-text-middle poppins-medium-white-14px">8.74%</div>
                  </div>
                  <div class="x-bintang">
                    <img class="star-17" src="~/assets/images/star@2x.png"/>
                    <img class="star-18" src="~/assets/images/star@2x.png"/>
                    <img class="star-19" src="~/assets/images/star-9@2x.png"/>
                    <img class="star-20" src="~/assets/images/star-9@2x.png"/>
                    <img class="star-21" src="~/assets/images/star-9@2x.png"/>
                    <div class="percent valign-text-middle poppins-medium-white-14px">6.3%</div>
                  </div>
                  <div class="x-bintang">
                    <img class="star-22" src="~/assets/images/star@2x.png"/>
                    <img class="star-23" src="~/assets/images/star-9@2x.png"/>
                    <img class="star-24" src="~/assets/images/star-9@2x.png"/>
                    <img class="star-25" src="~/assets/images/star-9@2x.png"/>
                    <img class="star-26" src="~/assets/images/star-9@2x.png"/>
                    <div class="percent valign-text-middle poppins-medium-white-14px">17.19%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p class="x2021-badan-penga valign-text-middle poppins-normal-manatee-12px">
            © 2022 - BADAN PENGAWAS OBAT DAN MAKANAN REPUBLIK INDONESIA
          </p>
        </div>
      </div>
    </div>
    <AccessibilityMenu />
  </div>
</template>


<script>

</script>
<script>
import AccessibilityMenu from '@/components/AccessibilityMenu';

export default {
  name: "default",
  data: function(){
    return {
      showNavMenu: false
    }
  },
  components: {
    AccessibilityMenu,
  },
  methods: {
    toggleNavMenu: function(){
      this.showNavMenu = !this.showNavMenu
    }
  }
}
</script>

<style scoped>

</style>
