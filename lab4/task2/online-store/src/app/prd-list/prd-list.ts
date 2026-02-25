import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prd } from '../prd.model';

@Component({
  selector: 'app-prd-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prd-list.html',
  styleUrls: ['./prd-list.css']
})
export class PrdList {
  prds: Prd[] = [
    {
      id: 1,
      nam: 'iPhone 16 Pro Max',
      dsc: 'Features a stunning 6.9-inch display and the powerful A18 Pro chip. It introduces Camera Control for professional-grade photography.',
      prc: 750000,
      rtg: 5.0,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
      imgs: ['url1', 'url2', 'url3'],
      lnk: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
    },
    {
      id: 2,
      nam: 'Samsung Galaxy S24 Ultra',
      dsc: 'The ultimate AI-powered smartphone with a 200MP camera and built-in S Pen. Features a durable titanium frame and flat display.',
      prc: 620000,
      rtg: 4.8,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      imgs: ['url4', 'url5', 'url6'],
      lnk: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000'
    },
    {
      id: 3,
      nam: 'MacBook Pro 14',
      dsc: 'Powered by the M3 chip, delivering extreme speed and efficiency for professional workflows. Features a brilliant Liquid Retina XDR display.',
      prc: 890000,
      rtg: 4.9,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/p32/p89/17666424.jpg?format=gallery-medium',
      imgs: ['url7', 'url8', 'url9'],
      lnk: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-16-gb-ssd-512-gb-macos-mw2u3ru-a-132088460/?c=750000000'
    },
    {
      id: 4,
      nam: 'Sony PlayStation 5 Slim',
      dsc: 'Experience lightning-fast loading with an ultra-high-speed SSD and deeper immersion with haptic feedback and 3D Audio.',
      prc: 240000,
      rtg: 4.9,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      imgs: ['url10', 'url11', 'url12'],
      lnk: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      id: 5,
      nam: 'iPad Air 2024 M2',
      dsc: 'Now available in two sizes, the iPad Air is supercharged by the M2 chip. It features a landscape front camera and fast Wi-Fi 6E.',
      prc: 380000,
      rtg: 4.7,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hdb/86223792013342.jpg?format=gallery-medium',
      imgs: ['url13', 'url14', 'url15'],
      lnk: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/?c=750000000'
    },
    {
      id: 6,
      nam: 'Dyson Airwrap Multi-styler',
      dsc: 'Includes re-engineered attachments that use Enhanced Coanda airflow to create your styles without extreme heat damage.',
      prc: 285000,
      rtg: 4.9,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/p80/p6b/75454954.jpeg?format=gallery-medium',
      imgs: ['url16', 'url17', 'url18'],
      lnk: 'https://kaspi.kz/shop/p/dyson-hs09-airwrap-co-anda2x-multi-styler-and-dryer-curly-coily-stailer-fioletovyi-148866022/?c=750000000'
    },
    {
      id: 7,
      nam: 'AirPods Pro 2',
      dsc: 'Featuring up to 2x more Active Noise Cancellation and Transparency mode. The MagSafe Charging Case now includes USB-C.',
      prc: 115000,
      rtg: 5.0,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9XfCG1heZmJ29BEIKkEVgmRb6ZXeQ7twWg&s',
      imgs: ['url19', 'url20', 'url21'],
      lnk: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
    },
    {
      id: 8,
      nam: 'Marshall Emberton II',
      dsc: 'A compact portable speaker with the loud and vibrant sound Marshall is known for. Delivers 30+ hours of portable playtime.',
      prc: 85000,
      rtg: 4.8,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/p2a/p72/12810390.jpg?format=gallery-medium',
      imgs: ['url22', 'url23', 'url24'],
      lnk: 'https://kaspi.kz/shop/p/portativnaja-kolonka-marshall-emberton-lll-belyi-131317781/?c=750000000'
    },
    {
      id: 9,
      nam: 'Apple Watch Series 10',
      dsc: 'The thinnest Apple Watch ever with the biggest display. Features advanced health sensors for ECG and sleep apnea notifications.',
      prc: 215000,
      rtg: 4.9,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9XfCG1heZmJ29BEIKkEVgmRb6ZXeQ7twWg&s',
      imgs: ['url25', 'url26', 'url27'],
      lnk: 'https://kaspi.kz/shop/p/apple-watch-series-10-m-l-46-mm-chernyi-128572958/?c=750000000'
    },
    {
      id: 10,
      nam: 'Logitech G Pro X Superlight 2',
      dsc: 'The world’s most advanced gaming mouse. Refined for speed and precision, it features a 32K sensor and hybrid switches.',
      prc: 72000,
      rtg: 4.9,
      img: 'https://resources.cdn-kaspi.kz/img/m/p/he9/h06/84049616502814.png?format=gallery-medium',
      imgs: ['url28', 'url29', 'url30'],
      lnk: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-chernyi-113548302/?c=750000000'
    }
  ];

  shr(lnk: string, nam: string) {
    const txt = encodeURIComponent(`Check out this product: ${nam} - ${lnk}`);
    window.open(`${lnk}`);
  }
}