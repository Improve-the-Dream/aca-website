export async function getCongressData(location) {
  return new Promise(function (resolve, reject) {
    const url = `https://api.geocod.io/v1.7/geocode?q=${location}&fields=cd&api_key=33d20ed0f62d2df6992f49fd88ed2d43e02648e`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          reject(data);
        } else {
          const reps = addRepsToArray(
            data.results[0].fields.congressional_districts
          );
          resolve(reps);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function addRepsToArray(data) {
  let representatives = [];
  for (let i = 0; i < data.length; i++) {
    let num = data[i].current_legislators.length;
    for (let j = 0; j < num; j++) {
      const rep = data[i].current_legislators[j];
      representatives.push({
        name: rep.bio.first_name + " " + rep.bio.last_name,
        type: rep.type,
        party: rep.bio.party,
        phone: rep.contact.phone,
      });
    }
  }

  // sorting by type & name
  representatives.sort((a, b) => {
    if (a.type > b.type) {
      return 1;
    } else if (a.type === b.type) {
      return 0;
    } else {
      return -1;
    }
  });
  representatives.sort((a, b) => {
    if (a.name > b.name && a.type === b.type) {
      return 1;
    } else if (a.name === b.name) {
      return 0;
    } else {
      return -1;
    }
  });

  // removing duplicates
  for (let i = 0; i < representatives.length - 1; i++) {
    if (
      representatives[i].name === representatives[i + 1].name &&
      representatives[i].phone === representatives[i + 1].phone
    ) {
      representatives.splice(i, 1);
      i--;
    }
  }

  return representatives;
}
