export interface Product {
    id: string;
    brand: string;
    model: string;
    caliber: string;
    category: 'Av & Spor' | 'Savunma & Taktik' | 'CEO Guns';
    description: string;
    imageUrl: string;
    draftImageUrl?: string; // AI-generated placeholder image
    gameRecommendations?: { name: string; icon: string }[];
    // Generic Specs mapping
    specs: {
        label: 'load' | 'size' | 'wad' | 'muzzle' | 'brass' | 'tube' | 'capacity';
        value: string;
        icon?: string;
    }[];
}

export const products: Product[] = [
    {
        id: 'jet-skeet',
        brand: 'JET',
        model: 'Skeet World Series 24gr',
        caliber: '12',
        category: 'Av & Spor',
        description: 'Skeet atışları için özel geliştirilmiş, hassas dağılım ve sürekli performans sunan JET World Series fişeği.',
        imageUrl: '/images/jet-skeet-24.png',
        draftImageUrl: '/images/jet-export-28-v2.png',
        gameRecommendations: [
            { name: 'Skeet Shooting', icon: 'fa-bullseye' },
            { name: 'Spor Atışı', icon: 'fa-crosshairs' }
        ],
        specs: [
            { label: 'load', value: '24 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '9', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik Power', icon: 'fa-wind' },
            { label: 'muzzle', value: 'TBA', icon: 'fa-bolt' },
            { label: 'brass', value: '12 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: 'TBA', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'jet-trap',
        brand: 'JET',
        model: 'Trap World Series 24gr',
        caliber: '12',
        category: 'Av & Spor',
        description: 'Clay hedefler için üstün performans sunan JET World Series Trap fişeği.',
        imageUrl: '/images/jet-trap-24.png',
        draftImageUrl: '/images/jet-export-28-v2.png',
        gameRecommendations: [
            { name: 'Trap Shooting', icon: 'fa-bullseye' },
            { name: 'Clay Shooting', icon: 'fa-crosshairs' }
        ],
        specs: [
            { label: 'load', value: '24 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '7', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik Power', icon: 'fa-wind' },
            { label: 'muzzle', value: 'TBA', icon: 'fa-bolt' },
            { label: 'brass', value: '12 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: 'TBA', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'jet-export-28',
        brand: 'JET',
        model: 'Export 28gr',
        caliber: '12',
        category: 'Av & Spor',
        description: 'JET Export Serisi; 28 gramlık optimize edilmiş atış gücü, plastik power tapa ve yüksek sızdırmazlık teknolojisiyle donatılmıştır.',
        imageUrl: '/images/jet-export-28-real.png',
        draftImageUrl: '/images/jet-export-28-v2.png',
        gameRecommendations: [
            { name: 'Av (Hunting)', icon: 'fa-tree' },
            { name: 'Genel Spor', icon: 'fa-bullseye' }
        ],
        specs: [
            { label: 'load', value: '28 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '1 - 10', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik Power', icon: 'fa-wind' },
            { label: 'muzzle', value: 'TBA', icon: 'fa-bolt' },
            { label: 'brass', value: '12 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: 'TBA', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'jet-export-30',
        brand: 'JET',
        model: 'Export 30gr',
        caliber: '12',
        category: 'Av & Spor',
        description: 'JET Export Serisi; 30 gramlık optimize edilmiş atış gücü, plastik power tapa ve yüksek sızdırmazlık teknolojisiyle donatılmıştır.',
        imageUrl: '/images/jet-export-30-real.png',
        draftImageUrl: '/images/jet-export-30-v2.png',
        gameRecommendations: [
            { name: 'Av (Hunting)', icon: 'fa-tree' },
            { name: 'Genel Spor', icon: 'fa-bullseye' }
        ],
        specs: [
            { label: 'load', value: '30 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '1 - 10', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik Power', icon: 'fa-wind' },
            { label: 'muzzle', value: 'TBA', icon: 'fa-bolt' },
            { label: 'brass', value: '12 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: 'TBA', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'jet-export-32',
        brand: 'JET',
        model: 'Export 32gr',
        caliber: '12',
        category: 'Av & Spor',
        description: 'JET Export Serisi; 32 gramlık optimize edilmiş atış gücü, plastik power tapa ve yüksek sızdırmazlık teknolojisiyle donatılmıştır.',
        imageUrl: '/images/jet-export-32-real.png',
        draftImageUrl: '/images/jet-export-28-v2.png',
        gameRecommendations: [
            { name: 'Av (Hunting)', icon: 'fa-tree' },
            { name: 'Genel Spor', icon: 'fa-bullseye' }
        ],
        specs: [
            { label: 'load', value: '32 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '1 - 10 / 01 - 04', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik Power', icon: 'fa-wind' },
            { label: 'muzzle', value: 'TBA', icon: 'fa-bolt' },
            { label: 'brass', value: '12 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: 'TBA', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'jet-export-34',
        brand: 'JET',
        model: 'Export 34gr',
        caliber: '12',
        category: 'Av & Spor',
        description: 'JET Export Serisi; 34 gramlık optimize edilmiş atış gücü, plastik power tapa ve yüksek sızdırmazlık teknolojisiyle donatılmıştır.',
        imageUrl: '/images/jet-export-34-real.png',
        draftImageUrl: '/images/jet-export-28-v2.png',
        gameRecommendations: [
            { name: 'Av (Hunting)', icon: 'fa-tree' },
            { name: 'Genel Spor', icon: 'fa-bullseye' }
        ],
        specs: [
            { label: 'load', value: '34 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '1 - 10 / 01 - 04', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik Power', icon: 'fa-wind' },
            { label: 'muzzle', value: 'TBA', icon: 'fa-bolt' },
            { label: 'brass', value: '16 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: 'TBA', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'jet-export-36',
        brand: 'JET',
        model: 'Export 36gr',
        caliber: '12',
        category: 'Av & Spor',
        description: 'JET Export Serisi; 36 gramlık optimize edilmiş atış gücü, plastik power tapa ve yüksek sızdırmazlık teknolojisiyle donatılmıştır.',
        imageUrl: '/images/jet-export-36-real.png',
        draftImageUrl: '/images/jet-export-28-v2.png',
        gameRecommendations: [
            { name: 'Av (Hunting)', icon: 'fa-tree' },
            { name: 'Genel Spor', icon: 'fa-bullseye' }
        ],
        specs: [
            { label: 'load', value: '36 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '1 - 10 / 01 - 04', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik Power', icon: 'fa-wind' },
            { label: 'muzzle', value: 'TBA', icon: 'fa-bolt' },
            { label: 'brass', value: '16 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: 'TBA', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'gold-horse-32',
        brand: 'Gold Horse',
        model: 'Classic 32gr (Taslak)',
        caliber: '12',
        category: 'Av & Spor',
        description: 'Klasik avcılar için mükemmel basınç kontrolü ve gecikmeli açılma sağlayan Türkiye\'nin tek fişek mühürleme teknolojisi.',
        imageUrl: '/images/gold-horse.png',
        gameRecommendations: [
            { name: 'Sülün (Pheasant)', icon: 'fa-feather' },
            { name: 'Keklik (Partridge)', icon: 'fa-dove' },
            { name: 'Tavşan (Hare)', icon: 'fa-paw' }
        ],
        specs: [
            { label: 'load', value: '32 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '4 - 5 - 6', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Keçe (Felt)', icon: 'fa-wind' },
            { label: 'muzzle', value: 'TBA', icon: 'fa-bolt' },
            { label: 'brass', value: '12 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: 'TBA', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'gold-horse-skeet',
        brand: 'Gold Horse',
        model: 'Skeet 24gr',
        caliber: '12',
        category: 'Av & Spor',
        description: 'Sportif atışlar için özel olarak tasarlanmış, 24 gramlık optimize atış gücü ve 480 m/s yüksek namlu çıkış hızı sunan kaliteli skeet fişeği.',
        imageUrl: '/images/gold-horse-skeet.png',
        gameRecommendations: [
            { name: 'Skeet Shooting', icon: 'fa-bullseye' },
            { name: 'Spor Atışı', icon: 'fa-crosshairs' }
        ],
        specs: [
            { label: 'load', value: '24 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '9 - 9.5', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik', icon: 'fa-wind' },
            { label: 'muzzle', value: '480 m/s', icon: 'fa-bolt' },
            { label: 'brass', value: '12 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: '25 / 250', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'gold-horse-trap',
        brand: 'Gold Horse',
        model: 'Trap 24gr',
        caliber: '12',
        category: 'Av & Spor',
        description: 'Sportif atışlar için özel olarak tasarlanmış, 24 gramlık optimize atış gücü ve 480 m/s yüksek namlu çıkış hızı sunan kaliteli trap fişeği.',
        imageUrl: '/images/gold-horse-trap.png',
        gameRecommendations: [
            { name: 'Trap Shooting', icon: 'fa-bullseye' },
            { name: 'Clay Shooting', icon: 'fa-crosshairs' }
        ],
        specs: [
            { label: 'load', value: '24 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '7 - 7.5', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik', icon: 'fa-wind' },
            { label: 'muzzle', value: '480 m/s', icon: 'fa-bolt' },
            { label: 'brass', value: '12 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: '25 / 250', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'gold-horse-28',
        brand: 'Gold Horse',
        model: '28gr',
        caliber: '12',
        category: 'Av & Spor',
        description: '28 gramlık dengeli atış gücü ve 480 m/s yüksek namlu çıkış hızı ile av ve spor atışları için ideal bir seçenektir.',
        imageUrl: '/images/gold-horse-28.png',
        gameRecommendations: [
            { name: 'Çok Amaçlı Av', icon: 'fa-crow' },
            { name: 'Spor Atışları', icon: 'fa-crosshairs' }
        ],
        specs: [
            { label: 'load', value: '28 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '1 - 10', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik', icon: 'fa-wind' },
            { label: 'muzzle', value: '480 m/s', icon: 'fa-bolt' },
            { label: 'brass', value: '12 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: '25 / 250', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'gold-horse-32',
        brand: 'Gold Horse',
        model: '32gr',
        caliber: '12',
        category: 'Av & Spor',
        description: '32 gramlık güçlü ve stabil yapısıyla, özellikle orta ve uzun mesafe avcılıkta mükemmel sonuçlar verir.',
        imageUrl: '/images/gold-horse-32.png',
        gameRecommendations: [
            { name: 'Uçar Avı', icon: 'fa-dove' },
            { name: 'Genel Av', icon: 'fa-crosshairs' }
        ],
        specs: [
            { label: 'load', value: '32 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '1 - 10', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik', icon: 'fa-wind' },
            { label: 'muzzle', value: '480 m/s', icon: 'fa-bolt' },
            { label: 'brass', value: '12 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: '25 / 250', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'gold-horse-34',
        brand: 'Gold Horse',
        model: '34gr',
        caliber: '12',
        category: 'Av & Spor',
        description: '34 gramlık yüksek darbe etkisi ve stabilitesiyle zorlu av şartlarında üstün performans sergiler.',
        imageUrl: '/images/gold-horse-34.png',
        gameRecommendations: [
            { name: 'Ördek Avı', icon: 'fa-water' },
            { name: 'Ağır Tip Av', icon: 'fa-paw' }
        ],
        specs: [
            { label: 'load', value: '34 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '1 - 10', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik', icon: 'fa-wind' },
            { label: 'muzzle', value: '480 m/s', icon: 'fa-bolt' },
            { label: 'brass', value: '12 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: '25 / 250', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'gold-horse-36',
        brand: 'Gold Horse',
        model: '36gr',
        caliber: '12',
        category: 'Av & Spor',
        description: '36 gramlık en yüksek atış gücü ve 480 m/s namlu çıkış hızı ile en zorlu avlarda maksimum durdurucu güç ve menzil sağlar.',
        imageUrl: '/images/gold-horse-36.png',
        gameRecommendations: [
            { name: 'Kaz Avı', icon: 'fa-feather' },
            { name: 'Ağır Tip Av', icon: 'fa-paw' }
        ],
        specs: [
            { label: 'load', value: '36 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '1 - 10', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik', icon: 'fa-wind' },
            { label: 'muzzle', value: '480 m/s', icon: 'fa-bolt' },
            { label: 'brass', value: '12 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: '25 / 250', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'apollo-classic-quail',
        brand: 'APOLLO',
        model: 'Bıldırcın Özel (Taslak)',
        caliber: '12',
        category: 'Av & Spor',
        description: 'Bıldırcın avı için optimize edilmiş, geniş dağılım ve yüksek grupman performansı sunan klasik av fişeği.',
        imageUrl: '/images/apollo-box.png',
        gameRecommendations: [
            { name: 'Bıldırcın (Quail)', icon: 'fa-crow' },
            { name: 'Çulluk (Woodcock)', icon: 'fa-tree' }
        ],
        specs: [
            { label: 'load', value: '28 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '9 - 10 - 11', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Bior / Keçe', icon: 'fa-wind' },
            { label: 'muzzle', value: 'TBA', icon: 'fa-bolt' },
            { label: 'brass', value: 'TBA', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: 'TBA', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'miracle-28',
        brand: 'Miracle',
        model: '28gr',
        caliber: '12',
        category: 'Av & Spor',
        description: '28 gramlık optimize edilmiş atış gücü ve özel tapa yapısıyla her türlü avda mucizevi sonuçlar.',
        imageUrl: '/images/miracle-28.png',
        gameRecommendations: [
            { name: 'Ördek Avı', icon: 'fa-water' },
            { name: 'Tahtalı Avı', icon: 'fa-dove' }
        ],
        specs: [
            { label: 'load', value: '28 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '1 - 10', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik', icon: 'fa-wind' },
            { label: 'muzzle', value: '460 m/s', icon: 'fa-bolt' },
            { label: 'brass', value: '12 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: '25 / 250', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'miracle-30',
        brand: 'Miracle',
        model: '30gr',
        caliber: '12',
        category: 'Av & Spor',
        description: '30 gramlık optimize edilmiş atış gücü ve özel tapa yapısıyla istikrarlı grupman sağlar.',
        imageUrl: '/images/miracle-30.png',
        gameRecommendations: [
            { name: 'Çok Amaçlı Av', icon: 'fa-crow' },
            { name: 'Orman Avı', icon: 'fa-leaf' }
        ],
        specs: [
            { label: 'load', value: '30 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '1 - 10', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik', icon: 'fa-wind' },
            { label: 'muzzle', value: '480 m/s', icon: 'fa-bolt' },
            { label: 'brass', value: '12 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: '25 / 250', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'miracle-32',
        brand: 'Miracle',
        model: '32gr',
        caliber: '12',
        category: 'Av & Spor',
        description: '32 gramlık dengeli yapısıyla, ağır kış şartlarında bile hedefe yüksek enerji aktarımı sağlar.',
        imageUrl: '/images/miracle-32.png',
        gameRecommendations: [
            { name: 'Keklik Avı', icon: 'fa-dove' },
            { name: 'Sülün Avı', icon: 'fa-feather' }
        ],
        specs: [
            { label: 'load', value: '32 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '1 - 10', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik', icon: 'fa-wind' },
            { label: 'muzzle', value: '480 m/s', icon: 'fa-bolt' },
            { label: 'brass', value: '12 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: '25 / 250', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'miracle-34',
        brand: 'Miracle',
        model: '34gr',
        caliber: '12',
        category: 'Av & Spor',
        description: '34 gramlık yüksek darbe gücü ile ördek ve kaz gibi zorlu avlarda üstün performans gösterir.',
        imageUrl: '/images/miracle-34.png',
        gameRecommendations: [
            { name: 'Ördek Avı', icon: 'fa-water' },
            { name: 'Kaz Avı', icon: 'fa-feather' }
        ],
        specs: [
            { label: 'load', value: '34 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '1 - 10', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik', icon: 'fa-wind' },
            { label: 'muzzle', value: '480 m/s', icon: 'fa-bolt' },
            { label: 'brass', value: '12 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: '25 / 250', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'miracle-36',
        brand: 'Miracle',
        model: '36gr',
        caliber: '12',
        category: 'Av & Spor',
        description: '36 gramlık en yüksek atış gücü ve özel tapa yapısıyla her türlü avda durdurucu menzil sağlar.',
        imageUrl: '/images/miracle-36.png',
        gameRecommendations: [
            { name: 'Ördek Avı', icon: 'fa-water' },
            { name: 'Kaz Avı', icon: 'fa-feather' }
        ],
        specs: [
            { label: 'load', value: '36 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '1 - 10', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Plastik', icon: 'fa-wind' },
            { label: 'muzzle', value: '480 m/s', icon: 'fa-bolt' },
            { label: 'brass', value: '12 mm', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: '25 / 250', icon: 'fa-boxes-stacked' }
        ]
    },
    {
        id: 'apport-sporting-28',
        brand: 'APPORT',
        model: 'Sporting High Velocity (Taslak)',
        caliber: '12',
        category: 'Av & Spor',
        description: 'Sporting ve genel atış müsabakaları için üretilmiş, yüksek hız ve düşük basınç dengesine sahip spor fişeği.',
        imageUrl: '/images/apport-box.png',
        gameRecommendations: [
            { name: 'Sporting Clays', icon: 'fa-bullseye' },
            { name: 'Compak', icon: 'fa-crosshairs' }
        ],
        specs: [
            { label: 'load', value: '28 g', icon: 'fa-weight-scale' },
            { label: 'size', value: '7.5 - 8', icon: 'fa-circle-dot' },
            { label: 'wad', value: 'Cup Wad', icon: 'fa-wind' },
            { label: 'muzzle', value: 'Yüksek Hız', icon: 'fa-bolt' },
            { label: 'brass', value: 'TBA', icon: 'fa-ring' },
            { label: 'tube', value: '70 mm', icon: 'fa-cube' },
            { label: 'capacity', value: 'TBA', icon: 'fa-boxes-stacked' }
        ]
    }
];
