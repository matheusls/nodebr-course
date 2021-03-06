/**
 * 0 - Get user
 * 1 - Get user's phone number by id
 * 2 - Get user's address by id
 */

function getUser() {
  /**
   * on success -> call resolve
   * on error   -> call reject
   */
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: 'Matheus',
        lastName: 'Luiz da Silva',
        birthDate: new Date('1994-12-20T08:08:22Z').toLocaleDateString(),
      });
    }, 1000);
  });
}

function getPhoneNumber(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        return resolve({
          number: '991129494',
          areaCode: '15',
          countryCode: '+55',
        });
      }

      return reject(new Error('No user id provided.'));
    }, 1000);
  });
}

function getAddress(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        address: 'Rua Coronel José Tavares',
        city: 'Sorocaba',
        neighborhood: 'Vila Hortência',
        number: '226',
        state: 'SP',
      });
    }, 1000);
  });
}

(async function main() {
  try {
    const user = await getUser();

    const phoneAndAddress = await Promise.all([
      getPhoneNumber(user.id),
      getAddress(user.id),
    ]);

    return {
      ...user,
      phone: phoneAndAddress[0],
      address: phoneAndAddress[1],
    }
  } catch (error) {
    console.error('DEU RUIM', error);
  }
})().then((user) => console.log(user));
