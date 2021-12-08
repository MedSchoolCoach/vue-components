import Vue from 'vue'

const maybeSwitchDomain = (sub = null) => {
  if (
    sub.substring(0, 8) === 'https://' ||
    sub.substring(0, 7) === 'http://' ||
    sub.substring(0, 2) === '//'
  ) {
    return sub
  }

  const subdomain = sub ? `${sub}.` : ''

  return `https://${subdomain}${process.env.APP_DOMAIN}`
}

// For IDE autocompletion
Vue.prototype.$maybeSwitchDomain = maybeSwitchDomain

export default ({ app }, inject) => {
  // Inject $maybeSwitchDomain('subdomain') in Vue, context and store.
  inject('maybeSwitchDomain', maybeSwitchDomain)
}
