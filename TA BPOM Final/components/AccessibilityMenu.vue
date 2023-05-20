<template>
<div class="accessibility-content">
  <button @click="toggleMenu" class="accessibility-menu-btn">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63"><defs></defs><title>Asset 10</title><circle fill="#fff"  cx="31.49" cy="16.08" r="5.5" transform="translate(-2.14 26.98) rotate(-45)"/><path fill="#fff"  d="M47.62,22.28a88.73,88.73,0,0,1-32.25,0,1.63,1.63,0,0,0-1.92,1.32,1.64,1.64,0,0,0,1.32,1.92,92,92,0,0,0,10.92,1.34,2.62,2.62,0,0,1,2.42,2.93l-.32,2.75a54.14,54.14,0,0,1-3,12.67l-2,5.35a1.65,1.65,0,0,0,3.09,1.16v0l.49-1c1.6-3.41,3.09-6.9,4.45-10.43a.74.74,0,0,1,1.38,0c1.36,3.53,2.85,7,4.45,10.44l.51,1.09h0a1.64,1.64,0,0,0,1.48,1,1.6,1.6,0,0,0,.57-.11,1.64,1.64,0,0,0,1-2.12l-2-5.35a54.67,54.67,0,0,1-3-12.67l-.31-2.77a2.61,2.61,0,0,1,2.42-2.91,92.51,92.51,0,0,0,10.83-1.32,1.73,1.73,0,0,0,1.44-1.67A1.65,1.65,0,0,0,47.62,22.28Z"/><path style="opacity:0.85;" d="M31.5,0A31.5,31.5,0,1,0,63,31.5,31.53,31.53,0,0,0,31.5,0Zm0,60A28.5,28.5,0,1,1,60,31.5,28.54,28.54,0,0,1,31.5,60Z"/></svg>
  </button>
  <div class="accessibility-menu" v-bind:class="{'show': menuShow}">
    <div class="accessibility-menu-header">
      <h5>Accessibility Menu</h5>
      <span class="accessibility-menu-close-btn" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
      </span>
    </div>
    <div class="accessibility-menu-feature">
      <div class="menu-feature-list">
        <div class="menu-feature-item" v-bind:class="{'active': smartContrast}" @click="toggleSmartContrast">
          <div class="feature-item-check">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
          </div>
          <i class="icon smart-contrast"></i>
          <span class="feature-item-title">
            Smart Contrast
          </span>
        </div>
        <div class="menu-feature-item" v-bind:class="{'active': biggerText}" @click="toggleBiggerText">
          <div class="feature-item-check">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
          </div>
          <i class="icon font-size"></i>
          <span class="feature-item-title">
            Bigger Text
          </span>
          <div class="feature-step">
            <div class="step-item" v-bind:class="{'active': (biggerTextSize == 'md' || biggerTextSize == 'lg' || biggerTextSize == 'xl' || biggerTextSize == 'xxl')}">
              <div class="step-bg"></div>
            </div>
            <div class="step-item" v-bind:class="{'active': (biggerTextSize == 'lg' || biggerTextSize == 'xl'  || biggerTextSize == 'xxl')}">
              <div class="step-bg"></div>
            </div>
            <div class="step-item" v-bind:class="{'active': (biggerTextSize == 'xl' || biggerTextSize == 'xxl')}">
              <div class="step-bg"></div>
            </div>
            <div class="step-item" v-bind:class="{'active': (biggerTextSize == 'xxl')}">
              <div class="step-bg"></div>
            </div>
          </div>
        </div>
        <div class="menu-feature-item" v-bind:class="{'active': animation}" @click="toggleAnimation">
          <div class="feature-item-check">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
          </div>
          <i class="icon" v-bind:class="{'play-animation': animation,'pause-animation': !animation}"></i>
          <span class="feature-item-title">
            {{ animation? "Play Animation" : "Pause Animation" }}
          </span>
        </div>
        <div class="menu-feature-item" v-bind:class="{'active': dyslexia}" @click="toggleDyslexia">
          <div class="feature-item-check">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
          </div>
          <i class="icon dyslexia-friendly"></i>
          <span class="feature-item-title">
            Dyslexia Friendly
          </span>
        </div>
        <div class="menu-feature-item" v-bind:class="{'active': bigCursor}" @click="toggleBigCursor">
          <div class="feature-item-check">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
          </div>
          <i class="icon big-cursor"></i>
          <span class="feature-item-title">
            Big Cursor
          </span>
        </div>
        <div class="menu-feature-item" v-bind:class="{'active': tooltips}" @click="toggleTooltip">
          <div class="feature-item-check">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
          </div>
          <i class="icon tooltip"></i>
          <span class="feature-item-title">
            Tooltips
          </span>
        </div>
      </div>
      <div class="btn-feature-list">
        <button class="btn-feature-item" v-bind:class="{'active': (featureActive == 1? true : false)}" @click="toggleFeatureCognitive"><div class="item-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="100%" height="100%"><path fill="currentColor" fill-rule="evenodd" d="M3.4305674 2.28495811c0-.29900421-.0035071-.5816392.0006908-.86416789.0100965-.6746462.4400452-1.21600009 1.0909996-1.37910779.8740855-.2190182 1.7499778.45334269 1.7616153 1.35434135.0037729.29124478.0005845.58259585.0005845.88893433h.1520311c.6906493 0 1.3812986-.00031888 2.0719479.00015944.3570418.00021259.6691279.10900421.91208.38255108.1933733.21779582.2903522.47321957.2909368.76340147.0015941.7084476.0005313 1.4168952.0005313 2.1252896v.1565707c.2715941 0 .5314976-.0022853.7912949.0006378.254377.0028699.5002517.0418797.7295471.1649146.5329323.2859833.8426803.8785176.751281 1.448996-.1033024.6442993-.5548788 1.129849-1.1788385 1.2169567-.3001298.0418797-.6095589.0175916-.9148432.0229594-.0562744.0010098-.112655.0001063-.1784413.0001063v.161407c0 .6995721.0006377 1.3991442-.0002125 2.0987163-.000744.6465315-.4531174 1.1385651-1.0996612 1.159877-.5881439.0193986-1.1774569.0128615-1.766079.0028699-.3425349-.005793-.556101-.251172-.5632217-.5945007-.0040386-.1982378.0014348-.4022686-.0430958-.5930127-.1534127-.6571609-.7408127-1.1027973-1.4051581-1.0894574-.6564808.0132867-1.21763.4804476-1.3617434 1.1497791-.0368254.1711329-.0409171.3509819-.04469.5271637-.0077051.3596979-.2220153.5979553-.5828831.6018881-.6019069.006484-1.204239.0084504-1.8058802-.0078657-.51922249-.0140839-1.00156639-.4718909-1.02255635-.9932616-.0256662-.6364868-.01626057-1.2747805-.00797087-1.9120645.00334777-.2564336.23147406-.4753455.48739212-.4978266.16287144-.0143496.32717763-.0114266.49047418-.0220559.61556372-.0402854 1.12729352-.495063 1.26736832-1.1232589.1313599-.5889203-.1487896-1.2059553-.6753453-1.5050127-.2987482-.1696979-.61923025-.2269902-.95714199-.2183804-.23540635.0060056-.42771687-.0807301-.54106264-.2924671-.04410548-.0823777-.073332-.1834098-.07434164-.2763637-.00653612-.5755273-.00919307-1.1512672-.00138162-1.7267414.00903365-.65971191.50338699-1.12788258 1.18728759-1.13123083.6906493-.00334825 1.3812455-.00074406 2.0718948-.00074406h.1665911Z"></path></svg></div> Cognitive & Learning</button>
        <button class="btn-feature-item" v-bind:class="{'active': (featureActive == 2? true : false)}" @click="toggleFeatureDyslexia"><div class="item-icon"><svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 31 22"><path fill="currentColor" fill-rule="evenodd" d="M.5 22V1.0083333h7.24219c6.805161 0 11.612477 4.3388889 11.612477 10.4805556C19.354667 17.6305556 14.547351 22 7.74219 22H.5Zm2.434874-4.31H7.74219c5.36921 0 9.146386-2.8616703 9.146386-7.27 0-4.3807776-3.777176-7.2422222-9.146386-7.2422222H2.934874V17.69ZM26.273591 4.0333333l.011461 2.1694445h4.012619V8.25h-4.001719L26.77 22h-3.535416L23.78 8.25h-2.423834V6.2027778h2.55923l.075108-2.1694445C24.070691 1.6805556 25.600749 0 27.697782 0c.99184 0 1.979905.3666667 2.802218 1.0083333l-.962729 1.6805556c-.347978-.3666667-.951599-.6416667-1.627768-.6416667-.881959 0-1.642008.825-1.635912 1.9861111Z"/></svg></div> Dyslexia Friendly</button>
      </div>
    </div>
  </div>
