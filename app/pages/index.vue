<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import Bottom from '~/components/Bottom.vue'
</script>

<template>
  <div>
    <header class="fixed top-0 right-0 z-100 p-8">
      <h1 class="sr-only">
        Juventud Transformadora
      </h1>

      <nav>
        <ul class="flex flex-col gap-4 relative indicator">
          <li class="w-4 h-4">
            <a
              href="#main"
              class="block w-full h-full rounded-full bg-white/30 hover:bg-white/60 transition-colors"
            >
              <span class="sr-only">Snapping</span>
            </a>
          </li>
          <li class="w-4 h-4">
            <a
              href="#mision"
              class="block w-full h-full rounded-full bg-white/30 hover:bg-white/60 transition-colors"
            >
              <span class="sr-only">Scrolling</span>
            </a>
          </li>
          <li class="w-4 h-4">
            <a
              href="#vision"
              class="block w-full h-full rounded-full bg-white/30 hover:bg-white/60 transition-colors"
            >
              <span class="sr-only">Layout</span>
            </a>
          </li>
          <li class="w-4 h-4">
            <a
              href="#valores"
              class="block w-full h-full rounded-full bg-white/30 hover:bg-white/60 transition-colors"
            >
              <span class="sr-only">Transition</span>
            </a>
          </li>
          <li class="w-4 h-4">
            <a
              href="#contact"
              class="block w-full h-full rounded-full bg-white/30 hover:bg-white/60 transition-colors"
            >
              <span class="sr-only">Caveats</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Main Section -->
    <main class="main-timeline">
      <!-- Sección 1 -->
      <section
        id="main"
        class="section h-dvh"
      >
        <div class="content fixed inset-0 overflow-hidden flex flex-col items-center justify-center p-8 text-white">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920"
            alt=""
            class="absolute inset-0 w-full h-full object-cover -z-20"
          >
          <div class="absolute inset-0 bg-linear-to-b from-black/80 to-black/40 -z-10" />

          <div class="relative z-10 max-w-2xl text-center">
            <h2 class="text-5xl mb-8 font-light">
              <em class="italic text-red-400">Juventud Transformadora</em>
            </h2>
            <p class="text-xl">
              Transformando vidas a través de la juventud
            </p>
            <div class="flex justify-center mt-6 gap-6">
              <Bottom
                text="Conoce Más"
                bg-color="bg-blue-600"
                hover-color="hover:bg-blue-400"
              />
              <Bottom
                text="Más Información"
                bg-color="bg-green-600"
                hover-color="hover:bg-green-400"
              />
            </div>
          </div>
        </div>
      </section>
      <!-- Sección 2 -->
      <section
        id="mision"
        class="section h-dvh"
      >
        <div class="content fixed inset-0 overflow-hidden flex flex-col items-center justify-center p-8 text-white">
          <img
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920"
            alt=""
            class="absolute inset-0 w-full h-full object-cover -z-20"
          >
          <div class="absolute inset-0 bg-black/70 -z-10" />

          <div class="relative z-10 max-w-2xl text-center">
            <h2 class="text-4xl mb-8 font-light">
              Nuestra Misión
            </h2>
            <p class="mb-4 leading-relaxed">
              Contenido sobre la misión...
            </p>
          </div>
        </div>
      </section>
      <!-- Sección 3 -->
      <section
        id="Vision"
        class="section h-dvh"
      >
        <!-- Imagen de fondo -->
        <div class="content fixed inset-0 overflow-hidden flex flex-col items-center justify-center p-8 text-white">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920"
            alt=""
            class="absolute inset-0 w-full h-full object-cover -z-20"
          >
          <div class="absolute inset-0 bg-black/60 -z-10" />

          <div class="relative z-10 max-w-2xl text-center">
            <h2 class="text-4xl mb-8 font-light">
              Nuestra Visión
            </h2>
            <p class="mb-4 leading-relaxed">
              Contenido sobre la visión...
            </p>
          </div>
        </div>
      </section>
      <!-- Sección 4 -->
      <section
        id="valores"
        class="section h-dvh"
      >
        <div class="content fixed inset-0 overflow-hidden flex flex-col items-center justify-center p-8 text-white">
          <img
            src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1920"
            alt=""
            class="absolute inset-0 w-full h-full object-cover -z-20"
          >
          <div class="absolute inset-0 bg-black/50 -z-10" />

          <div class="relative z-10 max-w-2xl text-center">
            <h2 class="text-4xl mb-8 font-light">
              Nuestros Valores
            </h2>
            <p class="mb-4 leading-relaxed">
              Contenido sobre los valores...
            </p>
          </div>
        </div>
      </section>
      <section
        id="contact"
        class="section h-dvh"
      >
        <div class="content fixed inset-0 overflow-hidden flex flex-col items-center justify-center p-8 text-white">
          <img
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920"
            alt=""
            class="absolute inset-0 w-full h-full object-cover -z-20"
          >
          <div class="absolute inset-0 bg-black/70 -z-10" />

          <div class="relative z-10 max-w-2xl text-center">
            <h2 class="text-4xl mb-8 font-light">
              Información de Contacto
            </h2>
            <form class="space-y-4">
              <div>
                <label
                  for="name"
                  class="block mb-1"
                >Nombre:</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  class="w-full p-2 rounded bg-white/20 border border-white/40 text-white"
                >
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-1"
                >Correo Electrónico:</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  class="w-full p-2 rounded bg-white/20 border border-white/40 text-white"
                >
              </div>
              <div>
                <label
                  for="message"
                  class="block mb-1"
                >Mensaje:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="w-full p-2 rounded bg-white/20 border border-white/40 text-white"
                />
              </div>
              <div>
                <button
                  type="submit"
                  class="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full text-lg font-medium transition-colors"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <div class="mt-8 flex justify-center gap-6 text-sm">
            <div
              icon="mdi:email"
              class="inline-flex items-center gap-2"
            >
              <Icon
                icon="mdi:email"
                class="w-5 h-5"
              />
              <span>info@juventudtransformadora.org</span>
            </div>
            <div
              icon="mdi:phone"
              class="inline-flex items-center gap-2"
            >
              <Icon
                icon="mdi:phone"
                class="w-5 h-5"
              />
              <span>+52 123 456 7890</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="fixed bottom-0 left-0 right-0 p-4 text-center text-white z-99">
      <div class="flex items-center justify-center gap-4 text-sm">
        <a
          href="https://www.tiktok.com/@juventudtransformadorar"
          class="hover:text-pink-400 transition-colors inline-flex items-center gap-1"
          aria-label="TikTok"
        >
          <Icon
            icon="simple-icons:tiktok"
            class="w-5 h-5"
          />
        </a>
        <a
          href="https://www.instagram.com/juventudtransformadoraris/"
          class="hover:text-pink-400 transition-colors inline-flex items-center gap-1"
          aria-label="Instagram"
        >
          <Icon
            icon="simple-icons:instagram"
            class="w-5 h-5"
          />
        </a>
        <a
          href="https://facebook.com/juventudtransformadora"
          class="hover:text-blue-500 transition-colors inline-flex items-center gap-1"
          aria-label="Facebook"
        >
          <Icon
            icon="simple-icons:facebook"
            class="w-5 h-5"
          />
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Screen reader only utility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* CSS Scroll Timeline properties (not available in Tailwind) */
:global(html) {
  scroll-snap-type: y mandatory;
  timeline-scope: --section, --main;
}

