import { IMAGES } from '../../assets/images'

export const resturantFood = [
    { key: '1', name: 'Biryani', image: require('../../assets/images/biryani.png') },
    { key: '2', name: 'Biryani', image: require('../../assets/images/karahi.png') },
    { key: '3', name: 'Biryani', image: require('../../assets/images/pizza.png') },
    { key: '4', name: 'Biryani', image: require('../../assets/images/rice.png') },
    { key: '5', name: 'Biryani', image: require('../../assets/images/biryani.png') },
    { key: '6', name: 'Biryani', image: require('../../assets/images/karahi.png') },
    { key: '7', name: 'Biryani', image: require('../../assets/images/pizza.png') },
    { key: '8', name: 'Biryani', image: require('../../assets/images/rice.png') },
]

export const foods = [
    { key: '1', name: 'Biryani', image: require('../../assets/images/biryani.png') },
    { key: '2', name: 'Biryani', image: require('../../assets/images/karahi.png') },
    { key: '3', name: 'Biryani', image: require('../../assets/images/pizza.png') },
    { key: '4', name: 'Biryani', image: require('../../assets/images/rice.png') },
]

export const bestSellings = [
    {
        id: '1',
        image: IMAGES.grocerImage,
        name: 'Durga Groceries',
        rating: 4,
        distance: '1.5 km',
    },
    {
        id: '2',
        image: IMAGES.grocerImage,
        name: 'Durga Groceries',
        rating: 4.5,
        distance: '3.5 km',
    },
    {
        id: '3',
        image: IMAGES.grocerImage,
        name: 'Durga Groceries',
        rating: 2,
        distance: '2.0 km',
    },
    {
        id: '4',
        image: IMAGES.grocerImage,
        name: 'Durga Groceries',
        rating: 3,
        distance: '1.5 km',
    }
]

export const nearbyStores = [
    {
        id: '1',
        image: IMAGES.grocerImage,
        name: 'Punjabi Rasoi',
        deal: 'Deals in Food',
        description: 'Court More, Opposite Orodental Hospital Asansol',
        rating: 4,
    },
    {
        id: '2',
        image: IMAGES.grocerImage,
        name: 'Punjabi Rasoi',
        deal: 'Deals in Food',
        description: 'Court More, Opposite Orodental Hospital Asansol',
        rating: 5,
    },
    {
        id: '3',
        image: IMAGES.grocerImage,
        name: 'Punjabi Rasoi',
        deal: 'Deals in Food',
        description: 'Court More, Opposite Orodental Hospital Asansol',
        rating: 4,
    },
    {
        id: '4',
        image: IMAGES.grocerImage,
        name: 'Punjabi Rasoi',
        deal: 'Deals in Food',
        description: 'Court More, Opposite Orodental Hospital Asansol',
        rating: 2.4,
    },
]

export const buttonTitles = [{ name: 'Offers' }, { name: 'Top rated' }, { name: 'Loose' }, { name: 'Combo' }]
export const modalButtons = [{ name: 'Home' }, { name: 'Office' }, { name: 'Hotel' }, { name: 'Other' }]


export const resturantItems = [
    { itemName: 'Atta / Flour', weight: '1 kg', price: '₹550.00', originalPrice: '₹650.00' },
    { itemName: 'Rice', weight: '3 kg', price: '₹550.00', originalPrice: '₹640.00' },
    { itemName: 'Flour', weight: '4 kg', price: '₹550.00', originalPrice: '₹60.00' },
    { itemName: 'Atta / Flour', weight: '5 kg', price: '₹550.00', originalPrice: '₹650.00' },

]

export const restaurantData = [
    {
        name: 'Punjabi Rasoi',
        rating: 2,
        address: 'Court More, Opposite Orodental Hospital Asansol',
        items: [
            { id: 1, itemName: 'Atta / Flour', weight: '1 kg', price: '₹550.00', originalPrice: '₹650.00' },
            { id: 2, itemName: 'Rice', weight: '3 kg', price: '₹550.00', originalPrice: '₹640.00' },
            { id: 3, itemName: 'Flour', weight: '4 kg', price: '₹550.00', originalPrice: '₹60.00' },
            { id: 4, itemName: 'Atta / Flour', weight: '5 kg', price: '₹550.00', originalPrice: '₹650.00' },
        ],
    },
    {
        name: 'Punjabi Rasoi 2',
        rating: 3,
        address: 'Another Address',
        items: [
            { id: 5, itemName: 'Atta / Flour', weight: '1 kg', price: '₹550.00', originalPrice: '₹650.00' },
            { id: 6, itemName: 'Rice', weight: '3 kg', price: '₹550.00', originalPrice: '₹640.00' },
            { id: 7, itemName: 'Flour', weight: '4 kg', price: '₹550.00', originalPrice: '₹60.00' },
            { id: 8, itemName: 'Atta / Flour', weight: '5 kg', price: '₹550.00', originalPrice: '₹650.00' },
        ],
    },
    {
        name: 'Punjabi Rasoi 2',
        rating: 3,
        address: 'Another Address',
        items: [
            { id: 9, itemName: 'Atta / Flour', weight: '1 kg', price: '₹550.00', originalPrice: '₹650.00' },
            { id: 10, itemName: 'Rice', weight: '3 kg', price: '₹550.00', originalPrice: '₹640.00' },
            { id: 11, itemName: 'Flour', weight: '4 kg', price: '₹550.00', originalPrice: '₹60.00' },
            { id: 12, itemName: 'Atta / Flour', weight: '5 kg', price: '₹550.00', originalPrice: '₹650.00' },
        ],
    },
]

export const grocerData = [
    {
        id: 1,
        rating: '2.0',
        name: 'Chicken Biriyani',
        price: '₹450.00',
        originalPrice: '₹650.00',
        menuOptions: [
            { id: 'full', label: 'Full Plate', price: '₹450.00' },
            { id: 'half', label: 'Half Plate', price: '₹250.00' },
        ],
    },
]
export const addresses = [
    {
        id: '1',
        location: 'Home',
        address: 'Tirupati Complex Court More, Asansol',
    },
    {
        id: '2',
        location: 'Office',
        address: 'Tirupati Complex Burnpur Road, Court More, Asansol, 713304',
    },
    {
        id: '3',
        location: 'Other',
        address: 'Tirupati Complex Burnpur Road, Court More, Asansol, 713304',
    },
];

export const dropDownData = [
    { label: 'Full Plate', value: 'Full Plate' },
    { label: 'half Plate', value: 'half Plate' },
]

export const productList = [
    {
        id: 1,
        name: 'Chicken Biriyani',
        rating: '4.2',
        price: '₹450.00',
        discountedPrice: '₹650.00',
        image: IMAGES.handiImage2,
        dropdownData: [{ label: 'Full Plate', value: 'Full Plate' }, { label: 'Half Plate', value: 'Half Plate' }],
    },
    {
        id: 2,
        name: 'Chicken Biriyani',
        rating: '4.2',
        price: '₹450.00',
        discountedPrice: '₹650.00',
        image: IMAGES.handiImage2,
        dropdownData: [{ label: 'Full Plate', value: 'Full Plate' }, { label: 'Half Plate', value: 'Half Plate' }],
    },
]