export interface Product {
    id: string;
    brand: string;
    model: string;
    caliber: string;
    category: 'Av & Spor' | 'Savunma & Taktik' | 'CEO Guns';
    description: string;
    imageUrl: string;
    gameRecommendations?: { name: string; icon: string }[];
    // Generic Specs mapping
    specs: {
        label: string;
        value: string;
        icon?: string;
    }[];
}

export const products: Product[] = [
    {
        id: 'jet-trap-24',
        brand: 'JET',
        model: 'Trap 24gr',
        caliber: '12',
        category: 'Av & Spor',
        description: 'Olimpik standartlarda, trap atıcılığı için optimize edilmiş düşük tepmeli ve yüksek hızlı müsabaka fişeği.',
        imageUrl: '/images/jet-box.png',
        gameRecommendations: [
            { name: 'Trap', icon: 'fa-bullseye' },
            { name: 'Skeet', icon: 'fa-compact-disc' }
        ],
        specs: [
            { label: 'Kalibre', value: '12', icon: 'fa-crosshairs' },
            { label: 'Gramaj', value: '24 g', icon: 'fa-weight-scale' },
            { label: 'Saçma No', value: '7.5 - 8 - 9', icon: 'fa-circle-dot' },
            { label: 'Kovan Boyu', value: '70 mm', icon: 'fa-cube' },
            { label: 'Metal Yüksekliği', value: '16 mm', icon: 'fa-ring' },
            { label: 'Tapa', value: 'Power Plas.', icon: 'fa-wind' }
        ]
    },
    {
        id: 'gold-horse-32',
        brand: 'Gold Horse',
        model: 'Classic 32gr',
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
            { label: 'Kalibre', value: '12', icon: 'fa-crosshairs' },
            { label: 'Gramaj', value: '32 g', icon: 'fa-weight-scale' },
            { label: 'Saçma No', value: '4 - 5 - 6', icon: 'fa-circle-dot' },
            { label: 'Kovan Boyu', value: '70 mm', icon: 'fa-cube' },
            { label: 'Metal Yüksekliği', value: '12 mm', icon: 'fa-ring' },
            { label: 'Tapa', value: 'Keçe (Felt)', icon: 'fa-wind' }
        ]
    },
    {
        id: 'apollo-classic-quail',
        brand: 'APOLLO',
        model: 'Bıldırcın Özel',
        caliber: '12',
        category: 'Av & Spor',
        description: 'Bıldırcın avı için optimize edilmiş, geniş dağılım ve yüksek grupman performansı sunan klasik av fişeği.',
        imageUrl: '/images/apollo-box.png',
        gameRecommendations: [
            { name: 'Bıldırcın (Quail)', icon: 'fa-crow' },
            { name: 'Çulluk (Woodcock)', icon: 'fa-tree' }
        ],
        specs: [
            { label: 'Kalibre', value: '12', icon: 'fa-crosshairs' },
            { label: 'Gramaj', value: '28 g', icon: 'fa-weight-scale' },
            { label: 'Saçma No', value: '9 - 10 - 11', icon: 'fa-circle-dot' },
            { label: 'Kovan Boyu', value: '70 mm', icon: 'fa-cube' },
            { label: 'Tapa', value: 'Bior / Keçe', icon: 'fa-wind' }
        ]
    },
    {
        id: 'miracle-long-range',
        brand: 'Miracle',
        model: 'Long Range 34gr',
        caliber: '12',
        category: 'Av & Spor',
        description: 'Uzak mesafe atışları için geliştirilmiş, özel tapası ve yüksek vuruş gücüyle doğadaki mucizeniz.',
        imageUrl: '/images/miracle-box.png',
        gameRecommendations: [
            { name: 'Ördek (Duck)', icon: 'fa-water' },
            { name: 'Kaz (Goose)', icon: 'fa-cloud' }
        ],
        specs: [
            { label: 'Kalibre', value: '12', icon: 'fa-crosshairs' },
            { label: 'Gramaj', value: '34 g', icon: 'fa-weight-scale' },
            { label: 'Saçma No', value: '2 - 3 - 4', icon: 'fa-circle-dot' },
            { label: 'Hız (V1)', value: '415 m/s', icon: 'fa-bolt' },
            { label: 'Tapa', value: 'Özel Long-Range', icon: 'fa-wind' }
        ]
    },
    {
        id: 'apport-sporting-28',
        brand: 'APPORT',
        model: 'Sporting High Velocity',
        caliber: '12',
        category: 'Av & Spor',
        description: 'Sporting ve genel atış müsabakaları için üretilmiş, yüksek hız ve düşük basınç dengesine sahip spor fişeği.',
        imageUrl: '/images/apport-box.png',
        gameRecommendations: [
            { name: 'Sporting Clays', icon: 'fa-bullseye' },
            { name: 'Compak', icon: 'fa-crosshairs' }
        ],
        specs: [
            { label: 'Kalibre', value: '12', icon: 'fa-crosshairs' },
            { label: 'Gramaj', value: '28 g', icon: 'fa-weight-scale' },
            { label: 'Saçma No', value: '7.5 - 8', icon: 'fa-circle-dot' },
            { label: 'Piston', value: 'Yüksek Hız', icon: 'fa-gauge-high' },
            { label: 'Tapa', value: 'Cup Wad', icon: 'fa-wind' }
        ]
    }
];