</div>
</template>
<style>

/* mode */

.big-cursor-mode * {
  cursor: url(https://cdn.userway.org/widgetapp/images/arrow_w.svg),auto!important;
}

.dyslexia-friendly-mode * {
  font-family: 'Open-Dyslexic', sans-serif !important;
}

.bigger-text-md-mode #content-wrapper {
  zoom: 1.2 !important;
}

.bigger-text-lg-mode #content-wrapper {
  zoom: 1.3 !important;
}

.bigger-text-xl-mode #content-wrapper {
  zoom: 1.5 !important;
}

.bigger-text-xxl-mode #content-wrapper {
  zoom: 1.6 !important;
}

.pause-animation-mode * {
  transition-timing-function: step-end!important;
  transition-duration: 0s!important;
  animation-timing-function: step-end!important;
  animation-iteration-count: 1!important;
  animation-duration: 0s!important;
}

.smart-contrast {
  --brandgreen: #008c46 !important;
}

.tooltip-mode [label] {
  position: relative;
}

.tooltip-mode [label]:hover::after {
  content: attr(label);
  display: block;
  position: absolute;
  top: 70%;
  right: -100px;
  padding: 0.5rem 1rem;
  background: #1c4485;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  border: 3px solid #709adf;
  transition: all .3s linear;
  animation: fadeIn .5s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
/*  */

.accessibility-content * {
  font-family: "Inter", Helvetica !important;
}
.accessibility-menu-btn {
  display: block;
  background: #054586;
  border: 0;
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: .5rem;
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: all .3s linear;
  z-index: 1050;
}

.accessibility-menu-btn svg {
  fill: #fff;
}

.accessibility-menu-btn:hover {
  transform: scale(1.1);
}

.accessibility-menu-btn  img {
  width: 100%;
}

.accessibility-menu {
  width: 100%;
  max-width: 520px;
  height: 100%;
  position: fixed;
  top: 0;
  right: -100%;
  background: #fff;
  z-index: 1050;
  transition: all .3s linear;
  box-shadow: -4px 4px 13px 8px rgba(0,0,0,.15);
}

.accessibility-menu.show {
  right: 0;
}

.accessibility-menu-header {
  padding: 1rem;
  padding-bottom: 4rem;
  background: #054586;
  color: #fff;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.accessibility-menu-header .accessibility-menu-close-btn {
  display: block;
  width: 25px;
  height: 25px;
}

.accessibility-menu-header .accessibility-menu-close-btn svg {
  fill: #fff;
  cursor: pointer;
}

.accessibility-menu-feature {
  width: 100%;
  height: 100vh;
  border-radius: 40px 0 0 0;
  background: #EFF1F5;
  margin-top: -30px;
  padding: 2rem 1.5rem;
}

.accessibility-menu-feature .menu-feature-list {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  gap: 15px;
  padding-bottom: 15px;
}

.accessibility-menu-feature .menu-feature-list .menu-feature-item {
  position: relative;
  width: 100%;
  height: 114px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  -webkit-appearance: none;
  cursor: pointer;
  background: #fff;
  border-radius: 12px;
  border: 2px solid #fff;
  padding: 0.3125rem 0.625rem;
  transition: border-color 0.15s ease;
  font-size: 14px;
  border: 2px solid transparent;
  user-select: none;
  color: #054586;
  padding: .5rem;
}


.accessibility-menu-feature .menu-feature-list .menu-feature-item .feature-step {
  display: flex;
  width: 100%;
  margin-top: 15px;
  margin-bottom: -20px;
}

.accessibility-menu-feature .menu-feature-list .menu-feature-item .feature-step .step-item {
  width: 100%;
  padding: 0 .15625rem;
}

.accessibility-menu-feature .menu-feature-list .menu-feature-item .feature-step .step-item .step-bg {
  background: rgba(5, 69, 134,.15);
  border-radius: 10px;
  height: 3px;
  position: relative;
}

.accessibility-menu-feature .menu-feature-list .menu-feature-item .feature-step .step-item.active .step-bg {
  background: #054586;
}

.accessibility-menu-feature .menu-feature-list .menu-feature-item.active {
  border-color: #054586;
  box-shadow: 0 0 0 5px rgba(5, 69, 134,.15);
}

.accessibility-menu-feature .menu-feature-list .menu-feature-item .feature-item-check {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
  display: none;
}

.accessibility-menu-feature .menu-feature-list .menu-feature-item.active .feature-item-check {
  display: block;
}

.accessibility-menu-feature .menu-feature-list .menu-feature-item .feature-item-check svg {
  fill: #054586;
}

.accessibility-menu-feature .menu-feature-list .menu-feature-item .icon {
  background-color: #054586;
  display: inline-block;
  width: 24px;
  height: 24px;
  mask-size: cover;
  -webkit-mask-size: cover;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  margin-bottom: 15px;
  display: block;
}

.accessibility-menu-feature .menu-feature-list .menu-feature-item .icon.smart-contrast {
  width: 2rem;
  height: 1.975rem;
  -webkit-mask-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" version="1.2" viewBox="0 0 35 35"><path fill="currentColor" fill-rule="evenodd" d="M1.89998 15.6285c0-7.58203 6.14649-13.72852 13.72852-13.72852 7.5821 0 13.7286 6.14649 13.7286 13.72852 0 .6081-.0395 1.2069-.1161 1.794.5933.2913 1.1478.6497 1.6534 1.0654.1725-.9268.2627-1.8825.2627-2.8594 0-8.57615-6.9524-15.5285244-15.5286-15.5285244C7.05235.0999756.0999756 7.05235.0999756 15.6285c0 8.5762 6.9523744 15.5286 15.5285244 15.5286 1.2241 0 2.415-.1416 3.5574-.4093-.4388-.4866-.8222-1.0242-1.1402-1.6028-.7847.1394-1.5924.2121-2.4172.2121-7.58203 0-13.72852-6.1465-13.72852-13.7286Z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M2.35 15.6286C2.35 8.29502 8.29502 2.35 15.6286 2.35c7.3335 0 13.2785 5.94502 13.2785 13.2786 0 .5408-.0323 1.0741-.0951 1.5979.444.1881.8687.4128 1.2703.6703.1151-.7392.1748-1.4967.1748-2.2682C30.2571 7.54943 23.7077 1 15.6286 1 7.54943 1 1 7.54943 1 15.6286c0 8.0791 6.54943 14.6285 14.6286 14.6285 1.0033 0 1.9831-.101 2.9297-.2934-.276-.3898-.52-.8038-.7282-1.2382-.716.1195-1.4515.1816-2.2015.1816-7.33358 0-13.2786-5.945-13.2786-13.2785Z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M15.6286 1C7.54943 1 1 7.54943 1 15.6286c0 8.0791 6.54943 14.6285 14.6286 14.6285" clip-rule="evenodd"/><path stroke="currentColor" stroke-width="1.8" d="M15.6286 1C7.54943 1 1 7.54943 1 15.6286c0 8.0791 6.54943 14.6285 14.6286 14.6285"/><path fill="currentColor" fill-rule="evenodd" d="M22.8729 25.114c0-1.3811 1.0901-2.5007 2.4359-2.5007 1.3459 0 2.436 1.1196 2.436 2.5007 0 1.38-1.0901 2.4997-2.436 2.4997-1.3458 0-2.4359-1.1197-2.4359-2.4997Zm7.2258-2.0373c-.0899-.2248-.071-.4785.0512-.6875l.912-1.5598c.0898-.1532.0668-.3504-.0574-.4779l-1.0556-1.0832c-.1232-.1264-.3153-.1511-.4657-.0589l-1.5225.9374c-.201.1237-.4495.1427-.667.051-.2181-.092-.3797-.2819-.4358-.5118l-.4329-1.7763c-.0428-.1735-.1953-.2957-.3696-.2957h-1.4931c-.1744 0-.3268.1222-.3696.2957l-.433 1.7763c-.056.2299-.2177.4198-.4357.5118-.2176.0917-.466.0727-.6671-.051l-1.5225-.9374c-.1503-.0922-.3424-.0675-.4656.0589l-1.0556 1.0832c-.1243.1275-.1473.3247-.0575.4779l.9121 1.5598c.1222.209.1411.4627.0511.6875-.0895.2239-.2806.3916-.5142.4514l-1.7165.4395c-.1692.0439-.2882.2003-.2882.3803v1.5311c0 .18.119.3364.2882.3804l1.7165.4394c.2336.0599.4247.2276.5142.4515.09.2247.0711.4785-.0511.6874l-.9121 1.5599c-.0898.1532-.0668.3503.0575.4778l1.0556 1.0833c.1232.1264.3153.151.4656.0589l1.5225-.9374c.2011-.1238.4495-.1428.6671-.051.218.092.3797.2818.4357.5118l.433 1.7762c.0428.1736.1952.2968.3696.2968h1.4931c.1743 0 .3268-.1232.3696-.2968l.4329-1.7762c.0561-.23.2177-.4198.4358-.5118.2175-.0918.466-.0728.667.051l1.5225.9374c.1504.0921.3425.0675.4657-.0589l1.0556-1.0833c.1242-.1275.1472-.3246.0574-.4778l-.912-1.5599c-.1222-.2089-.1411-.4627-.0512-.6874.0896-.2239.2806-.3916.5142-.4515l1.7166-.4394c.1691-.044.2881-.2004.2881-.3804v-1.5311c0-.18-.119-.3364-.2881-.3803l-1.7166-.4395c-.2336-.0598-.4246-.2275-.5142-.4514Z" clip-rule="evenodd"/></svg>');
}

.accessibility-menu-feature .menu-feature-list .menu-feature-item .icon.font-size {
  width: 2rem;
  height: 1.28rem;
  -webkit-mask-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 30 20"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-width="1.7"><path stroke-linejoin="round" d="M22.28 18.4193548V1m-6.72 3.48387097V1H29v3.48387097"/><path d="M18.92 18.4193548h6.72"/><path stroke-linejoin="round" d="M5.48 16.0967742V4.48387097M1 6.80645161V4.48387097h8.96v2.32258064"/><path d="M3.24 16.0967742h4.48"/></g></svg>');
}

.accessibility-menu-feature .menu-feature-list .menu-feature-item .icon.play-animation {
  width: 2.125rem;
  height: 2.125rem;
  -webkit-mask-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M14 13.6845422v8.6309156c0 .5522848.4477153 1 1 1 .167319 0 .3319635-.0419834.4788521-.1221044l7.9116727-4.3154578c.4848483-.2644628.6635062-.8718994.3990434-1.3567477-.0919453-.1685665-.2304769-.3070981-.3990434-.3990435l-7.9116727-4.3154578c-.4848483-.2644627-1.0922849-.0858049-1.3567477.3990435-.080121.1468886-.1221044.3115331-.1221044.4788521Z"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.88888889" d="M18 4.77777778V1m0 34v-3.7777778M31.2222222 18H35M1 18h3.77777778m3.87278889-9.34943333L5.97873333 5.97967778M30.0204167 30.0204167l-2.6708889-2.6708889m-.0000945-18.69896113 2.6708889-2.67088889M5.97911111 30.0204167l2.67183333-2.6708889M23.0542889 5.78219444l1.4440555-3.49066666M11.5013722 33.7087556l1.4440556-3.4906667m17.2723778-7.1638 3.4906666 1.4440555M2.29124444 11.5013722l3.49066667 1.4440556m7.15274999-7.15860558L11.4877722 2.2971m13.0246445 31.4061778-1.4468889-3.4897222m7.14765-17.2788945L33.7029 11.4877722M2.29672222 24.5124167l3.48972222-1.4468889"/></g></svg>');
}
.accessibility-menu-feature .menu-feature-list .menu-feature-item .icon.pause-animation {
  width: 2.125rem;
  height: 2.125rem;
  -webkit-mask-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 37 36"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M15.8087111 23.6666667h-1.2702778c-.4429444 0-.8018333-.3598334-.8018333-.8027778v-9.7277778c0-.4429444.3588889-.8027778.8018333-.8027778h1.2702778c.4429445 0 .8027778.3598334.8027778.8027778v9.7277778c0 .4429444-.3598333.8027778-.8027778.8027778m6.6525722 0h-1.2702777c-.442 0-.8018334-.3598334-.8018334-.8027778v-9.7277778c0-.4429444.3598334-.8027778.8018334-.8027778h1.2702777c.4438889 0 .8027778.3598334.8027778.8027778v9.7277778c0 .4429444-.3588889.8027778-.8027778.8027778"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.88888889" d="M18.5 4.77777778V1m0 34v-3.7777778M31.7222222 18H35.5m-34 0h3.77777778m3.87278889-9.34943333L6.47873333 5.97967778M30.5204167 30.0204167l-2.6708889-2.6708889m-.0000945-18.69896113 2.6708889-2.67088889M6.47911111 30.0204167l2.67183333-2.6708889M23.5542889 5.78219444l1.4440555-3.49066666M12.0013722 33.7087556l1.4440556-3.4906667m17.2723778-7.1638 3.4906666 1.4440555M2.79124444 11.5013722l3.49066667 1.4440556m7.15274999-7.15860558L11.9877722 2.2971m13.0246445 31.4061778-1.4468889-3.4897222m7.14765-17.2788945L34.2029 11.4877722M2.79672222 24.5124167l3.48972222-1.4468889"/></g></svg>');
}

.accessibility-menu-feature .menu-feature-list .menu-feature-item .icon.dyslexia-friendly {
  width: 2rem;
  height: 1.4rem;
  -webkit-mask-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 31 22"><path fill="currentColor" fill-rule="evenodd" d="M.5 22V1.0083333h7.24219c6.805161 0 11.612477 4.3388889 11.612477 10.4805556C19.354667 17.6305556 14.547351 22 7.74219 22H.5Zm2.434874-4.31H7.74219c5.36921 0 9.146386-2.8616703 9.146386-7.27 0-4.3807776-3.777176-7.2422222-9.146386-7.2422222H2.934874V17.69ZM26.273591 4.0333333l.011461 2.1694445h4.012619V8.25h-4.001719L26.77 22h-3.535416L23.78 8.25h-2.423834V6.2027778h2.55923l.075108-2.1694445C24.070691 1.6805556 25.600749 0 27.697782 0c.99184 0 1.979905.3666667 2.802218 1.0083333l-.962729 1.6805556c-.347978-.3666667-.951599-.6416667-1.627768-.6416667-.881959 0-1.642008.825-1.635912 1.9861111Z"/></svg>');
}

.accessibility-menu-feature .menu-feature-list .menu-feature-item .icon.big-cursor {
  width: 2rem;
  height: 1.975rem;
  -webkit-mask-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 27 27"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15.9983464 11.5517813 9.5269972 9.52699721-4.4465655 4.44656549-9.5269972-9.52699717-4.05145413 9.06403815L1 1.0000004l24.0623846 6.5003268z"/></svg>');
}

.accessibility-menu-feature .menu-feature-list .menu-feature-item .icon.tooltip {
  width: 2rem;
  height: 1.975rem;
  -webkit-mask-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 30 31"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><path stroke="currentColor" stroke-width="2" d="M7.12734007 22.9836493 1.59329966 28.714951C1.00533246 29.3238763 0 28.8926106 0 28.0314601V3.97380852C0 1.77913468 1.7179 0 3.83703704 0H24.162963C26.2821 0 28 1.77913468 28 3.97380852V19.0098408c0 2.1946738-1.7179 3.9738085-3.837037 3.9738085H7.12734007Z"/><path fill="currentColor" fill-rule="nonzero" d="M13 8.92811506v7.14376984C13 16.5844687 13.4477153 17 14 17s1-.4155313 1-.9281151V8.92811506C15 8.41553127 14.5522847 8 14 8s-1 .41553127-1 .92811506Z"/><circle cx="14" cy="6" r="1" fill="currentColor"/></g></svg>');
}

.btn-feature-list {
  width: 100%;
  padding-top: 1rem;
}

.btn-feature-list .btn-feature-item {
  border: 0;
  background: #fff;
  padding: 1rem 1.5rem;
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  transition: all .3s linear;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.btn-feature-list .btn-feature-item .item-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .6rem;
  border-radius: 50%;
  background: rgba(0,0,0,.05);
}


.btn-feature-list .btn-feature-item.active,
.btn-feature-list .btn-feature-item:hover {
  background: #054586;
  color: #fff;
}

.btn-feature-list .btn-feature-item.active .item-icon,
.btn-feature-list .btn-feature-item:hover .item-icon {
  background: rgba(0,0,0,.6);
}

</style>
<script>
export default {
  data() {
    return {
      menuShow: false,
      smartContrast: false,
      biggerText: false,
      biggerTextSize: null,
      animation: true,
      dyslexia: false,
      bigCursor: false,
      tooltips: false,
      featureActive: null,
    };
  },
  mounted(){
    this.featureActive = localStorage.getItem('featureActive')
    this.smartContrast = localStorage.getItem('smartContrastMode') == '1'? true : false
    this.smartContrast = localStorage.getItem('smartContrastMode') == '1'? true : false
    this.biggerText = localStorage.getItem('biggerTextMode') == '1'? true : false
    this.biggerTextSize = localStorage.getItem('biggerTextSizeMode')?? null
    this.animation = localStorage.getItem('animationMode') == '1'? true : false
    this.dyslexia = localStorage.getItem('dyslexiaMode') == '1'? true : false
    this.bigCursor = localStorage.getItem('bigCursorMode') == '1'? true : false
    this.tooltips = localStorage.getItem('tooltipsMode') == '1'? true : false

console.log(this.featureActive)

    this.renderClass()

  },
  updated(){
    this.renderClass()
  },
  methods: {
    renderClass(){
      if (this.smartContrast) {
        document.body.classList.add("smart-contrast");
      } else {
        document.body.classList.remove("smart-contrast");
      }
      if(this.biggerTextSize)
      {
        document.body.classList.add("bigger-text-"+this.biggerTextSize+"-mode");
      }else{
        document.body.classList.remove("bigger-text-md-mode");
        document.body.classList.remove("bigger-text-lg-mode");
        document.body.classList.remove("bigger-text-xl-mode");
        document.body.classList.remove("bigger-text-xxl-mode");
      }
      if (this.animation) {
        document.body.classList.remove("pause-animation-mode");
        document.body.classList.add("play-animation-mode");
      } else {
        document.body.classList.remove("play-animation-mode");
        document.body.classList.add("pause-animation-mode");
      }
      if (this.dyslexia) {
        document.body.classList.add("dyslexia-friendly-mode");
      } else {
        document.body.classList.remove("dyslexia-friendly-mode");
      }
      if (this.bigCursor) {
        document.body.classList.add("big-cursor-mode");
      } else {
        document.body.classList.remove("big-cursor-mode");
      }
      if (this.tooltips) {
        document.body.classList.add("tooltip-mode");
      } else {
        document.body.classList.remove("tooltip-mode");
      }
    },
    toggleMenu() {
      this.featureActive = null
      this.menuShow = !this.menuShow;
    },
    toggleSmartContrast() {
      this.featureActive = null
      this.smartContrast = !this.smartContrast;
      if (this.smartContrast) {
        document.body.classList.add("smart-contrast");
        localStorage.setItem('smartContrastMode',1)
      } else {
        document.body.classList.remove("smart-contrast");
        localStorage.setItem('smartContrastMode',0)
      }
    },
    toggleBiggerText() {
      this.featureActive = null
      this.biggerText = true
      localStorage.setItem('biggerTextMode',1)
      if(!this.biggerTextSize)
      {
        this.biggerTextSize = 'md'
        document.body.classList.remove("bigger-text-lg-mode");
        document.body.classList.remove("bigger-text-xl-mode");
        document.body.classList.remove("bigger-text-xxl-mode");
        document.body.classList.add("bigger-text-md-mode");
        localStorage.setItem('biggerTextSizeMode','md')
      }else if(this.biggerTextSize == 'md')
      {
        this.biggerTextSize = 'lg'
        document.body.classList.remove("bigger-text-md-mode");
        document.body.classList.remove("bigger-text-xl-mode");
        document.body.classList.remove("bigger-text-xxl-mode");
        document.body.classList.add("bigger-text-lg-mode");
        localStorage.setItem('biggerTextSizeMode','lg')
      }else if(this.biggerTextSize == 'lg')
      {
        this.biggerTextSize = 'xl'
        document.body.classList.remove("bigger-text-md-mode");
        document.body.classList.remove("bigger-text-lg-mode");
        document.body.classList.remove("bigger-text-xxl-mode");
        document.body.classList.add("bigger-text-xl-mode");
        localStorage.setItem('biggerTextSizeMode','xl')
      }else if(this.biggerTextSize == 'xl')
      {
        this.biggerTextSize = 'xxl'
        document.body.classList.remove("bigger-text-md-mode");
        document.body.classList.remove("bigger-text-lg-mode");
        document.body.classList.remove("bigger-text-xl-mode");
        document.body.classList.add("bigger-text-xxl-mode");
        localStorage.setItem('biggerTextSizeMode','xxl')
      }else if(this.biggerTextSize == 'xxl')
      {
        this.biggerTextSize = null
        this.biggerText = false
        localStorage.setItem('biggerTextMode',0)
        document.body.classList.remove("bigger-text-md-mode");
        document.body.classList.remove("bigger-text-lg-mode");
        document.body.classList.remove("bigger-text-xl-mode");
        document.body.classList.remove("bigger-text-xxl-mode");
        localStorage.setItem('biggerTextSizeMode','')
      }

    },
    toggleAnimation() {
      this.featureActive = null
      this.animation = !this.animation;
      if (this.animation) {
        document.body.classList.remove("pause-animation-mode");
        document.body.classList.add("play-animation-mode");
        localStorage.setItem('animationMode',1)
      } else {
        document.body.classList.remove("play-animation-mode");
        document.body.classList.add("pause-animation-mode");
        localStorage.setItem('animationMode',0)
      }
    },
    toggleDyslexia() {
      this.featureActive = null
      this.dyslexia = !this.dyslexia;
      if (this.dyslexia) {
        document.body.classList.add("dyslexia-friendly-mode");
        localStorage.setItem('dyslexiaMode',1)
      } else {
        document.body.classList.remove("dyslexia-friendly-mode");
        localStorage.setItem('dyslexiaMode',0)
      }
    },
    toggleBigCursor() {
      this.featureActive = null
      this.bigCursor = !this.bigCursor;
      if (this.bigCursor) {
        document.body.classList.add("big-cursor-mode");
        localStorage.setItem('bigCursorMode',1)
      } else {
        document.body.classList.remove("big-cursor-mode");
        localStorage.setItem('bigCursorMode',0)
      }
    },
    toggleTooltip() {
      this.featureActive = null
      this.tooltips = !this.tooltips;
      if (this.tooltips) {
        document.body.classList.add("tooltip-mode");
        localStorage.setItem('tooltipsMode',1)
      } else {
        document.body.classList.remove("tooltip-mode");
        localStorage.setItem('tooltipsMode',0)
      }
    },
    toggleFeatureCognitive(){
      this.featureActive = null
      if(this.featureActive == null)
      {
        this.featureActive = 1
        localStorage.setItem('featureActive',1)
        this.smartContrast = 1
        localStorage.setItem('smartContrastMode',1)
        this.biggerText = 1
        localStorage.setItem('biggerTextMode',1)
        this.biggerTextSize = 'md'
        localStorage.setItem('biggerTextSizeMode','md')
        this.animation = 1
        localStorage.setItem('animationMode',1)
        this.bigCursor = 1
        localStorage.setItem('bigCursorMode',1)
        this.dyslexia = 0 
        localStorage.setItem('dyslexiaMode',0)
        this.tooltips = 1
        localStorage.setItem('tooltipsMode',1)
      }else{
        this.featureActive = null
        localStorage.setItem('featureActive',null)
        localStorage.setItem('featureCognitiveLearning',0)
        this.smartContrast = 0
        localStorage.setItem('smartContrastMode',0)
        this.biggerText = 0
        localStorage.setItem('biggerTextMode',0)
        this.biggerTextSize = ''
        localStorage.setItem('biggerTextSizeMode','')
        this.animation = 0
        localStorage.setItem('animationMode',0)
        this.bigCursor = 0
        localStorage.setItem('bigCursorMode',0)
        this.dyslexia = 0 
        localStorage.setItem('dyslexiaMode',0)
        this.tooltips = 0
        localStorage.setItem('tooltipsMode',0) 
      }
    },
    toggleFeatureDyslexia(){
      this.featureActive = null
      if(this.featureActive == null)
      {
        this.featureActive = 2
        localStorage.setItem('featureActive',2)
        this.smartContrast = 0
        localStorage.setItem('smartContrastMode',0)
        this.biggerText = 0
        localStorage.setItem('biggerTextMode',0)
        this.biggerTextSize = ''
        localStorage.setItem('biggerTextSizeMode','')
        this.animation = 1
        localStorage.setItem('animationMode',1)
        this.bigCursor = 0
        localStorage.setItem('bigCursorMode',0)
        this.dyslexia = 1 
        localStorage.setItem('dyslexiaMode',1)
        this.tooltips = 0
        localStorage.setItem('tooltipsMode',0)
      }else{
        this.featureActive = null
        localStorage.setItem('featureDyslexia',null)
        this.smartContrast = 0
        localStorage.setItem('smartContrastMode',0)
        this.biggerText = 0
        localStorage.setItem('biggerTextMode',0)
        this.biggerTextSize = ''
        localStorage.setItem('biggerTextSizeMode','')
        this.animation = 0
        localStorage.setItem('animationMode',0)
        this.bigCursor = 0
        localStorage.setItem('bigCursorMode',0)
        this.dyslexia = 0 
        localStorage.setItem('dyslexiaMode',0)
        this.tooltips = 0
        localStorage.setItem('tooltipsMode',0) 
      }
    },
  },
};
</script>