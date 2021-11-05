const faker = require('faker');

faker.locale = 'vi'

console.log(faker.name.findName());
console.log(faker.phone.phoneNumber());
console.log(faker.address.city());
console.log(faker.internet.email());
console.log(faker.image.imageUrl());
console.log(faker.datatype.uuid());

const casual = require('casual');

console.log(casual.first_name);
console.log(casual.uuid);
console.log(casual.sentence);
console.log(casual.full_name);