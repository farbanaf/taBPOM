<template>
  <div style="margin: 0; background: #ffffff">
    <input type="hidden" id="anPageName" name="page" value="style-home-1"/>
    <div class="container-center-horizontal">
      <div class="style-home-1 screen">
        <div class="vue-slick-container">
          <VueSlickCarousel
            v-if="banners.length"
            v-bind="slickOptions"
            class="home-banner mb-2"
            :class="{ '--swiping' : swiping === true }"
            @swipe="setCarouselSwiping(true)"
            @mousedown.native="setCarouselSwiping(false)"
            @mouseup.native="setCarouselSwiping(false)"
            @touchend.native="setCarouselSwiping(false)"
          >
            <template #default>
              <div
                v-for="(item, index) in banners"
                :key="`slide-1-${index}`"
              >
                <img
                  src="~/assets/images/screen-shot-2021-01-14-at-22-44-1@1x.png"
                  alt="Icon"
                />

                <div class="caption">
                  The 25th Expert Circle Meeting on Human Blood, Tissues, Cells and ATMPs
                </div>
              </div>
            </template>
          </VueSlickCarousel>
        </div>

        <div class="berita-aktual">
          <div class="heading-3">
            <div class="overlap-group-4">
              <img class="border-bottom-3" src="~/assets/images/border-bottom-14@1x.png"/>
              <div class="heading">
                <div class="heading-4 inter-semi-bold-congress-blue-16px">HOT ISSUE</div>
                <img class="border-bottom-4" src="~/assets/images/border-bottom-15@2x.png"/>
              </div>
            </div>
          </div>
          <div class="card-columns-container-1">
            <div class="card-3-columns">
              <img class="gambar" src="~/assets/images/gambar-6@2x.png"/>
              <div class="frame-143">
                <p class="badan-pom-tanggap-covid-2019 opensans-bold-mirage-16px" label="Badan POM tanggap covid 2019">Badan POM tanggap covid 2019</p>
              </div>
              <div class="date-and-time caption">
                <div class="address valign-text-middle">16 Jan 2021</div>
                <div class="x00-wib valign-text-middle">17:00 WIB</div>
              </div>
            </div>
            <div class="card-3-columns">
              <img class="gambar" src="~/assets/images/gambar-7@2x.png"/>
              <div class="frame-143">
                <div class="badan-pom-tanggap-covid-2019 opensans-bold-mirage-16px">
                  Strategi Nasional Perlindungan Konsumen
                </div>
              </div>
              <div class="date-and-time caption">
                <div class="address valign-text-middle">16 Jan 2021</div>
                <div class="x00-wib valign-text-middle">17:00 WIB</div>
              </div>
            </div>
            <div class="card-3-columns">
              <img class="gambar" src="~/assets/images/gambar-8@2x.png"/>
              <div class="frame-143">
                <p class="badan-pom-tanggap-covid-2019 opensans-bold-mirage-16px">
                  DAK Nonfisik Bidang Kesehatan Subbidang...
                </p>
              </div>
              <div class="date-and-time caption">
                <div class="address valign-text-middle">16 Jan 2021</div>
                <div class="x00-wib valign-text-middle">17:00 WIB</div>
              </div>
            </div>
            <div class="card-3-columns">
              <img class="gambar" src="~/assets/images/gambar-9@2x.png"/>
              <div class="frame-143">
                <p class="badan-pom-tanggap-covid-2019 opensans-bold-mirage-16px">
                  Badan POM Canangkan “Ayo Buang Sampah...
                </p>
              </div>
              <div class="date-and-time caption">
                <div class="address valign-text-middle">16 Jan 2021</div>
                <div class="x00-wib valign-text-middle">17:00 WIB</div>
              </div>
            </div>
          </div>
        </div>
        <div class="divider-category">
          <div class="overlap-group5">
            <img class="border-1" src="~/assets/images/border-1@1x.png"/>
            <div class="button">
              <div class="divider-category-1">Lihat Semua Hot Issue</div>
            </div>
          </div>
        </div>
        <div class="flex-row-1">
          <div class="siaran-pers">
            <div class="heading-5">
              <div class="overlap-group-5">
                <img class="border-bottom-5" src="~/assets/images/border-bottom-12@1x.png"/>
                <div class="heading">
                  <p class="heading-6 inter-semi-bold-congress-blue-16px">SIARAN PERS / PERINGATAN PUBLIK</p>
                  <img class="border-bottom-6" src="~/assets/images/border-bottom-13@2x.png"/>
                </div>
              </div>
            </div>
            <div class="card-berita">
              <div class="flex-col">
                <div class="frame-2">
                  <div class="ultrices-lacus-morb inter-semi-bold-mirage-20px">
                    Penerbitan Persetujuan Penggunaan Dalam Kondisi Darurat Atau Emergency Use Authorization (EUA)
                    Pertama Untuk Vaksin
                  </div>
                  <p class="lorem-ipsum-dolor-si mulish-semi-bold-bright-gray-14px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus eget sagittis eu, vulputate nulla.
                    Gravida turpis sem nisi in nibh dan next...
                  </p>
                </div>
                <div class="waktu caption">
                  <div class="address-1">27 November 2020</div>
                  <div class="x00-wib">18:00 WIB</div>
                </div>
              </div>
              <img class="gambar-1" src="~/assets/images/gambar@2x.png"/>
            </div>
            <div class="card-berita-1">
              <div class="flex-col">
                <div class="frame-2">
                  <div class="ultrices-lacus-morb inter-semi-bold-mirage-20px">
                    Badan POM Pastikan Terus Kawal Keamanan dan Mutu Vaksin COVID-19 Sebelum dan Selama Peredaran
                  </div>
                  <p class="lorem-ipsum-dolor-si mulish-semi-bold-bright-gray-14px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus eget sagittis eu, vulputate nulla.
                    Gravida turpis sem nisi in nibh dan next...
                  </p>
                </div>
                <div class="waktu caption">
                  <div class="address-1">27 November 2020</div>
                  <div class="x00-wib">18:00 WIB</div>
                </div>
              </div>
              <img class="gambar-1" src="~/assets/images/gambar-2@2x.png"/>
            </div>
            <div class="card-berita-1">
              <div class="flex-col">
                <div class="frame-2">
                  <div class="ultrices-lacus-morb inter-semi-bold-mirage-20px">
                    Badan POM Serahkan Sertifikat Cara Pembuatan Obat yang Baik untuk Sarana Produksi Vaksin COVID-19 di
                    Bio Farma
                  </div>
                  <p class="lorem-ipsum-dolor-si mulish-semi-bold-bright-gray-14px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus eget sagittis eu, vulputate nulla.
                    Gravida turpis sem nisi in nibh dan next...
                  </p>
                </div>
                <div class="waktu caption">
                  <div class="address-1">27 November 2020</div>
                  <div class="x00-wib">18:00 WIB</div>
                </div>
              </div>
              <img class="gambar-1" src="~/assets/images/gambar-1@2x.png"/>
            </div>
            <div class="card-berita-1">
              <div class="flex-col">
                <div class="frame-2">
                  <div class="ultrices-lacus-morb inter-semi-bold-mirage-20px">
                    Intensifikasi Pengawasan Pangan Jelang Natal Tahun 2020 dan Tahun Baru 2021
                  </div>
                  <p class="lorem-ipsum-dolor-si mulish-semi-bold-bright-gray-14px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus eget sagittis eu, vulputate nulla.
                    Gravida turpis sem nisi in nibh dan next...
                  </p>
                </div>
                <div class="waktu caption">
                  <div class="address-1">27 November 2020</div>
                  <div class="x00-wib">18:00 WIB</div>
                </div>
              </div>
              <img class="gambar-1" src="~/assets/images/gambar-3@2x.png"/>
            </div>
            <div class="card-berita">
              <div class="flex-col">
                <div class="frame-2">
                  <div class="ultrices-lacus-morb inter-semi-bold-mirage-20px">
                    Intensifikasi Pengawasan Pangan Jelang Natal Tahun 2020 dan Tahun Baru 2021
                  </div>
                  <p class="lorem-ipsum-dolor-si mulish-semi-bold-bright-gray-14px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus eget sagittis eu, vulputate nulla.
                    Gravida turpis sem nisi in nibh dan next...
                  </p>
                </div>
                <div class="waktu caption">
                  <div class="address-1">27 November 2020</div>
                  <div class="x00-wib">18:00 WIB</div>
                </div>
              </div>
              <img class="gambar-1" src="~/assets/images/gambar-4@2x.png"/>
            </div>
            <div class="card-berita">
              <div class="flex-col">
                <div class="frame-2">
                  <div class="ultrices-lacus-morb inter-semi-bold-mirage-20px">
                    Intensifikasi Pengawasan Pangan Jelang Natal Tahun 2020 dan Tahun Baru 2021
                  </div>
                  <p class="lorem-ipsum-dolor-si mulish-semi-bold-bright-gray-14px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus eget sagittis eu, vulputate nulla.
                    Gravida turpis sem nisi in nibh dan next...
                  </p>
                </div>
                <div class="waktu caption">
                  <div class="address-1">27 November 2020</div>
                  <div class="x00-wib">18:00 WIB</div>
                </div>
              </div>
              <img class="gambar-1" src="~/assets/images/gambar-5@2x.png"/>
            </div>
            <div class="divider-category-2">
              <div class="overlap-group1-1">
                <img class="border-2" src="~/assets/images/border@1x.png"/>
                <div class="button-1">
                  <p class="divider-category-3">Lihat Semua Peringatan Publik / Siaran Pers</p>
                </div>
              </div>
            </div>
          </div>
          <div class="sidebar">
            <div class="heading-7">
              <div class="overlap-group">
                <img class="border-bottom" src="~/assets/images/border-bottom-16@2x.png"/>
                <div class="heading">
                  <div class="heading-8 inter-semi-bold-congress-blue-16px">PROFIL ESELON 1</div>
                  <img class="border-bottom-7" src="~/assets/images/border-bottom-17@2x.png"/>
                </div>
              </div>
            </div>
            <div class="list-profil-eselon">
              <div class="profil-eselon">
                <div class="nama-dan-jabatan">
                  <p class="nama poppins-medium-black-14px">Dr. Ir. Penny K. Lukito, MCP</p>
                  <div class="jabatan poppins-normal-black-10px">KEPALA BADAN POM</div>
                </div>
                <div class="frame-photo">
                  <div class="frame-photo-1"></div>
                </div>
              </div>
              <div class="profil-eselon">
                <div class="nama-dan-jabatan">
                  <p class="nama-1 poppins-medium-black-14px">Dra. Rr.Maya Gustina Andarini, Apt., M.Sc.</p>
                  <div class="jabatan poppins-normal-black-10px">INSPEKTUR UTAMA BADAN POM</div>
                </div>
                <div class="frame-photo-2">
                  <div class="place-image"></div>
                </div>
              </div>
              <div class="profil-eselon">
                <div class="nama-dan-jabatan">
                  <p class="nama-2 poppins-medi`um-black-14px">Dra. Elin Herlina, Apt, MP</p>
                  <div class="jabatan poppins-normal-black-10px">SEKRETARIS UTAMA BADAN POM</div>
                </div>
                <div class="frame-photo">
                  <div class="frame-photo-3"></div>
                </div>
              </div>
            </div>
            <div class="maklumat-pelayanan">
              <div class="overlap-group1-2">
                <div class="heading-9">
                  <div class="overlap-group">
                    <img class="border-bottom" src="~/assets/images/border-bottom-16@2x.png"/>
                    <div class="heading">
                      <div class="heading-10 inter-semi-bold-congress-blue-16px">MAKLUMAT PELAYANAN</div>
                      <img class="border-bottom-8" src="~/assets/images/border-bottom-19@2x.png"/>
                    </div>
                  </div>
                </div>
                <div class="maklumat-pelayanan-dokumen">
                  <img class="maklumat-2018-2" src="~/assets/images/maklumat-2018-2@2x.png"/>
                  <div class="expand"><img class="maximize-2" src="~/assets/images/maximize-2@2x.png"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hot-issue">
          <div class="heading-11">
            <div class="overlap-group-6">
              <img class="border-bottom-9" src="~/assets/images/border-bottom-20@1x.png"/>
              <div class="heading">
                <div class="heading-12 inter-semi-bold-congress-blue-16px">BERITA AKTUAL</div>
                <img class="border-bottom-10" src="~/assets/images/border-bottom-21@2x.png"/>
              </div>
            </div>
          </div>
          <div class="flex-row-2">
            <div class="image">
              <img class="rectangle-90" src="~/assets/images/rectangle-90@1x.png"/>
              <div class="intensifikasi-pengaw heading-5">Badan POM tanggap COVID-19</div>
              <div class="date-and-time-1 caption">
                <div class="address valign-text-middle">16 Jan 2021</div>
                <div class="x00-wib valign-text-middle">17:00 WIB</div>
              </div>
            </div>
            <div class="card-columns-container">
              <div class="card-3-columns">
                <img class="gambar" src="~/assets/images/gambar-12@2x.png"/>
                <div class="frame-143">
                  <p class="badan-pom-tanggap-covid-2019 opensans-normal-mirage-16px">
                    DAK Nonfisik Bidang Kesehatan Subbidang Pengawasan Obat...
                  </p>
                </div>
                <div class="date-and-time caption">
                  <div class="address valign-text-middle">16 Jan 2021</div>
                  <div class="x00-wib valign-text-middle">17:00 WIB</div>
                </div>
              </div>
              <div class="card-3-columns">
                <img class="gambar" src="~/assets/images/gambar-11@2x.png"/>
                <div class="frame-143">
                  <div class="badan-pom-tanggap-covid-2019 opensans-normal-mirage-16px">
                    Mengatasi Isu Keamanan Ranitidine
                  </div>
                </div>
                <div class="date-and-time caption">
                  <div class="address valign-text-middle">16 Jan 2021</div>
                  <div class="x00-wib valign-text-middle">17:00 WIB</div>
                </div>
              </div>
            </div>
            <div class="card-columns-container">
              <div class="card-3-columns">
                <img class="gambar" src="~/assets/images/gambar-13@2x.png"/>
                <div class="frame-143">
                  <p class="badan-pom-tanggap-covid-2019 opensans-normal-mirage-16px">
                    Badan POM Canangkan “Ayo Buang Sampah Obat-Gerakan...
                  </p>
                </div>
                <div class="date-and-time caption">
                  <div class="address valign-text-middle">16 Jan 2021</div>
                  <div class="x00-wib valign-text-middle">17:00 WIB</div>
                </div>
              </div>
              <div class="card-3-columns">
                <img class="gambar" src="~/assets/images/gambar-10@2x.png"/>
                <div class="frame-143">
                  <div class="badan-pom-tanggap-covid-2019 opensans-normal-mirage-16px">
                    Strategi Nasional Perlindungan Konsumen
                  </div>
                </div>
                <div class="date-and-time caption">
                  <div class="address valign-text-middle">16 Jan 2021</div>
                  <div class="x00-wib valign-text-middle">17:00 WIB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="group-81">
          <img class="line-3" src="~/assets/images/line-3@1x.png"/>
          <div class="frame-172">
            <div class="frame-17">
              <div class="pengumuman">
                <div class="flex-col-1">
                  <div class="label valign-text-middle opensans-normal-congress-blue-14px">Pengumuman</div>
                  <div class="pegumuman">
                    <p class="heading-1 opensans-bold-mirage-16px">
                      Pengumuman Perpanjangan Waktu Penerimaan Berkas Lamaran Seleksi Terbuka Kepala Biro Hukum...
                    </p>
                    <div class="waktu-1 poppins-normal-manatee-12px">
                      <div class="address-2">27 November 2021</div>
                      <div class="x1800-wib">18:00 WIB</div>
                    </div>
                  </div>
                </div>
                <div class="indicator">
                  <div class="frame-144">
                    <div class="number valign-text-middle poppins-semi-bold-gallery-24px">01</div>
                    <img class="border-left" src="~/assets/images/border-left@2x.png"/>
                  </div>
                </div>
              </div>
              <div class="pengumuman">
                <div class="flex-col-1">
                  <div class="label valign-text-middle opensans-normal-congress-blue-14px">Pengumuman</div>
                  <div class="pegumuman">
                    <p class="heading-1 opensans-bold-mirage-16px">
                      Pengumuman Hasil Seleksi Administrasi Seleksi Terbuka Kepala Biro Hukum Dan Organisasi...
                    </p>
                    <div class="waktu-1 poppins-normal-manatee-12px">
                      <div class="address-2">27 November 2021</div>
                      <div class="x1800-wib">18:00 WIB</div>
                    </div>
                  </div>
                </div>
                <div class="indicator">
                  <div class="frame-144">
                    <div class="x01 valign-text-middle poppins-semi-bold-gallery-24px">02</div>
                    <img class="border-left-1" src="~/assets/images/border-left@2x.png"/>
                  </div>
                </div>
              </div>
              <div class="pengumuman">
                <div class="flex-col-1">
                  <div class="label valign-text-middle opensans-normal-congress-blue-14px">Pengumuman</div>
                  <div class="pegumuman">
                    <p class="heading-1 opensans-bold-mirage-16px">
                      Pengumuman Seleksi Terbuka Jabatan Pimpinan Tinggi Pratama (eselon I) Badan Pom Tahun 2021
                    </p>
                    <div class="waktu-1 poppins-normal-manatee-12px">
                      <div class="address-2">27 November 2021</div>
                      <div class="x1800-wib">18:00 WIB</div>
                    </div>
                  </div>
                </div>
                <div class="indicator">
                  <div class="frame-144">
                    <div class="x01-1 valign-text-middle poppins-semi-bold-gallery-24px">03</div>
                    <img class="border-left-1" src="~/assets/images/border-left@2x.png"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-17">
              <div class="pengumuman">
                <div class="flex-col-1">
                  <div class="label valign-text-middle opensans-normal-congress-blue-14px">Pengumuman</div>
                  <div class="pegumuman">
                    <p class="heading-1 opensans-bold-mirage-16px">
                      Pengumuman Seleksi Terbuka Kepala Biro Hukum Dan Organisasi Badan Pom Tahun 2020
                    </p>
                    <div class="waktu-1 poppins-normal-manatee-12px">
                      <div class="address-2">27 November 2021</div>
                      <div class="x1800-wib">18:00 WIB</div>
                    </div>
                  </div>
                </div>
                <div class="indicator">
                  <div class="frame-144">
                    <div class="x01-2 valign-text-middle poppins-semi-bold-gallery-24px">04</div>
                    <img class="border-left" src="~/assets/images/border-left@2x.png"/>
                  </div>
                </div>
              </div>
              <div class="pengumuman">
                <div class="flex-col-1">
                  <div class="label valign-text-middle opensans-normal-congress-blue-14px">Klarifikasi BPOM</div>
                  <div class="pegumuman">
                    <p class="heading-1 opensans-bold-mirage-16px">
                      Pengumuman Pembatalan Selter Direktur Intelijen Obat Dan Makanan
                    </p>
                    <div class="waktu-1 poppins-normal-manatee-12px">
                      <div class="address-2">27 November 2021</div>
                      <div class="x1800-wib">18:00 WIB</div>
                    </div>
                  </div>
                </div>
                <div class="indicator">
                  <div class="frame-144">
                    <div class="x01-3 valign-text-middle poppins-semi-bold-gallery-24px">05</div>
                    <img class="border-left-1" src="~/assets/images/border-left@2x.png"/>
                  </div>
                </div>
              </div>
              <div class="pengumuman">
                <div class="flex-col-1">
                  <div class="label valign-text-middle opensans-normal-congress-blue-14px">Pengumuman</div>
                  <div class="pegumuman">
                    <p class="heading-1 opensans-bold-mirage-16px">
                      Pengumuman Hasil Akhir Seleksi Terbuka Jabatan Pimpinan Tinggi Pratama Calon Direktur Siber
                      Obat...
                    </p>
                    <div class="waktu-1 poppins-normal-manatee-12px">
                      <div class="address-2">27 November 2021</div>
                      <div class="x1800-wib">18:00 WIB</div>
                    </div>
                  </div>
                </div>
                <div class="indicator">
                  <div class="frame-144">
                    <div class="x01-4 valign-text-middle poppins-semi-bold-gallery-24px">06</div>
                    <img class="border-left-1" src="~/assets/images/border-left@2x.png"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img class="line-4" src="~/assets/images/line-3@1x.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'fade',
  data() {
    return {
      swiping: false,
      banners: ['', '', '', '', ''],
      slickOptions: {
        arrows: true,
        dots: true,
        centerMode: false,
        infinite: true,
        swipeToSlide: true,
        waitForAnimate: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 20,
        edgeFriction: 0.1,
      },
    }
  },
  methods: {
    setCarouselSwiping(state) {
      this.swiping = state
    },
  },
}
</script>
