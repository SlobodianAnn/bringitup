import MainSlider from './modules/slider/slider-main'
import VideoPlayer from './modules/playVideo'
import MiniSlider from './modules/slider/slider-mini'
import ListDifference from './modules/listDifference';
import Form from './modules/forms';
import ShowInfo from './modules/showInfo';
import DownloadBtn from './modules/download'

window.addEventListener('DOMContentLoaded', () => {
  try {
    const slider = new MainSlider({
      blockSelector: '.page',
      triggersNextSelector: '.next'
    })
    slider.render();

    const showUpSlider = new MiniSlider({
      blockSelector: '.showup__content-slider',
      prevSelector: '.showup__prev',
      nextSelector: '.showup__next',
      activeClass: 'card-active',
      animate: true,
    })

    showUpSlider.init()

    const modulesSlider = new MiniSlider({
      blockSelector: '.modules__content-slider',
      prevSelector: '.modules__info-btns .slick-prev',
      nextSelector: '.modules__info-btns .slick-next',
      activeClass: 'card-active',
      animate: true,
      autoplay: true,
    })
    modulesSlider.init()


    const feedSlider = new MiniSlider({
      blockSelector: '.feed__slider',
      prevSelector: '.feed__slider-btns-wrap .slick-prev',
      nextSelector: '.feed__slider-btns-wrap .slick-next',
      activeClass: 'feed__item-active',
    })
    feedSlider.init()


    const videoPlayer = new VideoPlayer('.showup .play', '.overlay', '.close')
    videoPlayer.init()

    new ListDifference('.officerold', '.officer__card-item').init();
    new ListDifference('.officernew', '.officer__card-item').init();
    new Form('.form').init();

  } catch (e) {}

  const moduleInfo = new MainSlider({
    blockSelector: '.moduleapp',
    triggersNextSelector: '.next',
    triggersPrevSelector: '.prev',

  })
  moduleInfo.render()
  new VideoPlayer('.module__video-item .play', '.overlay', '.close').init()
  new ShowInfo('.plus__content').init();
  new DownloadBtn('.download', 'assets/img/mainbg.jpg').init();


})
