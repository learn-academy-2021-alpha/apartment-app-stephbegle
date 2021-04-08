# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create email:"email@email.com", password:"password", password_confirmation:"password"
user2 = User.create email:"email2@email.com", password:"password2", password_confirmation:"password2"
user3 = User.create email:"email3@email.com", password:"password3", password_confirmation:"password3"

apartments = [
    {
        street: '117 Pomona',
        city: 'Coronado',
        state: 'Ca',
        manager: 'Deborah Turner',
        email: 'dturner@gmail.com',
        price: '$3,100',
        bedrooms: 2,
        bathrooms: 2,
        pets: 'no',
        user_id: user1.id,
        title: "Beautiful Cottage",
        img: "https://cdngeneral.rentcafe.com/dmslivecafe/3/788339/GS_The_District_Two_Bed_Kit_Liv_Din(1).jpg?crop=(0,2.749999999999716,300,194)&cropxunits=300&cropyunits=200&quality=85&scale=both&"
    },
    {
        street: '3255 Flanders',
        city: 'Pacific Beach',
        state: 'Ca',
        manager: 'Tyler Smith',
        email: 'tylersmith@gmail.com',
        price: '$1,800',
        bedrooms: 1,
        bathrooms: 1,
        pets: 'yes',
        user_id: user3.id,
        title: "Beach Front Home",
        img: "https://www.missionbeach.com/custimages/1%20Website%20Photos/Menu/vaca.jpg"
    },
    {
        street: '8821 Lucy',
        city: 'National City',
        state: 'Ca',
        manager: 'Romina Camile',
        email: 'rominacamile@gmail.com',
        price: '$2,200',
        bedrooms: 2,
        bathrooms: 3,
        pets: 'no',
        user_id: user3.id,
        title: "Poolside Condo",
        img: "https://rentpath-res.cloudinary.com/w_558,h_386,t_rp,cs_tinysrgb,fl_force_strip,c_fill/e_unsharp_mask:50,q_auto/61b976a3459609469a75bfa6404f3d66"
    },
    {
        street: '324 Hawthorne',
        city: 'North Park',
        state: 'Ca',
        manager: 'Janett Lang',
        email: 'janettlang@gmail.com',
        price: '$3,800',
        bedrooms: 3,
        bathrooms: 3,
        pets: 'yes',
        user_id: user1.id,
        title: "Quaint Lively Condo",
        img: "https://images1.apartments.com/i2/wBImDim5cC6pmQ6GmaKazONdRq3PhNNDrpBkI175xM8/117/vida-north-park-san-diego-ca-building-photo.jpg?p=1"
    },
    {
        street: '1890 Bernardo',
        city: 'Rancho Bernardo',
        state: 'Ca',
        manager: 'Bill Fences',
        email: 'janettlang@gmail.com',
        price: '$3,800',
        bedrooms: 4,
        bathrooms: 3,
        pets: 'yes',
        user_id: user1.id,
        title: "Cozy Farmy Apart-y",
        img: "https://cdn.apartmenttherapy.info/image/upload/v1559222909/cs/2019/at/state%20farm/kevin/2019StateFarm-2.jpg"
    },
    {
        street: '1122 3rd Ave.',
        city: 'Chula Vista',
        state: 'Ca',
        manager: 'Janett Lang',
        email: 'janettlang@gmail.com',
        price: '$2,100',
        bedrooms: 2,
        bathrooms: 2,
        pets: 'yes',
        user_id: user2.id,
        title: "Town House Living",
        img: "https://www.myfirstapartment.com/wp-content/uploads/2016/03/San-Jose.jpg"
    },
    {
        street: '8 Ocho',
        city: 'Bonita',
        state: 'Ca',
        manager: 'El Chavo',
        email: 'chavo@hotmail.com',
        price: '$100',
        bedrooms: 3,
        bathrooms: 3,
        pets: 'no',
        user_id: user2.id,
        title: "Chavo Barrel",
        img: "https://elcomercio.pe/resizer/wTR1DhSdc6Dx1DDa30QETEtuy6Y=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/JWTFYIX3GRFVNOCXITCAVDHY7E.jpg"
    },
    {
        street: '101 Bird',
        city: 'Clairemont',
        state: 'Ca',
        manager: 'Josh Andre',
        email: 'jandre@gmail.com',
        price: '$1,900',
        bedrooms: 1,
        bathrooms: 2,
        pets: 'no',
        user_id: user2.id,
        title: "Cool Apartment",
        img: "https://images.squarespace-cdn.com/content/v1/5bc5dd89f8135a188f4d62a5/1583663745335-T5FLG7EKJM04Q89JMI9Q/ke17ZwdGBToddI8pDm48kChFtl5EkdQykgvACRh3Pu4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcKVIZ05sTY1cUJfpPrm2gWUtO7-4vYwz63rq69i5P7jBcOlb710wI_-1dQsm7Lv8o/A+Cool+Industrial+Scandinavian+Loft+-+The+Nordroom"
    }
]

apartments.each do |attr|
    Apartment.create attr
    puts "creating apartment: #{attr}"
end
