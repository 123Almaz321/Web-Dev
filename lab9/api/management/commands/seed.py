from django.core.management.base import BaseCommand
from api.models import Category, Product


class Command(BaseCommand):
    help = 'Seed the database with sample categories and products'

    def handle(self, *args, **kwargs):
        Product.objects.all().delete()
        Category.objects.all().delete()

        smartphones = Category.objects.create(id=1, name='Smartphones')
        laptops = Category.objects.create(id=2, name='Laptops')
        headphones = Category.objects.create(id=3, name='Headphones')
        tablets = Category.objects.create(id=4, name='Tablets')

        self.stdout.write('Created categories.')

        products = [
            # Smartphones
            dict(id=1, category=smartphones, name='iPhone 16 Pro', price=700000, description='Latest Apple flagship with A18 Pro chip.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/hf7/hec/87295486197790.png', link='https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-nanosim-esim-zolotistyi-123888919/', rating=5.0),
            dict(id=2, category=smartphones, name='Samsung S24 Ultra', price=620000, description='AI-powered smartphone with 200MP camera.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png', link='https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/', rating=4.8),
            dict(id=3, category=smartphones, name='Xiaomi 14 Ultra', price=550000, description='Professional Leica optics in your pocket.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png', link='https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/', rating=4.7),
            dict(id=4, category=smartphones, name='Google Pixel 9 Pro', price=580000, description='The best Android experience with Google AI.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/pdd/pb6/3092410.jpeg', link='https://kaspi.kz/shop/p/google-pixel-9-pro-xl-16-gb-128-gb-chernyi-128508316/', rating=4.9),
            dict(id=5, category=smartphones, name='iPhone 15', price=400000, description='Great balance of performance and price.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg', link='https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-chernyi-113137790/', rating=4.8),
            # Laptops
            dict(id=6, category=laptops, name='MacBook Air M3', price=650000, description='Supercharged by M3 chip.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/p81/p15/29102101.png', link='https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-16-gb-ssd-512-gb-macos-mxct3-137228009/', rating=4.9),
            dict(id=7, category=laptops, name='ASUS ROG Zephyrus', price=950000, description='Powerful gaming laptop.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/p2e/p89/47502192.jpg', link='https://kaspi.kz/shop/p/asus-asus-rog-zephyrus-g16-16-32-gb-ssd-2000-gb-bez-os-90nr0lz5-m009d0-141048362/', rating=4.7),
            dict(id=8, category=laptops, name='HP Victus 15', price=350000, description='Affordable gaming performance.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/h25/hcc/85983814680606.png', link='https://kaspi.kz/shop/p/hp-victus-15-6-16-gb-ssd-512-gb-dos-15-fb2027ci-a19gqea-119250104/', rating=4.6),
            dict(id=9, category=laptops, name='Lenovo Legion 5', price=580000, description='Stylish workstation.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/p26/pa5/78068073.png', link='https://kaspi.kz/shop/p/lenovo-legion-5-15ahp10-15-1-16-gb-ssd-512-gb-bez-os-83m00042rk-149602832/', rating=4.8),
            dict(id=10, category=laptops, name='Huawei MateBook D16', price=320000, description='Large screen for work.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/h83/h09/84934294700062.png', link='https://kaspi.kz/shop/p/huawei-matebook-d16-16-8-gb-ssd-512-gb-win-11-home-mitchellf-w5851-115943439/', rating=4.7),
            # Headphones
            dict(id=11, category=headphones, name='AirPods Pro 2', price=120000, description='Best noise cancellation.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg', link='https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-magsafe-charging-case-belyi-113472022/', rating=5.0),
            dict(id=12, category=headphones, name='Sony WH-1000XM5', price=160000, description='Industry-leading noise canceling.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg', link='https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/', rating=4.9),
            dict(id=13, category=headphones, name='Marshall Major V', price=85000, description='Iconic design.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg', link='https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/', rating=4.8),
            dict(id=14, category=headphones, name='Bose QuietComfort', price=145000, description='Legendary comfort.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/h59/h04/84919601987614.jpg', link='https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-ultra-earbuds-chernyi-115912598/', rating=4.8),
            dict(id=15, category=headphones, name='HyperX Cloud II', price=45000, description='Gold standard for gaming.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/h72/he2/63770832764958.jpg', link='https://kaspi.kz/shop/p/naushniki-hyperx-cloud-ii-cherno-krasnyi-4800107/', rating=4.7),
            # Tablets
            dict(id=16, category=tablets, name='iPad Pro M4', price=650000, description='Thinnest Apple product.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png', link='https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/', rating=5.0),
            dict(id=17, category=tablets, name='Samsung Tab S9', price=380000, description='Water-resistant tablet.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg', link='https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/', rating=4.8),
            dict(id=18, category=tablets, name='iPad Air M2', price=380000, description='Powerful performance.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/h9f/hdb/86223792013342.jpg', link='https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/', rating=4.7),
            dict(id=19, category=tablets, name='Xiaomi Pad 6', price=160000, description='Value for money tablet.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg', link='https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/', rating=4.7),
            dict(id=20, category=tablets, name='iPad 10.9 (2022)', price=190000, description='Perfect for students.', count=10, is_active=True, image='https://resources.cdn-kaspi.kz/img/m/p/p7e/p65/85883926.jpg', link='https://kaspi.kz/shop/p/apple-iphone-13-128gb-nanosim-esim-fioletovyi-102604043/', rating=4.8),
        ]

        for p in products:
            Product.objects.create(**p)

        self.stdout.write(self.style.SUCCESS(
            f'Done! Created {Category.objects.count()} categories and {Product.objects.count()} products.'
        ))