:global(body) {
  background-color: black;
}

.main-timeline {
  view-timeline: --main;
}

.section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  view-timeline: --section;
}

.content {
  --contrast: 4;
  --blur: 0.5rem;
  animation: blink ease-in-out both;
  animation-timeline: --section;
}

@keyframes blink {
  0%,
  100% {
    filter: blur(var(--blur)) contrast(var(--contrast));
    opacity: 0;
    visibility: hidden;
  }

  50% {
    filter: blur(0) contrast(1);
    opacity: 1;
    visibility: visible;
  }
}

/* Indicator dot animation */
.indicator {
  --indicator-size: 1rem;
  --indicator-total-height: calc(5 * var(--indicator-size) + 4 * 1rem);
}

.indicator::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: var(--indicator-size);
  height: var(--indicator-size);
  border-radius: 50%;
  background-color: var(--color-indicator, white);
  animation: indicate linear both;
  animation-timeline: --main;
  animation-range: contain;
  z-index: 1;
}

@keyframes indicate {
  0% {
    --color-indicator: white;
    transform: translateY(0);
  }

  25% {
    --color-indicator: #fbbf24;
  }

  50% {
    --color-indicator: #60a5fa;
  }

  75% {
    --color-indicator: #f87171;
  }

  100% {
    --color-indicator: #a78bfa;
    transform: translateY(
      calc(var(--indicator-total-height) - var(--indicator-size))
    );
  }
}
</style>
