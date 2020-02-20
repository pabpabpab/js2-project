const moment = require('moment');
const fs = require('fs');
const statFile = './server/db/stats.json';






const logger = (product, action) => {

  fs.readFile(statFile, 'utf-8', (err, data) => {
    if (err) {
          console.log(err);
    } else {
          try {
                const statData = JSON.parse(data);

                statData.numberOfRecords = statData.records.push({
                  time: moment().format('DD MMM YYYY, h:mm:ss a'),
                  action: action,
                  product: product,
                });

                const newStat = JSON.stringify(statData, null, 4);

                fs.writeFile(statFile, newStat, (err) => {
                  if (err) {
                    console.log(err);
                  }
                })
          } catch (e) {
                console.log(`Ошибка преобразования в объект json-строки считанной из файла ${statFile}`);
          }
    }
  });
};






module.exports = logger;
