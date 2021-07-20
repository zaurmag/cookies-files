import Cookies from 'js-cookie'
import './style.scss'

/**
 * Lib: Cookies js
 * https://github.com/js-cookie/js-cookie
 */

function getHtml () {
  return `
  <div class="cookies-alert cookies-alert--js">
      <div class="cookies-alert__container">
          <div class="cookies-alert__left">
              <p>Для корректной работы сайта мы используем файлы Cookie. Это позволяет нам запомнить ваши настройки и предпочтения. <br />Для дальнейшего использавания сайта вы должны принять согласие на использование файлов Cookie.</p>
          </div>
          <div class="cookies-alert__right">
            <a class="text-secondary" href="https://ru.wikipedia.org/wiki/Cookie" target="_blank" rel="nofollow">Подробнее</a>
            <button class="btn btn__primary cookies-alert__btn cookies-alert__btn--js">Ok. Согласен!</button>              
          </div>
      </div>
  </div>
  `
}

document.addEventListener('DOMContentLoaded', cookieNotify)

const COOKIES_NAME = 'visit'
const expires = new Date(new Date().getTime() + 2 * 60 * 1000) // Устанавиливаем время жизни Cookies - в данном случае время жизни 2 мин.

function cookieNotify() {
  if (!Cookies.get(COOKIES_NAME)) {
    document.querySelector('body').insertAdjacentHTML('beforeend', getHtml())
    const cookiesAlert = document.querySelector('.cookies-alert--js')
    const cookiesBtn = document.querySelector('.cookies-alert__btn--js')

    // Add class in cookies-alert block
    setTimeout(() => {
      cookiesAlert.classList.add('is-show')
    }, 1000)

    // Click on btn and set cookies
    cookiesBtn.addEventListener('click', setCookies)

    function setCookies() {
      cookiesAlert.classList.remove('is-show')
      setTimeout(() => {
        cookiesAlert.remove()
      }, 1000)

      Cookies.set(COOKIES_NAME, true, {
        expires
      })
    }
  }
}
