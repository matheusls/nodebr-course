/**
 * 0 - Get user
 * 1 - Get user's phone number by id
 * 2 - Get user's address by id
 */

function getUser(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      name: 'Aladin',
      birthDate: new Date(),
    });
  }, 1000);
}

function getPhoneNumber(userId, callback) {
  setTimeout(function () {
    return callback(null, {
      phoneNumber: '991129494',
      areaCode: '15',
      countryCode: '+55',
    });
  }, 1000);
}

function getAddress(userId, callback) {
  setTimeout(function () {
    return callback(null, {
      address: 'Rua Coronel José Tavares',
      city: 'Sorocaba',
      neighborhood: 'Vila Hortência',
      number: '226',
      state: 'SP',
    });
  }, 1000);
}

function resolveUser(error, user) {
  if (error) {
    console.error('DEU RUIM NO USER', error);
    return;
  }

  getPhoneNumber(user.id, function (phoneNumberError, phoneNumber) {
    if (phoneNumberError) {
      console.error('DEU RUIM NO TELEFONE', phoneNumberError);
      return;
    }

    getAddress(user.id, function (addressError, address) {
      if (addressError) {
        console.error('DEU RUIM NO ENDEREÇO', addressError);
        return;
      }

      console.log('address', address)
    })

    console.log('phoneNumber', phoneNumber);
  })

  console.log('user', user);
}

getUser(resolveUser);
