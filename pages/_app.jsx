import '../styles/globals.css'
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';
import 'mapbox-gl/dist/mapbox-gl.css';

const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
//pk.eyJ1IjoibG92ZWhvZyIsImEiOiJjbGNzMmQxZGUwY2gzM3Zwc3JhM293anpnIn0.3dyXNB-NopBIEg1wWrYU4g
//mapbox://styles/lovehog/clcs2eqe4003215nrubhjlfe4
