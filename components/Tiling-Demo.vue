<template>
  <section>
    <h1>Tiling WM</h1>
    <p>
      Material Shell brings tiling windows to Gnome. Material Shell supports
      several different tiling modes. Switching between windows is easily done
      with one-hand-shortcuts.
    </p>

    <nav class="bx-pager">
      <a data-slide-index="0" href="javascript:void(0)" class="">Maximized</a>
      <a data-slide-index="1" href="javascript:void(0)" class="">Floating</a>
      <a data-slide-index="2" href="javascript:void(0)" class="current">Half</a>
    </nav>
    <div class="bx-slider-wrapper">
      <div class="bx-wrapper" style="max-width: 100%;">
        <div
          class="bx-viewport"
          aria-live="polite"
          style="width: 100%; overflow: hidden; position: relative; height: 500px;"
        >
          <ul
            id="bx-slider"
            style="width: 3215%; position: relative; transition-duration: 0s; transform: translate3d(-2670px, 0px, 0px);"
          >
            <li
              style="float: left; list-style: outside none none; position: relative; width: 890px;"
              class="bx-clone"
              aria-hidden="true"
            >
              <img src="img/half-window2.png" alt="" />
            </li>
            <li
              style="float: left; list-style: outside none none; position: relative; width: 890px;"
              aria-hidden="true"
            >
              <img src="img/maximized-window2.png" alt="" />
            </li>
            <li
              style="float: left; list-style: outside none none; position: relative; width: 890px;"
              aria-hidden="true"
            >
              <img src="img/floating-window2.png" alt="" />
            </li>
            <li
              style="float: left; list-style: outside none none; position: relative; width: 890px;"
              aria-hidden="false"
            >
              <img src="img/half-window2.png" alt="" />
            </li>

            <li
              style="float: left; list-style: outside none none; position: relative; width: 890px;"
              class="bx-clone"
              aria-hidden="true"
            >
              <img src="img/maximized-window2.png" alt="" />
            </li>
          </ul>
        </div>
        <div class="bx-controls"></div>
      </div>
    </div>
  </section>
</template>

