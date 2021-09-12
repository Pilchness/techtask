const readData = async () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'POST',
      url: 'libs/php/main.php',
      success: function (result) {
        resolve(result);
      },
      error: function (error) {
        console.log('failed');
        reject(error);
      }
    });
  });
};
class AmendTable {
  constructor(data) {
    this.data = data;
  }
  get headings() {
    return Object.keys(this.data);
  }

  rowElements(headings) {
    let returnText = ``;
    for (let [index, element] of headings.entries()) {
      returnText += `<div class="col col-${index + 2}" data-label="${headings[index]}">${
        this.data[headings[index]]
      }</div>`;
    }
    return returnText;
  }

  addRow(rowNumber) {
    $('#data-table').append(
      `<li class="table-row"><div class="col col-1" data-label="id">${rowNumber}</div>${this.rowElements(
        this.headings
      )}</li>`
    );
  }
}

const tableRows = [];
readData()
  .then((result) => {
    const data = JSON.parse(result);
    for (let i = 0; i < data.length; i++) {
      const updateTable = new AmendTable(data[i]);
      updateTable.addRow(i + 1);
    }
  })
  .catch((err) => {
    console.log(err);
  });
