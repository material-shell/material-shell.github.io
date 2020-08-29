import goTo from 'vuetify/es5/services/goto'

async function waitForReadystate() {
  if (
    typeof document !== 'undefined' &&
    typeof window !== 'undefined' &&
    document.readyState !== 'complete'
  ) {
    await new Promise((resolve) => {
      const cb = () => {
        window.requestAnimationFrame(resolve)
        window.removeEventListener('load', cb)
      }

      window.addEventListener('load', cb)
    })
  }
}

export default async function (to, from, savedPosition) {
  await waitForReadystate()

  const options = { offset: 96 }
  let scrollTo = 0

  if (to.hash) {
    scrollTo = to.hash
  } else if (savedPosition) {
    scrollTo = savedPosition.y
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      if (typeof window === 'undefined') {
        return resolve()
      }

      window.requestAnimationFrame(() => {
        try {
          goTo(scrollTo, options)
        } catch (err) {
          console.log(err)
        }

        resolve()
      })
    }, 200)
  })
}
