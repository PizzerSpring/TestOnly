import { fromEvent } from 'rxjs';
import objectFitImages from 'object-fit-images';

import { getComponent, getComponents } from './component';
import '../scss/common.scss';

// SVG
const requireAll = (r: __WebpackModuleApi.RequireContext) => r.keys().forEach(r);
requireAll(require.context('../../assets/icons', true, /\.svg$/));

// Components
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Modal from '../../components/modal/modal';
import Twoblocks from '../../components/twoblocks/twoblocks';
import Form from '../../components/form/form';
import MainSlider from '../../components/main-slider/main-slider';

fromEvent(document, 'DOMContentLoaded').subscribe(() => {
  new Header(getComponent('header'));
  new Footer(getComponent('footer'));

  if (getComponent('modal').component)
    getComponents('modal').forEach((component) => new Modal(component));

  if(getComponent('twoblocks').component) {
    getComponents('twoblocks').forEach(component => new Twoblocks(component));
  }

  if(getComponent('form').component) {
    getComponents('form').forEach(component => new Form(component));
  }

  if(getComponent('main-slider').component) {
    getComponents('main-slider').forEach(component => new MainSlider(component));
  }

  const images = document.querySelectorAll('img');
  objectFitImages(images);
});
