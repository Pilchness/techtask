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
class AmendTable {
  constructor(data) {
    this.data = data;
  }
  get headings() {
    return Object.keys(this.data);
  }

  rowElements(headings) {
    console.log(headings);
    console.log(this.data[headings[3]]);
    let returnText = ``;
    for (let [index, element] of headings.entries()) {
      console.log(element);
      returnText += `<div class="col col-1" data-label="${headings[index]}">${this.data[headings[index]]}</div>`;
    }
    console.log(returnText);
    return returnText;
  }

  addRow(rowNumber) {
    console.log('adding row');
    $('#data-table').append(
      `<li class="table-row"><div class="col col-1" data-label="id">${rowNumber}</div>${this.rowElements(
        this.headings
      )}</li>`
    );
  }

  test() {
    console.log('test');
    console.log(this.headings);
    console.log(this.rowElements(this.headings));
  }
}

const tableRows = [];
readData()
  .then((result) => {
    const data = JSON.parse(result);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      const updateTable = new AmendTable(data[i]);
      updateTable.test();
      updateTable.addRow(i + 1);
    }
  })
  .catch((err) => {
    console.log(err);
  });
