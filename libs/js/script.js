console.log('getting data');

const readData = async () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'POST',
      url: 'libs/php/main.php',
      success: function (result) {
        console.log('success');
        resolve(result);
      },
      error: function (error) {
        console.log('failed');
        reject(error);
      }
    });
  });
};

readData()
  .then((result) => {
    const data = JSON.parse(result);
    console.log(data);
    data.forEach((invoice) => {
      console.log(invoice);
    });
  })
  .catch((err) => {
    console.log(err);
  });

$(document).ready(() => {
  console.log('ready');
  $('#dataTable > tbody:last-child').append('<tr><td>ID1</td><td>CID2</td></tr>');
});
